var http = require('http');

exports.env = {
  prod  : "ns.admin.redmart.com",
  alpha : "dev.ns.admin.redmart.com",
  local  : "localhost"
};

define({
    PROD: "ns.admin.redmart.com",
    APLHA: "dev.ns.admin.redmart.com",
    LOCAL: "localhost"
});

var accessKey = "OXh3aVVnQm5UT0YwOVlZVTd0cTlUU0RGR0hNK0hFS1FwZG8xK1NJRGh1Z2tGbEMw";
var path = "/api/v1/notifications/send";

module.exports = {

  sendNotification: function(hostEnv, notification){

    var header = {
        "Content-Type": "application/json",
        "access-Key": accessKey
    };

    var options = {
      host: hostEnv,
      port: 80,
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

  }

};
