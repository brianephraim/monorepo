require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path"), require("webpack"), require("yargs"), require("express"), require("fs-extra"), require("child_process"), require("babel-polyfill"), require("fs"), require("globby"), require("webpack-node-externals"), require("directory-named-webpack-plugin"), require("single-line-log"), require("cookie-parser"), require("webpack-dev-middleware"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("write-file-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("validate-npm-package-name"), require("jquery-deferred"), require("aws-sdk"), require("url"), require("sharp"), require("ejs"), require("mongoose"), require("mongodb-uri"), require("mime-types"), require("https"), require("http"), require("deep-get-set"), require("busboy"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["path", "webpack", "yargs", "express", "fs-extra", "child_process", "babel-polyfill", "fs", "globby", "webpack-node-externals", "directory-named-webpack-plugin", "single-line-log", "cookie-parser", "webpack-dev-middleware", "webpack-hot-middleware", "webpack-hot-server-middleware", "rimraf", "extract-css-chunks-webpack-plugin", "autodll-webpack-plugin", "write-file-webpack-plugin", "stats-webpack-plugin", "webpack/lib/ProgressPlugin", "node-sass-json-importer", "validate-npm-package-name", "jquery-deferred", "aws-sdk", "url", "sharp", "ejs", "mongoose", "mongodb-uri", "mime-types", "https", "http", "deep-get-set", "busboy"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("path"), require("webpack"), require("yargs"), require("express"), require("fs-extra"), require("child_process"), require("babel-polyfill"), require("fs"), require("globby"), require("webpack-node-externals"), require("directory-named-webpack-plugin"), require("single-line-log"), require("cookie-parser"), require("webpack-dev-middleware"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("write-file-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("validate-npm-package-name"), require("jquery-deferred"), require("aws-sdk"), require("url"), require("sharp"), require("ejs"), require("mongoose"), require("mongodb-uri"), require("mime-types"), require("https"), require("http"), require("deep-get-set"), require("busboy"));
	else
		root["@defualt/dev_env"] = factory(root["path"], root["webpack"], root["yargs"], root["express"], root["fs-extra"], root["child_process"], root["babel-polyfill"], root["fs"], root["globby"], root["webpack-node-externals"], root["directory-named-webpack-plugin"], root["single-line-log"], root["cookie-parser"], root["webpack-dev-middleware"], root["webpack-hot-middleware"], root["webpack-hot-server-middleware"], root["rimraf"], root["extract-css-chunks-webpack-plugin"], root["autodll-webpack-plugin"], root["write-file-webpack-plugin"], root["stats-webpack-plugin"], root["webpack/lib/ProgressPlugin"], root["node-sass-json-importer"], root["validate-npm-package-name"], root["jquery-deferred"], root["aws-sdk"], root["url"], root["sharp"], root["ejs"], root["mongoose"], root["mongodb-uri"], root["mime-types"], root["https"], root["http"], root["deep-get-set"], root["busboy"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (processed) {
  console.log(processed.activeWebpackDevMiddleware);
  return new Promise(function (resolve, reject) {
    var toUse = processed.activeWebpackDevMiddleware ? processed.activeWebpackDevMiddleware : processed;
    toUse.run(function (err, stats) {
      console.log('RUN COMPILER');
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        // return reject(err);
      }

      var info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach(function (e) {
          console.error('\x1b[31m', e, '\x1b[0m');
        });
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach(function (w) {
          console.warn('\x1b[33m', w, '\x1b[0m');
        });
      }
      resolve(err, stats);
    });
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yargs = __webpack_require__(2);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(16);

var _globby2 = _interopRequireDefault(_globby);

var _webpackEnhanceConfigNode = __webpack_require__(17);

var _webpackEnhanceConfigNode2 = _interopRequireDefault(_webpackEnhanceConfigNode);

var _webpackEnhanceBaseConfig = __webpack_require__(19);

var _webpackEnhanceBaseConfig2 = _interopRequireDefault(_webpackEnhanceBaseConfig);

var _webpackEnhanceImmediateConfig = __webpack_require__(23);

var _webpackEnhanceImmediateConfig2 = _interopRequireDefault(_webpackEnhanceImmediateConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function removeKeysWithEmptyVals(obj) {
  return Object.keys(obj).reduce(function (accum, key) {
    if (obj[key].length) {
      accum[key] = obj[key];
    }
    return accum;
  }, {});
}

function makeOutputSettingsFromFilePath(filePath) {
  var output = filePath;
  output = output.split('/');

  output = {
    filename: output.pop(),
    path: output.join('/')
  };
  return output;
}

function makeOutputFiles(_ref) {
  var libraryNameReduced = _ref.libraryNameReduced,
      isBuild = _ref.isBuild;

  var outputFiles = {};
  if (isBuild) {
    outputFiles.library = 'dist/' + libraryNameReduced;
    outputFiles.libraryMin = 'dist/' + libraryNameReduced + '.min';
    outputFiles.demo = 'dist/demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = '' + libraryNameReduced;
  }
  return outputFiles;
}

function makeEntry(_ref2) {
  var libraryName = _ref2.libraryName,
      isBuild = _ref2.isBuild,
      dirRoot = _ref2.dirRoot;

  var libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];
  var outputFiles = makeOutputFiles({ libraryNameReduced: libraryNameReduced, isBuild: isBuild });
  return removeKeysWithEmptyVals(_yargs.argv['demo-entry'] ? _defineProperty({}, outputFiles.demo, [_yargs.argv['demo-entry']]) : _extends(_defineProperty({
    MainApp: _globby2.default.sync([dirRoot + '/packages/MainApp/demo.js'])
  }, outputFiles.library, _globby2.default.sync([dirRoot + '/' + libraryNameReduced + '.js', dirRoot + '/src/library/index.js'])), outputFiles.libraryMin ? _defineProperty({}, outputFiles.libraryMin, _globby2.default.sync([dirRoot + '/src/library/index.js'])) : {}, _defineProperty({}, outputFiles.demo, _globby2.default.sync([dirRoot + '/*.demo.js', dirRoot + '/demo.js', dirRoot + '/**/*/*.demo.js', dirRoot + '/**/*/demo.js', '!' + dirRoot + '/packages/**/*', dirRoot + '/packages/MainApp/demo.js', '!' + dirRoot + '/node_modules/**/*']))));
}

function generateConfigJson() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isCommandLine = options.isCommandLine || _yargs.argv.entry;
  var isMocha = options.isMocha;
  var config = (0, _webpackEnhanceBaseConfig2.default)();
  if (isCommandLine) {
    config = _extends({}, config, {
      entry: {
        main: _yargs.argv.entry
      },
      output: makeOutputSettingsFromFilePath(_yargs.argv.output)
    });
  } else if (!isMocha) {
    var isBuild = _yargs.argv.env === 'build';
    var dirRoot = _yargs.argv.dirroot || process.cwd();
    var packageJson = _fsExtra2.default.readJsonSync(dirRoot + '/package.json');

    var libraryName = packageJson.name;

    config = _extends({}, config, {
      entry: makeEntry({ libraryName: libraryName, isBuild: isBuild, dirRoot: dirRoot }),
      output: {
        path: '' + dirRoot,
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/'
        // publicPath: '/assets/',
      }
    });
  }

  config = (0, _webpackEnhanceConfigNode2.default)(config);

  if (isCommandLine || isMocha) {
    config = (0, _webpackEnhanceImmediateConfig2.default)(config);
  }
  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = generateConfigJson;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectoryNamedWebpackPlugin = __webpack_require__(20);
var parseRequestResolvePlugin = __webpack_require__(21);
var path = __webpack_require__(0);

var basename = path.basename;
var inNodeModulesRE = /\/node_modules\/|\\node_modules\\/;

function DirectoryDefaultFilePlugin() {
  return {
    apply: function apply(resolver) {
      // I don't know why 'module' or 'resolve' are those values.
      // Something to do with the the way they are used in this file:
      // https://github.com/webpack/enhanced-resolve/blob/master/lib/ResolverFactory.js
      // So they can be other values as seen in that file.
      resolver.plugin('directory', function (req, done) {
        // printProgress(`${request.request}`);
        // console.log('request.request',request.request)
        // const newRequestStr = parseRequest(req.request);
        // if (newRequestStr && newRequestStr !== req.request) {
        //   const obj = Object.assign({}, req, {
        //     request: newRequestStr,
        //   });
        //   this.doResolve('resolve', obj, 'blah blah', done);
        // } else {
        //   // process.stdout.write(`\n`);
        //   done();
        // }


        var directory = resolver.join(req.path, req.request);
        if (directory.match(inNodeModulesRE)) {
          return done();
        }

        resolver.fileSystem.stat(directory, function (err, stat) {
          if (err || !stat || !stat.isDirectory()) {
            return done();
          }

          var index = resolver.join(directory, 'index.js');

          resolver.fileSystem.stat(index, function (err, stat) {
            // console.log('index',index);

            if (!err && stat && stat.isFile()) {
              // ignore directories containing index.js files
              return done();
            }
            // console.log(req)
            // done();
            console.log('new request', resolver.join(directory, basename(directory)));
            var obj = Object.assign({}, req, {
              request: resolver.join(directory, basename(directory))
            });
            resolver.doResolve('resolve', obj, 'blah blah', done);

            // resolver.doResolve('file', {
            //   path: req.path,
            //   query: req.query,
            //   request: resolver.join(directory, basename(directory))
            // }, function (err, result) {
            //   return done(undefined, result || undefined);
            // });
          });
        });
      });
    }
  };
}

module.exports = {
  resolve: {
    modules: [
    // '/Users/brianephraim/Sites/monorepo/node_modules',
    path.resolve('./src/library'), path.resolve(process.cwd(), 'packages'), path.resolve(process.cwd(), '../../packages'), 'node_modules'],
    extensions: ['.js', '.css',

    // Why is this here? : https://github.com/npm/normalize-package-data/issues/88
    // Issue only appeard when webpack run on command line for Node bundle
    '.json'],
    plugins: [parseRequestResolvePlugin(function (requestStr) {
      // console.log('requestStr', requestStr);
      if (requestStr.indexOf('@') === 0 && requestStr.indexOf('/') !== -1) {
        var split = requestStr.split('/');
        split.shift();
        split.join('/');
        // console.log('Afindme',split.join('/'),requestStr.split('/')[1]);
        // console.log('Bfindme',requestStr.split('/')[1]);
        return split.join('/');
        return requestStr.split('/')[1];
      }
      return false;
    }), new DirectoryDefaultFilePlugin()]
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serve = undefined;

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _yargs = __webpack_require__(2);

var _shellCommand = __webpack_require__(13);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _jestSpawnProcess = __webpack_require__(14);

var _jestSpawnProcess2 = _interopRequireDefault(_jestSpawnProcess);

var _webpackRunCompiler = __webpack_require__(4);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackBuildCommandLine = __webpack_require__(15);

var _webpackBuildCommandLine2 = _interopRequireDefault(_webpackBuildCommandLine);

var _webpackExpressServer = __webpack_require__(24);

var _webpackExpressServer2 = _interopRequireDefault(_webpackExpressServer);

var _webpackConfig = __webpack_require__(7);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import isWithinMonoRepo from './core/isWithinMonoRepo');

/* eslint-disable no-console */
var env = _yargs.argv.env;
var item = _yargs.argv.item;

if (item) {
  (0, _shellCommand2.default)('(cd ./packages/' + item + ' && npm run start)');
} else if (env === 'test') {
  (0, _jestSpawnProcess2.default)(_yargs.argv.testdevenv, _yargs.argv.watch, _yargs.argv.testPathPattern);
} else if (_yargs.argv.entry) {
  (0, _webpackBuildCommandLine2.default)();
} else if (env === 'build') {
  (0, _webpackRunCompiler2.default)((0, _webpack2.default)((0, _webpackConfig2.default)()));
} else {
  (0, _webpackExpressServer2.default)();
}
var serve = function serve() {
  _webpackExpressServer2.default.apply(this, arguments);
};
exports.serve = serve;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
module.exports = function (commandToRun) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stdio: 'inherit' };
  var killParentOnExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var command = 'sh';
  var args = ['-c',
  // commandToRun.replace('node $TMPFILE','node --inspect=9223 $TMPFILE'),
  commandToRun];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
  // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  var childProcess = __webpack_require__(6);
  var proc = childProcess.spawn(command, args, options || {});
  proc.on('exit', function (code, signal) {
    if (killParentOnExit) {
      process.on('exit', function () {
        if (signal) {
          process.kill(process.pid, signal);
        } else {
          process.exit(code);
        }
      });
    }
  });
  return proc;
  // }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(6);

var _child_process2 = _interopRequireDefault(_child_process);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jestConfig from './jestConfig';
// const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;

/* eslint-disable camelcase */
var configPath = __dirname + '/jestConfig.js';
// const configBasePath = `${__dirname}/jestConfigBase.js`;
// qwer();

exports.default = function (testdevenv) {
  var watch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var testPathPattern = arguments[2];

  var command = 'sh';
  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  var commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/jest --watch=' + (watch && watch !== 'false' ? 'true' : 'false') + ' --config=' + configPath + (testPathPattern ? [" --testPathPattern='", testPathPattern, "'"].join('') : '');
  if (testdevenv) {
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest -t testdevenv --config=${configBasePath}`;
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest ${__dirname}/testdevenv.js  --config=${configBasePath}`;
    commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/mocha-webpack --colors --require babel-core/register --webpack-config ' + _path2.default.resolve(__dirname, '../core/webpackConfigMocha.js') + ' "' + _path2.default.resolve(__dirname, './testdevenv2.js') + '" --require source-map-support/register';
  }
  var args = ['-c', commandBody];
  var proc = _child_process2.default.spawn(command, args, { stdio: 'inherit' });
  proc.on('exit', function (code, signal) {
    process.on('exit', function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackRunCompiler = __webpack_require__(4);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackConfig = __webpack_require__(7);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  (0, _webpackRunCompiler2.default)((0, _webpack2.default)((0, _webpackConfig2.default)({ isCommandLine: true })));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-mixed-operators */


var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackNodeExternals = __webpack_require__(18);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function enhance(originalConfig) {
  var module = _extends({}, originalConfig && originalConfig.module);
  module.rules = [{ test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' }, { test: /async\.js/, use: 'imports-loader?define=>false' }].concat(_toConsumableArray(module.rules || []));

  var plugins = originalConfig.plugins || [];
  plugins.push(new _webpack2.default.BannerPlugin({
    banner: 'require("source-map-support").install();',
    raw: true,
    entryOnly: false
  }));

  var config = _extends({}, originalConfig, {
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-source-map',
    // devtool: 'cheap-eval-source-map',
    // devtool: 'source-map',
    // devtool: 'inline-source-map',
    devtool: 'sourcemap',
    // devtool: 'eval',
    module: module,
    target: 'node',
    node: _extends({}, originalConfig.node, {
      __dirname: false,
      __filename: false
    }),
    externals: [].concat(_toConsumableArray(originalConfig.externals || []), [(0, _webpackNodeExternals2.default)({
      // modulesFromFile: true,
      modulesDir: _path2.default.resolve(__dirname.split('/packages/dev_env')[0], './node_modules')
    })]),
    plugins: plugins

  });
  return config;
}
exports.default = enhance;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackConfigResolve = __webpack_require__(8);

var _webpackConfigResolve2 = _interopRequireDefault(_webpackConfigResolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enhance(originalConfig) {
  var config = {
    module: {
      rules: [{
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|\.tmp)/
        // include: `${dirRoot}`,
        // options: {
        //   presets: [

        //     [
        //       'es2015',
        //       // needed for tree shaking
        //       { modules: false },
        //     ],
        //     'react',
        //     // 'react',
        //   ],
        //   plugins: [
        //     'transform-es2015-spread',
        //     'transform-object-rest-spread',
        //   ],
        //   // mocha needs .babelrc,
        //   // and .babelrc cannot use the above config
        //   // so ignore .babelrc here
        //   babelrc: false,
        // },
      }]
    },
    resolve: _webpackConfigResolve2.default.resolve
  };
  return _extends({}, originalConfig, config);
}
exports.default = enhance;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable func-names */
var singleLineLog = __webpack_require__(22).stdout;

function printProgress(progress) {
  if (!process || !process.stdout || !process.stdout.clearLine) {
    return;
  }
  singleLineLog('Resolving: ' + progress + '\n');
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
  // process.stdout.write(progress + `-xxxxxx`);
}
function parseRequestResolvePlugin() {
  var parseRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  return {
    apply: function apply(resolver) {
      // I don't know why 'module' or 'resolve' are those values.
      // Something to do with the the way they are used in this file:
      // https://github.com/webpack/enhanced-resolve/blob/master/lib/ResolverFactory.js
      // So they can be other values as seen in that file.
      resolver.plugin( /* 'modules'*/'resolve', function (request, callback) {
        printProgress('' + request.request);
        // console.log('request.request',request.request)
        var newRequestStr = parseRequest(request.request);
        if (newRequestStr && newRequestStr !== request.request) {
          var obj = Object.assign({}, request, {
            request: newRequestStr
          });
          this.doResolve('resolve', obj, 'blah blah', callback);
        } else {
          // process.stdout.write(`\n`);
          callback();
        }
      });
    }
  };
}

module.exports = parseRequestResolvePlugin;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function enhance(originalConfig) {
  var config = _extends({}, originalConfig);
  config.plugins = config.plugins || [];

  // I needed __dirname hardcoded as the original dirname
  // https://github.com/webpack/webpack/issues/1599#issuecomment-266588898
  config.plugins.push({
    apply: function apply(compiler) {
      function setModuleConstant(expressionName, fn) {
        compiler.plugin('compilation', function (compilation, data) {
          data.normalModuleFactory.plugin('parser', function (parser) {
            parser.plugin('expression ' + expressionName, function compilerParserPlugin() {
              this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
              return true;
            });
          });
        });
      }

      setModuleConstant('__filename', function (module) {
        return module.resource;
      });

      setModuleConstant('__dirname', function (module) {
        return module.context;
      });
    }
  });
  return config;
}

exports.default = enhance;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var serverNamespaces = _yargs.argv.servers && _yargs.argv.servers.split(',');
  var app = (0, _express2.default)();
  if (serverNamespaces) {
    asyncRecurseStartApps(app, serverNamespaces).then(startWebpack);
  } else {
    startWebpack(app);
  }
};

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _yargs = __webpack_require__(2);

var _demoEndpoints = __webpack_require__(25);

var _demoEndpoints2 = _interopRequireDefault(_demoEndpoints);

var _startUniversalExpress = __webpack_require__(28);

var _startUniversalExpress2 = _interopRequireDefault(_startUniversalExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

function startWebpack(app) {
  console.log('SERVE');
  // This module either extends an existing express app
  // or creates a new express app


  (0, _demoEndpoints2.default)({ app: app });
  (0, _startUniversalExpress2.default)({ app: app });

  app.use('/images', _express2.default.static('packages/images'));
  app.use('/fonts', _express2.default.static('packages/fonts'));

  var port = 3000;
  app.listen(port, function (error) {
    if (error) {
      console.error(error);
    } else {
      console.info('🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
  });

  return app;
}

function asyncRecurseStartApps(app, serverNamespaces) {
  return new Promise(function (resolve, reject) {
    var i = 0;
    function recurse(backendAppNamespace) {
      __webpack_require__(42)("./" + backendAppNamespace + '/' + backendAppNamespace + '.express').then(function (someBackendApp) {
        var serveBackendApp = someBackendApp.default;
        var backendAppSettings = {
          nameSpace: backendAppNamespace
        };
        backendAppSettings.app = app;
        serveBackendApp(backendAppSettings);
        var nextNamespace = serverNamespaces[++i];
        if (nextNamespace) {
          recurse(nextNamespace);
        } else {
          resolve(app);
        }
      });
    }
    recurse(serverNamespaces[i]);
  });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = demoExpress;

__webpack_require__(9);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(26);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _api = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import startUniversalExpress from '../../startUniversalExpress';

function demoExpress(_ref) {
  var _this = this;

  var _ref$app = _ref.app,
      app = _ref$app === undefined ? (0, _express2.default)() : _ref$app;

  // JWTOKEN COOKIE - in a real app obviously you set this after signup/login:

  app.use((0, _cookieParser2.default)());

  app.use(function (req, res, next) {
    var cookie = req.cookies.jwToken;
    var jwToken = 'fake'; // TRY: set to 'real' to authenticate ADMIN route

    if (cookie !== jwToken) {
      res.cookie('jwToken', jwToken, { maxAge: 900000 });
      req.cookies.jwToken = jwToken;
    }

    next();
  });

  // API

  app.get('/api/videos/:category', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
      var jwToken, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              jwToken = req.headers.authorization.split(' ')[1];
              _context.next = 3;
              return (0, _api.findVideos)(req.params.category, jwToken);

            case 3:
              data = _context.sent;

              res.json(data);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  app.get('/api/video/:slug', function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
      var jwToken, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              jwToken = req.headers.authorization.split(' ')[1];
              _context2.next = 3;
              return (0, _api.findVideo)(req.params.slug, jwToken);

            case 3:
              data = _context2.sent;

              res.json(data);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var findVideos = exports.findVideos = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(category, jwToken) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fakeDelay(1000);

          case 2:
            if (jwToken) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', []);

          case 4:
            _context.t0 = category;
            _context.next = _context.t0 === 'fp' ? 7 : _context.t0 === 'react-redux' ? 8 : _context.t0 === 'db-graphql' ? 9 : 10;
            break;

          case 7:
            return _context.abrupt('return', fpVideos);

          case 8:
            return _context.abrupt('return', reactReduxVideos);

          case 9:
            return _context.abrupt('return', dbGraphqlVideos);

          case 10:
            return _context.abrupt('return', []);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function findVideos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findVideo = exports.findVideo = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(slug, jwToken) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fakeDelay(500);

          case 2:
            if (jwToken) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', null);

          case 4:
            return _context2.abrupt('return', allVideos.find(function (video) {
              return video.slug === slug;
            }));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function findVideo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var fakeDelay = function fakeDelay() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var fpVideos = [{
  youtubeId: '6mTbuzafcII',
  slug: 'transducers',
  title: 'Transducers',
  by: 'Rich Hickey',
  category: 'Functional Programming',
  color: 'blue',
  tip: 'Redux-First Router does not require you to embed actual links into the page \n            to get the benefit of a synced address bar. Regular actions if matched\n            will change the URL. That makes it easy to apply to an existing SPA Redux\n            lacking in routing/URLs!'
}, {
  youtubeId: 'zBHB9i8e3Kc',
  slug: 'introduction-to-elm',
  title: 'Introduction to Elm',
  by: 'Richard Feldman',
  category: 'Functional Programming',
  color: 'blue',
  tip: 'Redux reducers programmatically allow you to produce any state you need.\n          So logically Route Matching components such as in React Reacter only\n          allow you to do LESS, but with a MORE complicated API.'
}, {
  youtubeId: 'mty0RwkPmE8',
  slug: 'next-five-years-of-clojurescript',
  title: 'The Next Five Years of ClojureScript ',
  by: 'David Nolen',
  category: 'Functional Programming',
  color: 'blue',
  tip: 'In your actions.meta.location key passed to your reducers you have all sorts\n          of information: the previous route, its type and payload, history, whether\n          the browser back/next buttons were used and if the action was dispatched on load.\n          Check the "kind" key.'
}];

var reactReduxVideos = [{
  youtubeId: 'qa72q70gAb4',
  slug: 'unraveling-navigation-in-react-native',
  title: 'Unraveling Navigation in React Native',
  by: 'Adam Miskiewicz',
  category: 'React & Redux',
  color: 'red',
  tip: 'Redux-First Router tries in all cases to mirror the Redux API. There is no need\n          to pass your thunk :params such as in an express request or the like. Just grab it\n          from the payload stored in the location state.'
}, {
  youtubeId: 'zD_judE-bXk',
  slug: 'recomposing-your-react-application',
  title: 'Recomposing your React application at react-europe ',
  by: 'Andrew Clark',
  category: 'React & Redux',
  color: 'red',
  tip: 'Redux-First Router requires your payload to be objects, as its keys are directionally extracted\n          and from your URLs and passed from payloads to URL path segments. Your free\n          to use whatever payload you like for redux actions not connected to your routes. Not all\n          actions need to be connected to routes.'
}, {
  youtubeId: 'uvAXVMwHJXU',
  slug: 'the-redux-journey',
  title: 'The Redux Journey',
  by: 'Dan Abramov',
  category: 'React & Redux',
  color: 'red',
  tip: 'The <Link /> component embeds paths in hrefs for SEO, but you don\'t need to use it\n          to get the benefits of a changing address bar. Actions that match routes will\n          trigger the corresponding URL even if you dispatch them directly.'
}];

var dbGraphqlVideos = [{
  youtubeId: 'fU9hR3kiOK0',
  slug: 'turning-the-db-inside-out',
  title: 'Turning the database inside out',
  by: 'Martin Kleppmann',
  category: 'Database & GraphQL',
  color: 'orange',
  tip: 'The \'thunk\' feature is optional, but very useful. Using our \'thunk\' feature allows you\n          to define it in one place while linking to the route from many places without\n          worrying about getting the data first. It\'s also very easy to handle server-side.'
}, {
  youtubeId: '_5VShOmnfQ0',
  slug: 'normalized-caching-in-apollo-ios',
  title: 'Normalized Caching in Apollo iOS',
  by: 'Martijn Walraven',
  category: 'Database & GraphQL',
  color: 'orange',
  tip: 'Structure your reducers so that less actions are used to trigger the same state. \n          Your actions will become more \'page-like\'. As a result your reducers\n          will need to do more "tear down" work when leaving corresponding pages. It\'s also\n          recommended to set action types as the capitalized noun name of the page.'
}, {
  youtubeId: 'm-hre1tt9C4',
  slug: 'first-thoughts-on-apollo-and-graphql',
  title: 'First Thoughts On Apollo and GraphQL',
  by: 'Sacha Greif',
  category: 'Database & GraphQL',
  color: 'orange',
  tip: 'Using a hash of slugs within one of your reducers is the recommended approach to \n          maintain a normalized set of entities to get the benefits of SEO. This is as opposed\n          to using IDs. Refrain from using normalizr or Apollo until your app justifies it.'
}];

var allVideos = reactReduxVideos.concat(dbGraphqlVideos, fpVideos);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startUniversal;

__webpack_require__(9);

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(29);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _webpackHotMiddleware = __webpack_require__(30);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackHotServerMiddleware = __webpack_require__(31);

var _webpackHotServerMiddleware2 = _interopRequireDefault(_webpackHotServerMiddleware);

var _yargs = __webpack_require__(2);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

var _rimraf = __webpack_require__(32);

var _rimraf2 = _interopRequireDefault(_rimraf);

var _universalWebpackConfig = __webpack_require__(33);

var _universalWebpackConfig2 = _interopRequireDefault(_universalWebpackConfig);

var _webpackRunCompiler = __webpack_require__(4);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackParseStatsForDepProblems = __webpack_require__(40);

var _webpackParseStatsForDepProblems2 = _interopRequireDefault(_webpackParseStatsForDepProblems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = function res(p) {
  return _path2.default.resolve(__dirname, p);
};

function startUniversal(_ref) {
  var _ref$app = _ref.app,
      app = _ref$app === undefined ? (0, _express2.default)() : _ref$app;

  var clientDevConfig = (0, _universalWebpackConfig2.default)({ isClient: true, isDev: true, isUniversal: true });
  var serverDevConfig = (0, _universalWebpackConfig2.default)({ isClient: false, isDev: true, isUniversal: true });
  var serverNonUniversalConfig = (0, _universalWebpackConfig2.default)({ isClient: false, isDev: true, isUniversal: false });
  var publicPath = clientDevConfig.output.publicPath;
  var outputPath = clientDevConfig.output.path;

  // UNIVERSAL HMR + STATS HANDLING GOODNESS:

  if (_yargs.argv.isDev === 'true') {
    var invalidHandler = function invalidHandler(fileName, changeTime) {
      console.log('==== INVALIDATED ====');
      console.log('stats', _fsExtra2.default.statSync(fileName));
      console.log('FileName: ' + fileName);
      console.log('ChangeTimex: ' + changeTime);
    };

    var options = {
      publicPath: publicPath,
      stats: {
        colors: true
      }
    };
    var isUniversal = _yargs.argv.isUniversal === 'true';
    var multiCompiler = (0, _webpack2.default)([clientDevConfig, isUniversal ? serverDevConfig : serverNonUniversalConfig]);
    var clientCompiler = multiCompiler.compilers[0];
    console.info('🔷 Starting webpack ...');

    clientCompiler.plugin('invalid', invalidHandler);
    var activeWebpackDevMiddleware = (0, _webpackDevMiddleware2.default)(multiCompiler, options);
    console.log(activeWebpackDevMiddleware);
    activeWebpackDevMiddleware.waitUntilValid(function (stats) {
      // function censor(censor) {
      //   var i = 0;

      //   return function(key, value) {
      //     if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      //       return '[Circular]'; 

      //     if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      //       return '[Unknown]';

      //     ++i; // so we know we aren't using the original object anymore

      //     return value;  
      //   }
      // }
      // fs.writeFileSync('./activeWebpackDevMiddlewareStats.json', JSON.stringify(stats, censor(stats), 2));
      (0, _webpackParseStatsForDepProblems2.default)(stats);
    });

    app.use(activeWebpackDevMiddleware);
    app.use((0, _webpackHotMiddleware2.default)(clientCompiler));
    app.use(
    // keeps serverRender updated with arg: { clientStats, outputPath }
    (0, _webpackHotServerMiddleware2.default)(multiCompiler, {
      serverRendererOptions: { outputPath: outputPath }
    }));
  } else {
    console.log('I GUESS ITS PROD', process.env.NODE_ENV);
    var clientProdConfig = (0, _universalWebpackConfig2.default)({ isClient: true, isDev: false, isUniversal: true });
    var serverProdConfig = (0, _universalWebpackConfig2.default)({ isClient: false, isDev: false, isUniversal: true });
    (0, _rimraf2.default)('{' + clientProdConfig.output.path + ',' + serverProdConfig.output.path + '}', function () {
      // webpackRunCompiler(webpack(clientProdConfig)).then(() => {
      // deleteFiles(serverProdConfig.output.path, () => {
      var multiCompiler = (0, _webpack2.default)([clientProdConfig, serverProdConfig]);
      var clientCompiler = multiCompiler.compilers[0];
      var serverCompiler = multiCompiler.compilers[1];
      (0, _webpackRunCompiler2.default)(multiCompiler).then(function () {
        var clientConfig = (0, _universalWebpackConfig2.default)({ isClient: true, isDev: true, isUniversal: true });
        var publicPath = clientConfig.output.publicPath;
        var outputPath = clientConfig.output.path;
        var serverRender = require(res('./universal/buildServer/main.js')).default;
        var clientStats = require(res('./universal/buildClient/stats.json'));
        app.use(publicPath, _express2.default.static(outputPath));
        app.use(serverRender({ clientStats: clientStats, outputPath: outputPath }));
      });
      // });
      // });
    });
  }

  return app;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-server-middleware");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// ----- client dev
var path = __webpack_require__(0);
var webpack = __webpack_require__(1);
var ExtractCssChunks = __webpack_require__(34);
var AutoDllPlugin = __webpack_require__(35);
var WriteFilePlugin = __webpack_require__(36);
var resolve2 = __webpack_require__(8);
var StatsPlugin = __webpack_require__(37);
var ProgressPlugin = __webpack_require__(38);
var jsonImporter = __webpack_require__(39);

var makeProgressPlugin = function makeProgressPlugin() {
  return new ProgressPlugin(function (percentage, msg, current, active, modulepath) {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0);
      modulepath = modulepath ? ' …' + modulepath.substr(modulepath.length - 30) : '';
      current = current ? ' ' + current : '';
      active = active ? ' ' + active : '';
      process.stdout.write((percentage * 100).toFixed(0) + '% ' + msg + current + active + modulepath + ' ');
      process.stdout.clearLine(1);
    } else if (percentage === 1) {
      process.stdout.write('\n');
      console.log('webpack: done.');
    }
  });
};

// ----- server dev
var fs = __webpack_require__(10);
// const path = require('path')
// const webpack = require('webpack')
// const resolve2 = require('../../core/webpack-config-resolve')

// ----- server dev
var res = function res(p) {
  return path.resolve(__dirname, p);
};

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
var externals = fs.readdirSync(res('../../../../node_modules')).filter(function (x) {
  return !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x);
}).reduce(function (externals, mod) {
  externals[mod] = 'commonjs ' + mod;
  return externals;
}, {});

/* eslint-disable no-nested-ternary */
module.exports = function (_ref) {
  var _ref$isClient = _ref.isClient,
      isClient = _ref$isClient === undefined ? false : _ref$isClient,
      _ref$isDev = _ref.isDev,
      isDev = _ref$isDev === undefined ? false : _ref$isDev,
      _ref$isUniversal = _ref.isUniversal,
      isUniversal = _ref$isUniversal === undefined ? false : _ref$isUniversal;

  return _extends({
    name: isClient ? 'client' : 'server',
    target: isClient ? 'web' : 'node',
    devtool: 'source-map',
    // devtool: 'eval',
    entry: [].concat(_toConsumableArray(!isClient && !isDev ? [] : ['babel-polyfill']), [// not sure why non babel-polyfill when server-prod
    'fetch-everywhere'], _toConsumableArray(isClient && isDev ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false', 'react-hot-loader/patch'] : []), [path.resolve(__dirname, isClient ? '../src/clientRender.js' : isUniversal ? '../server/render.js' : '../server/nonUniversalRender.js')])
  }, !isClient ? { externals: externals } : {}, {
    output: _extends({
      path: res(isClient ? '../buildClient' : '../buildServer'),
      filename: isClient && !isDev ? '[name].[chunkhash].js' : '[name].js',
      publicPath: '/static/'
    }, isClient ? { chunkFilename: isDev ? '[name].js' : '[name].[chunkhash].js' } : { libraryTarget: 'commonjs2' }),
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }].concat(_toConsumableArray(isClient ? [{
        test: /\.css$/,
        use: ExtractCssChunks.extract({
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        })
      }, {
        test: /\.scss$/,
        use: ExtractCssChunks.extract({
          use: ['css-loader?sourceMap', {
            loader: 'sass-loader?sourceMap',
            options: {
              importer: jsonImporter,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }]
        })
      }] : [{
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-loader?sourceMap', {
          loader: 'sass-loader?sourceMap',
          options: {
            importer: jsonImporter,
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }]
      }]))
    },
    resolve: resolve2.resolve,
    plugins: isClient ? [isDev ? new WriteFilePlugin() // used so you can see what chunks are produced in dev
    : new StatsPlugin('stats.json'), new ExtractCssChunks(), new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
      minChunks: Infinity
    })].concat(_toConsumableArray(isDev ? [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()] : []), [new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
      }
    })], _toConsumableArray(!isDev ? [new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: true
    }), new webpack.HashedModuleIdsPlugin()] : []), [new AutoDllPlugin({
      context: path.join(__dirname, '..'),
      filename: '[name].js',
      entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'history/createBrowserHistory', 'transition-group', 'redux-first-router', 'redux-first-router-link', 'fetch-everywhere', 'babel-polyfill', 'redux-devtools-extension/logOnlyInProduction']
      }
    }), makeProgressPlugin()]) :
    // IS SERVER
    [new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }), new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
      }
    }), makeProgressPlugin()]
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("extract-css-chunks-webpack-plugin");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("autodll-webpack-plugin");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("write-file-webpack-plugin");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("stats-webpack-plugin");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("webpack/lib/ProgressPlugin");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _validateNpmPackageName = __webpack_require__(41);

var _validateNpmPackageName2 = _interopRequireDefault(_validateNpmPackageName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-console */


function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}

function ensureReadJsonSync(packageDotJsonPath) {
  var packageDotJsonContent = void 0;
  try {
    packageDotJsonContent = _fsExtra2.default.readJsonSync(packageDotJsonPath);
  } catch (e) {
    packageDotJsonContent = {};
  }
  return packageDotJsonContent;
}

function showProblemsInConsole(problems) {
  if (Object.keys(problems).length) {
    console.info('\x1b[1m', '\nProblems with dependencies', '\x1b[0m');
  }
  Object.keys(problems).forEach(function (moduleResource) {
    console.info('\x1b[36m', '\nProblem in module with `import` statement:', '\x1b[0m');
    console.info('\x1b[37m', ' ' + moduleResource, '\x1b[0m');
    Object.keys(problems[moduleResource]).forEach(function (depName) {
      var problemMsg = problems[moduleResource][depName].msg;
      console.info('\x1b[33m', 'Dependency requested as:', '\x1b[0m');
      console.info('\x1b[37m', ' ' + depName, '\x1b[0m');
      console.info('\x1b[33m', 'Message: ' + problemMsg, '\x1b[0m');
      var problemInfo = problems[moduleResource][depName].info;
      if (problemInfo) {
        console.info('\x1b[37m', '- ' + problemInfo.join('\n - '), '\x1b[0m');
      }
    });
  });
}

function findDependenciesProblems(dependencies, packageDotJsonContent) {
  var problems = {};

  dependencies.forEach(function (dep) {
    if (dep.module) {
      var rawRequest = dep.module.rawRequest;
      // if (rawRequest.indexOf('/Users/brianephraim/Sites/monorepo/packages') === 0) {
      //   console.info('\x1b[33m', 'depWTF', rawRequest, '\x1b[0m');
      //   console.log('depWTF', dep);
      // } else {
      //   console.info('\x1b[33m', 'depGGG', rawRequest, '\x1b[0m');
      //   console.log('depGGG', dep);
      // }

      // not a relative dependency
      // not an absolut dependency
      // we are only concerned with depenencies referenced like
      // `import asdf from 'asdf';`
      // or
      // `import qwer from 'asdf/qwer';``
      // or
      // `import asdf from '@defualt/asdf';``
      // These dependencies will be either in /node_modules/ or /packages/,
      // the latter for only monorepo use.
      if (rawRequest && rawRequest.indexOf('.') !== 0 && rawRequest.indexOf('/') !== 0) {
        var validationResult = (0, _validateNpmPackageName2.default)(rawRequest);
        if (validationResult.validForNewPackages) {
          if (!packageDotJsonContent || (!packageDotJsonContent.dependencies || !packageDotJsonContent.dependencies[rawRequest]) && (!packageDotJsonContent.devDependencies || !packageDotJsonContent.devDependencies[rawRequest])) {
            problems[rawRequest] = { msg: 'MISSING FROM PACKAGE.JSON' };
          }
        } else {
          var info = [].concat(_toConsumableArray(validationResult.warnings || []), _toConsumableArray(validationResult.errors || [])).filter(function (msg) {
            return msg !== 'name can only contain URL-friendly characters';
          });
          // console.log(validationResult);
          if (info.length) {
            problems[rawRequest] = {
              msg: 'BAD FORMATTING',
              info: [].concat(_toConsumableArray(validationResult.warnings || []), _toConsumableArray(validationResult.errors || []))
            };
          }
        }
      }
    }
  });

  return Object.keys(problems).length ? problems : null;
}

function webpackParseStatsForDepProblems(stats) {
  var shouldShowProblemsInConsole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var isMonorepo = _fsExtra2.default.existsSync(process.cwd() + '/packages');

  var packageDotJsonCache = {};
  var problems = {};
  var compilation = stats.compilation ? stats.compilation : stats.stats[0].compilation;
  compilation.modules.forEach(function (module) {
    // only concerned with module entries from /packages/ folder (not node_modules)
    if (module.resource && module.resource.indexOf('node_modules') === -1) {
      var packageDotJsonPath = void 0;
      if (isMonorepo) {
        var packagesDir = process.cwd() + '/packages';
        packagesDir = ensureTrailingSlash(packagesDir);
        // get substring from first trailing slash after whatever packagesDir is
        console.log(module.resource);
        var packageFolderName = module.resource.split(packagesDir)[1].split('/')[0];
        packageDotJsonPath = '' + packagesDir + packageFolderName + '/package.json';
      } else {
        packageDotJsonPath = process.cwd() + '/package.json';
      }

      var packageDotJsonContent = packageDotJsonCache[packageDotJsonPath] || ensureReadJsonSync(packageDotJsonPath);
      packageDotJsonCache[packageDotJsonPath] = packageDotJsonContent;

      var packageSomehowPublic = !packageDotJsonContent.private || !packageDotJsonContent.privateFromGithub;

      // only concerned if module's package.json is not empty,
      // and if it is public on either NPM or Girhub
      if (Object.keys(packageDotJsonContent).length && packageSomehowPublic) {
        var depProblems = findDependenciesProblems(module.dependencies, packageDotJsonContent);
        if (depProblems) {
          problems[module.resource] = depProblems;
        }
      }
    }
  });
  if (Object.keys(problems).length > 0 && shouldShowProblemsInConsole) {
    showProblemsInConsole(problems);
  }

  return problems;
}

exports.default = webpackParseStatsForDepProblems;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bernieserver/bernieserver.express": [
		47,
		0
	],
	"./junk-express/junk-express.express": [
		56,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 42;
module.exports = webpackAsyncContext;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("jquery-deferred");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("mongodb-uri");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("deep-get-set");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("busboy");

/***/ })
/******/ ]);
});
//# sourceMappingURL=dev_env.js.map