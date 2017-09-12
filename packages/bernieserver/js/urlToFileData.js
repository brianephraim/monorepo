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
  console.log('http get');
  http.get(options, function (response) {
    console.log('GOTTEN');
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
  }).on('error', (e) => {
    console.error('urlFileToData http error!!!', e);
    dfd.reject(e);
  });;

  return dfd.promise();
};