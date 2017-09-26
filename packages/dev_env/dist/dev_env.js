require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("webpack"), require("path"), require("yargs"), require("fs-extra"), require("child_process"), require("globby"), require("webpack-node-externals"), require("find-node-modules"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("write-file-webpack-plugin"), require("directory-named-webpack-plugin"), require("single-line-log"), require("babel-polyfill"), require("webpack-dev-middleware"), require("express"), require("eval"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("validate-npm-package-name"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["webpack", "path", "yargs", "fs-extra", "child_process", "globby", "webpack-node-externals", "find-node-modules", "extract-css-chunks-webpack-plugin", "autodll-webpack-plugin", "stats-webpack-plugin", "webpack/lib/ProgressPlugin", "node-sass-json-importer", "write-file-webpack-plugin", "directory-named-webpack-plugin", "single-line-log", "babel-polyfill", "webpack-dev-middleware", "express", "eval", "webpack-hot-middleware", "webpack-hot-server-middleware", "rimraf", "validate-npm-package-name"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("webpack"), require("path"), require("yargs"), require("fs-extra"), require("child_process"), require("globby"), require("webpack-node-externals"), require("find-node-modules"), require("extract-css-chunks-webpack-plugin"), require("autodll-webpack-plugin"), require("stats-webpack-plugin"), require("webpack/lib/ProgressPlugin"), require("node-sass-json-importer"), require("write-file-webpack-plugin"), require("directory-named-webpack-plugin"), require("single-line-log"), require("babel-polyfill"), require("webpack-dev-middleware"), require("express"), require("eval"), require("webpack-hot-middleware"), require("webpack-hot-server-middleware"), require("rimraf"), require("validate-npm-package-name"));
	else
		root["@defualt/dev_env"] = factory(root["webpack"], root["path"], root["yargs"], root["fs-extra"], root["child_process"], root["globby"], root["webpack-node-externals"], root["find-node-modules"], root["extract-css-chunks-webpack-plugin"], root["autodll-webpack-plugin"], root["stats-webpack-plugin"], root["webpack/lib/ProgressPlugin"], root["node-sass-json-importer"], root["write-file-webpack-plugin"], root["directory-named-webpack-plugin"], root["single-line-log"], root["babel-polyfill"], root["webpack-dev-middleware"], root["express"], root["eval"], root["webpack-hot-middleware"], root["webpack-hot-server-middleware"], root["rimraf"], root["validate-npm-package-name"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_34__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__xdirname, __dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// from universal
// import path from 'path';
// import webpack from 'webpack';


var _webpack = __webpack_require__(0);

var _webpack2 = _interopRequireDefault(_webpack);

var _yargs = __webpack_require__(2);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(12);

var _globby2 = _interopRequireDefault(_globby);

var _webpackNodeExternals = __webpack_require__(13);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _findNodeModules = __webpack_require__(14);

var _findNodeModules2 = _interopRequireDefault(_findNodeModules);

var _extractCssChunksWebpackPlugin = __webpack_require__(15);

var _extractCssChunksWebpackPlugin2 = _interopRequireDefault(_extractCssChunksWebpackPlugin);

var _autodllWebpackPlugin = __webpack_require__(16);

var _autodllWebpackPlugin2 = _interopRequireDefault(_autodllWebpackPlugin);

var _statsWebpackPlugin = __webpack_require__(17);

var _statsWebpackPlugin2 = _interopRequireDefault(_statsWebpackPlugin);

var _ProgressPlugin = __webpack_require__(18);

var _ProgressPlugin2 = _interopRequireDefault(_ProgressPlugin);

var _nodeSassJsonImporter = __webpack_require__(19);

var _nodeSassJsonImporter2 = _interopRequireDefault(_nodeSassJsonImporter);

var _writeFileWebpackPlugin = __webpack_require__(20);

var _writeFileWebpackPlugin2 = _interopRequireDefault(_writeFileWebpackPlugin);

var _webpackConfigResolve = __webpack_require__(21);

var _webpackConfigResolve2 = _interopRequireDefault(_webpackConfigResolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  console.log('typeof __xdirname', typeof __xdirname === 'undefined' ? 'undefined' : _typeof(__xdirname), '/Users/brianephraim/Sites/monorepo/packages/dev_env/webpackConfig.js');
  return _path2.default.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, p);
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
  console.log('typeof __xdirname', typeof __xdirname === 'undefined' ? 'undefined' : _typeof(__xdirname), '/Users/brianephraim/Sites/monorepo/packages/dev_env/webpackConfig.js 222');
  var config = _extends({}, isReact ? {
    name: isClient ? 'client' : 'server'
  } : {}, {
    target: isReact && isClient ? 'web' : 'node',
    devtool: 'sourcemap'
  }, !isMocha ? isReact ? {
    entry: [].concat(_toConsumableArray(!isClient && !isDev ? [] : ['babel-polyfill']), [// not sure why non babel-polyfill when server-prod
    'fetch-everywhere'], _toConsumableArray(isClient && isDev ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false', 'react-hot-loader/patch'] : []), [_path2.default.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, isClient ? './universal/src/clientRender.js' : isUniversal ? './universal/server/render.js' : './universal/server/nonUniversalRender.js')]),
    output: _extends({
      path: res(isClient ? './universal/buildClient' : './universal/buildServer'),
      filename: isClient && !isDev ? '[name].[chunkhash].js' : '[name].js',
      publicPath: '/staticx/'
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
      modulesDir: _path2.default.resolve((typeof __xdirname !== 'undefined' ? __xdirname : __dirname).split('/packages/dev_env')[0], './node_modules')
    })]
  }, {
    // ...(
    //   !isReact || (isReact && !isClient)
    //   ?
    //   {
    //     externals: [
    //       nodeExternals({
    //         // modulesFromFile: true,
    //         modulesDir: path.resolve(__xdirname.split('/packages/dev_env')[0], './node_modules'),
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
    })].concat(_toConsumableArray(isDev ? [new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NoEmitOnErrorsPlugin()] : []), [new _webpack2.default.DefinePlugin({
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
      context: _path2.default.join(__xdirname, '..'),
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
    // I needed __xdirname hardcoded as the original dirname
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

        setModuleConstant('__xdirname', function (module) {
          return module.context;
        });
      }
    }] : []), [makeProgressPlugin()])))
  });

  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = generateConfigJson;
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env", "/"))

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

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _webpack = __webpack_require__(0);

