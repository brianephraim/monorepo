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
  // singleLineLog(`Resolving: ${progress}\n`);
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
    modules: ['/Users/brianephraim/Sites/monorepo/node_modules', path.resolve('./src/library'), path.resolve(process.cwd(), 'packages'), path.resolve(process.cwd(), '../../packages'), 'node_modules', path.resolve(process.cwd(), '../monorepo/node_modules'), '../monorepo/node_modules'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNGI1M2M1MjkzZmEzNmVmZmU0ZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbImVuaGFuY2UiLCJjb25maWciLCJlbnRyeSIsIm1haW4iLCJvdXRwdXQiLCJzcGxpdCIsImZpbGVuYW1lIiwicG9wIiwicGF0aCIsImpvaW4iLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsQ29uZmlnIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwibG9hZGVyIiwiZXhjbHVkZSIsInJlc29sdmUiLCJ1c2UiLCJwbHVnaW5zIiwicHVzaCIsIkJhbm5lclBsdWdpbiIsImJhbm5lciIsInJhdyIsImVudHJ5T25seSIsImRldnRvb2wiLCJ0YXJnZXQiLCJub2RlIiwiX19kaXJuYW1lIiwiX19maWxlbmFtZSIsImV4dGVybmFscyIsIm1vZHVsZXNEaXIiLCJ3ZWJwYWNrTWFrZUNvbXBpbGVyIiwicnVuIiwiZXJyIiwic3RhdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwicGx1Z2luIiwiZmlsZU5hbWUiLCJjaGFuZ2VUaW1lIiwic3RhdFN5bmMiLCJhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZSIsInB1YmxpY1BhdGgiLCJjb2xvcnMiLCJ3YWl0VW50aWxWYWxpZCIsImVudiIsIml0ZW0iLCJ0ZXN0ZGV2ZW52Iiwid2F0Y2giLCJ0ZXN0UGF0aFBhdHRlcm4iLCJzaW5nbGVMaW5lTG9nIiwicmVxdWlyZSIsInN0ZG91dCIsInByaW50UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInByb2Nlc3MiLCJjbGVhckxpbmUiLCJwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luIiwicGFyc2VSZXF1ZXN0IiwiYXBwbHkiLCJyZXNvbHZlciIsInJlcXVlc3QiLCJjYWxsYmFjayIsIm5ld1JlcXVlc3RTdHIiLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJkb1Jlc29sdmUiLCJleHBvcnRzIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJhcmdzIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4iLCJtb2R1bGVzIiwiY3dkIiwiZXh0ZW5zaW9ucyIsInJlcXVlc3RTdHIiLCJpbmRleE9mIiwic2V0TW9kdWxlQ29uc3RhbnQiLCJleHByZXNzaW9uTmFtZSIsImZuIiwiY29tcGlsYXRpb24iLCJkYXRhIiwibm9ybWFsTW9kdWxlRmFjdG9yeSIsInBhcnNlciIsImNvbXBpbGVyUGFyc2VyUGx1Z2luIiwic3RhdGUiLCJjdXJyZW50IiwiYWRkVmFyaWFibGUiLCJyZXNvdXJjZSIsImNvbnRleHQiLCJjb25maWdQYXRoIiwiY29tbWFuZEJvZHkiLCJQbHVnaW5SZWdpc3RyeSIsInJlZ2lzdHJ5IiwibmFtZSIsInBsdWdpblJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJiaW5kIiwiZ2VuZXJhdGVDb25maWdKc29uIiwiaXNDb21tYW5kTGluZSIsImlzQnVpbGQiLCJkaXJSb290IiwiZGlycm9vdCIsInBhY2thZ2VKc29uIiwicmVhZEpzb25TeW5jIiwib3V0cHV0RmlsZXMiLCJsaWJyYXJ5TmFtZSIsImxpYnJhcnlOYW1lUmVkdWNlZCIsImxpYnJhcnkiLCJsaWJyYXJ5TWluIiwiZGVtbyIsImVudHJ5RmlsZXMiLCJNYWluQXBwIiwic3luYyIsImJ1bmRsZUZvck5vZGUiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJ1cmwiLCJyZXBsYWNlIiwiZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlIiwidXNlUGx1Z2luIiwibW9yZUxvYWRlclBhcmFtcyIsImV4dHJhY3QiLCJmYWxsYmFjayIsIm1vdmVNb2RpZnkiLCJzb3VyY2UiLCJtb2RpZnlQYXRoIiwibW9kaWZ5Q29udGVudCIsInNvdXJjZXMiLCJ0b0NvcHkiLCJwYXR0ZXJuIiwiZmlsZVBhdGgiLCJmaWxlUGF0aE91dCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJvdXRwdXRGaWxlU3luYyIsImRldkh0bWxQYXRoIiwib3B0aW1pemUiLCJVZ2xpZnlKc1BsdWdpbiIsImluY2x1ZGUiLCJtaW5pbWl6ZSIsInRlbXBsYXRlUGF0aCIsImh0bWxUZW1wbGF0ZUV4aXN0cyIsImV4aXN0c1N5bmMiLCJpbmRleEh0bWxTZXR0aW5ncyIsImNodW5rcyIsInRlbXBsYXRlIiwidGl0bGUiLCJMb2FkZXJPcHRpb25zUGx1Z2luIiwic2Fzc0xvYWRlciIsImltcG9ydGVyIiwidXNpbmdFeHRyYWN0VGV4dFBsdWdpbiIsImxvYWRlcnMiLCJyZXBsYWNlbWVudHMiLCJyZXBsYWNlbWVudCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1bSIsImVudHJ5TmFtZSIsImxlbmd0aCIsImxpYnJhcnlUYXJnZXQiLCJ1bWROYW1lZERlZmluZSIsImFwcCIsInBvcnQiLCJhcHBJc0JyYW5kTmV3IiwicmVxIiwicmVzIiwibmV4dCIsImxhc3RQYXJ0T2ZVUkwiLCJwYXJzZSIsInBhdGhuYW1lIiwidXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QiLCJzdGF0aWMiLCJsaXN0ZW4iLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwiZW5zdXJlUmVhZEpzb25TeW5jIiwicGFja2FnZURvdEpzb25QYXRoIiwicGFja2FnZURvdEpzb25Db250ZW50Iiwic2hvd1Byb2JsZW1zSW5Db25zb2xlIiwicHJvYmxlbXMiLCJtb2R1bGVSZXNvdXJjZSIsImRlcE5hbWUiLCJwcm9ibGVtTXNnIiwibXNnIiwicHJvYmxlbUluZm8iLCJmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMiLCJkZXBlbmRlbmNpZXMiLCJkZXAiLCJyYXdSZXF1ZXN0IiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkRm9yTmV3UGFja2FnZXMiLCJkZXZEZXBlbmRlbmNpZXMiLCJmaWx0ZXIiLCJ3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zIiwic2hvdWxkU2hvd1Byb2JsZW1zSW5Db25zb2xlIiwiaXNNb25vcmVwbyIsInBhY2thZ2VEb3RKc29uQ2FjaGUiLCJwYWNrYWdlc0RpciIsInBhY2thZ2VGb2xkZXJOYW1lIiwicGFja2FnZVNvbWVob3dQdWJsaWMiLCJwcml2YXRlIiwicHJpdmF0ZUZyb21HaXRodWIi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TUFBbkMsSUFBNkN5QyxvQkFBakQsRUFBdUU7QUFDckUsWUFBTUcsY0FBY2pCLHlCQUF5QjNNLE9BQU80TSxZQUFoQyxFQUE4Q1QscUJBQTlDLENBQXBCO0FBQ0EsWUFBSXlCLFdBQUosRUFBaUI7QUFDZnZCLG1CQUFTck0sT0FBT3lHLFFBQWhCLElBQTRCbUgsV0FBNUI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQXBDRDtBQXFDQSxNQUFJdkosT0FBT3VHLElBQVAsQ0FBWXlCLFFBQVosRUFBc0JyQixNQUF0QixHQUErQixDQUEvQixJQUFvQ29DLDJCQUF4QyxFQUFxRTtBQUNuRWhCLDBCQUFzQkMsUUFBdEI7QUFDRDs7QUFFRCxTQUFPQSxRQUFQO0FBQ0Q7O2tCQUVjYywrQjs7Ozs7O0FDdEpmLDJEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsd0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDBEOzs7Ozs7QUNBQSxnQzs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSxtRCIsImZpbGUiOiJkaXN0L2Rldl9lbnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJmcy1leHRyYVwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwieWFyZ3NcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiZ2xvYmJ5XCIpLCByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiZXhwcmVzc1wiKSwgcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKSwgcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKSwgcmVxdWlyZShcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwidXJsXCIpLCByZXF1aXJlKFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiKSwgcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGRlZnVhbHQvZGV2X2VudlwiLCBbXCJmcy1leHRyYVwiLCBcIndlYnBhY2tcIiwgXCJwYXRoXCIsIFwieWFyZ3NcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiZ2xvYmJ5XCIsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIsIFwiZXhwcmVzc1wiLCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiLCBcImh0bWwtd2VicGFjay1wbHVnaW5cIiwgXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiLCBcInNpbmdsZS1saW5lLWxvZ1wiLCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIsIFwidXJsXCIsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiLCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBkZWZ1YWx0L2Rldl9lbnZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmcy1leHRyYVwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwieWFyZ3NcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiZ2xvYmJ5XCIpLCByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiZXhwcmVzc1wiKSwgcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKSwgcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKSwgcmVxdWlyZShcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwidXJsXCIpLCByZXF1aXJlKFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiKSwgcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAZGVmdWFsdC9kZXZfZW52XCJdID0gZmFjdG9yeShyb290W1wiZnMtZXh0cmFcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1wicGF0aFwiXSwgcm9vdFtcInlhcmdzXCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImdsb2JieVwiXSwgcm9vdFtcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcImV4cHJlc3NcIl0sIHJvb3RbXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJodG1sLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIl0sIHJvb3RbXCJzaW5nbGUtbGluZS1sb2dcIl0sIHJvb3RbXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcInVybFwiXSwgcm9vdFtcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIl0sIHJvb3RbXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCJdLCByb290W1wid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE0YjUzYzUyOTNmYTM2ZWZmZTRkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5YXJnc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInlhcmdzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnIGZyb20gJy4vd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnIGZyb20gJy4vd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcnO1xuXG5mdW5jdGlvbiBlbmhhbmNlKCkge1xuICBsZXQgY29uZmlnID0gd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnKCk7XG4gIGNvbnN0IGVudHJ5ID0ge1xuICAgIG1haW46IGFyZ3YuZW50cnksXG4gIH07XG4gIGxldCBvdXRwdXQgPSBhcmd2Lm91dHB1dDtcbiAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcvJyk7XG5cbiAgb3V0cHV0ID0ge1xuICAgIGZpbGVuYW1lOiBvdXRwdXQucG9wKCksXG4gICAgcGF0aDogb3V0cHV0LmpvaW4oJy8nKSxcbiAgfTtcbiAgY29uZmlnID0ge1xuICAgIC4uLmNvbmZpZyxcbiAgICBlbnRyeSxcbiAgICBvdXRwdXQsXG4gIH07XG4gIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZShjb25maWcpO1xuICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyhjb25maWcpO1xuICBmcy53cml0ZUZpbGVTeW5jKCcuL193ZWJwYWNrLWNvbmZpZy1wcmV2aWV3LWNvbW1hbmRsaW5lLmpzb24nLCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpKTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lLmpzIiwiaW1wb3J0IHdlYnBhY2tDb25maWdSZXNvbHZlIGZyb20gJy4vd2VicGFjay1jb25maWctcmVzb2x2ZSc7XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIG1vZHVsZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oanMpPyQvLFxuICAgICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgICAgZXhjbHVkZTogLyhub2RlX21vZHVsZXN8XFwudG1wKS8sXG4gICAgICAgICAgLy8gaW5jbHVkZTogYCR7ZGlyUm9vdH1gLFxuICAgICAgICAgIC8vIG9wdGlvbnM6IHtcbiAgICAgICAgICAvLyAgIHByZXNldHM6IFtcblxuICAgICAgICAgIC8vICAgICBbXG4gICAgICAgICAgLy8gICAgICAgJ2VzMjAxNScsXG4gICAgICAgICAgLy8gICAgICAgLy8gbmVlZGVkIGZvciB0cmVlIHNoYWtpbmdcbiAgICAgICAgICAvLyAgICAgICB7IG1vZHVsZXM6IGZhbHNlIH0sXG4gICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgLy8gICAgICdyZWFjdCcsXG4gICAgICAgICAgLy8gICAgIC8vICdyZWFjdCcsXG4gICAgICAgICAgLy8gICBdLFxuICAgICAgICAgIC8vICAgcGx1Z2luczogW1xuICAgICAgICAgIC8vICAgICAndHJhbnNmb3JtLWVzMjAxNS1zcHJlYWQnLFxuICAgICAgICAgIC8vICAgICAndHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZCcsXG4gICAgICAgICAgLy8gICBdLFxuICAgICAgICAgIC8vICAgLy8gbW9jaGEgbmVlZHMgLmJhYmVscmMsXG4gICAgICAgICAgLy8gICAvLyBhbmQgLmJhYmVscmMgY2Fubm90IHVzZSB0aGUgYWJvdmUgY29uZmlnXG4gICAgICAgICAgLy8gICAvLyBzbyBpZ25vcmUgLmJhYmVscmMgaGVyZVxuICAgICAgICAgIC8vICAgYmFiZWxyYzogZmFsc2UsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB3ZWJwYWNrQ29uZmlnUmVzb2x2ZS5yZXNvbHZlLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLm9yaWdpbmFsQ29uZmlnLFxuICAgIC4uLmNvbmZpZyxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgbm9kZUV4dGVybmFscyBmcm9tICd3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnKSB7XG4gIGNvbnN0IG1vZHVsZSA9IHsgLi4uKG9yaWdpbmFsQ29uZmlnICYmIG9yaWdpbmFsQ29uZmlnLm1vZHVsZSkgfTtcbiAgbW9kdWxlLnJ1bGVzID0gW1xuICAgIHsgdGVzdDogL3J4XFwubGl0ZVxcLmFnZ3JlZ2F0ZXNcXC5qcy8sIHVzZTogJ2ltcG9ydHMtbG9hZGVyP2RlZmluZT0+ZmFsc2UnIH0sXG4gICAgeyB0ZXN0OiAvYXN5bmNcXC5qcy8sIHVzZTogJ2ltcG9ydHMtbG9hZGVyP2RlZmluZT0+ZmFsc2UnIH0sXG4gICAgLi4uKG1vZHVsZS5ydWxlcyB8fCBbXSksXG4gIF07XG5cbiAgY29uc3QgcGx1Z2lucyA9IG9yaWdpbmFsQ29uZmlnLnBsdWdpbnMgfHwgW107XG4gIHBsdWdpbnMucHVzaChuZXcgd2VicGFjay5CYW5uZXJQbHVnaW4oe1xuICAgIGJhbm5lcjogJ3JlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIikuaW5zdGFsbCgpOycsXG4gICAgcmF3OiB0cnVlLFxuICAgIGVudHJ5T25seTogZmFsc2UsXG4gIH0pKTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLW1vZHVsZS1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnc291cmNlLW1hcCcsXG4gICAgZGV2dG9vbDogJ2lubGluZS1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnc291cmNlbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnZXZhbCcsXG4gICAgbW9kdWxlLFxuICAgIHRhcmdldDogJ25vZGUnLFxuICAgIG5vZGU6IHtcbiAgICAgIC4uLm9yaWdpbmFsQ29uZmlnLm5vZGUsXG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfSxcbiAgICBleHRlcm5hbHM6IFtcbiAgICAgIC4uLihvcmlnaW5hbENvbmZpZy5leHRlcm5hbHMgfHwgW10pLFxuICAgICAgbm9kZUV4dGVybmFscyh7XG4gICAgICAgIC8vIG1vZHVsZXNGcm9tRmlsZTogdHJ1ZSxcbiAgICAgICAgbW9kdWxlc0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZS5zcGxpdCgnL3BhY2thZ2VzL2Rldl9lbnYnKVswXSwgJy4vbm9kZV9tb2R1bGVzJyksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHBsdWdpbnMsXG5cbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsImV4cG9ydCBkZWZhdWx0ICh3ZWJwYWNrTWFrZUNvbXBpbGVyKSA9PiB7XG4gIHdlYnBhY2tNYWtlQ29tcGlsZXIoKS5ydW4oKGVyciwgc3RhdHMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUlVOIENPTVBJTEVSJyk7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2sgfHwgZXJyKTtcbiAgICAgIGlmIChlcnIuZGV0YWlscykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5kZXRhaWxzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvID0gc3RhdHMudG9Kc29uKCk7XG5cbiAgICBpZiAoc3RhdHMuaGFzRXJyb3JzKCkpIHtcbiAgICAgIGluZm8uZXJyb3JzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignXFx4MWJbMzFtJywgZSwgJ1xceDFiWzBtJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHMuaGFzV2FybmluZ3MoKSkge1xuICAgICAgaW5mby53YXJuaW5ncy5mb3JFYWNoKCh3KSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignXFx4MWJbMzNtJywgdywgJ1xceDFiWzBtJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja1J1bkNvbXBpbGVyLmpzIiwiaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgd2VicGFja0Rldk1pZGRsZXdhcmUgZnJvbSAnd2VicGFjay1kZXYtbWlkZGxld2FyZSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5pbXBvcnQgd2VicGFja0NvbmZpZyBmcm9tICcuL3dlYnBhY2tDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMgZnJvbSAnLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgKGlzRGV2KSA9PiB7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uc29sZS5sb2coJ0NPTVBJTEVSIFdURicpO1xuICAgIGNvbXBpbGVyLnBsdWdpbignaW52YWxpZCcsIChmaWxlTmFtZSwgY2hhbmdlVGltZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS50cmFjZSgpO1xuICAgICAgY29uc29sZS5sb2coJ3N0YXRzJywgZnMuc3RhdFN5bmMoZmlsZU5hbWUpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlsZU5hbWU6IFwiICsgZmlsZU5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VUaW1leDpcIiArIGNoYW5nZVRpbWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGFjdGl2ZVdlYnBhY2tEZXZNaWRkbGV3YXJlID0gd2VicGFja0Rldk1pZGRsZXdhcmUoY29tcGlsZXIsIHtcbiAgICAgIHB1YmxpY1BhdGg6IHdlYnBhY2tDb25maWcub3V0cHV0LnB1YmxpY1BhdGgsXG4gICAgICBzdGF0czoge1xuICAgICAgICBjb2xvcnM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGFjdGl2ZVdlYnBhY2tEZXZNaWRkbGV3YXJlLndhaXRVbnRpbFZhbGlkKChzdGF0cykgPT4ge1xuICAgICAgd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyhzdGF0cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmU7XG4gIH1cbiAgcmV0dXJuIGNvbXBpbGVyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tNYWtlQ29tcGlsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdsb2JieVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImdsb2JieVwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuL2NvcmUvc2hlbGxDb21tYW5kJztcbmltcG9ydCBqZXN0U3Bhd25Qcm9jZXNzIGZyb20gJy4vamVzdC9qZXN0U3Bhd25Qcm9jZXNzJztcbmltcG9ydCB3ZWJwYWNrTWFrZUNvbXBpbGVyIGZyb20gJy4vd2VicGFja01ha2VDb21waWxlcic7XG5pbXBvcnQgd2VicGFja1J1bkNvbXBpbGVyIGZyb20gJy4vY29yZS93ZWJwYWNrUnVuQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tCdWlsZENvbW1hbmRMaW5lIGZyb20gJy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZSc7XG5pbXBvcnQgc2VydmUgZnJvbSAnLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyc7XG5cbmNvbnN0IGVudiA9IGFyZ3YuZW52O1xuY29uc3QgaXRlbSA9IGFyZ3YuaXRlbTtcbmlmIChpdGVtKSB7XG4gIHNoZWxsQ29tbWFuZChgKGNkIC4vcGFja2FnZXMvJHtpdGVtfSAmJiBucG0gcnVuIHN0YXJ0KWApO1xufSBlbHNlIGlmIChlbnYgPT09ICd0ZXN0Jykge1xuICBqZXN0U3Bhd25Qcm9jZXNzKGFyZ3YudGVzdGRldmVudiwgYXJndi53YXRjaCwgYXJndi50ZXN0UGF0aFBhdHRlcm4pO1xufSBlbHNlIGlmIChhcmd2LmVudHJ5KSB7XG4gIHdlYnBhY2tCdWlsZENvbW1hbmRMaW5lKCk7XG59IGVsc2UgaWYgKGVudiA9PT0gJ2J1aWxkJykge1xuICB3ZWJwYWNrUnVuQ29tcGlsZXIod2VicGFja01ha2VDb21waWxlcik7XG59IGVsc2Uge1xuICBzZXJ2ZSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2X2Vudi5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbmNvbnN0IHNpbmdsZUxpbmVMb2cgPSByZXF1aXJlKCdzaW5nbGUtbGluZS1sb2cnKS5zdGRvdXQ7XG5cbmZ1bmN0aW9uIHByaW50UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgaWYgKCFwcm9jZXNzIHx8ICFwcm9jZXNzLnN0ZG91dCB8fCAhcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNpbmdsZUxpbmVMb2coYFJlc29sdmluZzogJHtwcm9ncmVzc31cXG5gKTtcbiAgLy8gcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG4gIC8vIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuICAvLyBwcm9jZXNzLnN0ZG91dC53cml0ZShwcm9ncmVzcyArIGAteHh4eHh4YCk7XG59XG5mdW5jdGlvbiBwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luKHBhcnNlUmVxdWVzdCA9ICgpID0+IHt9KSB7XG4gIHJldHVybiB7XG4gICAgYXBwbHkocmVzb2x2ZXIpIHtcbiAgICAgIC8vIEkgZG9uJ3Qga25vdyB3aHkgJ21vZHVsZScgb3IgJ3Jlc29sdmUnIGFyZSB0aG9zZSB2YWx1ZXMuXG4gICAgICAvLyBTb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgdGhlIHdheSB0aGV5IGFyZSB1c2VkIGluIHRoaXMgZmlsZTpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2VuaGFuY2VkLXJlc29sdmUvYmxvYi9tYXN0ZXIvbGliL1Jlc29sdmVyRmFjdG9yeS5qc1xuICAgICAgLy8gU28gdGhleSBjYW4gYmUgb3RoZXIgdmFsdWVzIGFzIHNlZW4gaW4gdGhhdCBmaWxlLlxuICAgICAgcmVzb2x2ZXIucGx1Z2luKC8qICdtb2R1bGVzJyovICdyZXNvbHZlJywgZnVuY3Rpb24gKHJlcXVlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHByaW50UHJvZ3Jlc3MoYCR7cmVxdWVzdC5yZXF1ZXN0fWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdC5yZXF1ZXN0JyxyZXF1ZXN0LnJlcXVlc3QpXG4gICAgICAgIGNvbnN0IG5ld1JlcXVlc3RTdHIgPSBwYXJzZVJlcXVlc3QocmVxdWVzdC5yZXF1ZXN0KTtcbiAgICAgICAgaWYgKG5ld1JlcXVlc3RTdHIgJiYgbmV3UmVxdWVzdFN0ciAhPT0gcmVxdWVzdC5yZXF1ZXN0KSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdCwge1xuICAgICAgICAgICAgcmVxdWVzdDogbmV3UmVxdWVzdFN0cixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRvUmVzb2x2ZSgncmVzb2x2ZScsIG9iaiwgJ2JsYWggYmxhaCcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBwcm9jZXNzLnN0ZG91dC53cml0ZShgXFxuYCk7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS9wYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luLmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsImNvbnN0IERpcmVjdG9yeU5hbWVkV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2RpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpbicpO1xuY29uc3QgcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbiA9IHJlcXVpcmUoJy4vcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbicpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICByZXNvbHZlOiB7XG4gICAgbW9kdWxlczogW1xuICAgICAgJy9Vc2Vycy9icmlhbmVwaHJhaW0vU2l0ZXMvbW9ub3JlcG8vbm9kZV9tb2R1bGVzJyxcbiAgICAgIHBhdGgucmVzb2x2ZSgnLi9zcmMvbGlicmFyeScpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcycpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLi8uLi9wYWNrYWdlcycpLFxuICAgICAgJ25vZGVfbW9kdWxlcycsXG4gICAgICBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4uL21vbm9yZXBvL25vZGVfbW9kdWxlcycpLFxuICAgICAgJy4uL21vbm9yZXBvL25vZGVfbW9kdWxlcycsXG4gICAgXSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICAnLmpzJyxcblxuICAgICAgLy8gV2h5IGlzIHRoaXMgaGVyZT8gOiBodHRwczovL2dpdGh1Yi5jb20vbnBtL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvaXNzdWVzLzg4XG4gICAgICAvLyBJc3N1ZSBvbmx5IGFwcGVhcmQgd2hlbiB3ZWJwYWNrIHJ1biBvbiBjb21tYW5kIGxpbmUgZm9yIE5vZGUgYnVuZGxlXG4gICAgICAnLmpzb24nLFxuICAgIF0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbigocmVxdWVzdFN0cikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVxdWVzdFN0cicsIHJlcXVlc3RTdHIpO1xuICAgICAgICBpZiAocmVxdWVzdFN0ci5pbmRleE9mKCdAJykgPT09IDAgJiYgcmVxdWVzdFN0ci5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RTdHIuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIG5ldyBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4odHJ1ZSksXG4gICAgXSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJpbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrUnVuQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tDb25maWcgZnJvbSAnLi93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuXG5mdW5jdGlvbiB3ZWJwYWNrTWFrZUNvbXBpbGVyKCkge1xuICBjb25zdCBjb25maWcgPSB3ZWJwYWNrQ29uZmlnKCk7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayhjb25maWcpO1xuICByZXR1cm4gY29tcGlsZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUuanMiLCJcbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgY29uZmlnID0geyAuLi5vcmlnaW5hbENvbmZpZyB9O1xuICBjb25maWcucGx1Z2lucyA9IGNvbmZpZy5wbHVnaW5zIHx8IFtdO1xuXG4gIC8vIEkgbmVlZGVkIF9fZGlybmFtZSBoYXJkY29kZWQgYXMgdGhlIG9yaWdpbmFsIGRpcm5hbWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvMTU5OSNpc3N1ZWNvbW1lbnQtMjY2NTg4ODk4XG4gIGNvbmZpZy5wbHVnaW5zLnB1c2goe1xuICAgIGFwcGx5KGNvbXBpbGVyKSB7XG4gICAgICBmdW5jdGlvbiBzZXRNb2R1bGVDb25zdGFudChleHByZXNzaW9uTmFtZSwgZm4pIHtcbiAgICAgICAgY29tcGlsZXIucGx1Z2luKCdjb21waWxhdGlvbicsIChjb21waWxhdGlvbiwgZGF0YSkgPT4ge1xuICAgICAgICAgIGRhdGEubm9ybWFsTW9kdWxlRmFjdG9yeS5wbHVnaW4oJ3BhcnNlcicsIChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIHBhcnNlci5wbHVnaW4oYGV4cHJlc3Npb24gJHtleHByZXNzaW9uTmFtZX1gLCBmdW5jdGlvbiBjb21waWxlclBhcnNlclBsdWdpbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LmFkZFZhcmlhYmxlKGV4cHJlc3Npb25OYW1lLCBKU09OLnN0cmluZ2lmeShmbih0aGlzLnN0YXRlLm1vZHVsZSkpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2ZpbGVuYW1lJywgKG1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnJlc291cmNlO1xuICAgICAgfSk7XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2Rpcm5hbWUnLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dDtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaW1wb3J0IGplc3RDb25maWcgZnJvbSAnLi9qZXN0Q29uZmlnJztcbi8vIGNvbnN0IGNvbmZpZyA9IGAnJHtKU09OLnN0cmluZ2lmeShqZXN0Q29uZmlnKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIil9J2A7XG5cbmNvbnN0IGNvbmZpZ1BhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWcuanNgO1xuLy8gY29uc3QgY29uZmlnQmFzZVBhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWdCYXNlLmpzYDtcbi8vIHF3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgKHRlc3RkZXZlbnYsIHdhdGNoID0gdHJ1ZSwgdGVzdFBhdGhQYXR0ZXJuKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICAvLyBXaHkgYENJPXRydWUgYD8gLS0tLS0gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2plc3QvaXNzdWVzLzI5NTlcbiAgbGV0IGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9qZXN0IC0td2F0Y2g9JHt3YXRjaCAmJiB3YXRjaCAhPT0gJ2ZhbHNlJyA/ICd0cnVlJyA6ICdmYWxzZSd9IC0tY29uZmlnPSR7Y29uZmlnUGF0aH0ke3Rlc3RQYXRoUGF0dGVybiA/IFtcIiAtLXRlc3RQYXRoUGF0dGVybj0nXCIsdGVzdFBhdGhQYXR0ZXJuLFwiJ1wiXS5qb2luKCcnKSA6ICcnfWA7XG4gIGlmICh0ZXN0ZGV2ZW52KSB7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgLXQgdGVzdGRldmVudiAtLWNvbmZpZz0ke2NvbmZpZ0Jhc2VQYXRofWA7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgJHtfX2Rpcm5hbWV9L3Rlc3RkZXZlbnYuanMgIC0tY29uZmlnPSR7Y29uZmlnQmFzZVBhdGh9YDtcbiAgICBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vbW9jaGEtd2VicGFjayAtLWNvbG9ycyAtLXJlcXVpcmUgYmFiZWwtY29yZS9yZWdpc3RlciAtLXdlYnBhY2stY29uZmlnICR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NvcmUvd2VicGFja0NvbmZpZ01vY2hhLmpzJyl9IFxcXCIke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3Rlc3RkZXZlbnYyLmpzJyl9XFxcIiAtLXJlcXVpcmUgc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyYDtcbiAgfVxuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZEJvZHksXG4gIF07XG4gIGNvbnN0IHByb2MgPSBjaGlsZF9wcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIHsgc3RkaW86ICdpbmhlcml0JyB9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsImNsYXNzIFBsdWdpblJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHt9O1xuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuICB9XG4gIHJlZ2lzdGVyKG5hbWUsIHBsdWdpbikge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeVtuYW1lXSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgIHRoaXMucmVnaXN0cnlbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBwbHVnaW5SZWdpc3RyeSA9IG5ldyBQbHVnaW5SZWdpc3RyeSgpO1xuY29uc3QgcGx1Z2lucyA9IHBsdWdpblJlZ2lzdHJ5LnBsdWdpbnM7XG5jb25zdCByZWdpc3RlciA9IHBsdWdpblJlZ2lzdHJ5LnJlZ2lzdGVyLmJpbmQocGx1Z2luUmVnaXN0cnkpO1xuZXhwb3J0IHsgcmVnaXN0ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHBsdWdpbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5SZWdpc3RyeS5qcyIsIi8qXG4gIFRoaXMgZmlsZXMgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGNhbGxlZCBnZW5lcmF0ZXMgYSB3ZWJwYWNrIGNvbmZpZyBqc29uLlxuICBgYXJndmAgaXMgcGFzc2VkIGludG8gdGhpcyBmdW5jdGlvbi5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gZmFsc2V5YFxuICAgIFRoaXMgY29tcGlsZXMgZm9yIGEgZGV2IHNlcnZlciB2aWEgd2VicGFjay1kZXYtbWlkZGxld2FyZS4gIE5vIGZpbGVzIGFyZSBjcmVhdGVkIHRvIGRpc2ssXG4gICAgb25seSBjcmVhdGVkIGluIG1lbW9yeS5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gJ2J1aWxkJ2BcbiAgICBUaGlzIGNvbXBpbGVzIGZpbGVzIHRvIGRpc2sgaW4gYSAvZGlzdCBmb2xkZXIgYW5kIGEgL2RlbW8gZm9sZGVyLlxuXG4gIHdoZW4gYGFyZ3YuZGlycm9vdCA9PT0gc29tZSBwYXRoYFxuICAgIFRoaXMgaXMgdXNlZCB3aGVuIGRldl9lbnYgaXRzZWxmIGlzIGNvbXBpbGVkLlxuICAgIFRoaXMgdmVyeSBmaWxlIGlzIGNvbXBpbGVkIGFjY29yZGluZyB0aGUgY29uZmlnIHNldCBieSB0aGlzIGZpbGUuXG4gICAgVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBkZXZfZW52IHBvcnRhYmxlIHZpYSBucG0uXG4gICAgYmFiZWwtbm9kZSBuZWVkcyB0byBjb21waWxlIHRoaXMgZGV2X2VudiB0byB3b3JrLFxuICAgIGJ1dCB0aGlzIGRvZXMgbm90IHBsYXkgd2VsbCB3aGVuIGRldl9lbnYgaXMgaW4gYSBub2RlX21vZHVsZXMgZm9sZGVyLlxuICAgIFNvIHdlIG5lZWQgdG8gY29tcGlsZSBkZXZfZW52IGJlZm9yZSBwdWJsaXNoaW5nIHRvIG5wbS5cbiAgICBEaXJlY3RvcnkgcGF0aHMgbmVlZCB0byBiZSB0d2Vha2VkIHRvIGFjY29tcGxpc2ggdGhpcyxcbiAgICBhbmQgdGhhdCdzIHdoYXQgYGFyZ3YuZGlycm9vdGAgaGVscHMgd2l0aC5cblxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgYWxzbyBhZmZlY3RlZCBieSBwYWNrYWdlLmpzb24uXG5cbiAgd2hlbiBwYWNrYWdlLmpzb24uYnVuZGxlRm9yTm9kZSA9PT0gdHJ1ZVxuICAgIGluIGNvbmp1bmN0aW9uIHdpdGggYGFyZ3YuZW52ID09PSAnYnVpbGQnYCwgdGhlIGJ1bmRsZSB3aWxsXG4gICAgaGF2ZSBzcGVjaWFsIGNvbnNpZGVyYXRpb24gZm9yIGEgbm9kZSBwbGF0Zm9ybS5cbiAgICBPbmx5IGFwcGxpY2F0aW9uIGZpbGVzIHdpbGwgYmUgYnVuZGxlZC5cbiAgICBub2RlX21vZHVsZXMgYW5kIG5vZGUgYnVpbHQtaW4gcmVxdWlyZXMgd2lsbCBub3QgYmUgYnVuZGxlZC5cbiovXG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdXZWIgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYic7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkIGZyb20gJy4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyc7XG5pbXBvcnQgd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lIGZyb20gJy4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuLy8gaW1wb3J0IGFhYTggZnJvbSAnQGRlZnVhbHQvYWFhOCc7XG4vLyBjb25zb2xlLmxvZyhhYWE4KTtcblxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5jd2QoKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhhcmd2KTtcbi8vIGNvbnNvbGUubG9nKHtcbi8vICAgZW50cnk6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBhcmd2LmVudHJ5KSxcbi8vICAgb3V0cHV0OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYXJndi5vdXRwdXQpLFxuLy8gfSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29uZmlnSnNvbigpIHtcbiAgY29uc3QgaXNDb21tYW5kTGluZSA9IGFyZ3YuZW50cnk7XG4gIGxldCBjb25maWc7XG4gIGlmIChpc0NvbW1hbmRMaW5lKSB7XG4gICAgY29uZmlnID0gd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnKCk7XG4gICAgY29uc3QgaXNCdWlsZCA9IGFyZ3YuZW52ID09PSAnYnVpbGQnO1xuICAgIGNvbnN0IGRpclJvb3QgPSBhcmd2LmRpcnJvb3QgfHwgcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBwYWNrYWdlSnNvbiA9IGZzLnJlYWRKc29uU3luYyhgJHtkaXJSb290fS9wYWNrYWdlLmpzb25gKTtcbiAgICBjb25zdCBvdXRwdXRGaWxlcyA9IHt9O1xuICAgIGNvbnN0IGxpYnJhcnlOYW1lID0gcGFja2FnZUpzb24ubmFtZTtcbiAgICBjb25zdCBsaWJyYXJ5TmFtZVJlZHVjZWQgPSBsaWJyYXJ5TmFtZS5zcGxpdCgnLycpWzFdIHx8IGxpYnJhcnlOYW1lLnNwbGl0KCcvJylbMF07XG4gICAgaWYgKGlzQnVpbGQpIHtcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnkgPSBgZGlzdC8ke2xpYnJhcnlOYW1lUmVkdWNlZH1gO1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeU1pbiA9IGBkaXN0LyR7bGlicmFyeU5hbWVSZWR1Y2VkfS5taW5gO1xuICAgICAgb3V0cHV0RmlsZXMuZGVtbyA9ICdkaXN0L2RlbW8vaW5kZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRGaWxlcy5kZW1vID0gJ2Jvb3QnO1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeSA9IGAke2xpYnJhcnlOYW1lUmVkdWNlZH1gO1xuICAgIH1cblxuICAgIGxldCBlbnRyeUZpbGVzO1xuICAgIGlmIChhcmd2WydkZW1vLWVudHJ5J10pIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2FyZ3ZbJ2RlbW8tZW50cnknXV0sXG4gICAgICB9O1xuICAgIC8vIH0gZWxzZSBpZiAoYXJndlsndGFpbG9yLXdlYi1idW5kbGUtZm9yLXRlc3Rpbmctb2YtZGV2LWVudi1pdHNlbGYnXSkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGVudHJ5RmlsZXMgPSB7XG4gICAgLy8gICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2Ake2RpclJvb3R9L3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanNgXSxcbiAgICAvLyAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIE1haW5BcHA6IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9wYWNrYWdlcy9NYWluQXBwL01haW5BcHAuanNgXSksXG4gICAgICAgIFtvdXRwdXRGaWxlcy5saWJyYXJ5XTogZ2xvYmJ5LnN5bmMoW1xuICAgICAgICAgIGAke2RpclJvb3R9LyR7bGlicmFyeU5hbWVSZWR1Y2VkfS5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vc3JjL2xpYnJhcnkvaW5kZXguanNgLFxuICAgICAgICBdKSxcbiAgICAgICAgLi4uKFxuICAgICAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnlNaW4gPyB7XG4gICAgICAgICAgICBbb3V0cHV0RmlsZXMubGlicmFyeU1pbl06IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9zcmMvbGlicmFyeS9pbmRleC5qc2BdKSxcbiAgICAgICAgICB9IDoge31cbiAgICAgICAgKSxcbiAgICAgICAgW291dHB1dEZpbGVzLmRlbW9dOiBnbG9iYnkuc3luYyhbXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKi5kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS9kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS8qKi8qLyouZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKiovKi9kZW1vLmpzYCxcbiAgICAgICAgICBgISR7ZGlyUm9vdH0vcGFja2FnZXMvKiovKmAsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vcGFja2FnZXMvTWFpbkFwcC9NYWluQXBwLmpzYCxcbiAgICAgICAgXSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZChcbiAgICAgIGNvbmZpZywgZGlyUm9vdCwgbGlicmFyeU5hbWUsIGVudHJ5RmlsZXMsXG4gICAgKTtcbiAgICBpZiAocGFja2FnZUpzb24uYnVuZGxlRm9yTm9kZSkge1xuICAgICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VybmFtZSA9IG51bGw7XG4gICAgICBpZiAocGFja2FnZUpzb24ucmVwb3NpdG9yeSAmJiBwYWNrYWdlSnNvbi5yZXBvc2l0b3J5LnVybCkge1xuICAgICAgICB1c2VybmFtZSA9IHBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsLnJlcGxhY2UoJzovLycpLnNwbGl0KCcvJylbMV07XG4gICAgICB9XG4gICAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYihcbiAgICAgICAgY29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnMud3JpdGVGaWxlU3luYygnLi9fd2VicGFjay1jb25maWctcHJldmlldy5qc29uJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29uZmlnSnNvbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0NvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgSHRtbFdlYnBhY2tQbHVnaW4gZnJvbSAnaHRtbC13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgU3RyaW5nUmVwbGFjZVBsdWdpbiBmcm9tICdzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgRXh0cmFjdFRleHRQbHVnaW4gZnJvbSAnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBqc29uSW1wb3J0ZXIgZnJvbSAnbm9kZS1zYXNzLWpzb24taW1wb3J0ZXInO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCBwbHVnaW5zLCB7IHJlZ2lzdGVyIGFzIHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5SZWdpc3RyeSc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzZVBsdWdpbiwgbW9yZUxvYWRlclBhcmFtcykge1xuICBpZiAodXNlUGx1Z2luKSB7XG4gICAgcmV0dXJuIHsgdXNlOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KG1vcmVMb2FkZXJQYXJhbXMpIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1c2U6IFttb3JlTG9hZGVyUGFyYW1zLmZhbGxiYWNrLCAuLi5tb3JlTG9hZGVyUGFyYW1zLnVzZV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdmVNb2RpZnkoc291cmNlLCBtb2RpZnlQYXRoLCBtb2RpZnlDb250ZW50KSB7XG4gIGxldCBzb3VyY2VzID0gW107XG4gIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgIHNvdXJjZXMgPSBzb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgc291cmNlcy5wdXNoKHNvdXJjZSk7XG4gIH1cbiAgbGV0IHRvQ29weSA9IFtdO1xuICBzb3VyY2VzLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICB0b0NvcHkgPSBbXG4gICAgICAuLi50b0NvcHksXG4gICAgICAuLi5nbG9iYnkuc3luYyhwYXR0ZXJuKSxcbiAgICBdO1xuICB9KTtcbiAgdG9Db3B5LmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgbGV0IGZpbGVQYXRoT3V0ID0gZmlsZVBhdGg7XG4gICAgaWYgKG1vZGlmeVBhdGgpIHtcbiAgICAgIGZpbGVQYXRoT3V0ID0gbW9kaWZ5UGF0aChmaWxlUGF0aCk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgIGlmIChtb2RpZnlDb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gbW9kaWZ5Q29udGVudChjb250ZW50LCBmaWxlUGF0aCwgZmlsZVBhdGhPdXQpO1xuICAgIH1cbiAgICBmcy5vdXRwdXRGaWxlU3luYyhmaWxlUGF0aE91dCwgY29udGVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzKSB7XG4gIGNvbnN0IGRldkh0bWxQYXRoID0gJy4vaW5kZXguaHRtbCc7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgbW92ZU1vZGlmeShbJ3NyYy9pbXBvcnQtZXhhbXBsZXMvKiovISh3ZWJwYWNrLmNvbmZpZykuKicsICdzcmMvdG9uaWNFeGFtcGxlLmpzJ10sIChmaWxlUGF0aCkgPT4ge1xuICAgICAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoJ3NyYy8nLCAnLi8nKTtcbiAgICB9LFxuICAgIChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9MSUJSQVJZTkFNRS9nLCBsaWJyYXJ5TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZWdpc3RlclBsdWdpbignVWdsaWZ5SnNQbHVnaW4nLCBuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XG4gICAgICBpbmNsdWRlOiAvXFwubWluXFwuanMkLyxcbiAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9ICdzcmMvZGVtby9pbmRleC5lanMnO1xuICAgIGNvbnN0IGh0bWxUZW1wbGF0ZUV4aXN0cyA9IGZzLmV4aXN0c1N5bmModGVtcGxhdGVQYXRoKTtcbiAgICBjb25zdCBpbmRleEh0bWxTZXR0aW5ncyA9IHtcbiAgICAgIGNodW5rczogW291dHB1dEZpbGVzLmRlbW9dLFxuICAgICAgLi4uKFxuICAgICAgICBodG1sVGVtcGxhdGVFeGlzdHMgPyB7IHRlbXBsYXRlOiB0ZW1wbGF0ZVBhdGggfSA6IHt9XG4gICAgICApLFxuICAgICAgdGl0bGU6ICdhZmFzZGZhc2RmYXNkJyxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgbGlicmFyeU5hbWUsXG4gICAgfTtcbiAgICByZWdpc3RlclBsdWdpbignZGVtb0luZGV4LUh0bWxXZWJwYWNrUGx1Z2luJywgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIGZpbGVuYW1lOiAnLi9kaXN0L2RlbW8vaW5kZXguaHRtbCcsXG4gICAgICAuLi5pbmRleEh0bWxTZXR0aW5ncyxcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ2RlbW9EZXZJbmRleC1IdG1sV2VicGFja1BsdWdpbicsIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICBjaHVua3M6IFtvdXRwdXRGaWxlcy5kZW1vXSxcbiAgICAgIGZpbGVuYW1lOiBkZXZIdG1sUGF0aCxcbiAgICB9KSk7XG4gIH1cblxuICByZWdpc3RlclBsdWdpbignU3RyaW5nUmVwbGFjZVBsdWdpbicsIG5ldyBTdHJpbmdSZXBsYWNlUGx1Z2luKCkpO1xuXG4gIHJlZ2lzdGVyUGx1Z2luKCdMb2FkZXJPcHRpb25zUGx1Z2luJywgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgb3B0aW9uczoge1xuICAgICAgc2Fzc0xvYWRlcjoge1xuICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgfSxcbiAgICAgIGNvbnRleHQ6IGRpclJvb3QsXG4gICAgfSxcbiAgfSkpO1xuXG5cbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBsZXQgdXNpbmdFeHRyYWN0VGV4dFBsdWdpbiA9IGZhbHNlO1xuICBpZiAoaXNCdWlsZCkge1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdFeHRyYWN0VGV4dFBsdWdpbicsIG5ldyBFeHRyYWN0VGV4dFBsdWdpbignW25hbWVdLmNzcycpKTtcbiAgICB1c2luZ0V4dHJhY3RUZXh0UGx1Z2luID0gdHJ1ZTtcbiAgfVxuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgLi4uKG1vZHVsZS5ydWxlcyB8fCBbXSksXG4gICAge1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFsnY3NzLWxvYWRlciddLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuc2NzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFtcbiAgICAgICAgICAnY3NzLWxvYWRlcj9zb3VyY2VNYXAnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCcsXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgSlNPTiBpbXBvcnRlciB2aWEgc2Fzcy1sb2FkZXIncyBvcHRpb25zLlxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgbG9hZGVyczogWydqc29uLWxvYWRlciddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmVqcyQvLFxuICAgICAgbG9hZGVyOiAnZWpzLWNvbXBpbGVkLWxvYWRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwubWQvLFxuICAgICAgbG9hZGVyczogWydodG1sLWxvYWRlcicsICdtYXJrZG93bi1sb2FkZXInXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5qc3xcXC5odG1sfFxcLmVqcyQvLFxuICAgICAgZXhjbHVkZTogW19fZmlsZW5hbWVdLFxuICAgICAgbG9hZGVyOiBTdHJpbmdSZXBsYWNlUGx1Z2luLnJlcGxhY2Uoe1xuICAgICAgICByZXBsYWNlbWVudHM6IFt7XG4gICAgICAgICAgcGF0dGVybjogL0xJQlJBUllOQU1FL2csXG4gICAgICAgICAgcmVwbGFjZW1lbnQoLyogbWF0Y2gsIHAxLCBvZmZzZXQsIHN0cmluZyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGxpYnJhcnlOYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgfSksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZGV2dG9vbDogaXNCdWlsZCA/ICdzb3VyY2UtbWFwJyA6ICdjaGVhcC1tb2R1bGUtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICBtb2R1bGUsXG4gICAgcGx1Z2lucyxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYi5qcyIsImZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcsIGRpclJvb3QsIGxpYnJhcnlOYW1lLCBlbnRyeUZpbGVzKSB7XG4gIGNvbnN0IGVudHJ5ID0gT2JqZWN0LmtleXMoZW50cnlGaWxlcykucmVkdWNlKChhY2N1bSwgZW50cnlOYW1lKSA9PiB7XG4gICAgaWYgKGVudHJ5RmlsZXNbZW50cnlOYW1lXS5sZW5ndGgpIHtcbiAgICAgIGFjY3VtW2VudHJ5TmFtZV0gPSBlbnRyeUZpbGVzW2VudHJ5TmFtZV07XG4gICAgfVxuICAgIHJldHVybiBhY2N1bTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICBwYXRoOiBgJHtkaXJSb290fWAsXG4gICAgZmlsZW5hbWU6ICdbbmFtZV0uanMnLFxuICAgIGxpYnJhcnk6IGxpYnJhcnlOYW1lLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICd1bWQnLFxuICAgIHVtZE5hbWVkRGVmaW5lOiB0cnVlLFxuICAgIHB1YmxpY1BhdGg6ICcvJyxcbiAgICAvLyBwdWJsaWNQYXRoOiAnL2Fzc2V0cy8nLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZW50cnksXG4gICAgb3V0cHV0LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwLCBwb3J0ID0gMzAwMCkgPT4ge1xuICAvLyBUaGlzIG1vZHVsZSBlaXRoZXIgZXh0ZW5kcyBhbiBleGlzdGluZyBleHByZXNzIGFwcFxuICAvLyBvciBjcmVhdGVzIGEgbmV3IGV4cHJlc3MgYXBwXG4gIGxldCBhcHBJc0JyYW5kTmV3ID0gZmFsc2U7XG4gIGlmICghYXBwKSB7XG4gICAgYXBwSXNCcmFuZE5ldyA9IHRydWU7XG4gICAgYXBwID0gZXhwcmVzcygpO1xuICB9XG5cbiAgLy8gU1BBIHNlcnZlciBzdXBwb3J0XG4gIC8vIEFsbCBVUkxzIHRoYXQgc3VnZ2VzdCBhbiBIVE1MIGZpbGUgcmVxdWVzdCBnZXQgcm91dGVkIHRoZSBzYW1lLlxuICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGxhc3RQYXJ0T2ZVUkwgPSB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBjb25zdCB1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCA9IChcbiAgICAgIGxhc3RQYXJ0T2ZVUkwuaW5kZXhPZignLicpID09PSAtMSB8fCBsYXN0UGFydE9mVVJMLmluZGV4T2YoJy5odG1sJykgIT09IC0xXG4gICAgKTtcbiAgICBpZiAodXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QpIHtcbiAgICAgIHJlcS51cmwgPSAnLyc7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfSk7XG5cbiAgY29uc29sZS5pbmZvKCfwn5S3IFN0YXJ0aW5nIHdlYnBhY2sgLi4uJyk7XG5cbiAgYXBwLnVzZSh3ZWJwYWNrTWFrZUNvbXBpbGVyKHRydWUpKTtcblxuICBhcHAudXNlKCcvaW1hZ2VzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ltYWdlcycpKTtcbiAgYXBwLnVzZSgnL2ZvbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ZvbnRzJykpO1xuXG4gIC8vIFNvbWUgRXhwcmVzcyBjb2RlIEkgZG9uJ3Qgd2FudCB0byBsb3NlIHlldC5cbiAgLypcbiAgYXBwLmdldChuZXcgUmVnRXhwKCdeWy9dKGltYWdlc3xmb250cylbL10oLispJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBgcGFja2FnZXMke3VybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZX1gKSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoJy8qJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2codXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lKTtcbiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdpbmRleC5odG1sJykpO1xuICB9KTtcblxuICBhcHAuZ2V0KG5ldyBSZWdFeHAoJy9eXFwvKC4qKVxcLmh0bWwkJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2luZGV4Lmh0bWwnKSk7XG4gIH0pO1xuICAqL1xuXG4gIGlmIChhcHBJc0JyYW5kTmV3KSB7XG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAn8J+MjiBMaXN0ZW5pbmcgb24gcG9ydCAlcy4gT3BlbiB1cCBodHRwOi8vbG9jYWxob3N0OiVzLyBpbiB5b3VyIGJyb3dzZXIuJyxcbiAgICAgICAgICBwb3J0LFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lIGZyb20gJ3ZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWUnO1xuXG5mdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlUmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aCkge1xuICBsZXQgcGFja2FnZURvdEpzb25Db250ZW50O1xuICB0cnkge1xuICAgIHBhY2thZ2VEb3RKc29uQ29udGVudCA9IGZzLnJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcGFja2FnZURvdEpzb25Db250ZW50ID0ge307XG4gIH1cbiAgcmV0dXJuIHBhY2thZ2VEb3RKc29uQ29udGVudDtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zSW5Db25zb2xlKHByb2JsZW1zKSB7XG4gIGlmIChPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoKSB7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlsxbScsICdcXG5Qcm9ibGVtcyB3aXRoIGRlcGVuZGVuY2llcycsICdcXHgxYlswbScpO1xuICB9XG4gIE9iamVjdC5rZXlzKHByb2JsZW1zKS5mb3JFYWNoKChtb2R1bGVSZXNvdXJjZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzZtJywgJ1xcblByb2JsZW0gaW4gbW9kdWxlIHdpdGggYGltcG9ydGAgc3RhdGVtZW50OicsICdcXHgxYlswbScpO1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke21vZHVsZVJlc291cmNlfWAsICdcXHgxYlswbScpO1xuICAgIE9iamVjdC5rZXlzKHByb2JsZW1zW21vZHVsZVJlc291cmNlXSkuZm9yRWFjaCgoZGVwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcHJvYmxlbU1zZyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5tc2c7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdEZXBlbmRlbmN5IHJlcXVlc3RlZCBhczonLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke2RlcE5hbWV9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsIGBNZXNzYWdlOiAke3Byb2JsZW1Nc2d9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zdCBwcm9ibGVtSW5mbyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5pbmZvO1xuICAgICAgaWYgKHByb2JsZW1JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYC0gJHtwcm9ibGVtSW5mby5qb2luKCdcXG4gLSAnKX1gLCAnXFx4MWJbMG0nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmREZXBlbmRlbmNpZXNQcm9ibGVtcyhkZXBlbmRlbmNpZXMsIHBhY2thZ2VEb3RKc29uQ29udGVudCkge1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICBpZiAoZGVwLm1vZHVsZSkge1xuICAgICAgY29uc3QgcmF3UmVxdWVzdCA9IGRlcC5tb2R1bGUucmF3UmVxdWVzdDtcbiAgICAgIC8vIGlmIChyYXdSZXF1ZXN0LmluZGV4T2YoJy9Vc2Vycy9icmlhbmVwaHJhaW0vU2l0ZXMvbW9ub3JlcG8vcGFja2FnZXMnKSA9PT0gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBXVEYnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcFdURicsIGRlcCk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBHR0cnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcEdHRycsIGRlcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIG5vdCBhIHJlbGF0aXZlIGRlcGVuZGVuY3lcbiAgICAgIC8vIG5vdCBhbiBhYnNvbHV0IGRlcGVuZGVuY3lcbiAgICAgIC8vIHdlIGFyZSBvbmx5IGNvbmNlcm5lZCB3aXRoIGRlcGVuZW5jaWVzIHJlZmVyZW5jZWQgbGlrZVxuICAgICAgLy8gYGltcG9ydCBhc2RmIGZyb20gJ2FzZGYnO2BcbiAgICAgIC8vIG9yXG4gICAgICAvLyBgaW1wb3J0IHF3ZXIgZnJvbSAnYXNkZi9xd2VyJztgYFxuICAgICAgLy8gb3JcbiAgICAgIC8vIGBpbXBvcnQgYXNkZiBmcm9tICdAZGVmdWFsdC9hc2RmJztgYFxuICAgICAgLy8gVGhlc2UgZGVwZW5kZW5jaWVzIHdpbGwgYmUgZWl0aGVyIGluIC9ub2RlX21vZHVsZXMvIG9yIC9wYWNrYWdlcy8sXG4gICAgICAvLyB0aGUgbGF0dGVyIGZvciBvbmx5IG1vbm9yZXBvIHVzZS5cbiAgICAgIGlmIChyYXdSZXF1ZXN0ICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLicpICE9PSAwICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLycpICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lKHJhd1JlcXVlc3QpO1xuICAgICAgICBpZiAodmFsaWRhdGlvblJlc3VsdC52YWxpZEZvck5ld1BhY2thZ2VzKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudCB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXBlbmRlbmNpZXMgfHxcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRlcGVuZGVuY2llc1tyYXdSZXF1ZXN0XVxuICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRldkRlcGVuZGVuY2llcyB8fFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGV2RGVwZW5kZW5jaWVzW3Jhd1JlcXVlc3RdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByb2JsZW1zW3Jhd1JlcXVlc3RdID0geyBtc2c6ICdNSVNTSU5HIEZST00gUEFDS0FHRS5KU09OJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gW1xuICAgICAgICAgICAgLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW10sXG4gICAgICAgICAgXS5maWx0ZXIoKG1zZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1zZyAhPT0gJ25hbWUgY2FuIG9ubHkgY29udGFpbiBVUkwtZnJpZW5kbHkgY2hhcmFjdGVycyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgICAgaWYgKGluZm8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcm9ibGVtc1tyYXdSZXF1ZXN0XSA9IHtcbiAgICAgICAgICAgICAgbXNnOiAnQkFEIEZPUk1BVFRJTkcnLFxuICAgICAgICAgICAgICBpbmZvOiBbLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW11dLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoID8gcHJvYmxlbXMgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzLCBzaG91bGRTaG93UHJvYmxlbXNJbkNvbnNvbGUgPSB0cnVlKSB7XG4gIGNvbnN0IGlzTW9ub3JlcG8gPSBmcy5leGlzdHNTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2VzYCk7XG5cbiAgY29uc3QgcGFja2FnZURvdEpzb25DYWNoZSA9IHt9O1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuICBzdGF0cy5jb21waWxhdGlvbi5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIC8vIG9ubHkgY29uY2VybmVkIHdpdGggbW9kdWxlIGVudHJpZXMgZnJvbSAvcGFja2FnZXMvIGZvbGRlciAobm90IG5vZGVfbW9kdWxlcylcbiAgICBpZiAoXG4gICAgICBtb2R1bGUucmVzb3VyY2UgJiZcbiAgICAgIG1vZHVsZS5yZXNvdXJjZS5pbmRleE9mKCdub2RlX21vZHVsZXMnKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIGxldCBwYWNrYWdlRG90SnNvblBhdGg7XG4gICAgICBpZiAoaXNNb25vcmVwbykge1xuICAgICAgICBsZXQgcGFja2FnZXNEaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlc2A7XG4gICAgICAgIHBhY2thZ2VzRGlyID0gZW5zdXJlVHJhaWxpbmdTbGFzaChwYWNrYWdlc0Rpcik7XG4gICAgICAgIC8vIGdldCBzdWJzdHJpbmcgZnJvbSBmaXJzdCB0cmFpbGluZyBzbGFzaCBhZnRlciB3aGF0ZXZlciBwYWNrYWdlc0RpciBpc1xuICAgICAgICBjb25zdCBwYWNrYWdlRm9sZGVyTmFtZSA9IG1vZHVsZS5yZXNvdXJjZS5zcGxpdChwYWNrYWdlc0RpcilbMV0uc3BsaXQoJy8nKVswXTtcbiAgICAgICAgcGFja2FnZURvdEpzb25QYXRoID0gYCR7cGFja2FnZXNEaXJ9JHtwYWNrYWdlRm9sZGVyTmFtZX0vcGFja2FnZS5qc29uYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY2thZ2VEb3RKc29uUGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2UuanNvbmA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VEb3RKc29uQ29udGVudCA9IChcbiAgICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdIHx8IGVuc3VyZVJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpXG4gICAgICApO1xuICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdID0gcGFja2FnZURvdEpzb25Db250ZW50O1xuXG4gICAgICBjb25zdCBwYWNrYWdlU29tZWhvd1B1YmxpYyA9IChcbiAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5wcml2YXRlIHx8XG4gICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQucHJpdmF0ZUZyb21HaXRodWJcbiAgICAgICk7XG5cbiAgICAgIC8vIG9ubHkgY29uY2VybmVkIGlmIG1vZHVsZSdzIHBhY2thZ2UuanNvbiBpcyBub3QgZW1wdHksXG4gICAgICAvLyBhbmQgaWYgaXQgaXMgcHVibGljIG9uIGVpdGhlciBOUE0gb3IgR2lyaHViXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFja2FnZURvdEpzb25Db250ZW50KS5sZW5ndGggJiYgcGFja2FnZVNvbWVob3dQdWJsaWMpIHtcbiAgICAgICAgY29uc3QgZGVwUHJvYmxlbXMgPSBmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMobW9kdWxlLmRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KTtcbiAgICAgICAgaWYgKGRlcFByb2JsZW1zKSB7XG4gICAgICAgICAgcHJvYmxlbXNbbW9kdWxlLnJlc291cmNlXSA9IGRlcFByb2JsZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPiAwICYmIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSkge1xuICAgIHNob3dQcm9ibGVtc0luQ29uc29sZShwcm9ibGVtcyk7XG4gIH1cblxuICByZXR1cm4gcHJvYmxlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9