//THIS FILE PROCESSES AND RESPONDS TO 'GET' REQUESTS FOR PAGES
//NOTE: Modules needed: mime, fs
determinePath = function (url, serverPath) {
    if (url == '/') {
        return serverPath + 'index.html';
    } else {
        return serverPath + url;
    }
};
determineMIME = function (filePath, mime) {
    type = mime.lookup(filePath);
    if (type == 'application/octet-stream') { //Default type of mime extension for unknown mime types is application/octet-stream
        return false; //Unknown type!
    }
    return type;
};
sendResponse = function (filePath, mimeType, fs, log, res) {
    if (!mimeType) { //Unknown MIME type, send 415 error code
        res.writeHead(415); //Http error code for unknown mime
        res.end();
    } else {
        fs.readFile(filePath, function sendResponse(err, content) {
            if (err) {
                log(err, "error");
                res.writeHead(500, "Internal server error");
            } else {
                res.writeHead(200, {
                    'Content-Type': mimeType,
                    'Content-Length': content.length
                });
                res.end(content);
            }
        });
    }
};
exports.determinePath = determinePath;
exports.determineMIME = determineMIME;
exports.sendResponse = sendResponse;
//NOTE: Don't forget to add new required modules to export!
