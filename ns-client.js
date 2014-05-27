var http = require('http');

var accessKey = "OXh3aVVnQm5UT0YwOVlZVTd0cTlUU0RGR0hNK0hFS1FwZG8xK1NJRGh1Z2tGbEMw";
var path = "/api/v1/notifications/send";

module.exports = {

  sendNotification: function(hostEnv, notification){

    var header = {
        "Content-Type": "application/json",
        "access-Key": accessKey
    };

    var options = {
      host: hostEnv.host,
      port: hostEnv.port,
      path: path,
      method: 'POST',
      headers: header
    };

    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });

    // write data to request body
    req.write(notification);
    req.end();

    req.on('error', function(err) {
        console.log('error: ' + err);
    });

  },
  
  env: function(env){
    
    var val;
    
    if(env.toLowerCase()=='prod'){
      val = { host: "ns.admin.redmart.com", port: 80}
    }else if(env.toLowerCase()=='alpha'){
      val = { host: "dev.ns.admin.redmart.com", port: 80}
    }else if(env.toLowerCase()=='local'){
      val = { host: "localhost", port: 9010}
    }
    
    return val;
  }

};
