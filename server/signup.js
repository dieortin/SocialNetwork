//THIS FILE PROCESSES POST REQUESTS TO ADD NEW USERS
var procPost = function () {
  var postData = "";
  req.on("data", function (d) {
    postData += d;
    if (postData.length > 1e6) { 
      // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
      request.connection.destroy();
    }
  });
  req.on("end", function {
    //GOT DATA, PROCESS IT
    var POST = qs.parse(postData),
         mail = postData.mail,
         name = postData.name,
         passwd = postData.passwd;
    if (POST.login == true) {
      //LOGIN REQUEST
    } else if (POST.login == false) {
      //SIGNUP REQUEST
      
    } else {
      //BADLY FORMATTED REQUEST, MISSING LOGIN CONFIRMATION
      res.writeHead(400);
      res.end();
    }
  })
}

//EXPORT FUNCTION
exports.procPost = procPost;