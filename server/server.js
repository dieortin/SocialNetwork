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
log("Starting http server...", "init");
required.http.createServer(function (req, res) {
  if (req.method == "POST") {
    
  }
}).listen(config.urlParams.port, config.urlParams.url);
log("http server started at " + config.urlParams.url + ":" + config.urlParams.port, "init");