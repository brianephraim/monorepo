require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery-deferred"), require("aws-sdk"), require("path"), require("url"), require("webpack"), require("yargs"), require("express"), require("fs-extra"), require("sharp"), require("child_process"), require("babel-polyfill"), require("globby"), require("webpack-node-externals"), require("find-node-modules"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("write-file-webpack-plugin"), require("directory-named-webpack-plugin"), require("single-line-log"), require("cookie-parser"), require("webpack-dev-middleware"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("validate-npm-package-name"), require("ejs"), require("fs"), require("mongoose"), require("mongodb-uri"), require("mime-types"), require("https"), require("http"), require("deep-get-set"), require("busboy"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["jquery-deferred", "aws-sdk", "path", "url", "webpack", "yargs", "express", "fs-extra", "sharp", "child_process", "babel-polyfill", "globby", "webpack-node-externals", "find-node-modules", "extract-css-chunks-webpack-plugin", "autodll-webpack-plugin", "stats-webpack-plugin", "webpack/lib/ProgressPlugin", "node-sass-json-importer", "write-file-webpack-plugin", "directory-named-webpack-plugin", "single-line-log", "cookie-parser", "webpack-dev-middleware", "webpack-hot-middleware", "webpack-hot-server-middleware", "rimraf", "validate-npm-package-name", "ejs", "fs", "mongoose", "mongodb-uri", "mime-types", "https", "http", "deep-get-set", "busboy"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("jquery-deferred"), require("aws-sdk"), require("path"), require("url"), require("webpack"), require("yargs"), require("express"), require("fs-extra"), require("sharp"), require("child_process"), require("babel-polyfill"), require("globby"), require("webpack-node-externals"), require("find-node-modules"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("write-file-webpack-plugin"), require("directory-named-webpack-plugin"), require("single-line-log"), require("cookie-parser"), require("webpack-dev-middleware"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("validate-npm-package-name"), require("ejs"), require("fs"), require("mongoose"), require("mongodb-uri"), require("mime-types"), require("https"), require("http"), require("deep-get-set"), require("busboy"));
	else
		root["@defualt/dev_env"] = factory(root["jquery-deferred"], root["aws-sdk"], root["path"], root["url"], root["webpack"], root["yargs"], root["express"], root["fs-extra"], root["sharp"], root["child_process"], root["babel-polyfill"], root["globby"], root["webpack-node-externals"], root["find-node-modules"], root["extract-css-chunks-webpack-plugin"], root["autodll-webpack-plugin"], root["stats-webpack-plugin"], root["webpack/lib/ProgressPlugin"], root["node-sass-json-importer"], root["write-file-webpack-plugin"], root["directory-named-webpack-plugin"], root["single-line-log"], root["cookie-parser"], root["webpack-dev-middleware"], root["webpack-hot-middleware"], root["webpack-hot-server-middleware"], root["rimraf"], root["validate-npm-package-name"], root["ejs"], root["fs"], root["mongoose"], root["mongodb-uri"], root["mime-types"], root["https"], root["http"], root["deep-get-set"], root["busboy"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_70__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("jquery-deferred");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prepareModuleWithDefaults = __webpack_require__(5);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (processed) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpack = __webpack_require__(7);

var _webpack2 = _interopRequireDefault(_webpack);

var _yargs = __webpack_require__(8);

var _fsExtra = __webpack_require__(12);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(25);

var _globby2 = _interopRequireDefault(_globby);

var _webpackNodeExternals = __webpack_require__(26);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _findNodeModules = __webpack_require__(27);

var _findNodeModules2 = _interopRequireDefault(_findNodeModules);

var _extractCssChunksWebpackPlugin = __webpack_require__(28);

var _extractCssChunksWebpackPlugin2 = _interopRequireDefault(_extractCssChunksWebpackPlugin);

var _autodllWebpackPlugin = __webpack_require__(29);

var _autodllWebpackPlugin2 = _interopRequireDefault(_autodllWebpackPlugin);

var _statsWebpackPlugin = __webpack_require__(30);

var _statsWebpackPlugin2 = _interopRequireDefault(_statsWebpackPlugin);

var _ProgressPlugin = __webpack_require__(31);

var _ProgressPlugin2 = _interopRequireDefault(_ProgressPlugin);

var _nodeSassJsonImporter = __webpack_require__(32);

var _nodeSassJsonImporter2 = _interopRequireDefault(_nodeSassJsonImporter);

var _writeFileWebpackPlugin = __webpack_require__(33);

var _writeFileWebpackPlugin2 = _interopRequireDefault(_writeFileWebpackPlugin);

var _webpackConfigResolve = __webpack_require__(34);

var _webpackConfigResolve2 = _interopRequireDefault(_webpackConfigResolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// from universal
// import path from 'path';
// import webpack from 'webpack';


// from universal
var makeProgressPlugin = function makeProgressPlugin() {
  return new _ProgressPlugin2.default(function (percentage, msg, current, active, modulepath) {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0);
      modulepath = modulepath ? ' \u2026' + modulepath.substr(modulepath.length - 30) : '';
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
var res = function res(p) {
  return _path2.default.resolve(__dirname, p);
};

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
// /Users/brianephraim/Sites/monorepo/packages/dev_env/universal/webpack/universalWebpackConfig.js
// /Users/brianephraim/Sites/monorepo/packages/dev_env/         /       /webpackConfig.js
var nodeModulesLocationsArray = (0, _findNodeModules2.default)({ relative: false });
var nodeModulesLocation = nodeModulesLocationsArray[0];
if (nodeModulesLocation.indexOf('packages/dev_env') !== -1) {
  nodeModulesLocation = nodeModulesLocation.split('packages/dev_env')[0];
  nodeModulesLocation = nodeModulesLocation + 'node_modules';
}

var externalsOld = _fsExtra2.default.readdirSync(res(nodeModulesLocation)).filter(function (x) {
  return !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x);
}).reduce(function (externals, mod) {
  externals[mod] = 'commonjs ' + mod;
  return externals;
}, {});

/* eslint-disable no-nested-ternary */
function generateConfigJson() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isCommandLine = options.isCommandLine || _yargs.argv.entry;
  var isMocha = options.isMocha;
  var _options$isReact = options.isReact,
      isReact = _options$isReact === undefined ? false : _options$isReact,
      _options$isClient = options.isClient,
      isClient = _options$isClient === undefined ? false : _options$isClient,
      _options$isDev = options.isDev,
      isDev = _options$isDev === undefined ? false : _options$isDev,
      _options$isUniversal = options.isUniversal,
      isUniversal = _options$isUniversal === undefined ? false : _options$isUniversal;


  var isBuild = _yargs.argv.env === 'build';
  var dirRoot = _yargs.argv.dirroot || process.cwd();
  var packageJson = _fsExtra2.default.readJsonSync(dirRoot + '/package.json');
  var libraryName = packageJson.name;
  if (isClient && isDev) {
    console.log(options);
    console.trace();
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
    console.log('RRRR');
  }
  var config = _extends({}, isReact ? {
    name: isClient ? 'client' : 'server'
  } : {}, {
    target: isReact && isClient ? 'web' : 'node',
    devtool: 'sourcemap'
  }, !isMocha ? isReact ? {
    entry: [].concat(_toConsumableArray(!isClient && !isDev ? [] : ['babel-polyfill']), [// not sure why non babel-polyfill when server-prod
    'fetch-everywhere'], _toConsumableArray(isClient && isDev ? [
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
      // 'react-hot-loader/patch',
    ] : []), [_path2.default.resolve(__dirname, isClient ? './universal/src/clientRender.js' : isUniversal ? './universal/server/render.js' : './universal/server/nonUniversalRender.js')]),
    output: _extends({
      path: res(isClient ? './universal/buildClient' : './universal/buildServer'),
      filename: isClient && !isDev ? '[name].[chunkhash].js' : '[name].js',
      publicPath: '/static/'
    }, isClient ? { chunkFilename: isDev ? '[name].js' : '[name].[chunkhash].js' } : { libraryTarget: 'commonjs2' })
  } : {
    entry: isCommandLine ? _yargs.argv.entry : makeEntry({ libraryName: libraryName, isBuild: isBuild, dirRoot: dirRoot }),
    output: isCommandLine ? makeOutputSettingsFromFilePath(_yargs.argv.output) : {
      path: '' + dirRoot,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/'
    }
  } : {}, isReact ? !isClient ? { externals: externalsOld } : {} : {
    externals: [(0, _webpackNodeExternals2.default)({
      // modulesFromFile: true,
      modulesDir: _path2.default.resolve(__dirname.split('/packages/dev_env')[0], './node_modules')
    })]
  }, {
    // ...(
    //   !isReact || (isReact && !isClient)
    //   ?
    //   {
    //     externals: [
    //       nodeExternals({
    //         // modulesFromFile: true,
    //         modulesDir: path.resolve(__dirname.split('/packages/dev_env')[0], './node_modules'),
    //         ...(
    //           isReact ?
    //           {
    //             whitelist: (x) => {
    //               return !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x);
    //             }
    //             // [
    //             //   '.bin','react-universal-component','require-universal-module','webpack-flush-chunks',
    //             // ]
    //           }
    //           :
    //           {}
    //         )
    //       }),
    //     ],
    //   }
    //   :
    //   {}
    // ),

    // for node end

    module: {
      rules: [].concat(_toConsumableArray(!isReact ? [{ test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' }, { test: /async\.js/, use: 'imports-loader?define=>false' }] : []), [
      // for node end

      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|\.tmp)/
      }], _toConsumableArray(isReact ? isClient ? [{
        test: /\.css$/,
        use: _extractCssChunksWebpackPlugin2.default.extract({
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
        use: _extractCssChunksWebpackPlugin2.default.extract({
          use: ['css-loader?sourceMap', {
            loader: 'sass-loader?sourceMap',
            options: {
              importer: _nodeSassJsonImporter2.default,
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
            importer: _nodeSassJsonImporter2.default,
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }]
      }] : []))
    },
    resolve: _webpackConfigResolve2.default.resolve,
    plugins: [].concat(_toConsumableArray(isReact ? isClient ? [isDev ? new _writeFileWebpackPlugin2.default() // used so you can see what chunks are produced in dev
    : new _statsWebpackPlugin2.default('stats.json'), new _extractCssChunksWebpackPlugin2.default(), new _webpack2.default.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
      minChunks: Infinity
    })].concat(_toConsumableArray(isDev ? [
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),
    ] : []), [new _webpack2.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
      }
    })], _toConsumableArray(!isDev ? [new _webpack2.default.optimize.UglifyJsPlugin({
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
    }), new _webpack2.default.HashedModuleIdsPlugin()] : []), [new _autodllWebpackPlugin2.default({
      context: _path2.default.join(__dirname, '..'),
      filename: '[name].js',
      entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'history/createBrowserHistory', 'transition-group', 'redux-first-router', 'redux-first-router-link', 'fetch-everywhere', 'babel-polyfill', 'redux-devtools-extension/logOnlyInProduction']
      }
    }), makeProgressPlugin()]) :
    // IS SERVER
    [new _webpack2.default.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    }), new _webpack2.default.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }), new _webpack2.default.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
      }
    }), makeProgressPlugin()] : [
    // for node start
    new _webpack2.default.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })].concat(_toConsumableArray(isCommandLine || isMocha || isBuild ? [
    // I needed __dirname hardcoded as the original dirname
    // https://github.com/webpack/webpack/issues/1599#issuecomment-266588898
    {
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
    }] : []), [makeProgressPlugin()])))
  });

  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = generateConfigJson;
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
var sharp = __webpack_require__(14);
var prepareModuleWithDefaults = __webpack_require__(5);
var parseUrl = __webpack_require__(3).parse;
module.exports = prepareModuleWithDefaults(function (s) {
  var dfd = jD.Deferred();
  var buffer = s.Body;
  var sharp = __webpack_require__(14);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
var aws = __webpack_require__(1);
var prepareModuleWithDefaults = __webpack_require__(5);
module.exports = prepareModuleWithDefaults(function (s) {
  s = Object.assign({}, s);
  if (!s.ContentType) {
    var mime = __webpack_require__(58);
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
var mymoduleName = 'mongooseStuff';;
(function (exports) {

    var jD = __webpack_require__(0);

    var mongoose = __webpack_require__(54);
    var uriUtil = __webpack_require__(55);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
var aws = __webpack_require__(1);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serve = undefined;

var _webpack = __webpack_require__(7);

var _webpack2 = _interopRequireDefault(_webpack);

var _yargs = __webpack_require__(8);

var _shellCommand = __webpack_require__(22);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _jestSpawnProcess = __webpack_require__(23);

var _jestSpawnProcess2 = _interopRequireDefault(_jestSpawnProcess);

var _webpackRunCompiler = __webpack_require__(10);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackBuildCommandLine = __webpack_require__(24);

var _webpackBuildCommandLine2 = _interopRequireDefault(_webpackBuildCommandLine);

var _webpackExpressServer = __webpack_require__(38);

var _webpackExpressServer2 = _interopRequireDefault(_webpackExpressServer);

var _webpackConfig = __webpack_require__(11);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
module.exports = function (commandToRun) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stdio: 'inherit' };
  var killParentOnExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var command = 'sh';
  var args = ['-c',
  // commandToRun.replace('node $TMPFILE','node --inspect=9223 $TMPFILE'),
  commandToRun.replace('node $TMPFILE', 'node --trace-warnings $TMPFILE')];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
  // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  var childProcess = __webpack_require__(16);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(16);

var _child_process2 = _interopRequireDefault(_child_process);

var _path = __webpack_require__(2);

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
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(7);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackRunCompiler = __webpack_require__(10);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackConfig = __webpack_require__(11);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  (0, _webpackRunCompiler2.default)((0, _webpack2.default)((0, _webpackConfig2.default)({ isCommandLine: true })));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("find-node-modules");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("extract-css-chunks-webpack-plugin");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("autodll-webpack-plugin");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("stats-webpack-plugin");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack/lib/ProgressPlugin");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("write-file-webpack-plugin");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectoryNamedWebpackPlugin = __webpack_require__(35);
var parseRequestResolvePlugin = __webpack_require__(36);
var path = __webpack_require__(2);

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
            // console.log('new request',resolver.join(directory, basename(directory)));
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
/* 35 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable func-names */
var singleLineLog = __webpack_require__(37).stdout;

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
        // printProgress(`${request.request}`);
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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

/***/ }),
/* 38 */
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

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _yargs = __webpack_require__(8);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _demoEndpoints = __webpack_require__(39);

var _demoEndpoints2 = _interopRequireDefault(_demoEndpoints);

var _startUniversalExpress = __webpack_require__(42);

var _startUniversalExpress2 = _interopRequireDefault(_startUniversalExpress);

var _bernieserver = __webpack_require__(49);

var _bernieserver2 = _interopRequireDefault(_bernieserver);

var _junkExpress = __webpack_require__(72);

var _junkExpress2 = _interopRequireDefault(_junkExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extraServers = {
  bernieserver: _bernieserver2.default,
  'junk-express': _junkExpress2.default
}; /* eslint-disable no-console */

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
      var someBackendApp = extraServers[backendAppNamespace];
      // const someBackendApp = __non_webpack_require__(path.resolve(__dirname, `../../packages/${backendAppNamespace}/${backendAppNamespace}.express`));
      // import(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`).then((someBackendApp) => {
      var serveBackendApp = someBackendApp.default || someBackendApp;
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
      // });
    }
    recurse(serverNamespaces[i]);
  });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = demoExpress;

__webpack_require__(17);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(40);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _api = __webpack_require__(41);

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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var findVideos = exports.findVideos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(category, jwToken) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(slug, jwToken) {
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startUniversal;

__webpack_require__(17);

var _webpack = __webpack_require__(7);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(43);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _fsExtra = __webpack_require__(12);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _webpackHotMiddleware = __webpack_require__(44);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackHotServerMiddleware = __webpack_require__(45);

var _webpackHotServerMiddleware2 = _interopRequireDefault(_webpackHotServerMiddleware);

var _yargs = __webpack_require__(8);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _rimraf = __webpack_require__(46);

var _rimraf2 = _interopRequireDefault(_rimraf);

var _webpackConfig = __webpack_require__(11);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackRunCompiler = __webpack_require__(10);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackParseStatsForDepProblems = __webpack_require__(47);

var _webpackParseStatsForDepProblems2 = _interopRequireDefault(_webpackParseStatsForDepProblems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = function res(p) {
  return _path2.default.resolve(__dirname, p);
};
// import universalWebpackConfig from './universal/webpack/universalWebpackConfig';
function startUniversal(_ref) {
  var _ref$app = _ref.app,
      app = _ref$app === undefined ? (0, _express2.default)() : _ref$app;


  // UNIVERSAL HMR + STATS HANDLING GOODNESS:

  if (_yargs.argv.isDev === 'true') {
    var invalidHandler = function invalidHandler(fileName, changeTime) {
      console.log('==== INVALIDATED ====');
      console.log('stats', _fsExtra2.default.statSync(fileName));
      console.log('FileName: ' + fileName);
      console.log('ChangeTimex: ' + changeTime);
    };

    var clientDevConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: true, isUniversal: true, 'xxx': 116 });
    var serverDevConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: true, isUniversal: true, 'xxx': 115 });
    var serverNonUniversalConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: true, isUniversal: false, 'xxx': 114 });
    var publicPath = clientDevConfig.output.publicPath;
    var outputPath = clientDevConfig.output.path;
    console.log('66666');

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
  } else if (_yargs.argv.isDeploy === 'true') {
    console.log('77777');
    var serverRender = require(res('./universal/buildServer/main.js')).default;
    var clientStats = require(res('./universal/buildClient/stats.json'));
    var clientProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: false, isUniversal: true, 'xxx': 113 });
    var _publicPath = clientProdConfig.output.publicPath;
    var _outputPath = clientProdConfig.output.path;
    app.use(_publicPath, _express2.default.static(_outputPath));
    app.use(serverRender({ clientStats: clientStats, outputPath: _outputPath }));
  } else {
    console.log('8888');
    var _clientProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: false, isUniversal: true, 'xxx': 113 });
    var serverProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: false, isUniversal: true, 'xxx': 112 });
    (0, _rimraf2.default)('{' + _clientProdConfig.output.path + ',' + serverProdConfig.output.path + '}', function () {
      // webpackRunCompiler(webpack(clientProdConfig)).then(() => {
      // deleteFiles(serverProdConfig.output.path, () => {
      var multiCompiler = (0, _webpack2.default)([_clientProdConfig, serverProdConfig]);
      var clientCompiler = multiCompiler.compilers[0];
      var serverCompiler = multiCompiler.compilers[1];
      (0, _webpackRunCompiler2.default)(multiCompiler).then(function () {
        // const clientConfig = webpackConfig({isReact:true,isClient:true,isDev:true,isUniversal:true,'xxx':111});
        var publicPath = _clientProdConfig.output.publicPath;
        var outputPath = _clientProdConfig.output.path;
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
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env"))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-server-middleware");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = __webpack_require__(12);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _validateNpmPackageName = __webpack_require__(48);

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
        // console.log(module.resource);
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
/* 48 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var app = _ref.app,
        nameSpace = _ref.nameSpace;

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
};

var _mymodule = __webpack_require__(51);

var _mymodule2 = _interopRequireDefault(_mymodule);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _ejs = __webpack_require__(52);

var _ejs2 = _interopRequireDefault(_ejs);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(3);

var _url2 = _interopRequireDefault(_url);

var _fs = __webpack_require__(53);

var _fs2 = _interopRequireDefault(_fs);

var _mongooseStuff = __webpack_require__(18);

var _endpointCompositeImage = __webpack_require__(56);

var _endpointCompositeImage2 = _interopRequireDefault(_endpointCompositeImage);

var _endpointGetNormalizedImageInfo = __webpack_require__(61);

var _endpointGetNormalizedImageInfo2 = _interopRequireDefault(_endpointGetNormalizedImageInfo);

var _endpointGetS3SignedUploadUrl = __webpack_require__(67);

var _endpointGetS3SignedUploadUrl2 = _interopRequireDefault(_endpointGetS3SignedUploadUrl);

var _endpointIframeUpload = __webpack_require__(68);

var _endpointIframeUpload2 = _interopRequireDefault(_endpointIframeUpload);

var _generateUrlRegexNamespace = __webpack_require__(71);

var _generateUrlRegexNamespace2 = _interopRequireDefault(_generateUrlRegexNamespace);

var _respondWithJson = __webpack_require__(6);

var _respondWithJson2 = _interopRequireDefault(_respondWithJson);

var _ensureLeadingSlash = __webpack_require__(4);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/bernieserver"))

/***/ }),
/* 51 */
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

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("mongodb-uri");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(1);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(3);

var _ensureLeadingSlash = __webpack_require__(4);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

var _getAllS3Objects = __webpack_require__(57);

var _getAllS3Objects2 = _interopRequireDefault(_getAllS3Objects);

var _getS3ObjectData = __webpack_require__(19);

var _getS3ObjectData2 = _interopRequireDefault(_getS3ObjectData);

var _meldAndCropImages = __webpack_require__(59);

var _meldAndCropImages2 = _interopRequireDefault(_meldAndCropImages);

var _respondWithJson = __webpack_require__(6);

var _respondWithJson2 = _interopRequireDefault(_respondWithJson);

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
  console.log('overlaySettings', overlaySettings);
  userImageFilename = userImageFilename.join('_');
  return {
    userImageFilename: userImageFilename,
    templateFilename: templateFilename,
    overlaySettings: overlaySettings,
    compositeS3Key: compositeS3Key
  };
};
// Generate composite images.
// Requests are either .png, .jpg, or .json.
// If .json, the composite image is generated, uploaded to S3,
// and the S3 item key is sent to the client in json.

