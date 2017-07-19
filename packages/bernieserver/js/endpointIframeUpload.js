import ensureLeadingSlash from '@defualt/ensure-leading-slash';
export default ({app,accessKeyId,secretAccessKey,Bucket, urlPattern}) => {
  app.post(urlPattern, function(req, res, next) {
    var parseUrl = require('url').parse;
    var normalizeImageFileData = require('./normalizeImageFileData')({
      prepareModuleWithDefaults: true,
      parseSettings: function(s){
        var filename = s.filename;
        // filename = parseUrl(s.originalUrl).pathname.split('/');
        // filename = filename[filename.length - 1];
        filename = filename.split('.');
        filename.pop();
        filename = filename.join('.');
        filename = filename + Date.now() + '.png';
        filename = 'selfies/' + filename;
        s.url = '//s3-us-west-1.amazonaws.com/bernieapp/' + filename;
        s.filename = filename;
        return s;
      }
    });
    var uploadToS3 = require('./uploadToS3')({
      prepareModuleWithDefaults: true,
      accessKeyId:accessKeyId,
      secretAccessKey:secretAccessKey,
      Bucket: Bucket
    });
    var apiRequestIntoBufferData = require('./apiRequestIntoBufferData');
    apiRequestIntoBufferData(req).then(normalizeImageFileData).then(uploadToS3).then(function(r){
      var details = {
        url:r.url
      };
      app.render('iframeuploadbutton.html',{
        lastData:{
            width: r.width,
            height: r.height,
            public_id:r.Key.replace('selfies/',''),
            url:r.url
        },
        buttonText:decodeURIComponent(req.query.buttonText)
      },function(err, html){
        res.end(html);
      });
    });
  });
};