//Set event logger
var log = require("./logmsg.js").log;
//import config and require modules
log("Starting server...", "init");
log("Importing config...", "init");
var config = eval(require("./conf.json"));
log("Config imported", "init");
log("Requiring modules...", "init");
var required = require("./require.js");
var http = required.http;
var mime = required.mime;
var errno = required.errno;
var fs = required.fs;
var mysql = required.mysql;
log("Modules required", "init");
log("Importing web server...", "init");
var processGET = require("./processGET.js");
processGET = processGET.processGET;
log("Web server imported", "init");
log("Importing POST processing module", "init");
var processPOST = require("./processPOST.js");
log("POST processing module imported");
log("Connecting to database...", "init");

var db = mysql.createConnection({ //NOTE: Don't forget to start MySQL DB before running server!
    host: config.db.host,
    user: config.db.user,
    password: config.db.password
});
db.connect();
log("Connected to database", "init");
log("Starting http server...", "init");

http.createServer(function (req, res) {
    /*
     * =========== START MODULE PREPARING ===========
     */
    var logRes = function(code) {
        log("[" + code + "] " + req.method + " to " + req.url, "info");
    };
    var modules = [http, mime, errno, fs, mysql, logRes, config, log];
    /*
     * ============ END MODULE PREPARING ============
     */
    if (req.method == "POST") {
        //TODO: Really process POST requests
        res.writeHead(501);
        res.end("POST requests not accepted yet");
        logRes(501);
    } else if (req.method == "GET") {
        //FUTURE: Detect email confirmation requests
        processGET(req, res, modules);
        //FUTURE: Parse Jade
    } else {
        res.writeHead(405);
        res.end();
    }
}).listen(config.urlParams.port, config.urlParams.url);
log("http server started at " + config.urlParams.url + ":" + config.urlParams.port, "init");

//FUTURE: Make signup server run independently (comunication between servers? http://nodejs.org/api/http.html#http_http_request_options_callback)
