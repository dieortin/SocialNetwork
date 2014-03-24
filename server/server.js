//Set event logger
var log = require("./logmsg.js").log;
//import config and require modules
log("Starting server...", "init");
log("Importing config...", "init");
var config = eval(require("./conf.json"));
log("Config imported", "init");
log("Requiring modules...", "init");
var required = require("./require.js");
log("Modules required", "init");
log("Connecting to database...", "init");
var db = required.mysql.createConnection({ //NOTE: Don't forget to start MySQL DB before running server!
  host     : config.db.host,
  user     : config.db.user,
  password : config.db.password
});
db.connect();
log("Connected to database", "init");
log("Starting http server...", "init");
required.http.createServer(function (req, res) {
  if (req.method == "POST") {
    //TODO: Really process POST requests
    res.end("GET request received and processed");
  } else if (req.method == "GET") {
    //TODO: Add way to send responses with appropiate headers
    //TODO: Parse Jade
    res.end("GET request received and processed");
  } else {
    res.writeHead(405);
    res.end();
  }
}).listen(config.urlParams.port, config.urlParams.url);
log("http server started at " + config.urlParams.url + ":" + config.urlParams.port, "init");
//FIXME: Unhandled error event!
