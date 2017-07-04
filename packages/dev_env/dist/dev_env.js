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
        exclude: /node_modules/
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

var _webpackConfig = __webpack_require__(19);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackParseStatsForDepProblems = __webpack_require__(23);

var _webpackParseStatsForDepProblems2 = _interopRequireDefault(_webpackParseStatsForDepProblems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (isDev) {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  if (isDev) {
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
    modules: [path.resolve('./src/library'), path.resolve(process.cwd(), 'packages'), path.resolve(process.cwd(), '../../packages'), 'node_modules'],
    extensions: ['.js',

    // Why is this here? : https://github.com/npm/normalize-package-data/issues/88
    // Issue only appeard when webpack run on command line for Node bundle
    '.json'],
    plugins: [parseRequestResolvePlugin(function (requestStr) {
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
  stats.compilation.modules.forEach(function (module) {
    // only concerned with module entries from /packages/ folder (not node_modules)
    if (module.resource && module.resource.indexOf('node_modules') === -1) {
      var packageDotJsonPath = void 0;
      if (isMonorepo) {
        var packagesDir = process.cwd() + '/packages';
        packagesDir = ensureTrailingSlash(packagesDir);
        // get substring from first trailing slash after whatever packagesDir is
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzM2MmQ5MjE5NTU4NzU2OGRhZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbImVuaGFuY2UiLCJjb25maWciLCJlbnRyeSIsIm1haW4iLCJvdXRwdXQiLCJzcGxpdCIsImZpbGVuYW1lIiwicG9wIiwicGF0aCIsImpvaW4iLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsQ29uZmlnIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwibG9hZGVyIiwiZXhjbHVkZSIsInJlc29sdmUiLCJ1c2UiLCJwbHVnaW5zIiwicHVzaCIsIkJhbm5lclBsdWdpbiIsImJhbm5lciIsInJhdyIsImVudHJ5T25seSIsImRldnRvb2wiLCJ0YXJnZXQiLCJub2RlIiwiX19kaXJuYW1lIiwiX19maWxlbmFtZSIsImV4dGVybmFscyIsIm1vZHVsZXNEaXIiLCJ3ZWJwYWNrTWFrZUNvbXBpbGVyIiwicnVuIiwiZXJyIiwic3RhdHMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwiYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUiLCJwdWJsaWNQYXRoIiwiY29sb3JzIiwid2FpdFVudGlsVmFsaWQiLCJlbnYiLCJpdGVtIiwidGVzdGRldmVudiIsIndhdGNoIiwidGVzdFBhdGhQYXR0ZXJuIiwic2luZ2xlTGluZUxvZyIsInJlcXVpcmUiLCJzdGRvdXQiLCJwcmludFByb2dyZXNzIiwicHJvZ3Jlc3MiLCJwcm9jZXNzIiwiY2xlYXJMaW5lIiwicGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbiIsInBhcnNlUmVxdWVzdCIsImFwcGx5IiwicmVzb2x2ZXIiLCJwbHVnaW4iLCJyZXF1ZXN0IiwiY2FsbGJhY2siLCJuZXdSZXF1ZXN0U3RyIiwib2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9SZXNvbHZlIiwiZXhwb3J0cyIsImNvbW1hbmRUb1J1biIsIm9wdGlvbnMiLCJzdGRpbyIsImtpbGxQYXJlbnRPbkV4aXQiLCJjb21tYW5kIiwiYXJncyIsImNoaWxkUHJvY2VzcyIsInByb2MiLCJzcGF3biIsIm9uIiwiY29kZSIsInNpZ25hbCIsImtpbGwiLCJwaWQiLCJleGl0IiwiRGlyZWN0b3J5TmFtZWRXZWJwYWNrUGx1Z2luIiwibW9kdWxlcyIsImN3ZCIsImV4dGVuc2lvbnMiLCJyZXF1ZXN0U3RyIiwiaW5kZXhPZiIsInNldE1vZHVsZUNvbnN0YW50IiwiZXhwcmVzc2lvbk5hbWUiLCJmbiIsImNvbXBpbGF0aW9uIiwiZGF0YSIsIm5vcm1hbE1vZHVsZUZhY3RvcnkiLCJwYXJzZXIiLCJjb21waWxlclBhcnNlclBsdWdpbiIsInN0YXRlIiwiY3VycmVudCIsImFkZFZhcmlhYmxlIiwicmVzb3VyY2UiLCJjb250ZXh0IiwiY29uZmlnUGF0aCIsImNvbW1hbmRCb2R5IiwiUGx1Z2luUmVnaXN0cnkiLCJyZWdpc3RyeSIsIm5hbWUiLCJwbHVnaW5SZWdpc3RyeSIsInJlZ2lzdGVyIiwiYmluZCIsImdlbmVyYXRlQ29uZmlnSnNvbiIsImlzQ29tbWFuZExpbmUiLCJpc0J1aWxkIiwiZGlyUm9vdCIsImRpcnJvb3QiLCJwYWNrYWdlSnNvbiIsInJlYWRKc29uU3luYyIsIm91dHB1dEZpbGVzIiwibGlicmFyeU5hbWUiLCJsaWJyYXJ5TmFtZVJlZHVjZWQiLCJsaWJyYXJ5IiwibGlicmFyeU1pbiIsImRlbW8iLCJlbnRyeUZpbGVzIiwiTWFpbkFwcCIsInN5bmMiLCJidW5kbGVGb3JOb2RlIiwidXNlcm5hbWUiLCJyZXBvc2l0b3J5IiwidXJsIiwicmVwbGFjZSIsImdlbmVyYXRlTG9hZGVyUGFyYW1PZlVzZSIsInVzZVBsdWdpbiIsIm1vcmVMb2FkZXJQYXJhbXMiLCJleHRyYWN0IiwiZmFsbGJhY2siLCJtb3ZlTW9kaWZ5Iiwic291cmNlIiwibW9kaWZ5UGF0aCIsIm1vZGlmeUNvbnRlbnQiLCJzb3VyY2VzIiwidG9Db3B5IiwicGF0dGVybiIsImZpbGVQYXRoIiwiZmlsZVBhdGhPdXQiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwib3V0cHV0RmlsZVN5bmMiLCJkZXZIdG1sUGF0aCIsIm9wdGltaXplIiwiVWdsaWZ5SnNQbHVnaW4iLCJpbmNsdWRlIiwibWluaW1pemUiLCJ0ZW1wbGF0ZVBhdGgiLCJodG1sVGVtcGxhdGVFeGlzdHMiLCJleGlzdHNTeW5jIiwiaW5kZXhIdG1sU2V0dGluZ3MiLCJjaHVua3MiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiTG9hZGVyT3B0aW9uc1BsdWdpbiIsInNhc3NMb2FkZXIiLCJpbXBvcnRlciIsInVzaW5nRXh0cmFjdFRleHRQbHVnaW4iLCJsb2FkZXJzIiwicmVwbGFjZW1lbnRzIiwicmVwbGFjZW1lbnQiLCJrZXlzIiwicmVkdWNlIiwiYWNjdW0iLCJlbnRyeU5hbWUiLCJsZW5ndGgiLCJsaWJyYXJ5VGFyZ2V0IiwidW1kTmFtZWREZWZpbmUiLCJhcHAiLCJwb3J0IiwiYXBwSXNCcmFuZE5ldyIsInJlcSIsInJlcyIsIm5leHQiLCJsYXN0UGFydE9mVVJMIiwicGFyc2UiLCJwYXRobmFtZSIsInVybEZvcm1hdFN1Z2dlc3RzSHRtbEZpbGVSZXF1ZXN0Iiwic3RhdGljIiwibGlzdGVuIiwiZW5zdXJlVHJhaWxpbmdTbGFzaCIsInN0ciIsImVuc3VyZVJlYWRKc29uU3luYyIsInBhY2thZ2VEb3RKc29uUGF0aCIsInBhY2thZ2VEb3RKc29uQ29udGVudCIsInNob3dQcm9ibGVtc0luQ29uc29sZSIsInByb2JsZW1zIiwibW9kdWxlUmVzb3VyY2UiLCJkZXBOYW1lIiwicHJvYmxlbU1zZyIsIm1zZyIsInByb2JsZW1JbmZvIiwiZmluZERlcGVuZGVuY2llc1Byb2JsZW1zIiwiZGVwZW5kZW5jaWVzIiwiZGVwIiwicmF3UmVxdWVzdCIsInZhbGlkYXRpb25SZXN1bHQiLCJ2YWxpZEZvck5ld1BhY2thZ2VzIiwiZGV2RGVwZW5kZW5jaWVzIiwiZmlsdGVyIiwid2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyIsInNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSIsImlzTW9ub3JlcG8iLCJwYWNrYWdlRG90SnNvbkNhY2hlIiwicGFja2FnZXNEaXIiLCJwYWNrYWdlRm9sZGVyTmFtZSIsInBhY2thZ2VTb21laG93UHVibGljIiwicHJpdmF0ZSIsInByaXZhdGVGcm9tR2l0aHViIiwiZGVwUHJvYmxlbXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FB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QUNBQSw0Qzs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImRpc3QvZGV2X2Vudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAZGVmdWFsdC9kZXZfZW52XCIsIFtcImZzLWV4dHJhXCIsIFwid2VicGFja1wiLCBcInBhdGhcIiwgXCJ5YXJnc1wiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJnbG9iYnlcIiwgXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiwgXCJleHByZXNzXCIsIFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiLCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIsIFwic2luZ2xlLWxpbmUtbG9nXCIsIFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiwgXCJ1cmxcIiwgXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiLCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGRlZnVhbHQvZGV2X2VudlwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBkZWZ1YWx0L2Rldl9lbnZcIl0gPSBmYWN0b3J5KHJvb3RbXCJmcy1leHRyYVwiXSwgcm9vdFtcIndlYnBhY2tcIl0sIHJvb3RbXCJwYXRoXCJdLCByb290W1wieWFyZ3NcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiZ2xvYmJ5XCJdLCByb290W1wiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wiZXhwcmVzc1wiXSwgcm9vdFtcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcImh0bWwtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiXSwgcm9vdFtcInNpbmdsZS1saW5lLWxvZ1wiXSwgcm9vdFtcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1widXJsXCJdLCByb290W1widmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXSwgcm9vdFtcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIl0sIHJvb3RbXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmMzNjJkOTIxOTU1ODc1NjhkYWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2tcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInlhcmdzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwieWFyZ3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSBmcm9tICcuL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyc7XG5cbmZ1bmN0aW9uIGVuaGFuY2UoKSB7XG4gIGxldCBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcoKTtcbiAgY29uc3QgZW50cnkgPSB7XG4gICAgbWFpbjogYXJndi5lbnRyeSxcbiAgfTtcbiAgbGV0IG91dHB1dCA9IGFyZ3Yub3V0cHV0O1xuICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJy8nKTtcblxuICBvdXRwdXQgPSB7XG4gICAgZmlsZW5hbWU6IG91dHB1dC5wb3AoKSxcbiAgICBwYXRoOiBvdXRwdXQuam9pbignLycpLFxuICB9O1xuICBjb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGVudHJ5LFxuICAgIG91dHB1dCxcbiAgfTtcbiAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnKGNvbmZpZyk7XG4gIGZzLndyaXRlRmlsZVN5bmMoJy4vX3dlYnBhY2stY29uZmlnLXByZXZpZXctY29tbWFuZGxpbmUuanNvbicsIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikpO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUuanMiLCJpbXBvcnQgd2VicGFja0NvbmZpZ1Jlc29sdmUgZnJvbSAnLi93ZWJwYWNrLWNvbmZpZy1yZXNvbHZlJztcblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZykge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihqcyk/JC8sXG4gICAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgICAvLyBpbmNsdWRlOiBgJHtkaXJSb290fWAsXG4gICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgIC8vICAgcHJlc2V0czogW1xuXG4gICAgICAgICAgLy8gICAgIFtcbiAgICAgICAgICAvLyAgICAgICAnZXMyMDE1JyxcbiAgICAgICAgICAvLyAgICAgICAvLyBuZWVkZWQgZm9yIHRyZWUgc2hha2luZ1xuICAgICAgICAgIC8vICAgICAgIHsgbW9kdWxlczogZmFsc2UgfSxcbiAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAvLyAgICAgJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgICAgLy8gJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICBwbHVnaW5zOiBbXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tZXMyMDE1LXNwcmVhZCcsXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkJyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICAvLyBtb2NoYSBuZWVkcyAuYmFiZWxyYyxcbiAgICAgICAgICAvLyAgIC8vIGFuZCAuYmFiZWxyYyBjYW5ub3QgdXNlIHRoZSBhYm92ZSBjb25maWdcbiAgICAgICAgICAvLyAgIC8vIHNvIGlnbm9yZSAuYmFiZWxyYyBoZXJlXG4gICAgICAgICAgLy8gICBiYWJlbHJjOiBmYWxzZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHdlYnBhY2tDb25maWdSZXNvbHZlLnJlc29sdmUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgLi4uY29uZmlnLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBub2RlRXh0ZXJuYWxzIGZyb20gJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgeyB0ZXN0OiAvcnhcXC5saXRlXFwuYWdncmVnYXRlc1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICB7IHRlc3Q6IC9hc3luY1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICAuLi4obW9kdWxlLnJ1bGVzIHx8IFtdKSxcbiAgXTtcblxuICBjb25zdCBwbHVnaW5zID0gb3JpZ2luYWxDb25maWcucGx1Z2lucyB8fCBbXTtcbiAgcGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgYmFubmVyOiAncmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKS5pbnN0YWxsKCk7JyxcbiAgICByYXc6IHRydWUsXG4gICAgZW50cnlPbmx5OiBmYWxzZSxcbiAgfSkpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtbW9kdWxlLWV2YWwtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2UtbWFwJyxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2VtYXAnLFxuICAgIC8vIGRldnRvb2w6ICdldmFsJyxcbiAgICBtb2R1bGUsXG4gICAgdGFyZ2V0OiAnbm9kZScsXG4gICAgbm9kZToge1xuICAgICAgLi4ub3JpZ2luYWxDb25maWcubm9kZSxcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9LFxuICAgIGV4dGVybmFsczogW1xuICAgICAgLi4uKG9yaWdpbmFsQ29uZmlnLmV4dGVybmFscyB8fCBbXSksXG4gICAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgICAgLy8gbW9kdWxlc0Zyb21GaWxlOiB0cnVlLFxuICAgICAgICBtb2R1bGVzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLnNwbGl0KCcvcGFja2FnZXMvZGV2X2VudicpWzBdLCAnLi9ub2RlX21vZHVsZXMnKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcGx1Z2lucyxcblxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VDb25maWdOb2RlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHdlYnBhY2tNYWtlQ29tcGlsZXIpID0+IHtcbiAgd2VicGFja01ha2VDb21waWxlcigpLnJ1bigoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVycik7XG4gICAgICBpZiAoZXJyLmRldGFpbHMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIuZGV0YWlscyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHN0YXRzLnRvSnNvbigpO1xuXG4gICAgaWYgKHN0YXRzLmhhc0Vycm9ycygpKSB7XG4gICAgICBpbmZvLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMxbScsIGUsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmhhc1dhcm5pbmdzKCkpIHtcbiAgICAgIGluZm8ud2FybmluZ3MuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1xceDFiWzMzbScsIHcsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnO1xuXG5pbXBvcnQgd2VicGFja0NvbmZpZyBmcm9tICcuL3dlYnBhY2tDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMgZnJvbSAnLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgKGlzRGV2KSA9PiB7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uc3QgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUgPSB3ZWJwYWNrRGV2TWlkZGxld2FyZShjb21waWxlciwge1xuICAgICAgcHVibGljUGF0aDogd2VicGFja0NvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbiAgICAgIHN0YXRzOiB7XG4gICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUud2FpdFVudGlsVmFsaWQoKHN0YXRzKSA9PiB7XG4gICAgICB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gY29tcGlsZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja01ha2VDb21waWxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYmJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZ2xvYmJ5XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4vY29yZS9zaGVsbENvbW1hbmQnO1xuaW1wb3J0IGplc3RTcGF3blByb2Nlc3MgZnJvbSAnLi9qZXN0L2plc3RTcGF3blByb2Nlc3MnO1xuaW1wb3J0IHdlYnBhY2tNYWtlQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrTWFrZUNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlcic7XG5pbXBvcnQgd2VicGFja0J1aWxkQ29tbWFuZExpbmUgZnJvbSAnLi9jb3JlL3dlYnBhY2tCdWlsZENvbW1hbmRMaW5lJztcbmltcG9ydCBzZXJ2ZSBmcm9tICcuL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzJztcblxuY29uc3QgZW52ID0gYXJndi5lbnY7XG5jb25zdCBpdGVtID0gYXJndi5pdGVtO1xuaWYgKGl0ZW0pIHtcbiAgc2hlbGxDb21tYW5kKGAoY2QgLi9wYWNrYWdlcy8ke2l0ZW19ICYmIG5wbSBydW4gc3RhcnQpYCk7XG59IGVsc2UgaWYgKGVudiA9PT0gJ3Rlc3QnKSB7XG4gIGplc3RTcGF3blByb2Nlc3MoYXJndi50ZXN0ZGV2ZW52LCBhcmd2LndhdGNoLCBhcmd2LnRlc3RQYXRoUGF0dGVybik7XG59IGVsc2UgaWYgKGFyZ3YuZW50cnkpIHtcbiAgd2VicGFja0J1aWxkQ29tbWFuZExpbmUoKTtcbn0gZWxzZSBpZiAoZW52ID09PSAnYnVpbGQnKSB7XG4gIHdlYnBhY2tSdW5Db21waWxlcih3ZWJwYWNrTWFrZUNvbXBpbGVyKTtcbn0gZWxzZSB7XG4gIHNlcnZlKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZXZfZW52LmpzIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuY29uc3Qgc2luZ2xlTGluZUxvZyA9IHJlcXVpcmUoJ3NpbmdsZS1saW5lLWxvZycpLnN0ZG91dDtcblxuZnVuY3Rpb24gcHJpbnRQcm9ncmVzcyhwcm9ncmVzcykge1xuICBpZiAoIXByb2Nlc3MgfHwgIXByb2Nlc3Muc3Rkb3V0IHx8ICFwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2luZ2xlTGluZUxvZyhgUmVzb2x2aW5nOiAke3Byb2dyZXNzfVxcbmApO1xuICAvLyBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcbiAgLy8gcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG4gIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHByb2dyZXNzICsgYC14eHh4eHhgKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4ocGFyc2VSZXF1ZXN0ID0gKCkgPT4ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBhcHBseShyZXNvbHZlcikge1xuICAgICAgLy8gSSBkb24ndCBrbm93IHdoeSAnbW9kdWxlJyBvciAncmVzb2x2ZScgYXJlIHRob3NlIHZhbHVlcy5cbiAgICAgIC8vIFNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSB0aGUgd2F5IHRoZXkgYXJlIHVzZWQgaW4gdGhpcyBmaWxlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svZW5oYW5jZWQtcmVzb2x2ZS9ibG9iL21hc3Rlci9saWIvUmVzb2x2ZXJGYWN0b3J5LmpzXG4gICAgICAvLyBTbyB0aGV5IGNhbiBiZSBvdGhlciB2YWx1ZXMgYXMgc2VlbiBpbiB0aGF0IGZpbGUuXG4gICAgICByZXNvbHZlci5wbHVnaW4oLyogJ21vZHVsZXMnKi8gJ3Jlc29sdmUnLCBmdW5jdGlvbiAocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcHJpbnRQcm9ncmVzcyhgJHtyZXF1ZXN0LnJlcXVlc3R9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0LnJlcXVlc3QnLHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgY29uc3QgbmV3UmVxdWVzdFN0ciA9IHBhcnNlUmVxdWVzdChyZXF1ZXN0LnJlcXVlc3QpO1xuICAgICAgICBpZiAobmV3UmVxdWVzdFN0ciAmJiBuZXdSZXF1ZXN0U3RyICE9PSByZXF1ZXN0LnJlcXVlc3QpIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0LCB7XG4gICAgICAgICAgICByZXF1ZXN0OiBuZXdSZXF1ZXN0U3RyLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZG9SZXNvbHZlKCdyZXNvbHZlJywgb2JqLCAnYmxhaCBibGFoJywgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXG5gKTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4uanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwiY29uc3QgRGlyZWN0b3J5TmFtZWRXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgnZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luJyk7XG5jb25zdCBwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luID0gcmVxdWlyZSgnLi9wYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVzb2x2ZToge1xuICAgIG1vZHVsZXM6IFtcbiAgICAgIHBhdGgucmVzb2x2ZSgnLi9zcmMvbGlicmFyeScpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcycpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLi8uLi9wYWNrYWdlcycpLFxuICAgICAgJ25vZGVfbW9kdWxlcycsXG4gICAgXSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICAnLmpzJyxcblxuICAgICAgLy8gV2h5IGlzIHRoaXMgaGVyZT8gOiBodHRwczovL2dpdGh1Yi5jb20vbnBtL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvaXNzdWVzLzg4XG4gICAgICAvLyBJc3N1ZSBvbmx5IGFwcGVhcmQgd2hlbiB3ZWJwYWNrIHJ1biBvbiBjb21tYW5kIGxpbmUgZm9yIE5vZGUgYnVuZGxlXG4gICAgICAnLmpzb24nLFxuICAgIF0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbigocmVxdWVzdFN0cikgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdFN0ci5pbmRleE9mKCdAJykgPT09IDAgJiYgcmVxdWVzdFN0ci5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RTdHIuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIG5ldyBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4odHJ1ZSksXG4gICAgXSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJpbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrUnVuQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tDb25maWcgZnJvbSAnLi93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuXG5mdW5jdGlvbiB3ZWJwYWNrTWFrZUNvbXBpbGVyKCkge1xuICBjb25zdCBjb25maWcgPSB3ZWJwYWNrQ29uZmlnKCk7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayhjb25maWcpO1xuICByZXR1cm4gY29tcGlsZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUuanMiLCJcbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgY29uZmlnID0geyAuLi5vcmlnaW5hbENvbmZpZyB9O1xuICBjb25maWcucGx1Z2lucyA9IGNvbmZpZy5wbHVnaW5zIHx8IFtdO1xuXG4gIC8vIEkgbmVlZGVkIF9fZGlybmFtZSBoYXJkY29kZWQgYXMgdGhlIG9yaWdpbmFsIGRpcm5hbWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvMTU5OSNpc3N1ZWNvbW1lbnQtMjY2NTg4ODk4XG4gIGNvbmZpZy5wbHVnaW5zLnB1c2goe1xuICAgIGFwcGx5KGNvbXBpbGVyKSB7XG4gICAgICBmdW5jdGlvbiBzZXRNb2R1bGVDb25zdGFudChleHByZXNzaW9uTmFtZSwgZm4pIHtcbiAgICAgICAgY29tcGlsZXIucGx1Z2luKCdjb21waWxhdGlvbicsIChjb21waWxhdGlvbiwgZGF0YSkgPT4ge1xuICAgICAgICAgIGRhdGEubm9ybWFsTW9kdWxlRmFjdG9yeS5wbHVnaW4oJ3BhcnNlcicsIChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIHBhcnNlci5wbHVnaW4oYGV4cHJlc3Npb24gJHtleHByZXNzaW9uTmFtZX1gLCBmdW5jdGlvbiBjb21waWxlclBhcnNlclBsdWdpbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LmFkZFZhcmlhYmxlKGV4cHJlc3Npb25OYW1lLCBKU09OLnN0cmluZ2lmeShmbih0aGlzLnN0YXRlLm1vZHVsZSkpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2ZpbGVuYW1lJywgKG1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnJlc291cmNlO1xuICAgICAgfSk7XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2Rpcm5hbWUnLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dDtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaW1wb3J0IGplc3RDb25maWcgZnJvbSAnLi9qZXN0Q29uZmlnJztcbi8vIGNvbnN0IGNvbmZpZyA9IGAnJHtKU09OLnN0cmluZ2lmeShqZXN0Q29uZmlnKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIil9J2A7XG5cbmNvbnN0IGNvbmZpZ1BhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWcuanNgO1xuLy8gY29uc3QgY29uZmlnQmFzZVBhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWdCYXNlLmpzYDtcbi8vIHF3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgKHRlc3RkZXZlbnYsIHdhdGNoID0gdHJ1ZSwgdGVzdFBhdGhQYXR0ZXJuKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICAvLyBXaHkgYENJPXRydWUgYD8gLS0tLS0gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2plc3QvaXNzdWVzLzI5NTlcbiAgbGV0IGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9qZXN0IC0td2F0Y2g9JHt3YXRjaCAmJiB3YXRjaCAhPT0gJ2ZhbHNlJyA/ICd0cnVlJyA6ICdmYWxzZSd9IC0tY29uZmlnPSR7Y29uZmlnUGF0aH0ke3Rlc3RQYXRoUGF0dGVybiA/IFtcIiAtLXRlc3RQYXRoUGF0dGVybj0nXCIsdGVzdFBhdGhQYXR0ZXJuLFwiJ1wiXS5qb2luKCcnKSA6ICcnfWA7XG4gIGlmICh0ZXN0ZGV2ZW52KSB7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgLXQgdGVzdGRldmVudiAtLWNvbmZpZz0ke2NvbmZpZ0Jhc2VQYXRofWA7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgJHtfX2Rpcm5hbWV9L3Rlc3RkZXZlbnYuanMgIC0tY29uZmlnPSR7Y29uZmlnQmFzZVBhdGh9YDtcbiAgICBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vbW9jaGEtd2VicGFjayAtLWNvbG9ycyAtLXJlcXVpcmUgYmFiZWwtY29yZS9yZWdpc3RlciAtLXdlYnBhY2stY29uZmlnICR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NvcmUvd2VicGFja0NvbmZpZ01vY2hhLmpzJyl9IFxcXCIke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3Rlc3RkZXZlbnYyLmpzJyl9XFxcIiAtLXJlcXVpcmUgc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyYDtcbiAgfVxuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZEJvZHksXG4gIF07XG4gIGNvbnN0IHByb2MgPSBjaGlsZF9wcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIHsgc3RkaW86ICdpbmhlcml0JyB9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsImNsYXNzIFBsdWdpblJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHt9O1xuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuICB9XG4gIHJlZ2lzdGVyKG5hbWUsIHBsdWdpbikge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeVtuYW1lXSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgIHRoaXMucmVnaXN0cnlbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBwbHVnaW5SZWdpc3RyeSA9IG5ldyBQbHVnaW5SZWdpc3RyeSgpO1xuY29uc3QgcGx1Z2lucyA9IHBsdWdpblJlZ2lzdHJ5LnBsdWdpbnM7XG5jb25zdCByZWdpc3RlciA9IHBsdWdpblJlZ2lzdHJ5LnJlZ2lzdGVyLmJpbmQocGx1Z2luUmVnaXN0cnkpO1xuZXhwb3J0IHsgcmVnaXN0ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHBsdWdpbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5SZWdpc3RyeS5qcyIsIi8qXG4gIFRoaXMgZmlsZXMgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGNhbGxlZCBnZW5lcmF0ZXMgYSB3ZWJwYWNrIGNvbmZpZyBqc29uLlxuICBgYXJndmAgaXMgcGFzc2VkIGludG8gdGhpcyBmdW5jdGlvbi5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gZmFsc2V5YFxuICAgIFRoaXMgY29tcGlsZXMgZm9yIGEgZGV2IHNlcnZlciB2aWEgd2VicGFjay1kZXYtbWlkZGxld2FyZS4gIE5vIGZpbGVzIGFyZSBjcmVhdGVkIHRvIGRpc2ssXG4gICAgb25seSBjcmVhdGVkIGluIG1lbW9yeS5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gJ2J1aWxkJ2BcbiAgICBUaGlzIGNvbXBpbGVzIGZpbGVzIHRvIGRpc2sgaW4gYSAvZGlzdCBmb2xkZXIgYW5kIGEgL2RlbW8gZm9sZGVyLlxuXG4gIHdoZW4gYGFyZ3YuZGlycm9vdCA9PT0gc29tZSBwYXRoYFxuICAgIFRoaXMgaXMgdXNlZCB3aGVuIGRldl9lbnYgaXRzZWxmIGlzIGNvbXBpbGVkLlxuICAgIFRoaXMgdmVyeSBmaWxlIGlzIGNvbXBpbGVkIGFjY29yZGluZyB0aGUgY29uZmlnIHNldCBieSB0aGlzIGZpbGUuXG4gICAgVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBkZXZfZW52IHBvcnRhYmxlIHZpYSBucG0uXG4gICAgYmFiZWwtbm9kZSBuZWVkcyB0byBjb21waWxlIHRoaXMgZGV2X2VudiB0byB3b3JrLFxuICAgIGJ1dCB0aGlzIGRvZXMgbm90IHBsYXkgd2VsbCB3aGVuIGRldl9lbnYgaXMgaW4gYSBub2RlX21vZHVsZXMgZm9sZGVyLlxuICAgIFNvIHdlIG5lZWQgdG8gY29tcGlsZSBkZXZfZW52IGJlZm9yZSBwdWJsaXNoaW5nIHRvIG5wbS5cbiAgICBEaXJlY3RvcnkgcGF0aHMgbmVlZCB0byBiZSB0d2Vha2VkIHRvIGFjY29tcGxpc2ggdGhpcyxcbiAgICBhbmQgdGhhdCdzIHdoYXQgYGFyZ3YuZGlycm9vdGAgaGVscHMgd2l0aC5cblxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgYWxzbyBhZmZlY3RlZCBieSBwYWNrYWdlLmpzb24uXG5cbiAgd2hlbiBwYWNrYWdlLmpzb24uYnVuZGxlRm9yTm9kZSA9PT0gdHJ1ZVxuICAgIGluIGNvbmp1bmN0aW9uIHdpdGggYGFyZ3YuZW52ID09PSAnYnVpbGQnYCwgdGhlIGJ1bmRsZSB3aWxsXG4gICAgaGF2ZSBzcGVjaWFsIGNvbnNpZGVyYXRpb24gZm9yIGEgbm9kZSBwbGF0Zm9ybS5cbiAgICBPbmx5IGFwcGxpY2F0aW9uIGZpbGVzIHdpbGwgYmUgYnVuZGxlZC5cbiAgICBub2RlX21vZHVsZXMgYW5kIG5vZGUgYnVpbHQtaW4gcmVxdWlyZXMgd2lsbCBub3QgYmUgYnVuZGxlZC5cbiovXG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdXZWIgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYic7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkIGZyb20gJy4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyc7XG5pbXBvcnQgd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lIGZyb20gJy4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuLy8gaW1wb3J0IGFhYTggZnJvbSAnQGRlZnVhbHQvYWFhOCc7XG4vLyBjb25zb2xlLmxvZyhhYWE4KTtcblxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5jd2QoKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhhcmd2KTtcbi8vIGNvbnNvbGUubG9nKHtcbi8vICAgZW50cnk6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBhcmd2LmVudHJ5KSxcbi8vICAgb3V0cHV0OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYXJndi5vdXRwdXQpLFxuLy8gfSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29uZmlnSnNvbigpIHtcbiAgY29uc3QgaXNDb21tYW5kTGluZSA9IGFyZ3YuZW50cnk7XG4gIGxldCBjb25maWc7XG4gIGlmIChpc0NvbW1hbmRMaW5lKSB7XG4gICAgY29uZmlnID0gd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnKCk7XG4gICAgY29uc3QgaXNCdWlsZCA9IGFyZ3YuZW52ID09PSAnYnVpbGQnO1xuICAgIGNvbnN0IGRpclJvb3QgPSBhcmd2LmRpcnJvb3QgfHwgcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBwYWNrYWdlSnNvbiA9IGZzLnJlYWRKc29uU3luYyhgJHtkaXJSb290fS9wYWNrYWdlLmpzb25gKTtcbiAgICBjb25zdCBvdXRwdXRGaWxlcyA9IHt9O1xuICAgIGNvbnN0IGxpYnJhcnlOYW1lID0gcGFja2FnZUpzb24ubmFtZTtcbiAgICBjb25zdCBsaWJyYXJ5TmFtZVJlZHVjZWQgPSBsaWJyYXJ5TmFtZS5zcGxpdCgnLycpWzFdIHx8IGxpYnJhcnlOYW1lLnNwbGl0KCcvJylbMF07XG4gICAgaWYgKGlzQnVpbGQpIHtcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnkgPSBgZGlzdC8ke2xpYnJhcnlOYW1lUmVkdWNlZH1gO1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeU1pbiA9IGBkaXN0LyR7bGlicmFyeU5hbWVSZWR1Y2VkfS5taW5gO1xuICAgICAgb3V0cHV0RmlsZXMuZGVtbyA9ICdkaXN0L2RlbW8vaW5kZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRGaWxlcy5kZW1vID0gJ2Jvb3QnO1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeSA9IGAke2xpYnJhcnlOYW1lUmVkdWNlZH1gO1xuICAgIH1cblxuICAgIGxldCBlbnRyeUZpbGVzO1xuICAgIGlmIChhcmd2WydkZW1vLWVudHJ5J10pIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2FyZ3ZbJ2RlbW8tZW50cnknXV0sXG4gICAgICB9O1xuICAgIC8vIH0gZWxzZSBpZiAoYXJndlsndGFpbG9yLXdlYi1idW5kbGUtZm9yLXRlc3Rpbmctb2YtZGV2LWVudi1pdHNlbGYnXSkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGVudHJ5RmlsZXMgPSB7XG4gICAgLy8gICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2Ake2RpclJvb3R9L3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanNgXSxcbiAgICAvLyAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIE1haW5BcHA6IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9wYWNrYWdlcy9NYWluQXBwL01haW5BcHAuanNgXSksXG4gICAgICAgIFtvdXRwdXRGaWxlcy5saWJyYXJ5XTogZ2xvYmJ5LnN5bmMoW1xuICAgICAgICAgIGAke2RpclJvb3R9LyR7bGlicmFyeU5hbWVSZWR1Y2VkfS5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vc3JjL2xpYnJhcnkvaW5kZXguanNgLFxuICAgICAgICBdKSxcbiAgICAgICAgLi4uKFxuICAgICAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnlNaW4gPyB7XG4gICAgICAgICAgICBbb3V0cHV0RmlsZXMubGlicmFyeU1pbl06IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9zcmMvbGlicmFyeS9pbmRleC5qc2BdKSxcbiAgICAgICAgICB9IDoge31cbiAgICAgICAgKSxcbiAgICAgICAgW291dHB1dEZpbGVzLmRlbW9dOiBnbG9iYnkuc3luYyhbXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKi5kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS9kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS8qKi8qLyouZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKiovKi9kZW1vLmpzYCxcbiAgICAgICAgICBgISR7ZGlyUm9vdH0vcGFja2FnZXMvKiovKmAsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vcGFja2FnZXMvTWFpbkFwcC9NYWluQXBwLmpzYCxcbiAgICAgICAgXSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZChcbiAgICAgIGNvbmZpZywgZGlyUm9vdCwgbGlicmFyeU5hbWUsIGVudHJ5RmlsZXMsXG4gICAgKTtcbiAgICBpZiAocGFja2FnZUpzb24uYnVuZGxlRm9yTm9kZSkge1xuICAgICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VybmFtZSA9IG51bGw7XG4gICAgICBpZiAocGFja2FnZUpzb24ucmVwb3NpdG9yeSAmJiBwYWNrYWdlSnNvbi5yZXBvc2l0b3J5LnVybCkge1xuICAgICAgICB1c2VybmFtZSA9IHBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsLnJlcGxhY2UoJzovLycpLnNwbGl0KCcvJylbMV07XG4gICAgICB9XG4gICAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYihcbiAgICAgICAgY29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnMud3JpdGVGaWxlU3luYygnLi9fd2VicGFjay1jb25maWctcHJldmlldy5qc29uJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29uZmlnSnNvbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0NvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgSHRtbFdlYnBhY2tQbHVnaW4gZnJvbSAnaHRtbC13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgU3RyaW5nUmVwbGFjZVBsdWdpbiBmcm9tICdzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgRXh0cmFjdFRleHRQbHVnaW4gZnJvbSAnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBqc29uSW1wb3J0ZXIgZnJvbSAnbm9kZS1zYXNzLWpzb24taW1wb3J0ZXInO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCBwbHVnaW5zLCB7IHJlZ2lzdGVyIGFzIHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5SZWdpc3RyeSc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzZVBsdWdpbiwgbW9yZUxvYWRlclBhcmFtcykge1xuICBpZiAodXNlUGx1Z2luKSB7XG4gICAgcmV0dXJuIHsgdXNlOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KG1vcmVMb2FkZXJQYXJhbXMpIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1c2U6IFttb3JlTG9hZGVyUGFyYW1zLmZhbGxiYWNrLCAuLi5tb3JlTG9hZGVyUGFyYW1zLnVzZV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdmVNb2RpZnkoc291cmNlLCBtb2RpZnlQYXRoLCBtb2RpZnlDb250ZW50KSB7XG4gIGxldCBzb3VyY2VzID0gW107XG4gIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgIHNvdXJjZXMgPSBzb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgc291cmNlcy5wdXNoKHNvdXJjZSk7XG4gIH1cbiAgbGV0IHRvQ29weSA9IFtdO1xuICBzb3VyY2VzLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICB0b0NvcHkgPSBbXG4gICAgICAuLi50b0NvcHksXG4gICAgICAuLi5nbG9iYnkuc3luYyhwYXR0ZXJuKSxcbiAgICBdO1xuICB9KTtcbiAgdG9Db3B5LmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgbGV0IGZpbGVQYXRoT3V0ID0gZmlsZVBhdGg7XG4gICAgaWYgKG1vZGlmeVBhdGgpIHtcbiAgICAgIGZpbGVQYXRoT3V0ID0gbW9kaWZ5UGF0aChmaWxlUGF0aCk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgIGlmIChtb2RpZnlDb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gbW9kaWZ5Q29udGVudChjb250ZW50LCBmaWxlUGF0aCwgZmlsZVBhdGhPdXQpO1xuICAgIH1cbiAgICBmcy5vdXRwdXRGaWxlU3luYyhmaWxlUGF0aE91dCwgY29udGVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzKSB7XG4gIGNvbnN0IGRldkh0bWxQYXRoID0gJy4vaW5kZXguaHRtbCc7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgbW92ZU1vZGlmeShbJ3NyYy9pbXBvcnQtZXhhbXBsZXMvKiovISh3ZWJwYWNrLmNvbmZpZykuKicsICdzcmMvdG9uaWNFeGFtcGxlLmpzJ10sIChmaWxlUGF0aCkgPT4ge1xuICAgICAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoJ3NyYy8nLCAnLi8nKTtcbiAgICB9LFxuICAgIChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9MSUJSQVJZTkFNRS9nLCBsaWJyYXJ5TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZWdpc3RlclBsdWdpbignVWdsaWZ5SnNQbHVnaW4nLCBuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XG4gICAgICBpbmNsdWRlOiAvXFwubWluXFwuanMkLyxcbiAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9ICdzcmMvZGVtby9pbmRleC5lanMnO1xuICAgIGNvbnN0IGh0bWxUZW1wbGF0ZUV4aXN0cyA9IGZzLmV4aXN0c1N5bmModGVtcGxhdGVQYXRoKTtcbiAgICBjb25zdCBpbmRleEh0bWxTZXR0aW5ncyA9IHtcbiAgICAgIGNodW5rczogW291dHB1dEZpbGVzLmRlbW9dLFxuICAgICAgLi4uKFxuICAgICAgICBodG1sVGVtcGxhdGVFeGlzdHMgPyB7IHRlbXBsYXRlOiB0ZW1wbGF0ZVBhdGggfSA6IHt9XG4gICAgICApLFxuICAgICAgdGl0bGU6ICdhZmFzZGZhc2RmYXNkJyxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgbGlicmFyeU5hbWUsXG4gICAgfTtcbiAgICByZWdpc3RlclBsdWdpbignZGVtb0luZGV4LUh0bWxXZWJwYWNrUGx1Z2luJywgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIGZpbGVuYW1lOiAnLi9kaXN0L2RlbW8vaW5kZXguaHRtbCcsXG4gICAgICAuLi5pbmRleEh0bWxTZXR0aW5ncyxcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ2RlbW9EZXZJbmRleC1IdG1sV2VicGFja1BsdWdpbicsIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICBjaHVua3M6IFtvdXRwdXRGaWxlcy5kZW1vXSxcbiAgICAgIGZpbGVuYW1lOiBkZXZIdG1sUGF0aCxcbiAgICB9KSk7XG4gIH1cblxuICByZWdpc3RlclBsdWdpbignU3RyaW5nUmVwbGFjZVBsdWdpbicsIG5ldyBTdHJpbmdSZXBsYWNlUGx1Z2luKCkpO1xuXG4gIHJlZ2lzdGVyUGx1Z2luKCdMb2FkZXJPcHRpb25zUGx1Z2luJywgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgb3B0aW9uczoge1xuICAgICAgc2Fzc0xvYWRlcjoge1xuICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgfSxcbiAgICAgIGNvbnRleHQ6IGRpclJvb3QsXG4gICAgfSxcbiAgfSkpO1xuXG5cbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBsZXQgdXNpbmdFeHRyYWN0VGV4dFBsdWdpbiA9IGZhbHNlO1xuICBpZiAoaXNCdWlsZCkge1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdFeHRyYWN0VGV4dFBsdWdpbicsIG5ldyBFeHRyYWN0VGV4dFBsdWdpbignW25hbWVdLmNzcycpKTtcbiAgICB1c2luZ0V4dHJhY3RUZXh0UGx1Z2luID0gdHJ1ZTtcbiAgfVxuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgLi4uKG1vZHVsZS5ydWxlcyB8fCBbXSksXG4gICAge1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFsnY3NzLWxvYWRlciddLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuc2NzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFtcbiAgICAgICAgICAnY3NzLWxvYWRlcj9zb3VyY2VNYXAnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCcsXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgSlNPTiBpbXBvcnRlciB2aWEgc2Fzcy1sb2FkZXIncyBvcHRpb25zLlxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgbG9hZGVyczogWydqc29uLWxvYWRlciddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmVqcyQvLFxuICAgICAgbG9hZGVyOiAnZWpzLWNvbXBpbGVkLWxvYWRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwubWQvLFxuICAgICAgbG9hZGVyczogWydodG1sLWxvYWRlcicsICdtYXJrZG93bi1sb2FkZXInXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5qc3xcXC5odG1sfFxcLmVqcyQvLFxuICAgICAgZXhjbHVkZTogW19fZmlsZW5hbWVdLFxuICAgICAgbG9hZGVyOiBTdHJpbmdSZXBsYWNlUGx1Z2luLnJlcGxhY2Uoe1xuICAgICAgICByZXBsYWNlbWVudHM6IFt7XG4gICAgICAgICAgcGF0dGVybjogL0xJQlJBUllOQU1FL2csXG4gICAgICAgICAgcmVwbGFjZW1lbnQoLyogbWF0Y2gsIHAxLCBvZmZzZXQsIHN0cmluZyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGxpYnJhcnlOYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgfSksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZGV2dG9vbDogaXNCdWlsZCA/ICdzb3VyY2UtbWFwJyA6ICdjaGVhcC1tb2R1bGUtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICBtb2R1bGUsXG4gICAgcGx1Z2lucyxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYi5qcyIsImZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcsIGRpclJvb3QsIGxpYnJhcnlOYW1lLCBlbnRyeUZpbGVzKSB7XG4gIGNvbnN0IGVudHJ5ID0gT2JqZWN0LmtleXMoZW50cnlGaWxlcykucmVkdWNlKChhY2N1bSwgZW50cnlOYW1lKSA9PiB7XG4gICAgaWYgKGVudHJ5RmlsZXNbZW50cnlOYW1lXS5sZW5ndGgpIHtcbiAgICAgIGFjY3VtW2VudHJ5TmFtZV0gPSBlbnRyeUZpbGVzW2VudHJ5TmFtZV07XG4gICAgfVxuICAgIHJldHVybiBhY2N1bTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICBwYXRoOiBgJHtkaXJSb290fWAsXG4gICAgZmlsZW5hbWU6ICdbbmFtZV0uanMnLFxuICAgIGxpYnJhcnk6IGxpYnJhcnlOYW1lLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICd1bWQnLFxuICAgIHVtZE5hbWVkRGVmaW5lOiB0cnVlLFxuICAgIHB1YmxpY1BhdGg6ICcvJyxcbiAgICAvLyBwdWJsaWNQYXRoOiAnL2Fzc2V0cy8nLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZW50cnksXG4gICAgb3V0cHV0LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwLCBwb3J0ID0gMzAwMCkgPT4ge1xuICAvLyBUaGlzIG1vZHVsZSBlaXRoZXIgZXh0ZW5kcyBhbiBleGlzdGluZyBleHByZXNzIGFwcFxuICAvLyBvciBjcmVhdGVzIGEgbmV3IGV4cHJlc3MgYXBwXG4gIGxldCBhcHBJc0JyYW5kTmV3ID0gZmFsc2U7XG4gIGlmICghYXBwKSB7XG4gICAgYXBwSXNCcmFuZE5ldyA9IHRydWU7XG4gICAgYXBwID0gZXhwcmVzcygpO1xuICB9XG5cbiAgLy8gU1BBIHNlcnZlciBzdXBwb3J0XG4gIC8vIEFsbCBVUkxzIHRoYXQgc3VnZ2VzdCBhbiBIVE1MIGZpbGUgcmVxdWVzdCBnZXQgcm91dGVkIHRoZSBzYW1lLlxuICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGxhc3RQYXJ0T2ZVUkwgPSB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBjb25zdCB1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCA9IChcbiAgICAgIGxhc3RQYXJ0T2ZVUkwuaW5kZXhPZignLicpID09PSAtMSB8fCBsYXN0UGFydE9mVVJMLmluZGV4T2YoJy5odG1sJykgIT09IC0xXG4gICAgKTtcbiAgICBpZiAodXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QpIHtcbiAgICAgIHJlcS51cmwgPSAnLyc7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfSk7XG5cbiAgY29uc29sZS5pbmZvKCfwn5S3IFN0YXJ0aW5nIHdlYnBhY2sgLi4uJyk7XG5cbiAgYXBwLnVzZSh3ZWJwYWNrTWFrZUNvbXBpbGVyKHRydWUpKTtcblxuICBhcHAudXNlKCcvaW1hZ2VzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ltYWdlcycpKTtcbiAgYXBwLnVzZSgnL2ZvbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ZvbnRzJykpO1xuXG4gIC8vIFNvbWUgRXhwcmVzcyBjb2RlIEkgZG9uJ3Qgd2FudCB0byBsb3NlIHlldC5cbiAgLypcbiAgYXBwLmdldChuZXcgUmVnRXhwKCdeWy9dKGltYWdlc3xmb250cylbL10oLispJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBgcGFja2FnZXMke3VybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZX1gKSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoJy8qJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2codXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lKTtcbiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdpbmRleC5odG1sJykpO1xuICB9KTtcblxuICBhcHAuZ2V0KG5ldyBSZWdFeHAoJy9eXFwvKC4qKVxcLmh0bWwkJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2luZGV4Lmh0bWwnKSk7XG4gIH0pO1xuICAqL1xuXG4gIGlmIChhcHBJc0JyYW5kTmV3KSB7XG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAn8J+MjiBMaXN0ZW5pbmcgb24gcG9ydCAlcy4gT3BlbiB1cCBodHRwOi8vbG9jYWxob3N0OiVzLyBpbiB5b3VyIGJyb3dzZXIuJyxcbiAgICAgICAgICBwb3J0LFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lIGZyb20gJ3ZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWUnO1xuXG5mdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlUmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aCkge1xuICBsZXQgcGFja2FnZURvdEpzb25Db250ZW50O1xuICB0cnkge1xuICAgIHBhY2thZ2VEb3RKc29uQ29udGVudCA9IGZzLnJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcGFja2FnZURvdEpzb25Db250ZW50ID0ge307XG4gIH1cbiAgcmV0dXJuIHBhY2thZ2VEb3RKc29uQ29udGVudDtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zSW5Db25zb2xlKHByb2JsZW1zKSB7XG4gIGlmIChPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoKSB7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlsxbScsICdcXG5Qcm9ibGVtcyB3aXRoIGRlcGVuZGVuY2llcycsICdcXHgxYlswbScpO1xuICB9XG4gIE9iamVjdC5rZXlzKHByb2JsZW1zKS5mb3JFYWNoKChtb2R1bGVSZXNvdXJjZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzZtJywgJ1xcblByb2JsZW0gaW4gbW9kdWxlIHdpdGggYGltcG9ydGAgc3RhdGVtZW50OicsICdcXHgxYlswbScpO1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke21vZHVsZVJlc291cmNlfWAsICdcXHgxYlswbScpO1xuICAgIE9iamVjdC5rZXlzKHByb2JsZW1zW21vZHVsZVJlc291cmNlXSkuZm9yRWFjaCgoZGVwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcHJvYmxlbU1zZyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5tc2c7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdEZXBlbmRlbmN5IHJlcXVlc3RlZCBhczonLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke2RlcE5hbWV9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsIGBNZXNzYWdlOiAke3Byb2JsZW1Nc2d9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zdCBwcm9ibGVtSW5mbyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5pbmZvO1xuICAgICAgaWYgKHByb2JsZW1JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYC0gJHtwcm9ibGVtSW5mby5qb2luKCdcXG4gLSAnKX1gLCAnXFx4MWJbMG0nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmREZXBlbmRlbmNpZXNQcm9ibGVtcyhkZXBlbmRlbmNpZXMsIHBhY2thZ2VEb3RKc29uQ29udGVudCkge1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICBpZiAoZGVwLm1vZHVsZSkge1xuICAgICAgY29uc3QgcmF3UmVxdWVzdCA9IGRlcC5tb2R1bGUucmF3UmVxdWVzdDtcbiAgICAgIC8vIGlmIChyYXdSZXF1ZXN0LmluZGV4T2YoJy9Vc2Vycy9icmlhbmVwaHJhaW0vU2l0ZXMvbW9ub3JlcG8vcGFja2FnZXMnKSA9PT0gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBXVEYnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcFdURicsIGRlcCk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBHR0cnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcEdHRycsIGRlcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIG5vdCBhIHJlbGF0aXZlIGRlcGVuZGVuY3lcbiAgICAgIC8vIG5vdCBhbiBhYnNvbHV0IGRlcGVuZGVuY3lcbiAgICAgIC8vIHdlIGFyZSBvbmx5IGNvbmNlcm5lZCB3aXRoIGRlcGVuZW5jaWVzIHJlZmVyZW5jZWQgbGlrZVxuICAgICAgLy8gYGltcG9ydCBhc2RmIGZyb20gJ2FzZGYnO2BcbiAgICAgIC8vIG9yXG4gICAgICAvLyBgaW1wb3J0IHF3ZXIgZnJvbSAnYXNkZi9xd2VyJztgYFxuICAgICAgLy8gb3JcbiAgICAgIC8vIGBpbXBvcnQgYXNkZiBmcm9tICdAZGVmdWFsdC9hc2RmJztgYFxuICAgICAgLy8gVGhlc2UgZGVwZW5kZW5jaWVzIHdpbGwgYmUgZWl0aGVyIGluIC9ub2RlX21vZHVsZXMvIG9yIC9wYWNrYWdlcy8sXG4gICAgICAvLyB0aGUgbGF0dGVyIGZvciBvbmx5IG1vbm9yZXBvIHVzZS5cbiAgICAgIGlmIChyYXdSZXF1ZXN0ICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLicpICE9PSAwICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLycpICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lKHJhd1JlcXVlc3QpO1xuICAgICAgICBpZiAodmFsaWRhdGlvblJlc3VsdC52YWxpZEZvck5ld1BhY2thZ2VzKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudCB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXBlbmRlbmNpZXMgfHxcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRlcGVuZGVuY2llc1tyYXdSZXF1ZXN0XVxuICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRldkRlcGVuZGVuY2llcyB8fFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGV2RGVwZW5kZW5jaWVzW3Jhd1JlcXVlc3RdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByb2JsZW1zW3Jhd1JlcXVlc3RdID0geyBtc2c6ICdNSVNTSU5HIEZST00gUEFDS0FHRS5KU09OJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gW1xuICAgICAgICAgICAgLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW10sXG4gICAgICAgICAgXS5maWx0ZXIoKG1zZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1zZyAhPT0gJ25hbWUgY2FuIG9ubHkgY29udGFpbiBVUkwtZnJpZW5kbHkgY2hhcmFjdGVycyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgICAgaWYgKGluZm8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcm9ibGVtc1tyYXdSZXF1ZXN0XSA9IHtcbiAgICAgICAgICAgICAgbXNnOiAnQkFEIEZPUk1BVFRJTkcnLFxuICAgICAgICAgICAgICBpbmZvOiBbLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW11dLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoID8gcHJvYmxlbXMgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzLCBzaG91bGRTaG93UHJvYmxlbXNJbkNvbnNvbGUgPSB0cnVlKSB7XG4gIGNvbnN0IGlzTW9ub3JlcG8gPSBmcy5leGlzdHNTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2VzYCk7XG5cbiAgY29uc3QgcGFja2FnZURvdEpzb25DYWNoZSA9IHt9O1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuICBzdGF0cy5jb21waWxhdGlvbi5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIC8vIG9ubHkgY29uY2VybmVkIHdpdGggbW9kdWxlIGVudHJpZXMgZnJvbSAvcGFja2FnZXMvIGZvbGRlciAobm90IG5vZGVfbW9kdWxlcylcbiAgICBpZiAoXG4gICAgICBtb2R1bGUucmVzb3VyY2UgJiZcbiAgICAgIG1vZHVsZS5yZXNvdXJjZS5pbmRleE9mKCdub2RlX21vZHVsZXMnKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIGxldCBwYWNrYWdlRG90SnNvblBhdGg7XG4gICAgICBpZiAoaXNNb25vcmVwbykge1xuICAgICAgICBsZXQgcGFja2FnZXNEaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlc2A7XG4gICAgICAgIHBhY2thZ2VzRGlyID0gZW5zdXJlVHJhaWxpbmdTbGFzaChwYWNrYWdlc0Rpcik7XG4gICAgICAgIC8vIGdldCBzdWJzdHJpbmcgZnJvbSBmaXJzdCB0cmFpbGluZyBzbGFzaCBhZnRlciB3aGF0ZXZlciBwYWNrYWdlc0RpciBpc1xuICAgICAgICBjb25zdCBwYWNrYWdlRm9sZGVyTmFtZSA9IG1vZHVsZS5yZXNvdXJjZS5zcGxpdChwYWNrYWdlc0RpcilbMV0uc3BsaXQoJy8nKVswXTtcbiAgICAgICAgcGFja2FnZURvdEpzb25QYXRoID0gYCR7cGFja2FnZXNEaXJ9JHtwYWNrYWdlRm9sZGVyTmFtZX0vcGFja2FnZS5qc29uYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY2thZ2VEb3RKc29uUGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2UuanNvbmA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VEb3RKc29uQ29udGVudCA9IChcbiAgICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdIHx8IGVuc3VyZVJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpXG4gICAgICApO1xuICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdID0gcGFja2FnZURvdEpzb25Db250ZW50O1xuXG4gICAgICBjb25zdCBwYWNrYWdlU29tZWhvd1B1YmxpYyA9IChcbiAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5wcml2YXRlIHx8XG4gICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQucHJpdmF0ZUZyb21HaXRodWJcbiAgICAgICk7XG5cbiAgICAgIC8vIG9ubHkgY29uY2VybmVkIGlmIG1vZHVsZSdzIHBhY2thZ2UuanNvbiBpcyBub3QgZW1wdHksXG4gICAgICAvLyBhbmQgaWYgaXQgaXMgcHVibGljIG9uIGVpdGhlciBOUE0gb3IgR2lyaHViXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFja2FnZURvdEpzb25Db250ZW50KS5sZW5ndGggJiYgcGFja2FnZVNvbWVob3dQdWJsaWMpIHtcbiAgICAgICAgY29uc3QgZGVwUHJvYmxlbXMgPSBmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMobW9kdWxlLmRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KTtcbiAgICAgICAgaWYgKGRlcFByb2JsZW1zKSB7XG4gICAgICAgICAgcHJvYmxlbXNbbW9kdWxlLnJlc291cmNlXSA9IGRlcFByb2JsZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPiAwICYmIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSkge1xuICAgIHNob3dQcm9ibGVtc0luQ29uc29sZShwcm9ibGVtcyk7XG4gIH1cblxuICByZXR1cm4gcHJvYmxlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9