var _webpack2 = _interopRequireDefault(_webpack);

var _yargs = __webpack_require__(2);

var _shellCommand = __webpack_require__(9);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _jestSpawnProcess = __webpack_require__(10);

var _jestSpawnProcess2 = _interopRequireDefault(_jestSpawnProcess);

var _webpackRunCompiler = __webpack_require__(3);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackBuildCommandLine = __webpack_require__(11);

var _webpackBuildCommandLine2 = _interopRequireDefault(_webpackBuildCommandLine);

var _serveUniversalExpress = __webpack_require__(25);

var _serveUniversalExpress2 = _interopRequireDefault(_serveUniversalExpress);

var _webpackConfig = __webpack_require__(4);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import isWithinMonoRepo from './core/isWithinMonoRepo');
/* eslint-disable no-console */
console.log('__dirname packages/dev_env/dev_env.js', __dirname);
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
  (0, _serveUniversalExpress2.default)();
}
// export { serveUniversalExpress };
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__xdirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(6);

var _child_process2 = _interopRequireDefault(_child_process);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jestConfig from './jestConfig';
// const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;

/* eslint-disable camelcase */
var configPath = __xdirname + '/jestConfig.js';
// const configBasePath = `${__xdirname}/jestConfigBase.js`;
// qwer();

