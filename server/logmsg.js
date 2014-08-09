var log = function (msg, type) {
  var date = new Date;
  var msgHead;
  var dateSet = date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " ";
  switch (type) {
    case "init":
      msgHead = "INIT: "
      break;
    case "error":
      msgHead = "ERROR: "
      break;
    case "info":
      msgHead = "INFO: "
      break;
  }
  console.log(dateSet + msgHead + msg);
}
exports.log = log;