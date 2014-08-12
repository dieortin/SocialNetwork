//THIS FILE PROCESSES AND RESPONDS TO 'GET' REQUESTS FOR PAGES
//NOTE: Modules needed: mime, fs, errno
var determinePath = function (url, serverPath) {
    switch(url) {
            case '/':
                return serverPath + '/index.html';
                break;
            default:
                return serverPath + url
                break;
    };
};
var determineMIME = function (filePath, mime) {
    type = mime.lookup(filePath);
    if (type == 'application/octet-stream') { //Default type of mime extension for unknown mime types is application/octet-stream
        return false; //Unknown type!
    }
    return type;
};
var sendResponse = function (filePath, mimeType, fs, log, errno, req, res) {
    var responseCode;
    var logRes = function() {
        log("[" + responseCode + "] " + req.method + " to " + req.url, "info");
    }
    if (!mimeType) { //Unknown MIME type, send 404 error code
        res.writeHead(404);
        res.end();
        responseCode = 404;
        logRes();
    } else {
        fs.readFile(filePath, function sendResponse(err, content) {
            if (err) {
                log(errno.errno[err.errno].description, "error"); //Log the error explanation
                if (err[0] = 34) { //ENOENT error, file doesn't exist
                    res.writeHead(404);
                    res.end();
                    responseCode = 404;
                } else {
                    res.writeHead(500, "Internal server error");
                    res.end();
                    responseCode = 500;
                }
                logRes();
            } else {
                responseCode = 200;
                res.writeHead(200, {
                    'Content-Type': mimeType,
                    'Content-Length': content.length
                });
                res.end(content);
                logRes();
            }
        });
    }
};
exports.determinePath = determinePath;
exports.determineMIME = determineMIME;
exports.sendResponse = sendResponse;
//NOTE: Don't forget to add new required modules to export!
