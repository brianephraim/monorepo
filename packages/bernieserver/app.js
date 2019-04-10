console.log('APP.js')

var mymodule = require('./public/js/mymodule');

/*
 * Set-up the Express app.
 */
 var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
console.log(process.env.PORT || 4000)
app.set('port', process.env.PORT || 4000);
// app.set('port', 4000);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Load the S3 information from the environment variables.
 */
var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET



//===========================
//HTML PAGES
//____________________________

app.get('/privacy', function(req, res){
    res.render('privacy.html',{
        pageName:'privacy',
        urlInfo:mymodule.deriveUrlInfo(null),
        userTemplates:userTemplates
    });
});

app.get('/terms', function(req, res){
    res.render('terms.html',{
        pageName:'terms',
        urlInfo:mymodule.deriveUrlInfo(null),
        userTemplates:userTemplates
    });
});

app.get('/iframeuploadbutton', function(req, res){
    res.render('iframeuploadbutton.html',{
        pageName:'iframeuploadbutton',
        urlInfo:null,
        buttonText:req.query.buttonText
    });
});



var standardRouteHtmlHandler = function(req, res){
  var url = require('url');
  var urlToUse = req.url;  
  urlToUse = url.parse(urlToUse).pathname === '/' ? null : urlToUse;
  var offline = typeof req.query.offline !== 'undefined';
  var iframebutton = typeof req.query.iframebutton !== 'undefined';
  var urlInfo = mymodule.deriveUrlInfo(urlToUse,offline);
  
  mongooseStuff.UpdateComplexImage(urlInfo).then(function(result){});

  res.render('redesign'+'.html',{
      userTemplates:userTemplates,
      req:req,
      urlInfo:urlInfo,
      mymodule:mymodule,
      offline:offline,
      iframebutton:iframebutton
      // pretty:stringify(req, null, 2)
  });
};
app.get(mymodule.standardModesRegex, standardRouteHtmlHandler);

app.get('/', standardRouteHtmlHandler);

app.get('/redesign', standardRouteHtmlHandler);


var mongooseStuff = require('./js/mongooseStuff').x;
app.get('/list', function(req, res){
    var offline = typeof req.query.offline !== 'undefined';
    mongooseStuff.GetComplexImageAll().then(function(images){
    // mongooseStuff.getImages().then(function(images){
      res.render('list.html', { 
          images:images,
          offline:offline
      });
    });
});


var userTemplates = []; 
//===========================
//ENDPOINTS
//____________________________

require('./js/endpointCompositeImage')({
  app:app,
  accessKeyId:AWS_ACCESS_KEY,
  secretAccessKey:AWS_SECRET_KEY,
  Bucket: S3_BUCKET
});

require('./js/endpointGetNormalizedImageInfo')({
  app:app,
  accessKeyId:AWS_ACCESS_KEY,
  secretAccessKey:AWS_SECRET_KEY,
  Bucket: S3_BUCKET,
  userTemplates:userTemplates
});

require('./js/endpointGetS3SignedUploadUrl')({
  app:app,
  accessKeyId:AWS_ACCESS_KEY,
  secretAccessKey:AWS_SECRET_KEY,
  Bucket: S3_BUCKET
});

require('./js/endpointIframeUpload')({
  app:app,
  accessKeyId:AWS_ACCESS_KEY,
  secretAccessKey:AWS_SECRET_KEY,
  Bucket: S3_BUCKET
});




// require('./js/passportStuff')({
//   app:app
// });
// app.listen(3000);



var fs = require('fs');






app.post('/SimpleImage',function(req, res){
  var data = req.body;
  mongooseStuff.simpleimage(data.url, data.idX).then(function() {
    res.send({
        status:"success"
    })
  })
})

app.post('/ComplexImage', function(req, res){
    var data = req.body;

    mongooseStuff.ComplexImage(data).then(function(result){
      res.send({
          status:"success",
          result:result,
          payload:data
      })
    });
});

app.post('/GetComplexImage', function(req, res){
    var data = req.body.data;
    mongooseStuff.GetComplexImage('asdf').then(function(result){
      res.send({
          status:"success",
          result:result
      })
    });
});

app.post('/UpdateComplexImage', function(req, res){
    var data = req.body;
    mongooseStuff.UpdateComplexImage(data).then(function(result){
      res.send({
          status:"success",
          result:result
      })
    });
});




// GetComplexImage
// mongooseStuff.ComplexImage({url:'asdf'}).always(function(arguments){
//    console.log('ComplexImage',arguments)
//  })

// mongooseStuff.GetComplexImageAll().always(function(arguments){
//   console.log('ComplexImage',arguments)
// })
 
mongooseStuff.GetUserTemplatesAll().always(function(data){
  // console.log('GetUserTemplatesAll',data);
  userTemplates = data;
  // console.log('userTemplates',userTemplates)
})







/*
 * Start the server to handle incoming requests.
*/
app.listen(app.get('port'));

module.exports = app;
