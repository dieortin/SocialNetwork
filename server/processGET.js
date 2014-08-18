//THIS FILE PROCESSES AND RESPONDS TO 'GET' REQUESTS FOR PAGES
//NOTE: Modules needed: mime, fs, errno, log
var processGET = function (req, res, modules) {
    var http = modules[0],
        mime = modules[1],
        errno = modules[2],
        fs = modules[3],
        mysql = modules[4],
        logRes = modules[5],
        config = modules[6],
        log = modules[7];
    var resourcePath;
    var resourceMIME;
    switch (req.url) {
    case '/':
        resourcePath = config.serverPath + '/index.html';
        break;
    default:
        resourcePath = config.serverPath + req.url;
        break;
    }
    if (mime.lookup(resourcePath) == 'application/octet-stream') { //Default type of mime extension for unknown mime types is application/octet-stream
        resourceMIME = false; //Unknown type!
    } else {
        resourceMIME = mime.lookup(resourcePath);
    }
    if (!resourceMIME) { //Unknown MIME type, send 404 error code
        res.writeHead(404);
        res.end();
        logRes(404);
    } else {
        fs.readFile(resourcePath, function respond(err, content) {
            if (err) {
                if (err.errno == 34) { //ENOENT error, file doesn't exist
                    res.writeHead(404);
                    res.end();
                    logRes(404);
                } else {
                    log(errno.errno[err.errno].description, "error"); //Log the error explanation
                    res.writeHead(500, "Internal server error");
                    res.end();
                    logRes(500);
                }
            } else {
                res.writeHead(200, {
                    'Content-Type': resourceMIME,
                    'Content-Length': content.length
                });
                res.end(content);
                logRes(200);
            }
        });
    }
};
exports.processGET = processGET;
//NOTE: Don't forget to add new required modules to export!
