var jD = require('jquery-deferred');
module.exports = function(originalUrl){
  var isHttps = originalUrl.indexOf('https://') !== -1;
  var url = require('url');
  
  var dfd = jD.Deferred();
  var options = url.parse(originalUrl);
  var http;
  if(isHttps){
    http = require('https');
  } else {
    http = require('http');
  }

  http.get(options, function (response) {
    var chunks = [];
    response.on('data', function (chunk) {
      chunks.push(chunk);
    }).on('end', function() {
      var buffer = Buffer.concat(chunks);
      var contentType = response.headers['content-type'];
      dfd.resolve({
        Body: buffer,
        ContentType: contentType,
        originalUrl: originalUrl
      })
    }).on('error', (e) => {
      dfd.reject(e);
    });
  });

  return dfd.promise();
};