exports.default = function (testdevenv) {
  var watch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var testPathPattern = arguments[2];

  var command = 'sh';
  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  var commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/jest --watch=' + (watch && watch !== 'false' ? 'true' : 'false') + ' --config=' + configPath + (testPathPattern ? [" --testPathPattern='", testPathPattern, "'"].join('') : '');
  if (testdevenv) {
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest -t testdevenv --config=${configBasePath}`;
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest ${__xdirname}/testdevenv.js  --config=${configBasePath}`;
    commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/mocha-webpack --colors --require babel-core/register --webpack-config ' + _path2.default.resolve(__xdirname, '../core/webpackConfigMocha.js') + ' "' + _path2.default.resolve(__xdirname, './testdevenv2.js') + '" --require source-map-support/register';
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(0);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackRunCompiler = __webpack_require__(3);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackConfig = __webpack_require__(4);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  (0, _webpackRunCompiler2.default)((0, _webpack2.default)((0, _webpackConfig2.default)({ isCommandLine: true })));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("find-node-modules");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("extract-css-chunks-webpack-plugin");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("autodll-webpack-plugin");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("stats-webpack-plugin");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack/lib/ProgressPlugin");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("write-file-webpack-plugin");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectoryNamedWebpackPlugin = __webpack_require__(22);
var parseRequestResolvePlugin = __webpack_require__(23);
var path = __webpack_require__(1);

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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable func-names */
var singleLineLog = __webpack_require__(24).stdout;

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__xdirname, __dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startUniversal;

__webpack_require__(26);

var _webpack = __webpack_require__(0);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(27);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _express = __webpack_require__(28);

var _express2 = _interopRequireDefault(_express);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _eval2 = __webpack_require__(29);

var _eval3 = _interopRequireDefault(_eval2);

var _webpackHotMiddleware = __webpack_require__(30);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackHotServerMiddleware = __webpack_require__(31);

var _webpackHotServerMiddleware2 = _interopRequireDefault(_webpackHotServerMiddleware);

var _yargs = __webpack_require__(2);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _rimraf = __webpack_require__(32);

var _rimraf2 = _interopRequireDefault(_rimraf);

var _webpackConfig = __webpack_require__(4);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackRunCompiler = __webpack_require__(3);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackParseStatsForDepProblems = __webpack_require__(33);

var _webpackParseStatsForDepProblems2 = _interopRequireDefault(_webpackParseStatsForDepProblems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = function res(p) {
  return _path2.default.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, p);
};
// import universalWebpackConfig from './universal/webpack/universalWebpackConfig';
function startUniversal() {
  var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _express2.default)();


  if (_yargs.argv.isDev === 'true') {
    // `npm run bern1` or `npm run bern2`
    var clientDevConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: true, isUniversal: true, 'xxx': 116 });
    var serverDevConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: true, isUniversal: true, 'xxx': 115 });
    var serverNonUniversalConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: true, isUniversal: false, 'xxx': 114 });
    var publicPath = clientDevConfig.output.publicPath;
    var outputPath = clientDevConfig.output.path;
    var isUniversal = _yargs.argv.isUniversal === 'true';
    var multiCompiler = (0, _webpack2.default)([clientDevConfig, isUniversal ? serverDevConfig : serverNonUniversalConfig]);
    var clientCompiler = multiCompiler.compilers[0];
    /* eslint-disable no-console */
    console.info('🔷 Starting webpack ...');
    /* eslint-enable no-console */
    clientCompiler.plugin('invalid', function (fileName, changeTime) {
      /* eslint-disable no-console */
      console.log('==== INVALIDATED ====');
      console.log('stats', _fsExtra2.default.statSync(fileName));
      console.log('FileName: ' + fileName);
      console.log('ChangeTimex: ' + changeTime);
      /* eslint-enable no-console */
    });
    var activeWebpackDevMiddleware = (0, _webpackDevMiddleware2.default)(multiCompiler, {
      publicPath: publicPath,
      stats: {
        colors: true
      }
    });
    activeWebpackDevMiddleware.waitUntilValid(function (stats) {
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
    // `npm run bern4`

    // instead of `require` or `__non_webpack_require__` or `import (...)`
    // using `fs.readFileSync` + `_eval`.
    // why
    // -  not `require` because we don't want to bundle what we are importing here
    //    because what we are importing is itself a bundle
    //    - which might not exist yet
    //    - which will itself be ES5 safe
    //    - which is itself huge so we don't want to bundle it here.
    // -  `__non_webpack_require__` and `import (...)` don't work or too complicated.
    var buildServerMainContent = _fsExtra2.default.readFileSync(_path2.default.resolve(process.cwd(), './packages/dev_env/universal/buildServer/main.js'));
    var serverRender = (0, _eval3.default)(buildServerMainContent, true).default;
    var clientStats = _fsExtra2.default.readJsonSync(_path2.default.resolve(process.cwd(), './packages/dev_env/universal/buildClient/stats.json'));
    var clientProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: false, isUniversal: true, 'xxx': 113 });
    var _publicPath = clientProdConfig.output.publicPath;
    var _outputPath = 'packages/dev_env/universal/buildClient';
    app.use(_publicPath, _express2.default.static(_outputPath));
    app.use(serverRender({ clientStats: clientStats, outputPath: _outputPath }));
  } else {
    // `npm run bern3`
    var _clientProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: true, isDev: false, isUniversal: true, 'xxx': 113 });
    var serverProdConfig = (0, _webpackConfig2.default)({ isReact: true, isClient: false, isDev: false, isUniversal: true, 'xxx': 112 });
    (0, _rimraf2.default)('{' + _clientProdConfig.output.path + ',' + serverProdConfig.output.path + '}', function () {
      var multiCompiler = (0, _webpack2.default)([_clientProdConfig, serverProdConfig]);
      (0, _webpackRunCompiler2.default)(multiCompiler).then(function () {
        var publicPath = _clientProdConfig.output.publicPath;
        var outputPath = _clientProdConfig.output.path;
        var serverRender = require(res('./universal/buildServer/main.js')).default;
        var clientStats = require(res('./universal/buildClient/stats.json'));
        app.use(publicPath, _express2.default.static(outputPath));
        app.use(serverRender({ clientStats: clientStats, outputPath: outputPath }));
      });
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env", "/"))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("eval");

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _validateNpmPackageName = __webpack_require__(34);

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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ })
/******/ ]);
});
//# sourceMappingURL=dev_env.js.map