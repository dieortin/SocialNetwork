var log = function (msg, type) {
    var date = new Date;
    var msgHead;
    var dateSet = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " ";
    switch (type) {
    case "init":
        msgHead = "INIT: "
        console.info(dateSet + msgHead + msg);
        break;
    case "info":
        msgHead = "INFO: "
        console.info(dateSet + msgHead + msg);
        break;
    case "error":
        msgHead = "ERROR: "
        console.error(dateSet + msgHead + msg);
        break;
    }
}
exports.log = log;
