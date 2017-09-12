require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(37).concat([
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bernieExpressServer = __webpack_require__(50);

var _bernieExpressServer2 = _interopRequireDefault(_bernieExpressServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _bernieExpressServer2.default;

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ensureLeadingSlash(str) {
  return str.replace(/^\/?/, '/');
}
exports.default = ensureLeadingSlash;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (fun) {
  return function (c) {
    if (c.prepareModuleWithDefaults) {
      c = Object.assign({}, c);
      var parseSettings = null;
      if (c.parseSettings) {
        parseSettings = c.parseSettings;
        delete c.parseSettings;
      }
      delete c.prepareModuleWithDefaults;
      return function (r) {
        if ((typeof r === 'undefined' ? 'undefined' : _typeof(r)) === 'object' && !Array.isArray(r)) {
          r = Object.assign({}, c, r);
        }

        if (parseSettings) {
          r = parseSettings(r);
        }
        return fun(r);
      };
    } else {
      return fun(c);
    }
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prepareModuleWithDefaults = __webpack_require__(42);
module.exports = prepareModuleWithDefaults(function (s) {
	var res = s.res;
	var isSuccess = typeof s.isSuccess === 'undefined' || !!s.isSuccess;
	delete s.res;
	delete s.isSuccess;
	delete s.accessKeyId;
	delete s.secretAccessKey;
	var status = 200; //ok
	if (s.statusCode) {
		status = s.statusCode;
	} else if (!isSuccess) {
		status = 500;
	}
	status = status === 0 ? 500 : status;

	if (s.error) {
		// res.write(s.error);
		// res.render('error', s.error);
		res.status(status).json({
			message: s.error.message,
			error: s.error.error
		});
		// res.json('error', {
		//        message: s.error.message,
		//        error: s.error
		//    });
	} else {
		res.status(status);
		res.write(JSON.stringify(s));
	}

	res.end();
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
var sharp = __webpack_require__(49);
var prepareModuleWithDefaults = __webpack_require__(42);
var parseUrl = __webpack_require__(12).parse;
module.exports = prepareModuleWithDefaults(function (s) {
  var dfd = jD.Deferred();
  var buffer = s.Body;
  var sharp = __webpack_require__(49);
  var image = sharp(buffer);
  image.metadata(function (err, meta) {
    if (err) {
      dfd.reject(err);
    } else {
      var smallestDim = Math.min(meta.width, meta.height);
      var largestDim = Math.max(meta.width, meta.height);
      var limit = 1200;

      var multiplier = limit / smallestDim;
      multiplier = multiplier < 1 ? multiplier : 1;
      if (multiplier !== 1) {
        limit = Math.floor(largestDim * multiplier);
        image.resize(limit, limit).max().withoutEnlargement();
      }
      image.rotate().toBuffer(function (err, outputBuffer, info) {
        if (err) {
          dfd.reject(err);
        } else {
          var manipulatedImageFileData = {
            Key: s.filename,
            ContentType: 'image/png',
            Body: outputBuffer,
            width: info.width,
            height: info.height,
            url: s.url,
            originalFilename: s.originalFilename
          };
        }
        dfd.resolve(manipulatedImageFileData);
      });
    }
  });
  return dfd.promise();
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
var aws = __webpack_require__(40);
var prepareModuleWithDefaults = __webpack_require__(42);
module.exports = prepareModuleWithDefaults(function (s) {
  s = Object.assign({}, s);
  if (!s.ContentType) {
    var mime = __webpack_require__(69);
    var extension = s.Key.split('.').pop();
    s.ContentType = mime.lookup(extension);
  }
  var dfd = jD.Deferred();

  aws.config.update({ accessKeyId: s.accessKeyId, secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();
  var s3Params = {
    Bucket: s.Bucket,
    Key: s.Key,
    Body: s.Body,
    ContentType: s.ContentType,
    ACL: 'public-read'
  };

  s3.putObject(s3Params, function (err, data) {
    if (err) {
      dfd.reject(err);
    } else {
      s.uploadResponse = data;
      dfd.resolve(s);
    }
  });
  return dfd.promise();
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeServeChainableExpress(serverLogic) {
  return function (_ref) {
    var app = _ref.app,
        _ref$port = _ref.port,
        port = _ref$port === undefined ? 3000 : _ref$port,
        _ref$nameSpace = _ref.nameSpace,
        nameSpace = _ref$nameSpace === undefined ? '' : _ref$nameSpace;

    var appIsBrandNew = false;
    if (!app) {
      appIsBrandNew = true;
      app = (0, _express2.default)();
    }

    serverLogic(app, nameSpace);

    if (appIsBrandNew) {
      app.listen(port, function (error) {
        if (error) {
          console.error(error);
        } else {
          console.info('🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
        }
      });
    }

    return app;
  };
}

exports.default = makeServeChainableExpress;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
var aws = __webpack_require__(40);
module.exports = function (s) {
  s = Object.assign({}, s);
  var dfd = jD.Deferred();
  aws.config.update({ accessKeyId: s.accessKeyId, secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();
  s3.getObject({
    Bucket: s.Bucket,
    Key: s.Key
  }, function (err, data) {
    var output;
    if (err && err.statusCode === 404 && s.resolveNullOn404) {
      output = s.outputParser ? s.outputParser(null) : null;
      dfd.resolve(output);
    } else if (err) {
      dfd.reject(err);
    } else {
      output = s.outputParser ? s.outputParser(data) : data;
      dfd.resolve(output);
    }
  });
  return dfd.promise();
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
var mymoduleName = 'mongooseStuff';;
(function (exports) {

    var jD = __webpack_require__(39);

    var mongoose = __webpack_require__(71);
    var uriUtil = __webpack_require__(70);

    var mongooseStuff = function () {
        var MongooseStuff = function MongooseStuff() {
            var _mongoose$Schema;

            var self = this;
            var mongodbUri = process.env.MONGOLAB_URI;
            if (process.env.ENVNAME === 'foremanLocal') {
                mongodbUri = "mongodb://localhost:27017/" + process.env.DATABASE_NAME;
            }

            this.mongooseUri = uriUtil.formatMongoose(mongodbUri);
            this.db = mongoose.connection;
            this.models = {};
            self.models.SimpleImage = mongoose.model('simpleimage', mongoose.Schema({
                "url": String,
                "idX": String
                // "date": {
                //     type: Date,
                //     default: Date.now
                // },
                // "width": Number,
                // "height": Number,
            }));

            self.models.ComplexImage = mongoose.model('ComplexImage', mongoose.Schema((_mongoose$Schema = {
                "url": String,
                "idX": String,
                "date": Date,
                "width": Number,
                "height": Number,
                "cropWidth": Number,
                "cropHeight": Number,
                "x": Number,
                "y": Number,
                "mode": String,
                "customTemplate": String
            }, _defineProperty(_mongoose$Schema, 'idX', String), _defineProperty(_mongoose$Schema, "customUrl", String), _defineProperty(_mongoose$Schema, "pathname", String), _defineProperty(_mongoose$Schema, "good", Number), _mongoose$Schema)));

            self.models.UserTemplate = mongoose.model('UserTemplate', mongoose.Schema({
                created: Date,
                customTemplate: String,
                templateHeight: Number,
                templateWidth: Number
            }));
        };
        MongooseStuff.prototype.connect = function () {
            var self = this;
            var dfd = jD.Deferred();
            if (mongoose.connection.readyState === 0) {
                var options = {
                    server: {
                        socketOptions: {
                            keepAlive: 1,
                            connectTimeoutMS: 30000
                        }
                    },
                    replset: {
                        socketOptions: {
                            keepAlive: 1,
                            connectTimeoutMS: 30000
                        }
                    }
                };
                mongoose.connect(self.mongooseUri, options);
                self.db.once('open', dfd.resolve);
                self.db.on('error', console.error.bind(console, 'connection error:'));
            } else {
                dfd.resolve();
            }

            return dfd.promise();
        };

        MongooseStuff.prototype.checkUrl = function (idX) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.SimpleImage.findOne({
                    'idX': idX
                }, 'url idX', function (err, simpleimage) {

                    if (simpleimage !== null) {
                        dfd.resolve(true);
                    } else {
                        dfd.resolve(false);
                    }

                    // if (err) return handleError(err);
                    // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.GetComplexImage = function (idX) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.ComplexImage.findOne({
                    'idX': idX
                }, function (err, data) {

                    if (data !== null) {
                        dfd.resolve(data);
                    } else {
                        dfd.resolve(data);
                    }

                    // if (err) return handleError(err);
                    // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.GetUserTemplatesAll = function () {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.UserTemplate.find({}, function (err, data) {

                    if (data !== null) {
                        dfd.resolve(data);
                    } else {
                        dfd.resolve(data);
                    }

                    // if (err) return handleError(err);
                    // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.GetComplexImageAll = function () {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.ComplexImage.find({}, function (err, data) {

                    if (data !== null) {
                        dfd.resolve(data);
                    } else {
                        dfd.resolve(data);
                    }

                    // if (err) return handleError(err);
                    // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.MakeUserTemplate = function (data) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.UserTemplate.findOneAndUpdate({ customTemplate: data.customTemplate }, data, { upsert: true }, function () {
                    dfd.resolve.apply(null, arguments);
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.UpdateComplexImage = function (data) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.ComplexImage.findOneAndUpdate({ idX: data.idX }, data, { upsert: true }, function () {
                    dfd.resolve.apply(null, arguments);
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.ComplexImage = function (data) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                var newRecord = new self.models.ComplexImage(data);

                newRecord.save(function () {
                    dfd.resolve.apply(null, arguments);
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.simpleimage = function (url, idX) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                var newRecord = new self.models.SimpleImage({
                    url: url,
                    idX: idX
                });

                newRecord.save(function () {
                    dfd.resolve.apply(null, arguments);
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.getImages = function (url, idX) {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                self.models.SimpleImage.find({}, 'url idX', function (err, simpleimage) {
                    dfd.resolve(simpleimage);
                });
            });
            return dfd.promise();
        };

        MongooseStuff.prototype.nuke = function () {
            var self = this;
            var dfd = jD.Deferred();
            self.connect().then(function () {
                mongoose.connection.db.collection('usertemplates').drop(function (err) {
                    //compleximages
                    if (err) throw err;

                    // Only close the connection when your app is terminating
                    mongoose.connection.db.close(function (err) {
                        dfd.resolve();
                        if (err) throw err;
                    });
                });
                return dfd.promise();
            });
        };

        return new MongooseStuff();
    }();

    exports.x = mongooseStuff;

    // mongooseStuff.nuke();

    // mongooseStuff.connect().then(function(){
    // 	mongoose.connection.db.listCollections().toArray(function(err, names) {
    // 	    if (err) {
    // 	        console.log(err);
    // 	    }
    // 	    else {
    // 	        names.forEach(function(e,i,a) {
    // 	            mongoose.connection.db.dropCollection(e.name);
    // 	            console.log("collection --->>", e.name);
    // 	        });
    // 	    }
    // 	});
    //    });

})( false ? undefined[mymoduleName] = {} : exports);

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mymodule = __webpack_require__(62);

var _mymodule2 = _interopRequireDefault(_mymodule);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _ejs = __webpack_require__(65);

var _ejs2 = _interopRequireDefault(_ejs);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(12);

var _url2 = _interopRequireDefault(_url);

var _fs = __webpack_require__(66);

var _fs2 = _interopRequireDefault(_fs);

var _mongooseStuff = __webpack_require__(48);

var _endpointCompositeImage = __webpack_require__(55);

var _endpointCompositeImage2 = _interopRequireDefault(_endpointCompositeImage);

var _endpointGetNormalizedImageInfo = __webpack_require__(56);

var _endpointGetNormalizedImageInfo2 = _interopRequireDefault(_endpointGetNormalizedImageInfo);

var _endpointGetS3SignedUploadUrl = __webpack_require__(57);

var _endpointGetS3SignedUploadUrl2 = _interopRequireDefault(_endpointGetS3SignedUploadUrl);

var _endpointIframeUpload = __webpack_require__(58);

var _endpointIframeUpload2 = _interopRequireDefault(_endpointIframeUpload);

var _generateUrlRegexNamespace = __webpack_require__(59);

var _generateUrlRegexNamespace2 = _interopRequireDefault(_generateUrlRegexNamespace);

var _respondWithJson = __webpack_require__(43);

var _respondWithJson2 = _interopRequireDefault(_respondWithJson);

var _ensureLeadingSlash = __webpack_require__(41);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

var _makeServeChainableExpress = __webpack_require__(46);

var _makeServeChainableExpress2 = _interopRequireDefault(_makeServeChainableExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var mymodule = require('./public/js/mymodule');
// var express = require('express');
// var ejs = require('ejs');
// var path = require('path');
// var url = require('url');
// var mongooseStuff = require('./js/mongooseStuff').x;
// var endpointCompositeImage = require('./js/endpointCompositeImage');

// var endpointGetNormalizedImageInfo = require('./js/endpointGetNormalizedImageInfo');

// var endpointGetS3SignedUploadUrl = require('./js/endpointGetS3SignedUploadUrl');

// var endpointIframeUpload = require('./js/endpointIframeUpload');
// var fs = require('fs');

/*
 * Set-up the Express app.
 */

exports.default = (0, _makeServeChainableExpress2.default)(function (app, nameSpace) {
    app.set('views', __dirname + '/views');
    app.engine('html', _ejs2.default.renderFile);

    app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

    /*
     * Load the S3 information from the environment variables.
     */
    var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
    var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
    var S3_BUCKET = process.env.S3_BUCKET;

    //===========================
    //HTML PAGES
    //____________________________

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/privacy'), function (req, res) {
        res.render('privacy.html', {
            pageName: 'privacy',
            urlInfo: _mymodule2.default.deriveUrlInfo({ nameSpace: nameSpace }),
            userTemplates: userTemplates
        });
    });

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/terms'), function (req, res) {
        res.render('terms.html', {
            pageName: 'terms',
            urlInfo: _mymodule2.default.deriveUrlInfo({ nameSpace: nameSpace }),
            userTemplates: userTemplates
        });
    });

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/iframeuploadbutton'), function (req, res) {
        res.render('iframeuploadbutton.html', {
            pageName: 'iframeuploadbutton',
            urlInfo: null,
            buttonText: req.query.buttonText
        });
    });

    var standardRouteHtmlHandler = function standardRouteHtmlHandler(req, res) {
        var urlToUse = req.url;
        urlToUse = _url2.default.parse(urlToUse).pathname === '/' ? null : urlToUse;
        var offline = typeof req.query.offline !== 'undefined';
        var iframebutton = typeof req.query.iframebutton !== 'undefined';
        var urlInfo = _mymodule2.default.deriveUrlInfo({ pathname: urlToUse, offline: offline, nameSpace: nameSpace });

        _mongooseStuff.x.UpdateComplexImage(urlInfo).then(function (result) {});

        res.render('redesign' + '.html', {
            userTemplates: userTemplates,
            req: req,
            urlInfo: urlInfo,
            mymodule: _mymodule2.default,
            offline: offline,
            iframebutton: iframebutton
            // pretty:stringify(req, null, 2)
        });
    };
    app.get(_mymodule2.default.getStandardModesRegex(nameSpace), standardRouteHtmlHandler);

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/'), standardRouteHtmlHandler);

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/redesign'), standardRouteHtmlHandler);

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/list'), function (req, res) {
        var offline = typeof req.query.offline !== 'undefined';
        _mongooseStuff.x.GetComplexImageAll().then(function (images) {
            // mongooseStuff.getImages().then(function(images){
            res.render('list.html', {
                images: images,
                offline: offline
            });
        });
    });

    var userTemplates = [];
    //===========================
    //ENDPOINTS
    //____________________________

    (0, _endpointCompositeImage2.default)({
        app: app,
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
        Bucket: S3_BUCKET,
        urlPattern: (0, _generateUrlRegexNamespace2.default)('image\/')
    });

    (0, _endpointGetNormalizedImageInfo2.default)({
        app: app,
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
        Bucket: S3_BUCKET,
        userTemplates: userTemplates,
        urlPattern: (0, _ensureLeadingSlash2.default)(nameSpace + '/get_normalized_image_info')
    });
    (0, _endpointGetS3SignedUploadUrl2.default)({
        app: app,
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
        Bucket: S3_BUCKET,
        urlPattern: (0, _ensureLeadingSlash2.default)(nameSpace + '/get_s3_signed_upload_url')
    });

    (0, _endpointIframeUpload2.default)({
        app: app,
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
        Bucket: S3_BUCKET,
        urlPattern: (0, _ensureLeadingSlash2.default)(nameSpace + '/uploadsimple')
    });

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/get_template_list'), function (req, res) {
        (0, _respondWithJson2.default)({
            res: res,
            userTemplates: userTemplates
        });
    });

    // require('./js/passportStuff')({
    //   app:app
    // });
    // app.listen(3000);


    app.post((0, _ensureLeadingSlash2.default)(nameSpace + '/SimpleImage'), function (req, res) {
        var data = req.body;
        _mongooseStuff.x.simpleimage(data.url, data.idX).then(function () {
            res.send({
                status: "success"
            });
        });
    });

    app.post((0, _ensureLeadingSlash2.default)(nameSpace + '/ComplexImage'), function (req, res) {
        var data = req.body;

        _mongooseStuff.x.ComplexImage(data).then(function (result) {
            res.send({
                status: "success",
                result: result,
                payload: data
            });
        });
    });

    app.post((0, _ensureLeadingSlash2.default)(nameSpace + '/GetComplexImage'), function (req, res) {
        var data = req.body.data;
        _mongooseStuff.x.GetComplexImage('asdf').then(function (result) {
            res.send({
                status: "success",
                result: result
            });
        });
    });

    app.post((0, _ensureLeadingSlash2.default)(nameSpace + '/UpdateComplexImage'), function (req, res) {
        var data = req.body;
        _mongooseStuff.x.UpdateComplexImage(data).then(function (result) {
            res.send({
                status: "success",
                result: result
            });
        });
    });

    // GetComplexImage
    // mongooseStuff.ComplexImage({url:'asdf'}).always(function(arguments){
    //    console.log('ComplexImage',arguments)
    //  })

    // mongooseStuff.GetComplexImageAll().always(function(arguments){
    //   console.log('ComplexImage',arguments)
    // })

    _mongooseStuff.x.GetUserTemplatesAll().always(function (data) {
        // console.log('GetUserTemplatesAll',data);
        userTemplates = data;
        // console.log('userTemplates',userTemplates)
    });

    return app;
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
var prepareModuleWithDefaults = __webpack_require__(42);
var Busboy = __webpack_require__(63);

module.exports = prepareModuleWithDefaults(function (req) {
  var dfd = jD.Deferred();

  var filenameDfd = jD.Deferred();
  var busboy = new Busboy({ headers: req.headers });
  var busboy = new Busboy({ headers: req.headers });
  var bufferArray = [];
  var filenamex;
  var toResolve = {
    Body: []
  };
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    // console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    toResolve.filename = filename;

    file.on('data', function (data) {
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
  busboy.on('finish', function () {
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

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (cropSettings, userPhotoWidthHeight) {
  var limit = 1200;
  // var scale = overlaySettings.scale;
  var cropWidth = cropSettings.width;
  var cropHeight = cropSettings.height;
  var cropTop = cropSettings.top;
  var cropLeft = cropSettings.left;
  var cropRight = cropLeft + cropWidth;
  var cropBottom = cropTop + cropHeight;
  var rawWidth = userPhotoWidthHeight.width;
  var rawHeight = userPhotoWidthHeight.height;
  var rawRight = rawWidth;
  var rawBottom = rawHeight;
  var rawTop = 0;
  var rawLeft = 0;

  var s = {};

  s.extract = {
    left: cropLeft > 0 ? cropLeft : 0,
    top: cropTop > 0 ? cropTop : 0
  };
  s.extract.width = cropRight < rawRight ? cropRight : rawRight;
  s.extract.width = s.extract.width - s.extract.left;
  s.extract.width = s.extract.width > 0 ? s.extract.width : 0;
  s.extract.height = cropBottom < rawBottom ? cropBottom : rawBottom;
  s.extract.height = s.extract.height - s.extract.top;
  s.extract.height = s.extract.height > 0 ? s.extract.height : 0;

  s.extend = {
    left: cropLeft < 0 ? -cropLeft : 0,
    top: cropTop < 0 ? -cropTop : 0,
    right: cropRight > rawRight ? cropRight - rawRight : 0,
    bottom: cropBottom > rawBottom ? cropBottom - rawBottom : 0
  };

  s.resize = {
    width: 1200,
    height: 1200
  };

  s.completelyOutOfBound = false;
  if (s.extract.left >= rawRight || s.extract.top >= rawBottom || s.extend.left >= cropWidth || s.extend.top >= cropHeight) {
    s.completelyOutOfBound = true;
  }
  s.extract = s.extract.width && s.extract.height ? s.extract : null;
  s.extend = s.extend.left || s.extend.top || s.extend.bottom || s.extend.right ? s.extend : null;
  s.limit = limit;
  return s;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sharp = __webpack_require__(49);
var jD = __webpack_require__(39);
var calcOverlayAndTemplateProcessingSettings = __webpack_require__(52);
module.exports = function (overlaySettings, responses) {
  var dfd = jD.Deferred();
  var templateFetchResponse = responses.template;
  var userPhotoFetchResponse = responses.userPhoto;
  var args = Array.prototype.slice.call(arguments);
  var userPhoto = sharp(userPhotoFetchResponse.data.Body);
  userPhoto.metadata().then(function (metadata) {
    var imageProcessingSettings = calcOverlayAndTemplateProcessingSettings(overlaySettings, metadata);
    var s = imageProcessingSettings;
    if (s.completelyOutOfBound) {
      var template = sharp(templateFetchResponse.data.Body);
      template.resize(s.limit, s.limit).min().max();
      template.background('white').flatten().jpeg().toBuffer().then(function (templateBuffer) {
        dfd.resolve({
          Body: templateBuffer
        });
      });
    } else {
      if (s.extract) {
        userPhoto.extract(s.extract);
      }
      if (s.extend) {
        userPhoto.extend(s.extend);
      }

      userPhoto.background('white').flatten().toBuffer().then(function (userPhotoBuffer) {
        var userPhoto = sharp(userPhotoBuffer);
        userPhoto.resize(1200, 1200);
        var template = sharp(templateFetchResponse.data.Body);
        template.resize(1200, 1200).min().max();
        template.toBuffer().then(function (templateBuffer) {
          userPhoto.overlayWith(templateBuffer, {
            top: 0,
            left: 0
          });
          userPhoto.jpeg().toBuffer().then(function (userPhotoBuffer) {
            dfd.resolve({
              Body: userPhotoBuffer
            });
          });
        });
      });
    }
    return userPhoto;
  });
  return dfd.promise();
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
var aws = __webpack_require__(40);
var prepareModuleWithDefaults = __webpack_require__(42);

module.exports = prepareModuleWithDefaults(function (s) {
  var dfd = jD.Deferred();
  s = Object.assign({}, s);
  aws.config.update({ accessKeyId: s.accessKeyId, secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();

  //toPass.uploadRequestSettings.originalFilename
  if (s.Key) {
    s3.deleteObjects({
      Bucket: s.Bucket,
      Delete: {
        Objects: [{ Key: s.Key }]
      }
    }, function (err, data) {
      if (err) {
        dfd.reject(err);
      } else {
        dfd.resolve(data);
      }
    });
  } else {
    console.log('NOTHING TO DELETE');
    dfd.resolve({ msg: 'Missing key, nothing deleted.' });
  }
  return dfd.promise();
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(40);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _url = __webpack_require__(12);

var _ensureLeadingSlash = __webpack_require__(41);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

var _getAllS3Objects = __webpack_require__(60);

var _getAllS3Objects2 = _interopRequireDefault(_getAllS3Objects);

var _getS3ObjectData = __webpack_require__(47);

var _getS3ObjectData2 = _interopRequireDefault(_getS3ObjectData);

var _createCompositeBuffer = __webpack_require__(53);

var _createCompositeBuffer2 = _interopRequireDefault(_createCompositeBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var parseClientCompositeImageUrl = function parseClientCompositeImageUrl(url) {
  var pathnameSplit = (0, _url.parse)(url).pathname.split('/').splice(2, 2);
  var compositeS3Key = 'consolidated/' + pathnameSplit.join('/');
  var templateFilename = pathnameSplit[0];
  var userImageAndScalePos = pathnameSplit[1];
  userImageAndScalePos = userImageAndScalePos.split('_');
  var userImageFilename = userImageAndScalePos;
  var scalePos = userImageFilename.splice(-4, 4);
  scalePos[3] = scalePos[3].split('.');
  scalePos[3].pop();
  scalePos[3] = scalePos[3].join('.');
  var overlaySettings = {
    width: +scalePos[0] == scalePos[0] ? +scalePos[0] : 100,
    height: +scalePos[1] == scalePos[1] ? +scalePos[1] : 100,
    left: +scalePos[2] == scalePos[2] ? +scalePos[2] : 0,
    top: +scalePos[3] == scalePos[3] ? +scalePos[3] : 0
  };
  userImageFilename = userImageFilename.join('_');
  return {
    userImageFilename: userImageFilename,
    templateFilename: templateFilename,
    overlaySettings: overlaySettings,
    compositeS3Key: compositeS3Key
  };
};

exports.default = function (_ref) {
  var app = _ref.app,
      accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      urlPattern = _ref.urlPattern;

  app.get(urlPattern, function (req, res) {
    var compositeImageInstructions = parseClientCompositeImageUrl(req.url);
    console.log('compositeImageInstructions', compositeImageInstructions);
    var s = compositeImageInstructions;
    (0, _getS3ObjectData2.default)({
      Key: s.compositeS3Key,
      resolveNullOn404: true,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      Bucket: Bucket
    }).then(function (data) {
      if (!data) {
        console.log('COMPOSITE IMAGE DOES NOT EXIST');

        (0, _getAllS3Objects2.default)({
          dict: {
            template: {
              Key: 'decorations/' + s.templateFilename + '.png'
            },
            userPhoto: {
              Key: 'selfies/' + s.userImageFilename + '.png',
              retrySearchCriteria: {
                Prefix: 'res/dthvwwocq/image/upload/bernie/' + s.userImageFilename,
                Bucket: 'cloudinary-bernie-backup'
              }
            }
          },
          Bucket: Bucket,
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey
        }).then(_createCompositeBuffer2.default.bind(null, s.overlaySettings)).then(function (bufferData) {
          res.setHeader('content-type', 'image/jpeg');
          res.write(bufferData.Body, 'binary');
          res.end(null, 'binary');

          _awsSdk2.default.config.update({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
          var s3 = new _awsSdk2.default.S3();
          s3.putObject({
            Bucket: Bucket,
            Key: s.compositeS3Key,
            Body: bufferData.Body,
            ContentType: 'image/jpeg',
            ACL: 'public-read'
          }, function (err, data) {
            if (err) {
              // Failed saving to S3
              log.error('Failed saving to S3', err);
            }
          });
        });
      } else {
        console.log('COMPOSITE IMAGE DOES IN FACT EXIST !!!!');
        res.setHeader('content-type', data.ContentType);
        res.write(data.Body, 'binary');
        res.end(null, 'binary');
      }
    });
  });
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(40);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _jqueryDeferred = __webpack_require__(39);

var _jqueryDeferred2 = _interopRequireDefault(_jqueryDeferred);

var _mongooseStuff = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      app = _ref.app,
      userTemplates = _ref.userTemplates,
      urlPattern = _ref.urlPattern;

  var urlToFileData = __webpack_require__(61);
  var uploadToS3 = __webpack_require__(45)({
    prepareModuleWithDefaults: true,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: Bucket
  });

  var parseUrl = __webpack_require__(12).parse;

  var normalizeImageFileData = __webpack_require__(44)({
    prepareModuleWithDefaults: true,
    parseSettings: function parseSettings(s) {
      var filename;
      var originalFilename;
      var url;
      if (s.originalUrl.indexOf('amazonaws.com/') !== -1) {
        var host = s.originalUrl.split('amazonaws.com/');
        host = host[0] + 'amazonaws.com/';
        filename = s.originalUrl.split('amazonaws.com/');
        originalFilename = filename[filename.length - 1];
        filename = originalFilename.replace('_temp', '');
        filename = filename.split('.');
        filename = filename[filename.length - 2];
        filename = filename + '.png';
        url = host + filename;
      } else {
        filename = parseUrl(s.originalUrl).pathname.split('/');
        filename = filename[filename.length - 1];
        filename = filename.split('.');
        filename.pop();
        filename = filename.join('.');
        filename = filename + Date.now() + '.png';
        filename = 'selfies/' + filename;
        originalFilename = null;
        url = '//s3-us-west-1.amazonaws.com/bernieapp/' + filename;
      }
      s.filename = filename;
      s.url = url;
      s.originalFilename = originalFilename;
      return s;
    }
  });
  var deep = __webpack_require__(64);
  var deleteS3Object = __webpack_require__(54)({
    prepareModuleWithDefaults: true,
    parseSettings: function parseSettings(s) {
      s.Key = deep(s, 'originalFilename');
      return s;
    },
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: Bucket
  });

  app.get(urlPattern, function (req, res) {
    var originalUrl = decodeURIComponent(req.query.image_url);
    var mustBeSquare = req.query.must_be_square === 'true';

    var respondWithJsonSuccess = __webpack_require__(43)({
      prepareModuleWithDefaults: true,
      res: res,
      isSuccess: true
    });
    var respondWithJsonFail = __webpack_require__(43)({
      prepareModuleWithDefaults: true,
      res: res,
      isSuccess: false
    });
    console.log('originalUrl', originalUrl);
    var promise = urlToFileData(originalUrl).then(normalizeImageFileData);
    var promises = [promise, promise.then(deleteS3Object), promise.then(function (fileData) {
      if (mustBeSquare && Math.abs(fileData.width - fileData.height) > 1) {
        var dfd = _jqueryDeferred2.default.Deferred();
        dfd.resolve({
          failingSquare: true
        });
        return dfd.promise();
      } else {
        var uploadToS3Promise = this.then(uploadToS3);
        console.log('uploadToS3');
        uploadToS3Promise.then(function () {
          if (mustBeSquare) {
            var userTemplateModel = {
              created: new Date(),
              customTemplate: fileData.Key.replace('selfies/', '').replace('.png', ''),
              templateHeight: fileData.height,
              templateWidth: fileData.width
            };
            userTemplates.push(userTemplateModel);
            _mongooseStuff.x.MakeUserTemplate(userTemplateModel);
          }
        });
        return uploadToS3Promise;
      }
    }).then(respondWithJsonSuccess)];
    _jqueryDeferred2.default.when.apply(null, promises).then(null, function (err) {
      respondWithJsonFail({ error: err });
    });
  });
}; /*
    * Respond to GET requests to /get_normalized_image_info.
    * changes size of image if it is too big
    * also rotates exif
    * responds with a new image url
   */

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(40);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _ensureLeadingSlash = __webpack_require__(41);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

var _respondWithJson = __webpack_require__(43);

var _respondWithJson2 = _interopRequireDefault(_respondWithJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app,
      accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      urlPattern = _ref.urlPattern;

  // Generates a unique aws url that the client uploads an image to.  Neat.
  app.get(urlPattern, function (req, res) {
    _awsSdk2.default.config.update({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
    var s3 = new _awsSdk2.default.S3();
    var filename = req.query.file_name;
    filename = filename.split('.');
    var secondToLast = filename[filename.length - 2];
    filename[filename.length - 2] = secondToLast + Date.now() + '_temp';
    filename = filename.join('.');
    var s3_params = {
      Bucket: Bucket,
      Key: filename,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3_params, function (err, data) {
      (0, _respondWithJson2.default)({
        res: res,
        signed_request: err || data,
        url: 'https://' + Bucket + '.s3.amazonaws.com/' + filename
      });
    });
  });
}; /*
    * Respond to GET requests to /get_normalized_image_info.
    * changes size of image if it is too big
    * also rotates exif
    * responds with a new image url
   */

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ensureLeadingSlash = __webpack_require__(41);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app,
      accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      urlPattern = _ref.urlPattern;

  app.post(urlPattern, function (req, res, next) {
    var parseUrl = __webpack_require__(12).parse;
    var normalizeImageFileData = __webpack_require__(44)({
      prepareModuleWithDefaults: true,
      parseSettings: function parseSettings(s) {
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
    var uploadToS3 = __webpack_require__(45)({
      prepareModuleWithDefaults: true,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      Bucket: Bucket
    });
    var apiRequestIntoBufferData = __webpack_require__(51);
    apiRequestIntoBufferData(req).then(normalizeImageFileData).then(uploadToS3).then(function (r) {
      var details = {
        url: r.url
      };
      app.render('iframeuploadbutton.html', {
        lastData: {
          width: r.width,
          height: r.height,
          public_id: r.Key.replace('selfies/', ''),
          url: r.url
        },
        buttonText: decodeURIComponent(req.query.buttonText)
      }, function (err, html) {
        res.end(html);
      });
    });
  });
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (standardModes) {
  if (typeof standardModes === 'string') {
    standardModes = [standardModes];
  }
  var pipedString = '';
  for (var i = 0, l = standardModes.length; i < l; i++) {
    var mode = standardModes[i];
    pipedString += i > 0 ? '|' + mode : mode;
  }
  var regx = new RegExp('^/(' + pipedString + ')(.+)');;
  return regx;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aws = __webpack_require__(40);
var jD = __webpack_require__(39);
var getS3ObjectData = __webpack_require__(47);
module.exports = function (s) {
  var dfdMain = jD.Deferred();
  var promises = [];
  aws.config.update({ accessKeyId: s.accessKeyId, secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();
  for (var entryName in s.dict) {
    var entry = s.dict[entryName];
    var filename = entry.Key;
    (function (entryName, filename, entry) {
      var entryDfd = jD.Deferred();
      getS3ObjectData({
        Key: filename,
        outputParser: function outputParser(data) {
          return {
            entryName: entryName,
            filename: filename,
            data: data
          };
        },
        accessKeyId: s.accessKeyId,
        secretAccessKey: s.secretAccessKey,
        Bucket: s.Bucket
      }).then(entryDfd.resolve).fail(function (originalErr) {
        if (entry.retrySearchCriteria) {
          var retryBucket = entry.retrySearchCriteria.Bucket ? entry.retrySearchCriteria.Bucket : s.Bucket;
          var aws = __webpack_require__(40);
          aws.config.update({ accessKeyId: s.accessKeyId, secretAccessKey: s.secretAccessKey });
          var s3 = new aws.S3();
          var params = {
            Bucket: retryBucket,
            Prefix: entry.retrySearchCriteria.Prefix
          };
          s3.listObjectsV2(params, function (err, data) {
            if (err) {
              entryDfd.reject(err);
            } else {
              if (data.Contents && data.Contents[0]) {
                getS3ObjectData({
                  Key: data.Contents[0].Key,
                  outputParser: function outputParser(data) {
                    return {
                      entryName: entryName,
                      filename: filename,
                      data: data
                    };
                  },
                  accessKeyId: s.accessKeyId,
                  secretAccessKey: s.secretAccessKey,
                  Bucket: retryBucket
                }).then(function () {
                  var args = arguments;
                  var normalizeImageFileData = __webpack_require__(44)({
                    prepareModuleWithDefaults: true,
                    filename: filename,
                    parseSettings: function parseSettings(s) {
                      s.Body = s.data.Body;
                      return s;
                    }
                  });
                  var uploadToS3 = __webpack_require__(45)({
                    prepareModuleWithDefaults: true,
                    accessKeyId: s.accessKeyId,
                    secretAccessKey: s.secretAccessKey,
                    Bucket: s.Bucket
                  });
                  this.then(normalizeImageFileData).then(uploadToS3).always(function () {
                    entryDfd.resolve.apply(null, args);
                  });
                  return this;
                }).fail(entryDfd.reject);
              } else {
                entryDfd.reject(originalErr);
              }
            }
          });
        } else {
          entryDfd.reject(originalErr);
        }
      });
      promises.push(entryDfd.promise());
    })(entryName, filename, entry);
  }

  jD.when.apply(null, promises).done(function (templateFetchResponse, userPhotoFetchResponse) {
    var args = Array.prototype.slice.call(arguments);
    var output = {};
    for (var i = 0, l = args.length; i < l; i++) {
      var entryName = args[i].entryName;
      delete args[i].Key;
      output[entryName] = args[i];
    }
    dfdMain.resolve(output);
  }).then(null, function (err) {
    dfdMain.reject(err);
  });
  return dfdMain.promise();
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(39);
module.exports = function (originalUrl) {
  var isHttps = originalUrl.indexOf('https://') !== -1;
  var url = __webpack_require__(12);

  var dfd = jD.Deferred();
  var options = url.parse(originalUrl);
  var http;
  if (isHttps) {
    http = __webpack_require__(68);
  } else {
    http = __webpack_require__(67);
  }
  console.log('http get');
  http.get(options, function (response) {
    console.log('GOTTEN', response);
    var chunks = [];
    response.on('data', function (chunk) {
      chunks.push(chunk);
    }).on('end', function () {
      var buffer = Buffer.concat(chunks);
      var contentType = response.headers['content-type'];
      dfd.resolve({
        Body: buffer,
        ContentType: contentType,
        originalUrl: originalUrl
      });
    }).on('error', function (e) {
      dfd.reject(e);
    });
  }).on('error', function (e) {
    console.error('urlFileToData http error!!!', e);
    dfd.reject(e);
  });;

  return dfd.promise();
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;var mymoduleName = 'mymodule';

var templateBaseUrl = 'http://s3-us-west-1.amazonaws.com/bernieapp/decorations/';

var rawImagePrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/selfies/';

var isNode = function () {
	var isNode = false;
	if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object') {
		if (_typeof(process.versions) === 'object') {
			if (typeof process.versions.node !== 'undefined') {
				isNode = true;
			}
		}
	}
	return isNode;
}();

;(function (exports) {

	var standardModes = [{
		mode: 'f',
		featured: false,
		old: true
	}, {
		mode: 'ut',
		featured: false
	}, {
		mode: 'b',
		featured: false,
		old: true
	}, {
		mode: 'h',
		featured: false,
		old: true
	}, {
		mode: 'selfie',
		featured: false,
		old: true
	}, {
		mode: 'h3',
		featured: true
	}, {
		mode: 'h4',
		featured: true
	}, {
		mode: 'wg',
		featured: true
	}];
	exports.standardModes = standardModes;
	exports.getStandardModesRegex = function (nameSpace) {
		var pipedString = '';
		for (var i = 0, l = exports.standardModes.length; i < l; i++) {
			var mode = exports.standardModes[i].mode;
			mode = nameSpace ? nameSpace + '\/' + mode : mode;
			console.log('mode', mode);
			pipedString += i > 0 ? '|' + mode : mode;
		}
		return new RegExp('^[/](' + pipedString + ')[/](.+)');
	};

	exports.oldModes = function () {
		var a = [];
		for (var i = 0, l = exports.standardModes.length; i < l; i++) {
			if (!!exports.standardModes[i].old) {
				a.push(exports.standardModes[i]);
			}
		}
		return a;
	}();

	exports.isOldMode = function (toCompare) {
		var is = false;
		for (var i = 0, l = exports.oldModes.length; i < l; i++) {
			is = is || toCompare === exports.oldModes[i].mode;
		}
		return is;
	};

	var containsStardardModeCache = {};
	exports.containsStardardMode = function (url) {
		var contains = false;
		if (typeof containsStardardModeCache[url] === 'undefined') {
			for (var i = 0, l = exports.standardModes.length; i < l; i++) {
				var mode = exports.standardModes[i].mode;
				contains = contains || url.indexOf(mode) !== -1;
			}
			containsStardardModeCache[url] = contains;
		}
		return containsStardardModeCache[url];
	};

	var DeriveUrlInfo = function DeriveUrlInfo(_ref) {
		var pathname = _ref.pathname,
		    offline = _ref.offline,
		    nameSpace = _ref.nameSpace;

		this.init({ pathname: pathname, offline: offline, nameSpace: nameSpace });
	};
	DeriveUrlInfo.prototype.init = function (_ref2) {
		var pathname = _ref2.pathname,
		    offline = _ref2.offline,
		    nameSpace = _ref2.nameSpace;

		this.nameSpace = nameSpace;
		this.nameSpaceWithLeadingSlash = nameSpace ? '/' + nameSpace : '';
		var nameSpaceWithLeadingSlash = this.nameSpaceWithLeadingSlash;
		this.offline = offline;
		var defaultPathname = '/h3/zephyr1476401787491/180_3_218_218_553_553/';
		pathname = !!pathname !== 0 ? pathname : defaultPathname;
		pathname = pathname === nameSpaceWithLeadingSlash || pathname === nameSpaceWithLeadingSlash + '/' ? defaultPathname : pathname;
		if (pathname && pathname.indexOf(this.nameSpaceWithLeadingSlash) === 0) {
			pathname = pathname.replace(this.nameSpaceWithLeadingSlash, '');
		}
		pathname = pathname ? pathname : defaultPathname;

		this.slashSplit = pathname.split('/');
		if (pathname.indexOf('/f/') === 0) {
			this.idX = this.slashSplit[4];
			this.customTemplate = this.slashSplit[2];
		} else if (pathname.indexOf('/selfie/') === 0) {
			pathname = '/selfie/v1438476536/bernie/' + this.slashSplit[4];
			this.slashSplit = pathname.split('/');
			this.idX = this.slashSplit[4];
			this.customTemplate = 'i4hiodnsy2yaqavpowm1';
		} else {
			//pathname.indexOf('/h/') === 0
			//pathname.indexOf('/h3/') === 0
			this.idX = this.slashSplit[2];
		}

		if (pathname.indexOf('/ut/') === 0) {
			this.customTemplate = this.slashSplit[4];
		}

		if (pathname.indexOf('/h/') === 0) {
			this.customTemplate = 'hairglasses';
		}

		this.pathname = this.nameSpaceWithLeadingSlash + pathname;
		console.log('this.slashSplit', this.slashSplit);
		this.coords = this.slashSplit[3].split('_');

		for (var i = 0, l = this.coords.length; i < l; i++) {
			this.coords[i] = +this.coords[i];
		}

		this.dims = this.coords.splice(4, 2);
		this.width = +this.dims[0];
		this.height = +this.dims[1];
		this.x = this.coords[0];
		this.y = +this.coords[1];
		this.cropWidth = this.coords[2];
		this.cropHeight = this.coords[3];

		this.format = '.jpg';

		this.customUrl = '';
		this.customUrlQueryString = '';
		this.makeCustomUrl({});
	};
	DeriveUrlInfo.prototype.normalize = function (val, def) {
		def = typeof def !== 'undefined' ? def : true;
		val = typeof val !== 'undefined' ? val : def;
		if (typeof def === 'number') {
			val = typeof val === 'string' ? +val : val;
			val = !isNaN(val) ? val : def;
			val = Math.round(val);
		}

		return val;
	};
	DeriveUrlInfo.prototype.doubleNormalize = function (val, prexisting, def) {
		var def = this.normalize(prexisting, def);
		return this.normalize(val, def);
	};
	DeriveUrlInfo.prototype.doubleNormalizeInterface = function (dest, options, defaults) {
		for (var name in defaults) {
			var def = defaults[name];
			dest[name] = this.doubleNormalize(options[name], dest[name], def);
		}
	};

	DeriveUrlInfo.prototype.makeCustomUrl = function (settings) {
		var mode = this.slashSplit[1].toLowerCase();

		var toNormalize = {
			'x': mode !== 'selfie' ? 0 : 142,
			'y': mode !== 'selfie' ? 0 : 98,
			'cropWidth': mode !== 'selfie' ? 1200 : 305,
			'cropHeight': mode !== 'selfie' ? 1200 : 305,
			'width': 1200,
			'height': 1200,
			'idX': 'zephyr1476401787491.png',
			'mode': mode
		};
		if (!!settings.customTemplate) {
			toNormalize.customTemplate = settings.customTemplate;
		}
		this.doubleNormalizeInterface(this, settings, toNormalize);
		this.idX = this.idX.split('.');
		if (this.idX.length > 1) {
			this.idX.pop();
		}
		this.idX = this.idX.join('.');
		this.rawImage = rawImagePrefix + this.idX;
		this.rawImage = !!this.offline ? '/images/mock-selfie-raw.jpg' : this.rawImage;
		if (this.rawImage.indexOf('.') === -1) {
			this.rawImage += '.png';
		}
		if (this.mode === 'f' || this.mode === 'selfie') {
			this.customTemplate = 'wg';
			this.doStandardSquare();
		} else {
			this.doStandardSquare();
		}
	};
	DeriveUrlInfo.prototype.serialize = function (obj, prefix) {
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
			obj = { whatever: obj };
		}
		var str = [];
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				var k = prefix ? prefix + "[" + p + "]" : p,
				    v = obj[p];
				str.push((typeof v === 'undefined' ? 'undefined' : _typeof(v)) == "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
			}
		}
		str = str.join("&");
		str = str.replace('whatever=', '');
		return str;
	};

	DeriveUrlInfo.prototype.doStandardSquare = function () {
		this.pathname = '/' + this.mode + '/' + this.idX + '/' + this.x + '_' + this.y + '_' + this.cropWidth + '_' + this.cropHeight + '_' + this.width + '_' + this.height + '/';
		if (!!this.customTemplate && this.mode !== 'h') {
			this.pathname += this.customTemplate + '/';
		}

		var userPhotoKey = this.idX;
		userPhotoKey = userPhotoKey.split('.');
		if (userPhotoKey.length > 1) {
			userPhotoKey.pop();
		}
		userPhotoKey = userPhotoKey.join('.');
		userPhotoKey = userPhotoKey;

		var customUrlSettings = {
			cropWidth: this.cropWidth,
			cropHeight: this.cropHeight,
			x: this.x,
			y: this.y,
			template: !!this.customTemplate ? this.customTemplate : this.mode,
			userPhotoKey: userPhotoKey
		};
		var s = customUrlSettings;

		this.customUrl = '' + '/image/' + s.template + '/' + s.userPhotoKey + '_' + s.cropWidth + '_' + s.cropHeight + '_' + s.x + '_' + s.y + '.jpg' + '';
		this.customUrl = !!this.offline ? '/images/mock-selfie.png' : this.customUrl;
		this.customUrlQueryString = this.serialize(this.customUrl);

		return this.customUrl;
	};

	exports.generateTemplateImgListHtml = function (userTemplates, offline) {
		var imgsHtml = '';
		if (offline) {
			;(function () {
				var offlineTemplates = [{ customTemplate: '/images/h3.png' }, { customTemplate: '/images/h4.png' }, { customTemplate: '/images/h3.png' }];
				for (var i = 0, l = offlineTemplates.length; i < l; i++) {
					imgsHtml += '<div class="designFrame">';
					imgsHtml += '<div class="designFrame_innerWrap">';
					imgsHtml += '<img class="designFrame_design userTemplate" src="' + offlineTemplates[i].customTemplate + '">';
					imgsHtml += '</div>';
					imgsHtml += '</div>';
				}
			})();
		} else {
			;(function () {
				for (var i = 0, l = standardModes.length; i < l; i++) {
					if (!!standardModes[i].featured) {
						imgsHtml += '<div class="designFrame">';
						imgsHtml += '<div class="designFrame_innerWrap">';
						imgsHtml += '<img class="designFrame_design standardTemplate" src="' + templateBaseUrl + standardModes[i].mode + '.png">';
						imgsHtml += '</div>';
						imgsHtml += '</div>';
					}
				}
			})();
			;(function () {
				for (var i = 0, l = userTemplates.length; i < l; i++) {
					imgsHtml += '<div class="designFrame">';
					imgsHtml += '<div class="designFrame_innerWrap">';
					imgsHtml += '<img class="designFrame_design userTemplate" src="' + templateBaseUrl + userTemplates[i].customTemplate + '.png">';
					imgsHtml += '</div>';
					imgsHtml += '</div>';
				}
			})();
		}
		return imgsHtml;
	};
	exports.deriveUrlInfo = function (_ref3) {
		var pathname = _ref3.pathname,
		    offline = _ref3.offline,
		    nameSpace = _ref3.nameSpace;

		return new DeriveUrlInfo({ pathname: pathname, offline: offline, nameSpace: nameSpace });
	};
})( false ? undefined[mymoduleName] = {} : exports);

/***/ })
]);;
//# sourceMappingURL=0.js.map