require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs-extra"), require("webpack"), require("path"), require("yargs"), require("child_process"), require("globby"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("single-line-log"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["fs-extra", "webpack", "path", "yargs", "child_process", "globby", "directory-named-webpack-plugin", "express", "extract-text-webpack-plugin", "html-webpack-plugin", "node-sass-json-importer", "single-line-log", "string-replace-webpack-plugin", "url", "validate-npm-package-name", "webpack-dev-middleware", "webpack-node-externals"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("fs-extra"), require("webpack"), require("path"), require("yargs"), require("child_process"), require("globby"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("single-line-log"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else
		root["@defualt/dev_env"] = factory(root["fs-extra"], root["webpack"], root["path"], root["yargs"], root["child_process"], root["globby"], root["directory-named-webpack-plugin"], root["express"], root["extract-text-webpack-plugin"], root["html-webpack-plugin"], root["node-sass-json-importer"], root["single-line-log"], root["string-replace-webpack-plugin"], root["url"], root["validate-npm-package-name"], root["webpack-dev-middleware"], root["webpack-node-externals"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _yargs = __webpack_require__(3);

var _webpackEnhanceBaseConfig = __webpack_require__(5);

var _webpackEnhanceBaseConfig2 = _interopRequireDefault(_webpackEnhanceBaseConfig);

var _webpackEnhanceConfigNode = __webpack_require__(6);

var _webpackEnhanceConfigNode2 = _interopRequireDefault(_webpackEnhanceConfigNode);

var _webpackEnhanceImmediateConfig = __webpack_require__(16);

var _webpackEnhanceImmediateConfig2 = _interopRequireDefault(_webpackEnhanceImmediateConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enhance() {
  var config = (0, _webpackEnhanceBaseConfig2.default)();
  var entry = {
    main: _yargs.argv.entry
  };
  var output = _yargs.argv.output;
  output = output.split('/');

  output = {
    filename: output.pop(),
    path: output.join('/')
  };
  config = _extends({}, config, {
    entry: entry,
    output: output
  });
  config = (0, _webpackEnhanceConfigNode2.default)(config);
  config = (0, _webpackEnhanceImmediateConfig2.default)(config);
  _fsExtra2.default.writeFileSync('./_webpack-config-preview-commandline.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = enhance;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackConfigResolve = __webpack_require__(14);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-mixed-operators */


var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackNodeExternals = __webpack_require__(34);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _path = __webpack_require__(2);

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
    devtool: 'inline-source-map',
    // devtool: 'sourcemap',
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (webpackMakeCompiler) {
  webpackMakeCompiler().run(function (err, stats) {
    console.log('RUN COMPILER');
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
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
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(33);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _webpackConfig = __webpack_require__(19);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackParseStatsForDepProblems = __webpack_require__(23);

var _webpackParseStatsForDepProblems2 = _interopRequireDefault(_webpackParseStatsForDepProblems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (isDev) {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  if (isDev) {
    console.log('COMPILER WTF');
    compiler.plugin('invalid', function (fileName, changeTime) {
      // console.trace();
      console.log('stats', _fsExtra2.default.statSync(fileName));
      console.log("FileName: " + fileName);
      console.log("ChangeTimex:" + changeTime);
    });
    var activeWebpackDevMiddleware = (0, _webpackDevMiddleware2.default)(compiler, {
      publicPath: _webpackConfig2.default.output.publicPath,
      stats: {
        colors: true
      }
    });
    activeWebpackDevMiddleware.waitUntilValid(function (stats) {
      (0, _webpackParseStatsForDepProblems2.default)(stats);
    });

    return activeWebpackDevMiddleware;
  }
  return compiler;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _yargs = __webpack_require__(3);

var _shellCommand = __webpack_require__(13);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _jestSpawnProcess = __webpack_require__(17);

var _jestSpawnProcess2 = _interopRequireDefault(_jestSpawnProcess);

var _webpackMakeCompiler = __webpack_require__(8);

var _webpackMakeCompiler2 = _interopRequireDefault(_webpackMakeCompiler);

var _webpackRunCompiler = __webpack_require__(7);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackBuildCommandLine = __webpack_require__(15);

var _webpackBuildCommandLine2 = _interopRequireDefault(_webpackBuildCommandLine);

var _webpackExpressServer = __webpack_require__(22);

var _webpackExpressServer2 = _interopRequireDefault(_webpackExpressServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = _yargs.argv.env; /* eslint-disable no-console */

var item = _yargs.argv.item;
if (item) {
  (0, _shellCommand2.default)('(cd ./packages/' + item + ' && npm run start)');
} else if (env === 'test') {
  (0, _jestSpawnProcess2.default)(_yargs.argv.testdevenv, _yargs.argv.watch, _yargs.argv.testPathPattern);
} else if (_yargs.argv.entry) {
  (0, _webpackBuildCommandLine2.default)();
} else if (env === 'build') {
  (0, _webpackRunCompiler2.default)(_webpackMakeCompiler2.default);
} else {
  (0, _webpackExpressServer2.default)();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable func-names */
var singleLineLog = __webpack_require__(29).stdout;

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
module.exports = function (commandToRun) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stdio: 'inherit' };
  var killParentOnExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var command = 'sh';
  var args = ['-c', commandToRun];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
  // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  var childProcess = __webpack_require__(9);
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


var DirectoryNamedWebpackPlugin = __webpack_require__(24);
var parseRequestResolvePlugin = __webpack_require__(12);
var path = __webpack_require__(2);
module.exports = {
  resolve: {
    modules: [
    // '/Users/brianephraim/Sites/monorepo/node_modules',
    path.resolve('./src/library'), path.resolve(process.cwd(), 'packages'), path.resolve(process.cwd(), '../../packages'), 'node_modules'],
    extensions: ['.js',

    // Why is this here? : https://github.com/npm/normalize-package-data/issues/88
    // Issue only appeard when webpack run on command line for Node bundle
    '.json'],
    plugins: [parseRequestResolvePlugin(function (requestStr) {
      // console.log('requestStr', requestStr);
      if (requestStr.indexOf('@') === 0 && requestStr.indexOf('/') !== -1) {
        return requestStr.split('/')[1];
      }
      return false;
    }), new DirectoryNamedWebpackPlugin(true)]
  }
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

var _webpackRunCompiler = __webpack_require__(7);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackConfigCommandLine = __webpack_require__(4);

var _webpackConfigCommandLine2 = _interopRequireDefault(_webpackConfigCommandLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function webpackMakeCompiler() {
  var config = (0, _webpackConfigCommandLine2.default)();
  var compiler = (0, _webpack2.default)(config);
  return compiler;
}

exports.default = function () {
  (0, _webpackRunCompiler2.default)(webpackMakeCompiler);
};

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(9);

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginRegistry = function () {
  function PluginRegistry() {
    _classCallCheck(this, PluginRegistry);

    this.registry = {};
    this.plugins = [];
  }

  _createClass(PluginRegistry, [{
    key: "register",
    value: function register(name, plugin) {
      if (!this.registry[name]) {
        this.plugins.push(plugin);
        this.registry[name] = true;
        return true;
      }
      return false;
    }
  }]);

  return PluginRegistry;
}();

var pluginRegistry = new PluginRegistry();
var plugins = pluginRegistry.plugins;
var register = pluginRegistry.register.bind(pluginRegistry);
exports.register = register;
exports.default = plugins;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yargs = __webpack_require__(3);

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(10);

var _globby2 = _interopRequireDefault(_globby);

var _webpackEnhanceConfigNode = __webpack_require__(6);

var _webpackEnhanceConfigNode2 = _interopRequireDefault(_webpackEnhanceConfigNode);

var _webpackEnhanceConfigWeb = __webpack_require__(20);

var _webpackEnhanceConfigWeb2 = _interopRequireDefault(_webpackEnhanceConfigWeb);

var _webpackEnhanceEntryOutputStandard = __webpack_require__(21);

var _webpackEnhanceEntryOutputStandard2 = _interopRequireDefault(_webpackEnhanceEntryOutputStandard);

var _webpackEnhanceBaseConfig = __webpack_require__(5);

var _webpackEnhanceBaseConfig2 = _interopRequireDefault(_webpackEnhanceBaseConfig);

var _webpackConfigCommandLine = __webpack_require__(4);

var _webpackConfigCommandLine2 = _interopRequireDefault(_webpackConfigCommandLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                    This files return a function that when called generates a webpack config json.
                                                                                                                                                                                                                    `argv` is passed into this function.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    when `argv.env === falsey`
                                                                                                                                                                                                                      This compiles for a dev server via webpack-dev-middleware.  No files are created to disk,
                                                                                                                                                                                                                      only created in memory.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    when `argv.env === 'build'`
                                                                                                                                                                                                                      This compiles files to disk in a /dist folder and a /demo folder.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    when `argv.dirroot === some path`
                                                                                                                                                                                                                      This is used when dev_env itself is compiled.
                                                                                                                                                                                                                      This very file is compiled according the config set by this file.
                                                                                                                                                                                                                      This is needed to make dev_env portable via npm.
                                                                                                                                                                                                                      babel-node needs to compile this dev_env to work,
                                                                                                                                                                                                                      but this does not play well when dev_env is in a node_modules folder.
                                                                                                                                                                                                                      So we need to compile dev_env before publishing to npm.
                                                                                                                                                                                                                      Directory paths need to be tweaked to accomplish this,
                                                                                                                                                                                                                      and that's what `argv.dirroot` helps with.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    This function is also affected by package.json.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    when package.json.bundleForNode === true
                                                                                                                                                                                                                      in conjunction with `argv.env === 'build'`, the bundle will
                                                                                                                                                                                                                      have special consideration for a node platform.
                                                                                                                                                                                                                      Only application files will be bundled.
                                                                                                                                                                                                                      node_modules and node built-in requires will not be bundled.
                                                                                                                                                                                                                  */


// import aaa8 from '@defualt/aaa8';
// console.log(aaa8);

// console.log(process.cwd());
// // console.log(argv);
// console.log({
//   entry: path.resolve(process.cwd(), argv.entry),
//   output: path.resolve(process.cwd(), argv.output),
// });

function generateConfigJson() {
  var isCommandLine = _yargs.argv.entry;
  var config = void 0;
  if (isCommandLine) {
    config = (0, _webpackConfigCommandLine2.default)();
  } else {
    config = (0, _webpackEnhanceBaseConfig2.default)();
    var isBuild = _yargs.argv.env === 'build';
    var dirRoot = _yargs.argv.dirroot || process.cwd();
    var packageJson = _fsExtra2.default.readJsonSync(dirRoot + '/package.json');
    var outputFiles = {};
    var libraryName = packageJson.name;
    var libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];
    if (isBuild) {
      outputFiles.library = 'dist/' + libraryNameReduced;
      outputFiles.libraryMin = 'dist/' + libraryNameReduced + '.min';
      outputFiles.demo = 'dist/demo/index';
    } else {
      outputFiles.demo = 'boot';
      outputFiles.library = '' + libraryNameReduced;
    }

    var entryFiles = void 0;
    if (_yargs.argv['demo-entry']) {
      entryFiles = _defineProperty({}, outputFiles.demo, [_yargs.argv['demo-entry']]);
      // } else if (argv['tailor-web-bundle-for-testing-of-dev-env-itself']) {
      //   console.log('YEEEEHAW');
      //   console.log('YEEEEHAW');
      //   console.log('YEEEEHAW');
      //   console.log('YEEEEHAW');
      //   console.log('YEEEEHAW');
      //   entryFiles = {
      //     [outputFiles.demo]: [`${dirRoot}/packages/testdevenv-main/testdevenv-main.js`],
      //   };
    } else {
      entryFiles = _extends(_defineProperty({
        MainApp: _globby2.default.sync([dirRoot + '/packages/MainApp/MainApp.js'])
      }, outputFiles.library, _globby2.default.sync([dirRoot + '/' + libraryNameReduced + '.js', dirRoot + '/src/library/index.js'])), outputFiles.libraryMin ? _defineProperty({}, outputFiles.libraryMin, _globby2.default.sync([dirRoot + '/src/library/index.js'])) : {}, _defineProperty({}, outputFiles.demo, _globby2.default.sync([dirRoot + '/*.demo.js', dirRoot + '/demo.js', dirRoot + '/**/*/*.demo.js', dirRoot + '/**/*/demo.js', '!' + dirRoot + '/packages/**/*', dirRoot + '/packages/MainApp/MainApp.js'])));
    }

    config = (0, _webpackEnhanceEntryOutputStandard2.default)(config, dirRoot, libraryName, entryFiles);
    if (packageJson.bundleForNode) {
      config = (0, _webpackEnhanceConfigNode2.default)(config);
    } else {
      var username = null;
      if (packageJson.repository && packageJson.repository.url) {
        username = packageJson.repository.url.replace('://').split('/')[1];
      }
      config = (0, _webpackEnhanceConfigWeb2.default)(config, libraryName, isBuild, dirRoot, username, outputFiles);
    }
  }
  _fsExtra2.default.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = generateConfigJson();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = __webpack_require__(27);

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _stringReplaceWebpackPlugin = __webpack_require__(30);

var _stringReplaceWebpackPlugin2 = _interopRequireDefault(_stringReplaceWebpackPlugin);

var _extractTextWebpackPlugin = __webpack_require__(26);

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _nodeSassJsonImporter = __webpack_require__(28);

var _nodeSassJsonImporter2 = _interopRequireDefault(_nodeSassJsonImporter);

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(10);

var _globby2 = _interopRequireDefault(_globby);

var _pluginRegistry = __webpack_require__(18);

var _pluginRegistry2 = _interopRequireDefault(_pluginRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-mixed-operators */


function generateLoaderParamOfUse(usePlugin, moreLoaderParams) {
  if (usePlugin) {
    return { use: _extractTextWebpackPlugin2.default.extract(moreLoaderParams) };
  }
  return {
    use: [moreLoaderParams.fallback].concat(_toConsumableArray(moreLoaderParams.use))
  };
}

function moveModify(source, modifyPath, modifyContent) {
  var sources = [];
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
    sources = source;
  } else {
    sources.push(source);
  }
  var toCopy = [];
  sources.forEach(function (pattern) {
    toCopy = [].concat(_toConsumableArray(toCopy), _toConsumableArray(_globby2.default.sync(pattern)));
  });
  toCopy.forEach(function (filePath) {
    var filePathOut = filePath;
    if (modifyPath) {
      filePathOut = modifyPath(filePath);
    }
    var content = _fsExtra2.default.readFileSync(filePath, 'utf8');
    if (modifyContent) {
      content = modifyContent(content, filePath, filePathOut);
    }
    _fsExtra2.default.outputFileSync(filePathOut, content);
  });
}

function enhance(originalConfig, libraryName, isBuild, dirRoot, username, outputFiles) {
  var devHtmlPath = './index.html';
  if (isBuild) {
    moveModify(['src/import-examples/**/!(webpack.config).*', 'src/tonicExample.js'], function (filePath) {
      return filePath.replace('src/', './');
    }, function (content) {
      return content.replace(/LIBRARYNAME/g, libraryName);
    });

    (0, _pluginRegistry.register)('UglifyJsPlugin', new _webpack2.default.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }));

    var templatePath = 'src/demo/index.ejs';
    var htmlTemplateExists = _fsExtra2.default.existsSync(templatePath);
    var indexHtmlSettings = _extends({
      chunks: [outputFiles.demo]
    }, htmlTemplateExists ? { template: templatePath } : {}, {
      title: 'afasdfasdfasd',
      username: username,
      libraryName: libraryName
    });
    (0, _pluginRegistry.register)('demoIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default(_extends({
      filename: './dist/demo/index.html'
    }, indexHtmlSettings)));
  } else {
    (0, _pluginRegistry.register)('demoDevIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default({
      chunks: [outputFiles.demo],
      filename: devHtmlPath
    }));
  }

  (0, _pluginRegistry.register)('StringReplacePlugin', new _stringReplaceWebpackPlugin2.default());

  (0, _pluginRegistry.register)('LoaderOptionsPlugin', new _webpack2.default.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: _nodeSassJsonImporter2.default
      },
      context: dirRoot
    }
  }));

  var module = _extends({}, originalConfig && originalConfig.module);
  var usingExtractTextPlugin = false;
  if (isBuild) {
    (0, _pluginRegistry.register)('ExtractTextPlugin', new _extractTextWebpackPlugin2.default('[name].css'));
    usingExtractTextPlugin = true;
  }
  module.rules = [].concat(_toConsumableArray(module.rules || []), [_extends({
    test: /\.css$/
  }, generateLoaderParamOfUse(usingExtractTextPlugin, {
    fallback: 'style-loader',
    use: ['css-loader']
  })), _extends({
    test: /\.scss$/
  }, generateLoaderParamOfUse(usingExtractTextPlugin, {
    fallback: 'style-loader',
    use: ['css-loader?sourceMap', {
      loader: 'sass-loader?sourceMap',
      // Apply the JSON importer via sass-loader's options.
      options: {
        importer: _nodeSassJsonImporter2.default
      }
    }]
  })), {
    test: /\.json$/,
    loaders: ['json-loader']
  }, {
    test: /\.ejs$/,
    loader: 'ejs-compiled-loader'
  }, {
    test: /\.md/,
    loaders: ['html-loader', 'markdown-loader']
  }, {
    test: /\.js|\.html|\.ejs$/,
    exclude: [__filename],
    loader: _stringReplaceWebpackPlugin2.default.replace({
      replacements: [{
        pattern: /LIBRARYNAME/g,
        replacement: function replacement() /* match, p1, offset, string */{
          return libraryName;
        }
      }]
    })
  }]);

  var config = _extends({}, originalConfig, {
    devtool: isBuild ? 'source-map' : 'cheap-module-eval-source-map',
    module: module,
    plugins: _pluginRegistry2.default
  });
  return config;
}
exports.default = enhance;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function enhance(originalConfig, dirRoot, libraryName, entryFiles) {
  var entry = Object.keys(entryFiles).reduce(function (accum, entryName) {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  var output = {
    path: '' + dirRoot,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/'
    // publicPath: '/assets/',
  };

  return _extends({}, originalConfig, {
    entry: entry,
    output: output
  });
}
exports.default = enhance;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(25);

var _express2 = _interopRequireDefault(_express);

var _url = __webpack_require__(31);

var _url2 = _interopRequireDefault(_url);

var _webpackMakeCompiler = __webpack_require__(8);

var _webpackMakeCompiler2 = _interopRequireDefault(_webpackMakeCompiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  // This module either extends an existing express app
  // or creates a new express app
  var appIsBrandNew = false;
  if (!app) {
    appIsBrandNew = true;
    app = (0, _express2.default)();
  }

  // SPA server support
  // All URLs that suggest an HTML file request get routed the same.
  app.use(function (req, res, next) {
    var lastPartOfURL = _url2.default.parse(req.url).pathname.split('/').pop();
    var urlFormatSuggestsHtmlFileRequest = lastPartOfURL.indexOf('.') === -1 || lastPartOfURL.indexOf('.html') !== -1;
    if (urlFormatSuggestsHtmlFileRequest) {
      req.url = '/';
    }
    next();
  });

  console.info('🔷 Starting webpack ...');

  app.use((0, _webpackMakeCompiler2.default)(true));

  app.use('/images', _express2.default.static('packages/images'));
  app.use('/fonts', _express2.default.static('packages/fonts'));

  // Some Express code I don't want to lose yet.
  /*
  app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
    res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
  });
   app.get('/*', (req, res) => {
    console.log(url.parse(req.url).pathname);
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
   app.get(new RegExp('/^\/(.*)\.html$'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  */

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
}; /* eslint-disable no-console */

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _validateNpmPackageName = __webpack_require__(32);

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
  console.log('GGGGGG');
  stats.compilation.modules.forEach(function (module) {
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("string-replace-webpack-plugin");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NGI1Y2QyM2U1ZjY5ZDYwMGJkMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbImVuaGFuY2UiLCJjb25maWciLCJlbnRyeSIsIm1haW4iLCJvdXRwdXQiLCJzcGxpdCIsImZpbGVuYW1lIiwicG9wIiwicGF0aCIsImpvaW4iLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsQ29uZmlnIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwibG9hZGVyIiwiZXhjbHVkZSIsInJlc29sdmUiLCJ1c2UiLCJwbHVnaW5zIiwicHVzaCIsIkJhbm5lclBsdWdpbiIsImJhbm5lciIsInJhdyIsImVudHJ5T25seSIsImRldnRvb2wiLCJ0YXJnZXQiLCJub2RlIiwiX19kaXJuYW1lIiwiX19maWxlbmFtZSIsImV4dGVybmFscyIsIm1vZHVsZXNEaXIiLCJ3ZWJwYWNrTWFrZUNvbXBpbGVyIiwicnVuIiwiZXJyIiwic3RhdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwicGx1Z2luIiwiZmlsZU5hbWUiLCJjaGFuZ2VUaW1lIiwic3RhdFN5bmMiLCJhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZSIsInB1YmxpY1BhdGgiLCJjb2xvcnMiLCJ3YWl0VW50aWxWYWxpZCIsImVudiIsIml0ZW0iLCJ0ZXN0ZGV2ZW52Iiwid2F0Y2giLCJ0ZXN0UGF0aFBhdHRlcm4iLCJzaW5nbGVMaW5lTG9nIiwicmVxdWlyZSIsInN0ZG91dCIsInByaW50UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInByb2Nlc3MiLCJjbGVhckxpbmUiLCJwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luIiwicGFyc2VSZXF1ZXN0IiwiYXBwbHkiLCJyZXNvbHZlciIsInJlcXVlc3QiLCJjYWxsYmFjayIsIm5ld1JlcXVlc3RTdHIiLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJkb1Jlc29sdmUiLCJleHBvcnRzIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJhcmdzIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4iLCJtb2R1bGVzIiwiY3dkIiwiZXh0ZW5zaW9ucyIsInJlcXVlc3RTdHIiLCJpbmRleE9mIiwic2V0TW9kdWxlQ29uc3RhbnQiLCJleHByZXNzaW9uTmFtZSIsImZuIiwiY29tcGlsYXRpb24iLCJkYXRhIiwibm9ybWFsTW9kdWxlRmFjdG9yeSIsInBhcnNlciIsImNvbXBpbGVyUGFyc2VyUGx1Z2luIiwic3RhdGUiLCJjdXJyZW50IiwiYWRkVmFyaWFibGUiLCJyZXNvdXJjZSIsImNvbnRleHQiLCJjb25maWdQYXRoIiwiY29tbWFuZEJvZHkiLCJQbHVnaW5SZWdpc3RyeSIsInJlZ2lzdHJ5IiwibmFtZSIsInBsdWdpblJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJiaW5kIiwiZ2VuZXJhdGVDb25maWdKc29uIiwiaXNDb21tYW5kTGluZSIsImlzQnVpbGQiLCJkaXJSb290IiwiZGlycm9vdCIsInBhY2thZ2VKc29uIiwicmVhZEpzb25TeW5jIiwib3V0cHV0RmlsZXMiLCJsaWJyYXJ5TmFtZSIsImxpYnJhcnlOYW1lUmVkdWNlZCIsImxpYnJhcnkiLCJsaWJyYXJ5TWluIiwiZGVtbyIsImVudHJ5RmlsZXMiLCJNYWluQXBwIiwic3luYyIsImJ1bmRsZUZvck5vZGUiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJ1cmwiLCJyZXBsYWNlIiwiZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlIiwidXNlUGx1Z2luIiwibW9yZUxvYWRlclBhcmFtcyIsImV4dHJhY3QiLCJmYWxsYmFjayIsIm1vdmVNb2RpZnkiLCJzb3VyY2UiLCJtb2RpZnlQYXRoIiwibW9kaWZ5Q29udGVudCIsInNvdXJjZXMiLCJ0b0NvcHkiLCJwYXR0ZXJuIiwiZmlsZVBhdGgiLCJmaWxlUGF0aE91dCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJvdXRwdXRGaWxlU3luYyIsImRldkh0bWxQYXRoIiwib3B0aW1pemUiLCJVZ2xpZnlKc1BsdWdpbiIsImluY2x1ZGUiLCJtaW5pbWl6ZSIsInRlbXBsYXRlUGF0aCIsImh0bWxUZW1wbGF0ZUV4aXN0cyIsImV4aXN0c1N5bmMiLCJpbmRleEh0bWxTZXR0aW5ncyIsImNodW5rcyIsInRlbXBsYXRlIiwidGl0bGUiLCJMb2FkZXJPcHRpb25zUGx1Z2luIiwic2Fzc0xvYWRlciIsImltcG9ydGVyIiwidXNpbmdFeHRyYWN0VGV4dFBsdWdpbiIsImxvYWRlcnMiLCJyZXBsYWNlbWVudHMiLCJyZXBsYWNlbWVudCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1bSIsImVudHJ5TmFtZSIsImxlbmd0aCIsImxpYnJhcnlUYXJnZXQiLCJ1bWROYW1lZERlZmluZSIsImFwcCIsInBvcnQiLCJhcHBJc0JyYW5kTmV3IiwicmVxIiwicmVzIiwibmV4dCIsImxhc3RQYXJ0T2ZVUkwiLCJwYXJzZSIsInBhdGhuYW1lIiwidXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QiLCJzdGF0aWMiLCJsaXN0ZW4iLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwiZW5zdXJlUmVhZEpzb25TeW5jIiwicGFja2FnZURvdEpzb25QYXRoIiwicGFja2FnZURvdEpzb25Db250ZW50Iiwic2hvd1Byb2JsZW1zSW5Db25zb2xlIiwicHJvYmxlbXMiLCJtb2R1bGVSZXNvdXJjZSIsImRlcE5hbWUiLCJwcm9ibGVtTXNnIiwibXNnIiwicHJvYmxlbUluZm8iLCJmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMiLCJkZXBlbmRlbmNpZXMiLCJkZXAiLCJyYXdSZXF1ZXN0IiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkRm9yTmV3UGFja2FnZXMiLCJkZXZEZXBlbmRlbmNpZXMiLCJmaWx0ZXIiLCJ3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zIiwic2hvdWxkU2hvd1Byb2JsZW1zSW5Db25zb2xlIiwiaXNNb25vcmVwbyIsInBhY2thZ2VEb3RKc29uQ2FjaGUiLCJwYWNrYWdlc0RpciIsInBhY2thZ2VGb2xkZXJOYW1lIiwicGFja2FnZVNvbWVob3dQdWJsaWMiLCJwcml2YXRlIiwicHJpdmF0ZUZyb21HaXRodWIi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bUNuQixNQUFuQyxJQUE2Q3lDLG9CQUFqRCxFQUF1RTtBQUNyRSxZQUFNRyxjQUFjakIseUJBQXlCM00sT0FBTzRNLFlBQWhDLEVBQThDVCxxQkFBOUMsQ0FBcEI7QUFDQSxZQUFJeUIsV0FBSixFQUFpQjtBQUNmdkIsbUJBQVNyTSxPQUFPeUcsUUFBaEIsSUFBNEJtSCxXQUE1QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBckNEO0FBc0NBLE1BQUl2SixPQUFPdUcsSUFBUCxDQUFZeUIsUUFBWixFQUFzQnJCLE1BQXRCLEdBQStCLENBQS9CLElBQW9Db0MsMkJBQXhDLEVBQXFFO0FBQ25FaEIsMEJBQXNCQyxRQUF0QjtBQUNEOztBQUVELFNBQU9BLFFBQVA7QUFDRDs7a0JBRWNjLCtCOzs7Ozs7QUN4SmYsMkQ7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSx3RDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImRpc3QvZGV2X2Vudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAZGVmdWFsdC9kZXZfZW52XCIsIFtcImZzLWV4dHJhXCIsIFwid2VicGFja1wiLCBcInBhdGhcIiwgXCJ5YXJnc1wiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJnbG9iYnlcIiwgXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiwgXCJleHByZXNzXCIsIFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiLCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIsIFwic2luZ2xlLWxpbmUtbG9nXCIsIFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiwgXCJ1cmxcIiwgXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiLCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGRlZnVhbHQvZGV2X2VudlwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBkZWZ1YWx0L2Rldl9lbnZcIl0gPSBmYWN0b3J5KHJvb3RbXCJmcy1leHRyYVwiXSwgcm9vdFtcIndlYnBhY2tcIl0sIHJvb3RbXCJwYXRoXCJdLCByb290W1wieWFyZ3NcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiZ2xvYmJ5XCJdLCByb290W1wiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wiZXhwcmVzc1wiXSwgcm9vdFtcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcImh0bWwtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiXSwgcm9vdFtcInNpbmdsZS1saW5lLWxvZ1wiXSwgcm9vdFtcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1widXJsXCJdLCByb290W1widmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXSwgcm9vdFtcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIl0sIHJvb3RbXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzRiNWNkMjNlNWY2OWQ2MDBiZDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2tcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInlhcmdzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwieWFyZ3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSBmcm9tICcuL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyc7XG5cbmZ1bmN0aW9uIGVuaGFuY2UoKSB7XG4gIGxldCBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcoKTtcbiAgY29uc3QgZW50cnkgPSB7XG4gICAgbWFpbjogYXJndi5lbnRyeSxcbiAgfTtcbiAgbGV0IG91dHB1dCA9IGFyZ3Yub3V0cHV0O1xuICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJy8nKTtcblxuICBvdXRwdXQgPSB7XG4gICAgZmlsZW5hbWU6IG91dHB1dC5wb3AoKSxcbiAgICBwYXRoOiBvdXRwdXQuam9pbignLycpLFxuICB9O1xuICBjb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGVudHJ5LFxuICAgIG91dHB1dCxcbiAgfTtcbiAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnKGNvbmZpZyk7XG4gIGZzLndyaXRlRmlsZVN5bmMoJy4vX3dlYnBhY2stY29uZmlnLXByZXZpZXctY29tbWFuZGxpbmUuanNvbicsIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikpO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUuanMiLCJpbXBvcnQgd2VicGFja0NvbmZpZ1Jlc29sdmUgZnJvbSAnLi93ZWJwYWNrLWNvbmZpZy1yZXNvbHZlJztcblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZykge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihqcyk/JC8sXG4gICAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgICBleGNsdWRlOiAvKG5vZGVfbW9kdWxlc3xcXC50bXApLyxcbiAgICAgICAgICAvLyBpbmNsdWRlOiBgJHtkaXJSb290fWAsXG4gICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgIC8vICAgcHJlc2V0czogW1xuXG4gICAgICAgICAgLy8gICAgIFtcbiAgICAgICAgICAvLyAgICAgICAnZXMyMDE1JyxcbiAgICAgICAgICAvLyAgICAgICAvLyBuZWVkZWQgZm9yIHRyZWUgc2hha2luZ1xuICAgICAgICAgIC8vICAgICAgIHsgbW9kdWxlczogZmFsc2UgfSxcbiAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAvLyAgICAgJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgICAgLy8gJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICBwbHVnaW5zOiBbXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tZXMyMDE1LXNwcmVhZCcsXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkJyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICAvLyBtb2NoYSBuZWVkcyAuYmFiZWxyYyxcbiAgICAgICAgICAvLyAgIC8vIGFuZCAuYmFiZWxyYyBjYW5ub3QgdXNlIHRoZSBhYm92ZSBjb25maWdcbiAgICAgICAgICAvLyAgIC8vIHNvIGlnbm9yZSAuYmFiZWxyYyBoZXJlXG4gICAgICAgICAgLy8gICBiYWJlbHJjOiBmYWxzZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHdlYnBhY2tDb25maWdSZXNvbHZlLnJlc29sdmUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgLi4uY29uZmlnLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBub2RlRXh0ZXJuYWxzIGZyb20gJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgeyB0ZXN0OiAvcnhcXC5saXRlXFwuYWdncmVnYXRlc1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICB7IHRlc3Q6IC9hc3luY1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICAuLi4obW9kdWxlLnJ1bGVzIHx8IFtdKSxcbiAgXTtcblxuICBjb25zdCBwbHVnaW5zID0gb3JpZ2luYWxDb25maWcucGx1Z2lucyB8fCBbXTtcbiAgcGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgYmFubmVyOiAncmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKS5pbnN0YWxsKCk7JyxcbiAgICByYXc6IHRydWUsXG4gICAgZW50cnlPbmx5OiBmYWxzZSxcbiAgfSkpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtbW9kdWxlLWV2YWwtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2UtbWFwJyxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2VtYXAnLFxuICAgIC8vIGRldnRvb2w6ICdldmFsJyxcbiAgICBtb2R1bGUsXG4gICAgdGFyZ2V0OiAnbm9kZScsXG4gICAgbm9kZToge1xuICAgICAgLi4ub3JpZ2luYWxDb25maWcubm9kZSxcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9LFxuICAgIGV4dGVybmFsczogW1xuICAgICAgLi4uKG9yaWdpbmFsQ29uZmlnLmV4dGVybmFscyB8fCBbXSksXG4gICAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgICAgLy8gbW9kdWxlc0Zyb21GaWxlOiB0cnVlLFxuICAgICAgICBtb2R1bGVzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLnNwbGl0KCcvcGFja2FnZXMvZGV2X2VudicpWzBdLCAnLi9ub2RlX21vZHVsZXMnKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcGx1Z2lucyxcblxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VDb25maWdOb2RlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHdlYnBhY2tNYWtlQ29tcGlsZXIpID0+IHtcbiAgd2VicGFja01ha2VDb21waWxlcigpLnJ1bigoZXJyLCBzdGF0cykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSVU4gQ09NUElMRVInKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayB8fCBlcnIpO1xuICAgICAgaWYgKGVyci5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLmRldGFpbHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBzdGF0cy50b0pzb24oKTtcblxuICAgIGlmIChzdGF0cy5oYXNFcnJvcnMoKSkge1xuICAgICAgaW5mby5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdcXHgxYlszMW0nLCBlLCAnXFx4MWJbMG0nKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0cy5oYXNXYXJuaW5ncygpKSB7XG4gICAgICBpbmZvLndhcm5pbmdzLmZvckVhY2goKHcpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdcXHgxYlszM20nLCB3LCAnXFx4MWJbMG0nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrUnVuQ29tcGlsZXIuanMiLCJpbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCB3ZWJwYWNrRGV2TWlkZGxld2FyZSBmcm9tICd3ZWJwYWNrLWRldi1taWRkbGV3YXJlJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmltcG9ydCB3ZWJwYWNrQ29uZmlnIGZyb20gJy4vd2VicGFja0NvbmZpZyc7XG5pbXBvcnQgd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyBmcm9tICcuL3dlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoaXNEZXYpID0+IHtcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKHdlYnBhY2tDb25maWcpO1xuICBpZiAoaXNEZXYpIHtcbiAgICBjb25zb2xlLmxvZygnQ09NUElMRVIgV1RGJyk7XG4gICAgY29tcGlsZXIucGx1Z2luKCdpbnZhbGlkJywgKGZpbGVOYW1lLCBjaGFuZ2VUaW1lKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLnRyYWNlKCk7XG4gICAgICBjb25zb2xlLmxvZygnc3RhdHMnLCBmcy5zdGF0U3luYyhmaWxlTmFtZSkpO1xuICAgICAgY29uc29sZS5sb2coXCJGaWxlTmFtZTogXCIgKyBmaWxlTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZVRpbWV4OlwiICsgY2hhbmdlVGltZSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUgPSB3ZWJwYWNrRGV2TWlkZGxld2FyZShjb21waWxlciwge1xuICAgICAgcHVibGljUGF0aDogd2VicGFja0NvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbiAgICAgIHN0YXRzOiB7XG4gICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUud2FpdFVudGlsVmFsaWQoKHN0YXRzKSA9PiB7XG4gICAgICB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gY29tcGlsZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja01ha2VDb21waWxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYmJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZ2xvYmJ5XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4vY29yZS9zaGVsbENvbW1hbmQnO1xuaW1wb3J0IGplc3RTcGF3blByb2Nlc3MgZnJvbSAnLi9qZXN0L2plc3RTcGF3blByb2Nlc3MnO1xuaW1wb3J0IHdlYnBhY2tNYWtlQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrTWFrZUNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlcic7XG5pbXBvcnQgd2VicGFja0J1aWxkQ29tbWFuZExpbmUgZnJvbSAnLi9jb3JlL3dlYnBhY2tCdWlsZENvbW1hbmRMaW5lJztcbmltcG9ydCBzZXJ2ZSBmcm9tICcuL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzJztcblxuY29uc3QgZW52ID0gYXJndi5lbnY7XG5jb25zdCBpdGVtID0gYXJndi5pdGVtO1xuaWYgKGl0ZW0pIHtcbiAgc2hlbGxDb21tYW5kKGAoY2QgLi9wYWNrYWdlcy8ke2l0ZW19ICYmIG5wbSBydW4gc3RhcnQpYCk7XG59IGVsc2UgaWYgKGVudiA9PT0gJ3Rlc3QnKSB7XG4gIGplc3RTcGF3blByb2Nlc3MoYXJndi50ZXN0ZGV2ZW52LCBhcmd2LndhdGNoLCBhcmd2LnRlc3RQYXRoUGF0dGVybik7XG59IGVsc2UgaWYgKGFyZ3YuZW50cnkpIHtcbiAgd2VicGFja0J1aWxkQ29tbWFuZExpbmUoKTtcbn0gZWxzZSBpZiAoZW52ID09PSAnYnVpbGQnKSB7XG4gIHdlYnBhY2tSdW5Db21waWxlcih3ZWJwYWNrTWFrZUNvbXBpbGVyKTtcbn0gZWxzZSB7XG4gIHNlcnZlKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXZfZW52LmpzIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuY29uc3Qgc2luZ2xlTGluZUxvZyA9IHJlcXVpcmUoJ3NpbmdsZS1saW5lLWxvZycpLnN0ZG91dDtcblxuZnVuY3Rpb24gcHJpbnRQcm9ncmVzcyhwcm9ncmVzcykge1xuICBpZiAoIXByb2Nlc3MgfHwgIXByb2Nlc3Muc3Rkb3V0IHx8ICFwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2luZ2xlTGluZUxvZyhgUmVzb2x2aW5nOiAke3Byb2dyZXNzfVxcbmApO1xuICAvLyBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcbiAgLy8gcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG4gIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHByb2dyZXNzICsgYC14eHh4eHhgKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4ocGFyc2VSZXF1ZXN0ID0gKCkgPT4ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBhcHBseShyZXNvbHZlcikge1xuICAgICAgLy8gSSBkb24ndCBrbm93IHdoeSAnbW9kdWxlJyBvciAncmVzb2x2ZScgYXJlIHRob3NlIHZhbHVlcy5cbiAgICAgIC8vIFNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSB0aGUgd2F5IHRoZXkgYXJlIHVzZWQgaW4gdGhpcyBmaWxlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svZW5oYW5jZWQtcmVzb2x2ZS9ibG9iL21hc3Rlci9saWIvUmVzb2x2ZXJGYWN0b3J5LmpzXG4gICAgICAvLyBTbyB0aGV5IGNhbiBiZSBvdGhlciB2YWx1ZXMgYXMgc2VlbiBpbiB0aGF0IGZpbGUuXG4gICAgICByZXNvbHZlci5wbHVnaW4oLyogJ21vZHVsZXMnKi8gJ3Jlc29sdmUnLCBmdW5jdGlvbiAocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcHJpbnRQcm9ncmVzcyhgJHtyZXF1ZXN0LnJlcXVlc3R9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0LnJlcXVlc3QnLHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgY29uc3QgbmV3UmVxdWVzdFN0ciA9IHBhcnNlUmVxdWVzdChyZXF1ZXN0LnJlcXVlc3QpO1xuICAgICAgICBpZiAobmV3UmVxdWVzdFN0ciAmJiBuZXdSZXF1ZXN0U3RyICE9PSByZXF1ZXN0LnJlcXVlc3QpIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0LCB7XG4gICAgICAgICAgICByZXF1ZXN0OiBuZXdSZXF1ZXN0U3RyLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZG9SZXNvbHZlKCdyZXNvbHZlJywgb2JqLCAnYmxhaCBibGFoJywgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXG5gKTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4uanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwiY29uc3QgRGlyZWN0b3J5TmFtZWRXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgnZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luID0gcmVxdWlyZSgnLi9wYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlc29sdmU6IHtcbiAgICBtb2R1bGVzOiBbXG4gICAgICAvLyAnL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby9ub2RlX21vZHVsZXMnLFxuICAgICAgcGF0aC5yZXNvbHZlKCcuL3NyYy9saWJyYXJ5JyksXG4gICAgICBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3BhY2thZ2VzJyksXG4gICAgICBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4uLy4uL3BhY2thZ2VzJyksXG4gICAgICAnbm9kZV9tb2R1bGVzJyxcbiAgICAgIC8vIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi4vbW9ub3JlcG8vbm9kZV9tb2R1bGVzJyksXG4gICAgICAvLyAnLi4vbW9ub3JlcG8vbm9kZV9tb2R1bGVzJyxcbiAgICBdLFxuICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICcuanMnLFxuXG4gICAgICAvLyBXaHkgaXMgdGhpcyBoZXJlPyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ucG0vbm9ybWFsaXplLXBhY2thZ2UtZGF0YS9pc3N1ZXMvODhcbiAgICAgIC8vIElzc3VlIG9ubHkgYXBwZWFyZCB3aGVuIHdlYnBhY2sgcnVuIG9uIGNvbW1hbmQgbGluZSBmb3IgTm9kZSBidW5kbGVcbiAgICAgICcuanNvbicsXG4gICAgXSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luKChyZXF1ZXN0U3RyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0U3RyJywgcmVxdWVzdFN0cik7XG4gICAgICAgIGlmIChyZXF1ZXN0U3RyLmluZGV4T2YoJ0AnKSA9PT0gMCAmJiByZXF1ZXN0U3RyLmluZGV4T2YoJy8nKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdFN0ci5zcGxpdCgnLycpWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pLFxuICAgICAgbmV3IERpcmVjdG9yeU5hbWVkV2VicGFja1BsdWdpbih0cnVlKSxcbiAgICBdLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFjay1jb25maWctcmVzb2x2ZS5qcyIsImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHdlYnBhY2tSdW5Db21waWxlciBmcm9tICcuL3dlYnBhY2tSdW5Db21waWxlcic7XG5pbXBvcnQgd2VicGFja0NvbmZpZyBmcm9tICcuL3dlYnBhY2tDb25maWdDb21tYW5kTGluZSc7XG5cbmZ1bmN0aW9uIHdlYnBhY2tNYWtlQ29tcGlsZXIoKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHdlYnBhY2tDb25maWcoKTtcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKGNvbmZpZyk7XG4gIHJldHVybiBjb21waWxlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICB3ZWJwYWNrUnVuQ29tcGlsZXIod2VicGFja01ha2VDb21waWxlcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIlxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZykge1xuICBjb25zdCBjb25maWcgPSB7IC4uLm9yaWdpbmFsQ29uZmlnIH07XG4gIGNvbmZpZy5wbHVnaW5zID0gY29uZmlnLnBsdWdpbnMgfHwgW107XG5cbiAgLy8gSSBuZWVkZWQgX19kaXJuYW1lIGhhcmRjb2RlZCBhcyB0aGUgb3JpZ2luYWwgZGlybmFtZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8xNTk5I2lzc3VlY29tbWVudC0yNjY1ODg4OThcbiAgY29uZmlnLnBsdWdpbnMucHVzaCh7XG4gICAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICAgIGZ1bmN0aW9uIHNldE1vZHVsZUNvbnN0YW50KGV4cHJlc3Npb25OYW1lLCBmbikge1xuICAgICAgICBjb21waWxlci5wbHVnaW4oJ2NvbXBpbGF0aW9uJywgKGNvbXBpbGF0aW9uLCBkYXRhKSA9PiB7XG4gICAgICAgICAgZGF0YS5ub3JtYWxNb2R1bGVGYWN0b3J5LnBsdWdpbigncGFyc2VyJywgKHBhcnNlcikgPT4ge1xuICAgICAgICAgICAgcGFyc2VyLnBsdWdpbihgZXhwcmVzc2lvbiAke2V4cHJlc3Npb25OYW1lfWAsIGZ1bmN0aW9uIGNvbXBpbGVyUGFyc2VyUGx1Z2luKCkge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQuYWRkVmFyaWFibGUoZXhwcmVzc2lvbk5hbWUsIEpTT04uc3RyaW5naWZ5KGZuKHRoaXMuc3RhdGUubW9kdWxlKSkpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0TW9kdWxlQ29uc3RhbnQoJ19fZmlsZW5hbWUnLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb2R1bGUucmVzb3VyY2U7XG4gICAgICB9KTtcblxuICAgICAgc2V0TW9kdWxlQ29uc3RhbnQoJ19fZGlybmFtZScsIChtb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5jb250ZXh0O1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBpbXBvcnQgamVzdENvbmZpZyBmcm9tICcuL2plc3RDb25maWcnO1xuLy8gY29uc3QgY29uZmlnID0gYCcke0pTT04uc3RyaW5naWZ5KGplc3RDb25maWcpLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKX0nYDtcblxuY29uc3QgY29uZmlnUGF0aCA9IGAke19fZGlybmFtZX0vamVzdENvbmZpZy5qc2A7XG4vLyBjb25zdCBjb25maWdCYXNlUGF0aCA9IGAke19fZGlybmFtZX0vamVzdENvbmZpZ0Jhc2UuanNgO1xuLy8gcXdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCAodGVzdGRldmVudiwgd2F0Y2ggPSB0cnVlLCB0ZXN0UGF0aFBhdHRlcm4pID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIC8vIFdoeSBgQ0k9dHJ1ZSBgPyAtLS0tLSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svamVzdC9pc3N1ZXMvMjk1OVxuICBsZXQgY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgLS13YXRjaD0ke3dhdGNoICYmIHdhdGNoICE9PSAnZmFsc2UnID8gJ3RydWUnIDogJ2ZhbHNlJ30gLS1jb25maWc9JHtjb25maWdQYXRofSR7dGVzdFBhdGhQYXR0ZXJuID8gW1wiIC0tdGVzdFBhdGhQYXR0ZXJuPSdcIix0ZXN0UGF0aFBhdHRlcm4sXCInXCJdLmpvaW4oJycpIDogJyd9YDtcbiAgaWYgKHRlc3RkZXZlbnYpIHtcbiAgICAvLyBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vamVzdCAtdCB0ZXN0ZGV2ZW52IC0tY29uZmlnPSR7Y29uZmlnQmFzZVBhdGh9YDtcbiAgICAvLyBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vamVzdCAke19fZGlybmFtZX0vdGVzdGRldmVudi5qcyAgLS1jb25maWc9JHtjb25maWdCYXNlUGF0aH1gO1xuICAgIGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9tb2NoYS13ZWJwYWNrIC0tY29sb3JzIC0tcmVxdWlyZSBiYWJlbC1jb3JlL3JlZ2lzdGVyIC0td2VicGFjay1jb25maWcgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY29yZS93ZWJwYWNrQ29uZmlnTW9jaGEuanMnKX0gXFxcIiR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vdGVzdGRldmVudjIuanMnKX1cXFwiIC0tcmVxdWlyZSBzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJgO1xuICB9XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kQm9keSxcbiAgXTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgeyBzdGRpbzogJ2luaGVyaXQnIH0pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vamVzdC9qZXN0U3Bhd25Qcm9jZXNzLmpzIiwiY2xhc3MgUGx1Z2luUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0ge307XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gIH1cbiAgcmVnaXN0ZXIobmFtZSwgcGx1Z2luKSB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgdGhpcy5yZWdpc3RyeVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IHBsdWdpblJlZ2lzdHJ5ID0gbmV3IFBsdWdpblJlZ2lzdHJ5KCk7XG5jb25zdCBwbHVnaW5zID0gcGx1Z2luUmVnaXN0cnkucGx1Z2lucztcbmNvbnN0IHJlZ2lzdGVyID0gcGx1Z2luUmVnaXN0cnkucmVnaXN0ZXIuYmluZChwbHVnaW5SZWdpc3RyeSk7XG5leHBvcnQgeyByZWdpc3RlciB9O1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2lucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpblJlZ2lzdHJ5LmpzIiwiLypcbiAgVGhpcyBmaWxlcyByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdoZW4gY2FsbGVkIGdlbmVyYXRlcyBhIHdlYnBhY2sgY29uZmlnIGpzb24uXG4gIGBhcmd2YCBpcyBwYXNzZWQgaW50byB0aGlzIGZ1bmN0aW9uLlxuXG4gIHdoZW4gYGFyZ3YuZW52ID09PSBmYWxzZXlgXG4gICAgVGhpcyBjb21waWxlcyBmb3IgYSBkZXYgc2VydmVyIHZpYSB3ZWJwYWNrLWRldi1taWRkbGV3YXJlLiAgTm8gZmlsZXMgYXJlIGNyZWF0ZWQgdG8gZGlzayxcbiAgICBvbmx5IGNyZWF0ZWQgaW4gbWVtb3J5LlxuXG4gIHdoZW4gYGFyZ3YuZW52ID09PSAnYnVpbGQnYFxuICAgIFRoaXMgY29tcGlsZXMgZmlsZXMgdG8gZGlzayBpbiBhIC9kaXN0IGZvbGRlciBhbmQgYSAvZGVtbyBmb2xkZXIuXG5cbiAgd2hlbiBgYXJndi5kaXJyb290ID09PSBzb21lIHBhdGhgXG4gICAgVGhpcyBpcyB1c2VkIHdoZW4gZGV2X2VudiBpdHNlbGYgaXMgY29tcGlsZWQuXG4gICAgVGhpcyB2ZXJ5IGZpbGUgaXMgY29tcGlsZWQgYWNjb3JkaW5nIHRoZSBjb25maWcgc2V0IGJ5IHRoaXMgZmlsZS5cbiAgICBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIGRldl9lbnYgcG9ydGFibGUgdmlhIG5wbS5cbiAgICBiYWJlbC1ub2RlIG5lZWRzIHRvIGNvbXBpbGUgdGhpcyBkZXZfZW52IHRvIHdvcmssXG4gICAgYnV0IHRoaXMgZG9lcyBub3QgcGxheSB3ZWxsIHdoZW4gZGV2X2VudiBpcyBpbiBhIG5vZGVfbW9kdWxlcyBmb2xkZXIuXG4gICAgU28gd2UgbmVlZCB0byBjb21waWxlIGRldl9lbnYgYmVmb3JlIHB1Ymxpc2hpbmcgdG8gbnBtLlxuICAgIERpcmVjdG9yeSBwYXRocyBuZWVkIHRvIGJlIHR3ZWFrZWQgdG8gYWNjb21wbGlzaCB0aGlzLFxuICAgIGFuZCB0aGF0J3Mgd2hhdCBgYXJndi5kaXJyb290YCBoZWxwcyB3aXRoLlxuXG5cbiAgVGhpcyBmdW5jdGlvbiBpcyBhbHNvIGFmZmVjdGVkIGJ5IHBhY2thZ2UuanNvbi5cblxuICB3aGVuIHBhY2thZ2UuanNvbi5idW5kbGVGb3JOb2RlID09PSB0cnVlXG4gICAgaW4gY29uanVuY3Rpb24gd2l0aCBgYXJndi5lbnYgPT09ICdidWlsZCdgLCB0aGUgYnVuZGxlIHdpbGxcbiAgICBoYXZlIHNwZWNpYWwgY29uc2lkZXJhdGlvbiBmb3IgYSBub2RlIHBsYXRmb3JtLlxuICAgIE9ubHkgYXBwbGljYXRpb24gZmlsZXMgd2lsbCBiZSBidW5kbGVkLlxuICAgIG5vZGVfbW9kdWxlcyBhbmQgbm9kZSBidWlsdC1pbiByZXF1aXJlcyB3aWxsIG5vdCBiZSBidW5kbGVkLlxuKi9cbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSBmcm9tICcuL2NvcmUvd2VicGFja0VuaGFuY2VDb25maWdOb2RlJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYiBmcm9tICcuL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUVudHJ5T3V0cHV0U3RhbmRhcmQgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUVudHJ5T3V0cHV0U3RhbmRhcmQnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyBmcm9tICcuL2NvcmUvd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnJztcbmltcG9ydCB3ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUgZnJvbSAnLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZSc7XG4vLyBpbXBvcnQgYWFhOCBmcm9tICdAZGVmdWFsdC9hYWE4Jztcbi8vIGNvbnNvbGUubG9nKGFhYTgpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmN3ZCgpKTtcbi8vIC8vIGNvbnNvbGUubG9nKGFyZ3YpO1xuLy8gY29uc29sZS5sb2coe1xuLy8gICBlbnRyeTogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGFyZ3YuZW50cnkpLFxuLy8gICBvdXRwdXQ6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBhcmd2Lm91dHB1dCksXG4vLyB9KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb25maWdKc29uKCkge1xuICBjb25zdCBpc0NvbW1hbmRMaW5lID0gYXJndi5lbnRyeTtcbiAgbGV0IGNvbmZpZztcbiAgaWYgKGlzQ29tbWFuZExpbmUpIHtcbiAgICBjb25maWcgPSB3ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcoKTtcbiAgICBjb25zdCBpc0J1aWxkID0gYXJndi5lbnYgPT09ICdidWlsZCc7XG4gICAgY29uc3QgZGlyUm9vdCA9IGFyZ3YuZGlycm9vdCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IHBhY2thZ2VKc29uID0gZnMucmVhZEpzb25TeW5jKGAke2RpclJvb3R9L3BhY2thZ2UuanNvbmApO1xuICAgIGNvbnN0IG91dHB1dEZpbGVzID0ge307XG4gICAgY29uc3QgbGlicmFyeU5hbWUgPSBwYWNrYWdlSnNvbi5uYW1lO1xuICAgIGNvbnN0IGxpYnJhcnlOYW1lUmVkdWNlZCA9IGxpYnJhcnlOYW1lLnNwbGl0KCcvJylbMV0gfHwgbGlicmFyeU5hbWUuc3BsaXQoJy8nKVswXTtcbiAgICBpZiAoaXNCdWlsZCkge1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeSA9IGBkaXN0LyR7bGlicmFyeU5hbWVSZWR1Y2VkfWA7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5TWluID0gYGRpc3QvJHtsaWJyYXJ5TmFtZVJlZHVjZWR9Lm1pbmA7XG4gICAgICBvdXRwdXRGaWxlcy5kZW1vID0gJ2Rpc3QvZGVtby9pbmRleCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dEZpbGVzLmRlbW8gPSAnYm9vdCc7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5ID0gYCR7bGlicmFyeU5hbWVSZWR1Y2VkfWA7XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5RmlsZXM7XG4gICAgaWYgKGFyZ3ZbJ2RlbW8tZW50cnknXSkge1xuICAgICAgZW50cnlGaWxlcyA9IHtcbiAgICAgICAgW291dHB1dEZpbGVzLmRlbW9dOiBbYXJndlsnZGVtby1lbnRyeSddXSxcbiAgICAgIH07XG4gICAgLy8gfSBlbHNlIGlmIChhcmd2Wyd0YWlsb3Itd2ViLWJ1bmRsZS1mb3ItdGVzdGluZy1vZi1kZXYtZW52LWl0c2VsZiddKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgZW50cnlGaWxlcyA9IHtcbiAgICAvLyAgICAgW291dHB1dEZpbGVzLmRlbW9dOiBbYCR7ZGlyUm9vdH0vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qc2BdLFxuICAgIC8vICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlGaWxlcyA9IHtcbiAgICAgICAgTWFpbkFwcDogZ2xvYmJ5LnN5bmMoW2Ake2RpclJvb3R9L3BhY2thZ2VzL01haW5BcHAvTWFpbkFwcC5qc2BdKSxcbiAgICAgICAgW291dHB1dEZpbGVzLmxpYnJhcnldOiBnbG9iYnkuc3luYyhbXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vJHtsaWJyYXJ5TmFtZVJlZHVjZWR9LmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS9zcmMvbGlicmFyeS9pbmRleC5qc2AsXG4gICAgICAgIF0pLFxuICAgICAgICAuLi4oXG4gICAgICAgICAgb3V0cHV0RmlsZXMubGlicmFyeU1pbiA/IHtcbiAgICAgICAgICAgIFtvdXRwdXRGaWxlcy5saWJyYXJ5TWluXTogZ2xvYmJ5LnN5bmMoW2Ake2RpclJvb3R9L3NyYy9saWJyYXJ5L2luZGV4LmpzYF0pLFxuICAgICAgICAgIH0gOiB7fVxuICAgICAgICApLFxuICAgICAgICBbb3V0cHV0RmlsZXMuZGVtb106IGdsb2JieS5zeW5jKFtcbiAgICAgICAgICBgJHtkaXJSb290fS8qLmRlbW8uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9L2RlbW8uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9LyoqLyovKi5kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS8qKi8qL2RlbW8uanNgLFxuICAgICAgICAgIGAhJHtkaXJSb290fS9wYWNrYWdlcy8qKi8qYCxcbiAgICAgICAgICBgJHtkaXJSb290fS9wYWNrYWdlcy9NYWluQXBwL01haW5BcHAuanNgLFxuICAgICAgICBdKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkKFxuICAgICAgY29uZmlnLCBkaXJSb290LCBsaWJyYXJ5TmFtZSwgZW50cnlGaWxlcyxcbiAgICApO1xuICAgIGlmIChwYWNrYWdlSnNvbi5idW5kbGVGb3JOb2RlKSB7XG4gICAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUoY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHVzZXJuYW1lID0gbnVsbDtcbiAgICAgIGlmIChwYWNrYWdlSnNvbi5yZXBvc2l0b3J5ICYmIHBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsKSB7XG4gICAgICAgIHVzZXJuYW1lID0gcGFja2FnZUpzb24ucmVwb3NpdG9yeS51cmwucmVwbGFjZSgnOi8vJykuc3BsaXQoJy8nKVsxXTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQ29uZmlnV2ViKFxuICAgICAgICBjb25maWcsIGxpYnJhcnlOYW1lLCBpc0J1aWxkLCBkaXJSb290LCB1c2VybmFtZSwgb3V0cHV0RmlsZXMsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBmcy53cml0ZUZpbGVTeW5jKCcuL193ZWJwYWNrLWNvbmZpZy1wcmV2aWV3Lmpzb24nLCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpKTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb25maWdKc29uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBIdG1sV2VicGFja1BsdWdpbiBmcm9tICdodG1sLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBTdHJpbmdSZXBsYWNlUGx1Z2luIGZyb20gJ3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBFeHRyYWN0VGV4dFBsdWdpbiBmcm9tICdleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IGpzb25JbXBvcnRlciBmcm9tICdub2RlLXNhc3MtanNvbi1pbXBvcnRlcic7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknO1xuaW1wb3J0IHBsdWdpbnMsIHsgcmVnaXN0ZXIgYXMgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICcuL3BsdWdpblJlZ2lzdHJ5JztcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNlUGx1Z2luLCBtb3JlTG9hZGVyUGFyYW1zKSB7XG4gIGlmICh1c2VQbHVnaW4pIHtcbiAgICByZXR1cm4geyB1c2U6IEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3QobW9yZUxvYWRlclBhcmFtcykgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVzZTogW21vcmVMb2FkZXJQYXJhbXMuZmFsbGJhY2ssIC4uLm1vcmVMb2FkZXJQYXJhbXMudXNlXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbW92ZU1vZGlmeShzb3VyY2UsIG1vZGlmeVBhdGgsIG1vZGlmeUNvbnRlbnQpIHtcbiAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgc291cmNlcyA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICBzb3VyY2VzLnB1c2goc291cmNlKTtcbiAgfVxuICBsZXQgdG9Db3B5ID0gW107XG4gIHNvdXJjZXMuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgIHRvQ29weSA9IFtcbiAgICAgIC4uLnRvQ29weSxcbiAgICAgIC4uLmdsb2JieS5zeW5jKHBhdHRlcm4pLFxuICAgIF07XG4gIH0pO1xuICB0b0NvcHkuZm9yRWFjaCgoZmlsZVBhdGgpID0+IHtcbiAgICBsZXQgZmlsZVBhdGhPdXQgPSBmaWxlUGF0aDtcbiAgICBpZiAobW9kaWZ5UGF0aCkge1xuICAgICAgZmlsZVBhdGhPdXQgPSBtb2RpZnlQYXRoKGZpbGVQYXRoKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgaWYgKG1vZGlmeUNvbnRlbnQpIHtcbiAgICAgIGNvbnRlbnQgPSBtb2RpZnlDb250ZW50KGNvbnRlbnQsIGZpbGVQYXRoLCBmaWxlUGF0aE91dCk7XG4gICAgfVxuICAgIGZzLm91dHB1dEZpbGVTeW5jKGZpbGVQYXRoT3V0LCBjb250ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcsIGxpYnJhcnlOYW1lLCBpc0J1aWxkLCBkaXJSb290LCB1c2VybmFtZSwgb3V0cHV0RmlsZXMpIHtcbiAgY29uc3QgZGV2SHRtbFBhdGggPSAnLi9pbmRleC5odG1sJztcbiAgaWYgKGlzQnVpbGQpIHtcbiAgICBtb3ZlTW9kaWZ5KFsnc3JjL2ltcG9ydC1leGFtcGxlcy8qKi8hKHdlYnBhY2suY29uZmlnKS4qJywgJ3NyYy90b25pY0V4YW1wbGUuanMnXSwgKGZpbGVQYXRoKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZVBhdGgucmVwbGFjZSgnc3JjLycsICcuLycpO1xuICAgIH0sXG4gICAgKGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL0xJQlJBUllOQU1FL2csIGxpYnJhcnlOYW1lKTtcbiAgICB9KTtcblxuICAgIHJlZ2lzdGVyUGx1Z2luKCdVZ2xpZnlKc1BsdWdpbicsIG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IC9cXC5taW5cXC5qcyQvLFxuICAgICAgbWluaW1pemU6IHRydWUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgdGVtcGxhdGVQYXRoID0gJ3NyYy9kZW1vL2luZGV4LmVqcyc7XG4gICAgY29uc3QgaHRtbFRlbXBsYXRlRXhpc3RzID0gZnMuZXhpc3RzU3luYyh0ZW1wbGF0ZVBhdGgpO1xuICAgIGNvbnN0IGluZGV4SHRtbFNldHRpbmdzID0ge1xuICAgICAgY2h1bmtzOiBbb3V0cHV0RmlsZXMuZGVtb10sXG4gICAgICAuLi4oXG4gICAgICAgIGh0bWxUZW1wbGF0ZUV4aXN0cyA/IHsgdGVtcGxhdGU6IHRlbXBsYXRlUGF0aCB9IDoge31cbiAgICAgICksXG4gICAgICB0aXRsZTogJ2FmYXNkZmFzZGZhc2QnLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBsaWJyYXJ5TmFtZSxcbiAgICB9O1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdkZW1vSW5kZXgtSHRtbFdlYnBhY2tQbHVnaW4nLCBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgZmlsZW5hbWU6ICcuL2Rpc3QvZGVtby9pbmRleC5odG1sJyxcbiAgICAgIC4uLmluZGV4SHRtbFNldHRpbmdzLFxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclBsdWdpbignZGVtb0RldkluZGV4LUh0bWxXZWJwYWNrUGx1Z2luJywgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIGNodW5rczogW291dHB1dEZpbGVzLmRlbW9dLFxuICAgICAgZmlsZW5hbWU6IGRldkh0bWxQYXRoLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlZ2lzdGVyUGx1Z2luKCdTdHJpbmdSZXBsYWNlUGx1Z2luJywgbmV3IFN0cmluZ1JlcGxhY2VQbHVnaW4oKSk7XG5cbiAgcmVnaXN0ZXJQbHVnaW4oJ0xvYWRlck9wdGlvbnNQbHVnaW4nLCBuZXcgd2VicGFjay5Mb2FkZXJPcHRpb25zUGx1Z2luKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBzYXNzTG9hZGVyOiB7XG4gICAgICAgIGltcG9ydGVyOiBqc29uSW1wb3J0ZXIsXG4gICAgICB9LFxuICAgICAgY29udGV4dDogZGlyUm9vdCxcbiAgICB9LFxuICB9KSk7XG5cblxuICBjb25zdCBtb2R1bGUgPSB7IC4uLihvcmlnaW5hbENvbmZpZyAmJiBvcmlnaW5hbENvbmZpZy5tb2R1bGUpIH07XG4gIGxldCB1c2luZ0V4dHJhY3RUZXh0UGx1Z2luID0gZmFsc2U7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ0V4dHJhY3RUZXh0UGx1Z2luJywgbmV3IEV4dHJhY3RUZXh0UGx1Z2luKCdbbmFtZV0uY3NzJykpO1xuICAgIHVzaW5nRXh0cmFjdFRleHRQbHVnaW4gPSB0cnVlO1xuICB9XG4gIG1vZHVsZS5ydWxlcyA9IFtcbiAgICAuLi4obW9kdWxlLnJ1bGVzIHx8IFtdKSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAuLi5nZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNpbmdFeHRyYWN0VGV4dFBsdWdpbiwge1xuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgIHVzZTogWydjc3MtbG9hZGVyJ10sXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5zY3NzJC8sXG4gICAgICAuLi5nZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNpbmdFeHRyYWN0VGV4dFBsdWdpbiwge1xuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgIHVzZTogW1xuICAgICAgICAgICdjc3MtbG9hZGVyP3NvdXJjZU1hcCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnc2Fzcy1sb2FkZXI/c291cmNlTWFwJyxcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBKU09OIGltcG9ydGVyIHZpYSBzYXNzLWxvYWRlcidzIG9wdGlvbnMuXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGltcG9ydGVyOiBqc29uSW1wb3J0ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5qc29uJC8sXG4gICAgICBsb2FkZXJzOiBbJ2pzb24tbG9hZGVyJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuZWpzJC8sXG4gICAgICBsb2FkZXI6ICdlanMtY29tcGlsZWQtbG9hZGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5tZC8sXG4gICAgICBsb2FkZXJzOiBbJ2h0bWwtbG9hZGVyJywgJ21hcmtkb3duLWxvYWRlciddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmpzfFxcLmh0bWx8XFwuZWpzJC8sXG4gICAgICBleGNsdWRlOiBbX19maWxlbmFtZV0sXG4gICAgICBsb2FkZXI6IFN0cmluZ1JlcGxhY2VQbHVnaW4ucmVwbGFjZSh7XG4gICAgICAgIHJlcGxhY2VtZW50czogW3tcbiAgICAgICAgICBwYXR0ZXJuOiAvTElCUkFSWU5BTUUvZyxcbiAgICAgICAgICByZXBsYWNlbWVudCgvKiBtYXRjaCwgcDEsIG9mZnNldCwgc3RyaW5nICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlicmFyeU5hbWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICB9KSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICBkZXZ0b29sOiBpc0J1aWxkID8gJ3NvdXJjZS1tYXAnIDogJ2NoZWFwLW1vZHVsZS1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIG1vZHVsZSxcbiAgICBwbHVnaW5zLFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwiZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZywgZGlyUm9vdCwgbGlicmFyeU5hbWUsIGVudHJ5RmlsZXMpIHtcbiAgY29uc3QgZW50cnkgPSBPYmplY3Qua2V5cyhlbnRyeUZpbGVzKS5yZWR1Y2UoKGFjY3VtLCBlbnRyeU5hbWUpID0+IHtcbiAgICBpZiAoZW50cnlGaWxlc1tlbnRyeU5hbWVdLmxlbmd0aCkge1xuICAgICAgYWNjdW1bZW50cnlOYW1lXSA9IGVudHJ5RmlsZXNbZW50cnlOYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIHBhdGg6IGAke2RpclJvb3R9YCxcbiAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXG4gICAgbGlicmFyeTogbGlicmFyeU5hbWUsXG4gICAgbGlicmFyeVRhcmdldDogJ3VtZCcsXG4gICAgdW1kTmFtZWREZWZpbmU6IHRydWUsXG4gICAgcHVibGljUGF0aDogJy8nLFxuICAgIC8vIHB1YmxpY1BhdGg6ICcvYXNzZXRzLycsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICBlbnRyeSxcbiAgICBvdXRwdXQsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB3ZWJwYWNrTWFrZUNvbXBpbGVyIGZyb20gJy4vd2VicGFja01ha2VDb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHAsIHBvcnQgPSAzMDAwKSA9PiB7XG4gIC8vIFRoaXMgbW9kdWxlIGVpdGhlciBleHRlbmRzIGFuIGV4aXN0aW5nIGV4cHJlc3MgYXBwXG4gIC8vIG9yIGNyZWF0ZXMgYSBuZXcgZXhwcmVzcyBhcHBcbiAgbGV0IGFwcElzQnJhbmROZXcgPSBmYWxzZTtcbiAgaWYgKCFhcHApIHtcbiAgICBhcHBJc0JyYW5kTmV3ID0gdHJ1ZTtcbiAgICBhcHAgPSBleHByZXNzKCk7XG4gIH1cblxuICAvLyBTUEEgc2VydmVyIHN1cHBvcnRcbiAgLy8gQWxsIFVSTHMgdGhhdCBzdWdnZXN0IGFuIEhUTUwgZmlsZSByZXF1ZXN0IGdldCByb3V0ZWQgdGhlIHNhbWUuXG4gIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgbGFzdFBhcnRPZlVSTCA9IHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IHVybEZvcm1hdFN1Z2dlc3RzSHRtbEZpbGVSZXF1ZXN0ID0gKFxuICAgICAgbGFzdFBhcnRPZlVSTC5pbmRleE9mKCcuJykgPT09IC0xIHx8IGxhc3RQYXJ0T2ZVUkwuaW5kZXhPZignLmh0bWwnKSAhPT0gLTFcbiAgICApO1xuICAgIGlmICh1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCkge1xuICAgICAgcmVxLnVybCA9ICcvJztcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9KTtcblxuICBjb25zb2xlLmluZm8oJ/CflLcgU3RhcnRpbmcgd2VicGFjayAuLi4nKTtcblxuICBhcHAudXNlKHdlYnBhY2tNYWtlQ29tcGlsZXIodHJ1ZSkpO1xuXG4gIGFwcC51c2UoJy9pbWFnZXMnLCBleHByZXNzLnN0YXRpYygncGFja2FnZXMvaW1hZ2VzJykpO1xuICBhcHAudXNlKCcvZm9udHMnLCBleHByZXNzLnN0YXRpYygncGFja2FnZXMvZm9udHMnKSk7XG5cbiAgLy8gU29tZSBFeHByZXNzIGNvZGUgSSBkb24ndCB3YW50IHRvIGxvc2UgeWV0LlxuICAvKlxuICBhcHAuZ2V0KG5ldyBSZWdFeHAoJ15bL10oaW1hZ2VzfGZvbnRzKVsvXSguKyknKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsIGBwYWNrYWdlcyR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lfWApKTtcbiAgfSk7XG5cbiAgYXBwLmdldCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUpO1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2luZGV4Lmh0bWwnKSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQobmV3IFJlZ0V4cCgnL15cXC8oLiopXFwuaHRtbCQnKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnaW5kZXguaHRtbCcpKTtcbiAgfSk7XG4gICovXG5cbiAgaWYgKGFwcElzQnJhbmROZXcpIHtcbiAgICBhcHAubGlzdGVuKHBvcnQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICfwn4yOIExpc3RlbmluZyBvbiBwb3J0ICVzLiBPcGVuIHVwIGh0dHA6Ly9sb2NhbGhvc3Q6JXMvIGluIHlvdXIgYnJvd3Nlci4nLFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhcHA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0V4cHJlc3NTZXJ2ZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHZhbGlkYXRlTnBtUGFja2FnZU5hbWUgZnJvbSAndmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZSc7XG5cbmZ1bmN0aW9uIGVuc3VyZVRyYWlsaW5nU2xhc2goc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVSZWFkSnNvblN5bmMocGFja2FnZURvdEpzb25QYXRoKSB7XG4gIGxldCBwYWNrYWdlRG90SnNvbkNvbnRlbnQ7XG4gIHRyeSB7XG4gICAgcGFja2FnZURvdEpzb25Db250ZW50ID0gZnMucmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwYWNrYWdlRG90SnNvbkNvbnRlbnQgPSB7fTtcbiAgfVxuICByZXR1cm4gcGFja2FnZURvdEpzb25Db250ZW50O1xufVxuXG5mdW5jdGlvbiBzaG93UHJvYmxlbXNJbkNvbnNvbGUocHJvYmxlbXMpIHtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmluZm8oJ1xceDFiWzFtJywgJ1xcblByb2JsZW1zIHdpdGggZGVwZW5kZW5jaWVzJywgJ1xceDFiWzBtJyk7XG4gIH1cbiAgT2JqZWN0LmtleXMocHJvYmxlbXMpLmZvckVhY2goKG1vZHVsZVJlc291cmNlKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlszNm0nLCAnXFxuUHJvYmxlbSBpbiBtb2R1bGUgd2l0aCBgaW1wb3J0YCBzdGF0ZW1lbnQ6JywgJ1xceDFiWzBtJyk7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgICR7bW9kdWxlUmVzb3VyY2V9YCwgJ1xceDFiWzBtJyk7XG4gICAgT2JqZWN0LmtleXMocHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdKS5mb3JFYWNoKChkZXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9ibGVtTXNnID0gcHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdW2RlcE5hbWVdLm1zZztcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ0RlcGVuZGVuY3kgcmVxdWVzdGVkIGFzOicsICdcXHgxYlswbScpO1xuICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgICR7ZGVwTmFtZX1gLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgYE1lc3NhZ2U6ICR7cHJvYmxlbU1zZ31gLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnN0IHByb2JsZW1JbmZvID0gcHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdW2RlcE5hbWVdLmluZm87XG4gICAgICBpZiAocHJvYmxlbUluZm8pIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgLSAke3Byb2JsZW1JbmZvLmpvaW4oJ1xcbiAtICcpfWAsICdcXHgxYlswbScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZERlcGVuZGVuY2llc1Byb2JsZW1zKGRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KSB7XG4gIGNvbnN0IHByb2JsZW1zID0ge307XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2goKGRlcCkgPT4ge1xuICAgIGlmIChkZXAubW9kdWxlKSB7XG4gICAgICBjb25zdCByYXdSZXF1ZXN0ID0gZGVwLm1vZHVsZS5yYXdSZXF1ZXN0O1xuICAgICAgLy8gaWYgKHJhd1JlcXVlc3QuaW5kZXhPZignL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby9wYWNrYWdlcycpID09PSAwKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ2RlcFdURicsIHJhd1JlcXVlc3QsICdcXHgxYlswbScpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnZGVwV1RGJywgZGVwKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ2RlcEdHRycsIHJhd1JlcXVlc3QsICdcXHgxYlswbScpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnZGVwR0dHJywgZGVwKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbm90IGEgcmVsYXRpdmUgZGVwZW5kZW5jeVxuICAgICAgLy8gbm90IGFuIGFic29sdXQgZGVwZW5kZW5jeVxuICAgICAgLy8gd2UgYXJlIG9ubHkgY29uY2VybmVkIHdpdGggZGVwZW5lbmNpZXMgcmVmZXJlbmNlZCBsaWtlXG4gICAgICAvLyBgaW1wb3J0IGFzZGYgZnJvbSAnYXNkZic7YFxuICAgICAgLy8gb3JcbiAgICAgIC8vIGBpbXBvcnQgcXdlciBmcm9tICdhc2RmL3F3ZXInO2BgXG4gICAgICAvLyBvclxuICAgICAgLy8gYGltcG9ydCBhc2RmIGZyb20gJ0BkZWZ1YWx0L2FzZGYnO2BgXG4gICAgICAvLyBUaGVzZSBkZXBlbmRlbmNpZXMgd2lsbCBiZSBlaXRoZXIgaW4gL25vZGVfbW9kdWxlcy8gb3IgL3BhY2thZ2VzLyxcbiAgICAgIC8vIHRoZSBsYXR0ZXIgZm9yIG9ubHkgbW9ub3JlcG8gdXNlLlxuICAgICAgaWYgKHJhd1JlcXVlc3QgJiYgcmF3UmVxdWVzdC5pbmRleE9mKCcuJykgIT09IDAgJiYgcmF3UmVxdWVzdC5pbmRleE9mKCcvJykgIT09IDApIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRlTnBtUGFja2FnZU5hbWUocmF3UmVxdWVzdCk7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0LnZhbGlkRm9yTmV3UGFja2FnZXMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50IHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRlcGVuZGVuY2llcyB8fFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGVwZW5kZW5jaWVzW3Jhd1JlcXVlc3RdXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGV2RGVwZW5kZW5jaWVzIHx8XG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXZEZXBlbmRlbmNpZXNbcmF3UmVxdWVzdF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJvYmxlbXNbcmF3UmVxdWVzdF0gPSB7IG1zZzogJ01JU1NJTkcgRlJPTSBQQUNLQUdFLkpTT04nIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGluZm8gPSBbXG4gICAgICAgICAgICAuLi52YWxpZGF0aW9uUmVzdWx0Lndhcm5pbmdzIHx8IFtdLCAuLi52YWxpZGF0aW9uUmVzdWx0LmVycm9ycyB8fCBbXSxcbiAgICAgICAgICBdLmZpbHRlcigobXNnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbXNnICE9PSAnbmFtZSBjYW4gb25seSBjb250YWluIFVSTC1mcmllbmRseSBjaGFyYWN0ZXJzJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgICBpZiAoaW5mby5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb2JsZW1zW3Jhd1JlcXVlc3RdID0ge1xuICAgICAgICAgICAgICBtc2c6ICdCQUQgRk9STUFUVElORycsXG4gICAgICAgICAgICAgIGluZm86IFsuLi52YWxpZGF0aW9uUmVzdWx0Lndhcm5pbmdzIHx8IFtdLCAuLi52YWxpZGF0aW9uUmVzdWx0LmVycm9ycyB8fCBbXV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPyBwcm9ibGVtcyA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMoc3RhdHMsIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSA9IHRydWUpIHtcbiAgY29uc3QgaXNNb25vcmVwbyA9IGZzLmV4aXN0c1N5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vcGFja2FnZXNgKTtcblxuICBjb25zdCBwYWNrYWdlRG90SnNvbkNhY2hlID0ge307XG4gIGNvbnN0IHByb2JsZW1zID0ge307XG4gIGNvbnNvbGUubG9nKCdHR0dHR0cnKTtcbiAgc3RhdHMuY29tcGlsYXRpb24ubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAvLyBvbmx5IGNvbmNlcm5lZCB3aXRoIG1vZHVsZSBlbnRyaWVzIGZyb20gL3BhY2thZ2VzLyBmb2xkZXIgKG5vdCBub2RlX21vZHVsZXMpXG4gICAgaWYgKFxuICAgICAgbW9kdWxlLnJlc291cmNlICYmXG4gICAgICBtb2R1bGUucmVzb3VyY2UuaW5kZXhPZignbm9kZV9tb2R1bGVzJykgPT09IC0xXG4gICAgKSB7XG4gICAgICBsZXQgcGFja2FnZURvdEpzb25QYXRoO1xuICAgICAgaWYgKGlzTW9ub3JlcG8pIHtcbiAgICAgICAgbGV0IHBhY2thZ2VzRGlyID0gYCR7cHJvY2Vzcy5jd2QoKX0vcGFja2FnZXNgO1xuICAgICAgICBwYWNrYWdlc0RpciA9IGVuc3VyZVRyYWlsaW5nU2xhc2gocGFja2FnZXNEaXIpO1xuICAgICAgICAvLyBnZXQgc3Vic3RyaW5nIGZyb20gZmlyc3QgdHJhaWxpbmcgc2xhc2ggYWZ0ZXIgd2hhdGV2ZXIgcGFja2FnZXNEaXIgaXNcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLnJlc291cmNlKTtcbiAgICAgICAgY29uc3QgcGFja2FnZUZvbGRlck5hbWUgPSBtb2R1bGUucmVzb3VyY2Uuc3BsaXQocGFja2FnZXNEaXIpWzFdLnNwbGl0KCcvJylbMF07XG4gICAgICAgIHBhY2thZ2VEb3RKc29uUGF0aCA9IGAke3BhY2thZ2VzRGlyfSR7cGFja2FnZUZvbGRlck5hbWV9L3BhY2thZ2UuanNvbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWNrYWdlRG90SnNvblBhdGggPSBgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlLmpzb25gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWNrYWdlRG90SnNvbkNvbnRlbnQgPSAoXG4gICAgICAgIHBhY2thZ2VEb3RKc29uQ2FjaGVbcGFja2FnZURvdEpzb25QYXRoXSB8fCBlbnN1cmVSZWFkSnNvblN5bmMocGFja2FnZURvdEpzb25QYXRoKVxuICAgICAgKTtcbiAgICAgIHBhY2thZ2VEb3RKc29uQ2FjaGVbcGFja2FnZURvdEpzb25QYXRoXSA9IHBhY2thZ2VEb3RKc29uQ29udGVudDtcblxuICAgICAgY29uc3QgcGFja2FnZVNvbWVob3dQdWJsaWMgPSAoXG4gICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQucHJpdmF0ZSB8fFxuICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LnByaXZhdGVGcm9tR2l0aHViXG4gICAgICApO1xuXG4gICAgICAvLyBvbmx5IGNvbmNlcm5lZCBpZiBtb2R1bGUncyBwYWNrYWdlLmpzb24gaXMgbm90IGVtcHR5LFxuICAgICAgLy8gYW5kIGlmIGl0IGlzIHB1YmxpYyBvbiBlaXRoZXIgTlBNIG9yIEdpcmh1YlxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhY2thZ2VEb3RKc29uQ29udGVudCkubGVuZ3RoICYmIHBhY2thZ2VTb21laG93UHVibGljKSB7XG4gICAgICAgIGNvbnN0IGRlcFByb2JsZW1zID0gZmluZERlcGVuZGVuY2llc1Byb2JsZW1zKG1vZHVsZS5kZXBlbmRlbmNpZXMsIHBhY2thZ2VEb3RKc29uQ29udGVudCk7XG4gICAgICAgIGlmIChkZXBQcm9ibGVtcykge1xuICAgICAgICAgIHByb2JsZW1zW21vZHVsZS5yZXNvdXJjZV0gPSBkZXBQcm9ibGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlmIChPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoID4gMCAmJiBzaG91bGRTaG93UHJvYmxlbXNJbkNvbnNvbGUpIHtcbiAgICBzaG93UHJvYmxlbXNJbkNvbnNvbGUocHJvYmxlbXMpO1xuICB9XG5cbiAgcmV0dXJuIHByb2JsZW1zO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0bWwtd2VicGFjay1wbHVnaW5cIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaW5nbGUtbGluZS1sb2dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmxcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==