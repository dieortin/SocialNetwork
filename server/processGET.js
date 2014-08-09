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
sendResponse = function (filePath, mimeType, fs, res) {
    if (!mimeType) { //Unknown MIME type, send 415 error code
        res.writeHead(415); //Http error code for unknown mime
        res.end();
    } else {
        var content = fs.readFile(filePath, function sendResponse () {
            res.setHeader('Content-Type', mimeType);
            res.setHeader('Content-Length', content.length);
            res.end(content);
        });
        res.writeHead(200);
    }
};
exports.determinePath = determinePath;
exports.determineMIME = determineMIME;
exports.sendResponse = sendResponse;
//NOTE: Don't forget to add new required modules to export!
