var jD = require('jquery-deferred');
var prepareModuleWithDefaults = require('./prepareModuleWithDefaults');
var Busboy = require('busboy');

module.exports = prepareModuleWithDefaults(function(req){
  var dfd = jD.Deferred();

  var filenameDfd = jD.Deferred();
  var busboy = new Busboy({ headers: req.headers });
  var busboy = new Busboy({ headers: req.headers });
  var bufferArray = [];
  var filenamex;
  var toResolve = {
    Body: []
  };
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    // console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    toResolve.filename = filename;

    file.on('data', function(data) {
      // console.log('File [' + fieldname + '] got ' + data.length + ' bytes',data);
      toResolve.Body.push(data);

    });
    // file.on('end', function() {
    //   console.log('File [' + fieldname + '] Finished');
    // });
  });
  // busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
  //   console.log('Field [' + fieldname + ']: value: ' + inspect(val));
  // });
  busboy.on('finish', function() {
    toResolve.Body = Buffer.concat(toResolve.Body);
    // console.log('Done parsing form!',Body);
    dfd.resolve(toResolve);
  });
  req.pipe(busboy);
  
  return dfd.promise();

  /*
  var data = [];
  req.on('data', function(chunk) {
      data.push(chunk);
  });
  var endDfd = jD.Deferred();
  req.on('end', function(x) {
    console.log('end')
    console.log(data)
      var Body = Buffer.concat(data);
      // console.log(Body)
      endDfd.resolve({
        body: data
      });
  });
  req.on('error', function(err) {
      endDfd.reject(err);
  });
  */
});

