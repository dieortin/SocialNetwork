var processPOST = function (req, res, modules) {
    var http = modules[0],
        mime = modules[1],
        errno = modules[2],
        fs = modules[3],
        mysql = modules[4],
        logRes = modules[5],
        config = modules[6],
        log = modules[7];
    switch(req.url) {
            case '/signup':
                // Process request
                break;
            default:
                res.writeHead(501);
                res.end("POST requests not accepted yet");
                logRes(501);
    }
};
exports.processPOST = processPOST;