exports.default = function (_ref) {
  var app = _ref.app,
      accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      urlPattern = _ref.urlPattern;

  app.get(urlPattern, function (req, res) {
    console.log('EXTNSSION');
    var extension = _path2.default.extname(req.url);
    var fileTypes = {
      '.json': 'png',
      '.png': 'png',
      '.jpg': 'jpeg',
      '.jpeg': 'jpeg'
    };
    var fileType = fileTypes[extension] ? fileTypes[extension] : 'jpeg';
    console.log('fileType', fileType);
    var compositeImageInstructions = parseClientCompositeImageUrl(req.url);
    var s = compositeImageInstructions;
    console.log('s.compositeS3Key', s.compositeS3Key);
    (0, _getS3ObjectData2.default)({
      Key: s.compositeS3Key,
      resolveNullOn404: true,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      Bucket: Bucket
    }).then(function (data) {
      if (!data) {
        console.log('COMPOSITE IMAGE DOES NOT EXIST!');

        var templateCreateMode = !s.templateFilename || s.templateFilename === 'undefined';

        var getAllS3ObjectsSettingsDict = {
          userPhoto: {
            Key: 'selfies/' + s.userImageFilename + '.png',
            retrySearchCriteria: {
              Prefix: 'res/dthvwwocq/image/upload/bernie/' + s.userImageFilename,
              Bucket: 'cloudinary-bernie-backup'
            }
          }
        };
        if (!templateCreateMode) {
          getAllS3ObjectsSettingsDict.template = {
            Key: 'decorations/' + s.templateFilename + '.png'
          };
        }

        (0, _getAllS3Objects2.default)({
          dict: getAllS3ObjectsSettingsDict,
          Bucket: Bucket,
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey
        }).then(_meldAndCropImages2.default.bind(null, s.overlaySettings)).then(function (bufferData) {

          var Key = s.compositeS3Key;
          if (templateCreateMode) {
            Key = 'decorations/' + s.userImageFilename + '.png';
          } else {
            res.setHeader('content-type', 'image/' + fileType);
            res.write(bufferData.Body, 'binary');
            res.end(null, 'binary');
          }

          _awsSdk2.default.config.update({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
          var s3 = new _awsSdk2.default.S3();
          s3.putObject({
            Bucket: Bucket,
            Key: Key,
            Body: bufferData.Body,
            ContentType: 'image/' + fileType,
            ACL: 'public-read'
          }, function (err, data) {
            if (err) {
              // Failed saving to S3
              log.error('Failed saving to S3', err);
            } else {
              if (templateCreateMode) {
                (0, _respondWithJson2.default)({
                  Key: Key,
                  res: res,
                  isSuccess: true
                });
              }
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aws = __webpack_require__(1);
var jD = __webpack_require__(0);
var getS3ObjectData = __webpack_require__(19);
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
          var aws = __webpack_require__(1);
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
                  var normalizeImageFileData = __webpack_require__(13)({
                    prepareModuleWithDefaults: true,
                    filename: filename,
                    parseSettings: function parseSettings(s) {
                      s.Body = s.data.Body;
                      return s;
                    }
                  });
                  var uploadToS3 = __webpack_require__(15)({
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
/* 58 */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var sharp = __webpack_require__(14);
var jD = __webpack_require__(0);
var calcOverlayAndTemplateProcessingSettings = __webpack_require__(60);

// Normally, this will meld a foreground and a background image together,
// and crop them to a square, as a new image jpeg.
// But when templateCroppingMode is true,
// only the foreground image is used,
// and it alone gets cropped as a new image png.
module.exports = function (overlaySettings, responses) {
  var dfd = jD.Deferred();
  var templateFetchResponse = responses.template;
  var templateCroppingMode = !templateFetchResponse;
  var userPhotoFetchResponse = responses.userPhoto;
  var args = Array.prototype.slice.call(arguments);
  var userPhoto = sharp(userPhotoFetchResponse.data.Body);
  var bgColor = templateCroppingMode ? { r: 0, g: 0, b: 0, alpha: 0 } : 'white';
  var fileType = templateCroppingMode ? 'png' : 'jpeg';
  userPhoto.metadata().then(function (metadata) {
    var imageProcessingSettings = calcOverlayAndTemplateProcessingSettings(overlaySettings, metadata);
    var s = imageProcessingSettings;
    if (s.completelyOutOfBound) {
      var responseToProcess = templateCroppingMode ? userPhotoFetchResponse : templateFetchResponse;
      var template = sharp(responseToProcess.data.Body);
      template.resize(s.limit, s.limit).min().max();
      template = template.background(bgColor);
      if (!templateCroppingMode) {
        template = template.flatten();
      }
      template[fileType]().toBuffer().then(function (templateBuffer) {
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
      userPhoto = userPhoto.background(bgColor);
      if (!templateCroppingMode) {
        userPhoto = userPhoto.flatten();
      }
      userPhoto.toBuffer().then(function (userPhotoBuffer) {
        var userPhoto = sharp(userPhotoBuffer);
        userPhoto.resize(1200, 1200);
        if (templateCroppingMode) {
          userPhoto.png().toBuffer().then(function (userPhotoBuffer) {
            dfd.resolve({
              Body: userPhotoBuffer
            });
          });
        } else {
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
        }
      });
    }
    return userPhoto;
  });
  return dfd.promise();
};

/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(1);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _jqueryDeferred = __webpack_require__(0);

var _jqueryDeferred2 = _interopRequireDefault(_jqueryDeferred);

var _mongooseStuff = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      app = _ref.app,
      userTemplates = _ref.userTemplates,
      urlPattern = _ref.urlPattern;

  var urlToFileData = __webpack_require__(62);
  var uploadToS3 = __webpack_require__(15)({
    prepareModuleWithDefaults: true,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: Bucket
  });

  var parseUrl = __webpack_require__(3).parse;

  var normalizeImageFileData = __webpack_require__(13)({
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
  var deep = __webpack_require__(65);
  var deleteS3Object = __webpack_require__(66)({
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

    var respondWithJsonSuccess = __webpack_require__(6)({
      prepareModuleWithDefaults: true,
      res: res,
      isSuccess: true
    });
    var respondWithJsonFail = __webpack_require__(6)({
      prepareModuleWithDefaults: true,
      res: res,
      isSuccess: false
    });
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
module.exports = function (originalUrl) {
  var isHttps = originalUrl.indexOf('https://') !== -1;
  var url = __webpack_require__(3);

  var dfd = jD.Deferred();
  var options = url.parse(originalUrl);
  var http;
  if (isHttps) {
    http = __webpack_require__(63);
  } else {
    http = __webpack_require__(64);
  }
  console.log('http get');
  http.get(options, function (response) {
    console.log('GOTTEN');
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
/* 63 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("deep-get-set");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
var aws = __webpack_require__(1);
var prepareModuleWithDefaults = __webpack_require__(5);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = __webpack_require__(1);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _ensureLeadingSlash = __webpack_require__(4);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

var _respondWithJson = __webpack_require__(6);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ensureLeadingSlash = __webpack_require__(4);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var app = _ref.app,
      accessKeyId = _ref.accessKeyId,
      secretAccessKey = _ref.secretAccessKey,
      Bucket = _ref.Bucket,
      urlPattern = _ref.urlPattern;

  app.post(urlPattern, function (req, res, next) {
    var parseUrl = __webpack_require__(3).parse;
    var normalizeImageFileData = __webpack_require__(13)({
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
    var uploadToS3 = __webpack_require__(15)({
      prepareModuleWithDefaults: true,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      Bucket: Bucket
    });
    var apiRequestIntoBufferData = __webpack_require__(69);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jD = __webpack_require__(0);
var prepareModuleWithDefaults = __webpack_require__(5);
var Busboy = __webpack_require__(70);

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
/* 70 */
/***/ (function(module, exports) {

module.exports = require("busboy");

/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var app = _ref.app,
        nameSpace = _ref.nameSpace;

    app.get((0, _ensureLeadingSlash2.default)(nameSpace + "/junk-express"), function (req, res) {
        res.send({
            status: "success"
        });
    });
};

var _ensureLeadingSlash = __webpack_require__(4);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});
//# sourceMappingURL=dev_env.js.map