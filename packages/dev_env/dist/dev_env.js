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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1M2JkYzIwODQyODRiNDg5NTU4OSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiIl0sIm5hbWVzIjpbImVuaGFuY2UiLCJjb25maWciLCJlbnRyeSIsIm1haW4iLCJvdXRwdXQiLCJzcGxpdCIsImZpbGVuYW1lIiwicG9wIiwicGF0aCIsImpvaW4iLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsQ29uZmlnIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwibG9hZGVyIiwiZXhjbHVkZSIsInJlc29sdmUiLCJ1c2UiLCJwbHVnaW5zIiwicHVzaCIsIkJhbm5lclBsdWdpbiIsImJhbm5lciIsInJhdyIsImVudHJ5T25seSIsImRldnRvb2wiLCJ0YXJnZXQiLCJub2RlIiwiX19kaXJuYW1lIiwiX19maWxlbmFtZSIsImV4dGVybmFscyIsIm1vZHVsZXNEaXIiLCJ3ZWJwYWNrTWFrZUNvbXBpbGVyIiwicnVuIiwiZXJyIiwic3RhdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwicGx1Z2luIiwiZmlsZU5hbWUiLCJjaGFuZ2VUaW1lIiwic3RhdFN5bmMiLCJhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZSIsInB1YmxpY1BhdGgiLCJjb2xvcnMiLCJ3YWl0VW50aWxWYWxpZCIsImVudiIsIml0ZW0iLCJ0ZXN0ZGV2ZW52Iiwid2F0Y2giLCJ0ZXN0UGF0aFBhdHRlcm4iLCJzaW5nbGVMaW5lTG9nIiwicmVxdWlyZSIsInN0ZG91dCIsInByaW50UHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInByb2Nlc3MiLCJjbGVhckxpbmUiLCJwYXJzZVJlcXVlc3RSZXNvbHZlUGx1Z2luIiwicGFyc2VSZXF1ZXN0IiwiYXBwbHkiLCJyZXNvbHZlciIsInJlcXVlc3QiLCJjYWxsYmFjayIsIm5ld1JlcXVlc3RTdHIiLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJkb1Jlc29sdmUiLCJleHBvcnRzIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJhcmdzIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4iLCJtb2R1bGVzIiwiY3dkIiwiZXh0ZW5zaW9ucyIsInJlcXVlc3RTdHIiLCJpbmRleE9mIiwic2V0TW9kdWxlQ29uc3RhbnQiLCJleHByZXNzaW9uTmFtZSIsImZuIiwiY29tcGlsYXRpb24iLCJkYXRhIiwibm9ybWFsTW9kdWxlRmFjdG9yeSIsInBhcnNlciIsImNvbXBpbGVyUGFyc2VyUGx1Z2luIiwic3RhdGUiLCJjdXJyZW50IiwiYWRkVmFyaWFibGUiLCJyZXNvdXJjZSIsImNvbnRleHQiLCJjb25maWdQYXRoIiwiY29tbWFuZEJvZHkiLCJQbHVnaW5SZWdpc3RyeSIsInJlZ2lzdHJ5IiwibmFtZSIsInBsdWdpblJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJiaW5kIiwiZ2VuZXJhdGVDb25maWdKc29uIiwiaXNDb21tYW5kTGluZSIsImlzQnVpbGQiLCJkaXJSb290IiwiZGlycm9vdCIsInBhY2thZ2VKc29uIiwicmVhZEpzb25TeW5jIiwib3V0cHV0RmlsZXMiLCJsaWJyYXJ5TmFtZSIsImxpYnJhcnlOYW1lUmVkdWNlZCIsImxpYnJhcnkiLCJsaWJyYXJ5TWluIiwiZGVtbyIsImVudHJ5RmlsZXMiLCJNYWluQXBwIiwic3luYyIsImJ1bmRsZUZvck5vZGUiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJ1cmwiLCJyZXBsYWNlIiwiZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlIiwidXNlUGx1Z2luIiwibW9yZUxvYWRlclBhcmFtcyIsImV4dHJhY3QiLCJmYWxsYmFjayIsIm1vdmVNb2RpZnkiLCJzb3VyY2UiLCJtb2RpZnlQYXRoIiwibW9kaWZ5Q29udGVudCIsInNvdXJjZXMiLCJ0b0NvcHkiLCJwYXR0ZXJuIiwiZmlsZVBhdGgiLCJmaWxlUGF0aE91dCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJvdXRwdXRGaWxlU3luYyIsImRldkh0bWxQYXRoIiwib3B0aW1pemUiLCJVZ2xpZnlKc1BsdWdpbiIsImluY2x1ZGUiLCJtaW5pbWl6ZSIsInRlbXBsYXRlUGF0aCIsImh0bWxUZW1wbGF0ZUV4aXN0cyIsImV4aXN0c1N5bmMiLCJpbmRleEh0bWxTZXR0aW5ncyIsImNodW5rcyIsInRlbXBsYXRlIiwidGl0bGUiLCJMb2FkZXJPcHRpb25zUGx1Z2luIiwic2Fzc0xvYWRlciIsImltcG9ydGVyIiwidXNpbmdFeHRyYWN0VGV4dFBsdWdpbiIsImxvYWRlcnMiLCJyZXBsYWNlbWVudHMiLCJyZXBsYWNlbWVudCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1bSIsImVudHJ5TmFtZSIsImxlbmd0aCIsImxpYnJhcnlUYXJnZXQiLCJ1bWROYW1lZERlZmluZSIsImFwcCIsInBvcnQiLCJhcHBJc0JyYW5kTmV3IiwicmVxIiwicmVzIiwibmV4dCIsImxhc3RQYXJ0T2ZVUkwiLCJwYXJzZSIsInBhdGhuYW1lIiwidXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QiLCJzdGF0aWMiLCJsaXN0ZW4iLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwiZW5zdXJlUmVhZEpzb25TeW5jIiwicGFja2FnZURvdEpzb25QYXRoIiwicGFja2FnZURvdEpzb25Db250ZW50Iiwic2hvd1Byb2JsZW1zSW5Db25zb2xlIiwicHJvYmxlbXMiLCJtb2R1bGVSZXNvdXJjZSIsImRlcE5hbWUiLCJwcm9ibGVtTXNnIiwibXNnIiwicHJvYmxlbUluZm8iLCJmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMiLCJkZXBlbmRlbmNpZXMiLCJkZXAiLCJyYXdSZXF1ZXN0IiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkRm9yTmV3UGFja2FnZXMiLCJkZXZEZXBlbmRlbmNpZXMiLCJmaWx0ZXIiLCJ3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zIiwic2hvdWxkU2hvd1Byb2JsZW1zSW5Db25zb2xlIiwiaXNNb25vcmVwbyIsInBhY2thZ2VEb3RKc29uQ2FjaGUiLCJwYWNrYWdlc0RpciIsInBhY2thZ2VGb2xkZXJOYW1lIiwicGFja2FnZVNvbWVob3dQdWJsaWMiLCJwcml2YXRlIiwicHJpdmF0ZUZyb21HaXRodWIi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QndCLGlCQUZ6Qjs7QUFLQTtBQUNBO0FBQ0EsVUFBSXRKLE9BQU91RyxJQUFQLENBQVl1QixxQkFBWixFQUFtQ25CLE1BQW5DLElBQTZDeUMsb0JBQWpELEVBQXVFO0FBQ3JFLFlBQU1HLGNBQWNqQix5QkFBeUIzTSxPQUFPNE0sWUFBaEMsRUFBOENULHFCQUE5QyxDQUFwQjtBQUNBLFlBQUl5QixXQUFKLEVBQWlCO0FBQ2Z2QixtQkFBU3JNLE9BQU95RyxRQUFoQixJQUE0Qm1ILFdBQTVCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FyQ0Q7QUFzQ0EsTUFBSXZKLE9BQU91RyxJQUFQLENBQVl5QixRQUFaLEVBQXNCckIsTUFBdEIsR0FBK0IsQ0FBL0IsSUFBb0NvQywyQkFBeEMsRUFBcUU7QUFDbkVoQiwwQkFBc0JDLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBT0EsUUFBUDtBQUNEOztrQkFFY2MsK0I7Ozs7OztBQ3hKZiwyRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLHdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsZ0M7Ozs7OztBQ0FBLHNEOzs7Ozs7QUNBQSxtRDs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiZGlzdC9kZXZfZW52LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZnMtZXh0cmFcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrXCIpLCByZXF1aXJlKFwicGF0aFwiKSwgcmVxdWlyZShcInlhcmdzXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImdsb2JieVwiKSwgcmVxdWlyZShcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImV4cHJlc3NcIiksIHJlcXVpcmUoXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiksIHJlcXVpcmUoXCJzaW5nbGUtbGluZS1sb2dcIiksIHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcInVybFwiKSwgcmVxdWlyZShcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpLCByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBkZWZ1YWx0L2Rldl9lbnZcIiwgW1wiZnMtZXh0cmFcIiwgXCJ3ZWJwYWNrXCIsIFwicGF0aFwiLCBcInlhcmdzXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImdsb2JieVwiLCBcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiLCBcImV4cHJlc3NcIiwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCIsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiwgXCJzaW5nbGUtbGluZS1sb2dcIiwgXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiLCBcInVybFwiLCBcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAZGVmdWFsdC9kZXZfZW52XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZnMtZXh0cmFcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrXCIpLCByZXF1aXJlKFwicGF0aFwiKSwgcmVxdWlyZShcInlhcmdzXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImdsb2JieVwiKSwgcmVxdWlyZShcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImV4cHJlc3NcIiksIHJlcXVpcmUoXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIiksIHJlcXVpcmUoXCJzaW5nbGUtbGluZS1sb2dcIiksIHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcInVybFwiKSwgcmVxdWlyZShcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpLCByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGRlZnVhbHQvZGV2X2VudlwiXSA9IGZhY3Rvcnkocm9vdFtcImZzLWV4dHJhXCJdLCByb290W1wid2VicGFja1wiXSwgcm9vdFtcInBhdGhcIl0sIHJvb3RbXCJ5YXJnc1wiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJnbG9iYnlcIl0sIHJvb3RbXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJleHByZXNzXCJdLCByb290W1wiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wiaHRtbC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCJdLCByb290W1wic2luZ2xlLWxpbmUtbG9nXCJdLCByb290W1wic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJ1cmxcIl0sIHJvb3RbXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCJdLCByb290W1wid2VicGFjay1kZXYtbWlkZGxld2FyZVwiXSwgcm9vdFtcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1M2JkYzIwODQyODRiNDg5NTU4OSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWV4dHJhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZXh0cmFcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFja1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieWFyZ3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ5YXJnc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyBmcm9tICcuL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdOb2RlIGZyb20gJy4vd2VicGFja0VuaGFuY2VDb25maWdOb2RlJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyBmcm9tICcuL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnJztcblxuZnVuY3Rpb24gZW5oYW5jZSgpIHtcbiAgbGV0IGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZygpO1xuICBjb25zdCBlbnRyeSA9IHtcbiAgICBtYWluOiBhcmd2LmVudHJ5LFxuICB9O1xuICBsZXQgb3V0cHV0ID0gYXJndi5vdXRwdXQ7XG4gIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnLycpO1xuXG4gIG91dHB1dCA9IHtcbiAgICBmaWxlbmFtZTogb3V0cHV0LnBvcCgpLFxuICAgIHBhdGg6IG91dHB1dC5qb2luKCcvJyksXG4gIH07XG4gIGNvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgZW50cnksXG4gICAgb3V0cHV0LFxuICB9O1xuICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUoY29uZmlnKTtcbiAgY29uZmlnID0gd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcoY29uZmlnKTtcbiAgZnMud3JpdGVGaWxlU3luYygnLi9fd2VicGFjay1jb25maWctcHJldmlldy1jb21tYW5kbGluZS5qc29uJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsImltcG9ydCB3ZWJwYWNrQ29uZmlnUmVzb2x2ZSBmcm9tICcuL3dlYnBhY2stY29uZmlnLXJlc29sdmUnO1xuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtb2R1bGU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0OiAvXFwuKGpzKT8kLyxcbiAgICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInLFxuICAgICAgICAgIGV4Y2x1ZGU6IC8obm9kZV9tb2R1bGVzfFxcLnRtcCkvLFxuICAgICAgICAgIC8vIGluY2x1ZGU6IGAke2RpclJvb3R9YCxcbiAgICAgICAgICAvLyBvcHRpb25zOiB7XG4gICAgICAgICAgLy8gICBwcmVzZXRzOiBbXG5cbiAgICAgICAgICAvLyAgICAgW1xuICAgICAgICAgIC8vICAgICAgICdlczIwMTUnLFxuICAgICAgICAgIC8vICAgICAgIC8vIG5lZWRlZCBmb3IgdHJlZSBzaGFraW5nXG4gICAgICAgICAgLy8gICAgICAgeyBtb2R1bGVzOiBmYWxzZSB9LFxuICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgIC8vICAgICAncmVhY3QnLFxuICAgICAgICAgIC8vICAgICAvLyAncmVhY3QnLFxuICAgICAgICAgIC8vICAgXSxcbiAgICAgICAgICAvLyAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAvLyAgICAgJ3RyYW5zZm9ybS1lczIwMTUtc3ByZWFkJyxcbiAgICAgICAgICAvLyAgICAgJ3RyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWQnLFxuICAgICAgICAgIC8vICAgXSxcbiAgICAgICAgICAvLyAgIC8vIG1vY2hhIG5lZWRzIC5iYWJlbHJjLFxuICAgICAgICAgIC8vICAgLy8gYW5kIC5iYWJlbHJjIGNhbm5vdCB1c2UgdGhlIGFib3ZlIGNvbmZpZ1xuICAgICAgICAgIC8vICAgLy8gc28gaWdub3JlIC5iYWJlbHJjIGhlcmVcbiAgICAgICAgICAvLyAgIGJhYmVscmM6IGZhbHNlLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgcmVzb2x2ZTogd2VicGFja0NvbmZpZ1Jlc29sdmUucmVzb2x2ZSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICAuLi5jb25maWcsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbmltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IG5vZGVFeHRlcm5hbHMgZnJvbSAnd2VicGFjay1ub2RlLWV4dGVybmFscyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZykge1xuICBjb25zdCBtb2R1bGUgPSB7IC4uLihvcmlnaW5hbENvbmZpZyAmJiBvcmlnaW5hbENvbmZpZy5tb2R1bGUpIH07XG4gIG1vZHVsZS5ydWxlcyA9IFtcbiAgICB7IHRlc3Q6IC9yeFxcLmxpdGVcXC5hZ2dyZWdhdGVzXFwuanMvLCB1c2U6ICdpbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlJyB9LFxuICAgIHsgdGVzdDogL2FzeW5jXFwuanMvLCB1c2U6ICdpbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlJyB9LFxuICAgIC4uLihtb2R1bGUucnVsZXMgfHwgW10pLFxuICBdO1xuXG4gIGNvbnN0IHBsdWdpbnMgPSBvcmlnaW5hbENvbmZpZy5wbHVnaW5zIHx8IFtdO1xuICBwbHVnaW5zLnB1c2gobmV3IHdlYnBhY2suQmFubmVyUGx1Z2luKHtcbiAgICBiYW5uZXI6ICdyZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0XCIpLmluc3RhbGwoKTsnLFxuICAgIHJhdzogdHJ1ZSxcbiAgICBlbnRyeU9ubHk6IGZhbHNlLFxuICB9KSk7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC4uLm9yaWdpbmFsQ29uZmlnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1tb2R1bGUtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLWV2YWwtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ3NvdXJjZS1tYXAnLFxuICAgIGRldnRvb2w6ICdpbmxpbmUtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ3NvdXJjZW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ2V2YWwnLFxuICAgIG1vZHVsZSxcbiAgICB0YXJnZXQ6ICdub2RlJyxcbiAgICBub2RlOiB7XG4gICAgICAuLi5vcmlnaW5hbENvbmZpZy5ub2RlLFxuICAgICAgX19kaXJuYW1lOiBmYWxzZSxcbiAgICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxuICAgIH0sXG4gICAgZXh0ZXJuYWxzOiBbXG4gICAgICAuLi4ob3JpZ2luYWxDb25maWcuZXh0ZXJuYWxzIHx8IFtdKSxcbiAgICAgIG5vZGVFeHRlcm5hbHMoe1xuICAgICAgICAvLyBtb2R1bGVzRnJvbUZpbGU6IHRydWUsXG4gICAgICAgIG1vZHVsZXNEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUuc3BsaXQoJy9wYWNrYWdlcy9kZXZfZW52JylbMF0sICcuL25vZGVfbW9kdWxlcycpLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBwbHVnaW5zLFxuXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUuanMiLCJleHBvcnQgZGVmYXVsdCAod2VicGFja01ha2VDb21waWxlcikgPT4ge1xuICB3ZWJwYWNrTWFrZUNvbXBpbGVyKCkucnVuKChlcnIsIHN0YXRzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1JVTiBDT01QSUxFUicpO1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVycik7XG4gICAgICBpZiAoZXJyLmRldGFpbHMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIuZGV0YWlscyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHN0YXRzLnRvSnNvbigpO1xuXG4gICAgaWYgKHN0YXRzLmhhc0Vycm9ycygpKSB7XG4gICAgICBpbmZvLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMxbScsIGUsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmhhc1dhcm5pbmdzKCkpIHtcbiAgICAgIGluZm8ud2FybmluZ3MuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1xceDFiWzMzbScsIHcsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuaW1wb3J0IHdlYnBhY2tDb25maWcgZnJvbSAnLi93ZWJwYWNrQ29uZmlnJztcbmltcG9ydCB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zIGZyb20gJy4vd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChpc0RldikgPT4ge1xuICBjb25zdCBjb21waWxlciA9IHdlYnBhY2sod2VicGFja0NvbmZpZyk7XG4gIGlmIChpc0Rldikge1xuICAgIGNvbnNvbGUubG9nKCdDT01QSUxFUiBXVEYnKTtcbiAgICBjb21waWxlci5wbHVnaW4oJ2ludmFsaWQnLCAoZmlsZU5hbWUsIGNoYW5nZVRpbWUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0cycsIGZzLnN0YXRTeW5jKGZpbGVOYW1lKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbGVOYW1lOiBcIiArIGZpbGVOYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlVGltZXg6XCIgKyBjaGFuZ2VUaW1lKTtcbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZSA9IHdlYnBhY2tEZXZNaWRkbGV3YXJlKGNvbXBpbGVyLCB7XG4gICAgICBwdWJsaWNQYXRoOiB3ZWJwYWNrQ29uZmlnLm91dHB1dC5wdWJsaWNQYXRoLFxuICAgICAgc3RhdHM6IHtcbiAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZS53YWl0VW50aWxWYWxpZCgoc3RhdHMpID0+IHtcbiAgICAgIHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMoc3RhdHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjdGl2ZVdlYnBhY2tEZXZNaWRkbGV3YXJlO1xuICB9XG4gIHJldHVybiBjb21waWxlcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnbG9iYnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJnbG9iYnlcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgamVzdFNwYXduUHJvY2VzcyBmcm9tICcuL2plc3QvamVzdFNwYXduUHJvY2Vzcyc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tSdW5Db21waWxlciBmcm9tICcuL2NvcmUvd2VicGFja1J1bkNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSBmcm9tICcuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUnO1xuaW1wb3J0IHNlcnZlIGZyb20gJy4vd2VicGFja0V4cHJlc3NTZXJ2ZXIuanMnO1xuXG5jb25zdCBlbnYgPSBhcmd2LmVudjtcbmNvbnN0IGl0ZW0gPSBhcmd2Lml0ZW07XG5pZiAoaXRlbSkge1xuICBzaGVsbENvbW1hbmQoYChjZCAuL3BhY2thZ2VzLyR7aXRlbX0gJiYgbnBtIHJ1biBzdGFydClgKTtcbn0gZWxzZSBpZiAoZW52ID09PSAndGVzdCcpIHtcbiAgamVzdFNwYXduUHJvY2Vzcyhhcmd2LnRlc3RkZXZlbnYsIGFyZ3Yud2F0Y2gsIGFyZ3YudGVzdFBhdGhQYXR0ZXJuKTtcbn0gZWxzZSBpZiAoYXJndi5lbnRyeSkge1xuICB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSgpO1xufSBlbHNlIGlmIChlbnYgPT09ICdidWlsZCcpIHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufSBlbHNlIHtcbiAgc2VydmUoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldl9lbnYuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5jb25zdCBzaW5nbGVMaW5lTG9nID0gcmVxdWlyZSgnc2luZ2xlLWxpbmUtbG9nJykuc3Rkb3V0O1xuXG5mdW5jdGlvbiBwcmludFByb2dyZXNzKHByb2dyZXNzKSB7XG4gIGlmICghcHJvY2VzcyB8fCAhcHJvY2Vzcy5zdGRvdXQgfHwgIXByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzaW5nbGVMaW5lTG9nKGBSZXNvbHZpbmc6ICR7cHJvZ3Jlc3N9XFxuYCk7XG4gIC8vIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuICAvLyBwcm9jZXNzLnN0ZG91dC5jdXJzb3JUbygwKTtcbiAgLy8gcHJvY2Vzcy5zdGRvdXQud3JpdGUocHJvZ3Jlc3MgKyBgLXh4eHh4eGApO1xufVxuZnVuY3Rpb24gcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbihwYXJzZVJlcXVlc3QgPSAoKSA9PiB7fSkge1xuICByZXR1cm4ge1xuICAgIGFwcGx5KHJlc29sdmVyKSB7XG4gICAgICAvLyBJIGRvbid0IGtub3cgd2h5ICdtb2R1bGUnIG9yICdyZXNvbHZlJyBhcmUgdGhvc2UgdmFsdWVzLlxuICAgICAgLy8gU29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIHRoZSB3YXkgdGhleSBhcmUgdXNlZCBpbiB0aGlzIGZpbGU6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay9lbmhhbmNlZC1yZXNvbHZlL2Jsb2IvbWFzdGVyL2xpYi9SZXNvbHZlckZhY3RvcnkuanNcbiAgICAgIC8vIFNvIHRoZXkgY2FuIGJlIG90aGVyIHZhbHVlcyBhcyBzZWVuIGluIHRoYXQgZmlsZS5cbiAgICAgIHJlc29sdmVyLnBsdWdpbigvKiAnbW9kdWxlcycqLyAncmVzb2x2ZScsIGZ1bmN0aW9uIChyZXF1ZXN0LCBjYWxsYmFjaykge1xuICAgICAgICBwcmludFByb2dyZXNzKGAke3JlcXVlc3QucmVxdWVzdH1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3QucmVxdWVzdCcscmVxdWVzdC5yZXF1ZXN0KVxuICAgICAgICBjb25zdCBuZXdSZXF1ZXN0U3RyID0gcGFyc2VSZXF1ZXN0KHJlcXVlc3QucmVxdWVzdCk7XG4gICAgICAgIGlmIChuZXdSZXF1ZXN0U3RyICYmIG5ld1JlcXVlc3RTdHIgIT09IHJlcXVlc3QucmVxdWVzdCkge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3QsIHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IG5ld1JlcXVlc3RTdHIsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kb1Jlc29sdmUoJ3Jlc29sdmUnLCBvYmosICdibGFoIGJsYWgnLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcHJvY2Vzcy5zdGRvdXQud3JpdGUoYFxcbmApO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJjb25zdCBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4gPSByZXF1aXJlKCcuL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVzb2x2ZToge1xuICAgIG1vZHVsZXM6IFtcbiAgICAgICcvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL25vZGVfbW9kdWxlcycsXG4gICAgICBwYXRoLnJlc29sdmUoJy4vc3JjL2xpYnJhcnknKSxcbiAgICAgIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAncGFja2FnZXMnKSxcbiAgICAgIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi4vLi4vcGFja2FnZXMnKSxcbiAgICAgICdub2RlX21vZHVsZXMnLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLi9tb25vcmVwby9ub2RlX21vZHVsZXMnKSxcbiAgICAgICcuLi9tb25vcmVwby9ub2RlX21vZHVsZXMnLFxuICAgIF0sXG4gICAgZXh0ZW5zaW9uczogW1xuICAgICAgJy5qcycsXG5cbiAgICAgIC8vIFdoeSBpcyB0aGlzIGhlcmU/IDogaHR0cHM6Ly9naXRodWIuY29tL25wbS9ub3JtYWxpemUtcGFja2FnZS1kYXRhL2lzc3Vlcy84OFxuICAgICAgLy8gSXNzdWUgb25seSBhcHBlYXJkIHdoZW4gd2VicGFjayBydW4gb24gY29tbWFuZCBsaW5lIGZvciBOb2RlIGJ1bmRsZVxuICAgICAgJy5qc29uJyxcbiAgICBdLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4oKHJlcXVlc3RTdHIpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcXVlc3RTdHInLCByZXF1ZXN0U3RyKTtcbiAgICAgICAgaWYgKHJlcXVlc3RTdHIuaW5kZXhPZignQCcpID09PSAwICYmIHJlcXVlc3RTdHIuaW5kZXhPZignLycpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0U3RyLnNwbGl0KCcvJylbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSksXG4gICAgICBuZXcgRGlyZWN0b3J5TmFtZWRXZWJwYWNrUGx1Z2luKHRydWUpLFxuICAgIF0sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrLWNvbmZpZy1yZXNvbHZlLmpzIiwiaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgd2VicGFja1J1bkNvbXBpbGVyIGZyb20gJy4vd2VicGFja1J1bkNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrQ29uZmlnIGZyb20gJy4vd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lJztcblxuZnVuY3Rpb24gd2VicGFja01ha2VDb21waWxlcigpIHtcbiAgY29uc3QgY29uZmlnID0gd2VicGFja0NvbmZpZygpO1xuICBjb25zdCBjb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcbiAgcmV0dXJuIGNvbXBpbGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHdlYnBhY2tSdW5Db21waWxlcih3ZWJwYWNrTWFrZUNvbXBpbGVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tCdWlsZENvbW1hbmRMaW5lLmpzIiwiXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHsgLi4ub3JpZ2luYWxDb25maWcgfTtcbiAgY29uZmlnLnBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBbXTtcblxuICAvLyBJIG5lZWRlZCBfX2Rpcm5hbWUgaGFyZGNvZGVkIGFzIHRoZSBvcmlnaW5hbCBkaXJuYW1lXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzE1OTkjaXNzdWVjb21tZW50LTI2NjU4ODg5OFxuICBjb25maWcucGx1Z2lucy5wdXNoKHtcbiAgICBhcHBseShjb21waWxlcikge1xuICAgICAgZnVuY3Rpb24gc2V0TW9kdWxlQ29uc3RhbnQoZXhwcmVzc2lvbk5hbWUsIGZuKSB7XG4gICAgICAgIGNvbXBpbGVyLnBsdWdpbignY29tcGlsYXRpb24nLCAoY29tcGlsYXRpb24sIGRhdGEpID0+IHtcbiAgICAgICAgICBkYXRhLm5vcm1hbE1vZHVsZUZhY3RvcnkucGx1Z2luKCdwYXJzZXInLCAocGFyc2VyKSA9PiB7XG4gICAgICAgICAgICBwYXJzZXIucGx1Z2luKGBleHByZXNzaW9uICR7ZXhwcmVzc2lvbk5hbWV9YCwgZnVuY3Rpb24gY29tcGlsZXJQYXJzZXJQbHVnaW4oKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5hZGRWYXJpYWJsZShleHByZXNzaW9uTmFtZSwgSlNPTi5zdHJpbmdpZnkoZm4odGhpcy5zdGF0ZS5tb2R1bGUpKSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRNb2R1bGVDb25zdGFudCgnX19maWxlbmFtZScsIChtb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5yZXNvdXJjZTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRNb2R1bGVDb25zdGFudCgnX19kaXJuYW1lJywgKG1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW9kdWxlLmNvbnRleHQ7XG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGltcG9ydCBqZXN0Q29uZmlnIGZyb20gJy4vamVzdENvbmZpZyc7XG4vLyBjb25zdCBjb25maWcgPSBgJyR7SlNPTi5zdHJpbmdpZnkoamVzdENvbmZpZykucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpfSdgO1xuXG5jb25zdCBjb25maWdQYXRoID0gYCR7X19kaXJuYW1lfS9qZXN0Q29uZmlnLmpzYDtcbi8vIGNvbnN0IGNvbmZpZ0Jhc2VQYXRoID0gYCR7X19kaXJuYW1lfS9qZXN0Q29uZmlnQmFzZS5qc2A7XG4vLyBxd2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXN0ZGV2ZW52LCB3YXRjaCA9IHRydWUsIHRlc3RQYXRoUGF0dGVybikgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgLy8gV2h5IGBDST10cnVlIGA/IC0tLS0tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9qZXN0L2lzc3Vlcy8yOTU5XG4gIGxldCBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vamVzdCAtLXdhdGNoPSR7d2F0Y2ggJiYgd2F0Y2ggIT09ICdmYWxzZScgPyAndHJ1ZScgOiAnZmFsc2UnfSAtLWNvbmZpZz0ke2NvbmZpZ1BhdGh9JHt0ZXN0UGF0aFBhdHRlcm4gPyBbXCIgLS10ZXN0UGF0aFBhdHRlcm49J1wiLHRlc3RQYXRoUGF0dGVybixcIidcIl0uam9pbignJykgOiAnJ31gO1xuICBpZiAodGVzdGRldmVudikge1xuICAgIC8vIGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9qZXN0IC10IHRlc3RkZXZlbnYgLS1jb25maWc9JHtjb25maWdCYXNlUGF0aH1gO1xuICAgIC8vIGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9qZXN0ICR7X19kaXJuYW1lfS90ZXN0ZGV2ZW52LmpzICAtLWNvbmZpZz0ke2NvbmZpZ0Jhc2VQYXRofWA7XG4gICAgY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL21vY2hhLXdlYnBhY2sgLS1jb2xvcnMgLS1yZXF1aXJlIGJhYmVsLWNvcmUvcmVnaXN0ZXIgLS13ZWJwYWNrLWNvbmZpZyAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jb3JlL3dlYnBhY2tDb25maWdNb2NoYS5qcycpfSBcXFwiJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi90ZXN0ZGV2ZW52Mi5qcycpfVxcXCIgLS1yZXF1aXJlIHNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcmA7XG4gIH1cbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRCb2R5LFxuICBdO1xuICBjb25zdCBwcm9jID0gY2hpbGRfcHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCB7IHN0ZGlvOiAnaW5oZXJpdCcgfSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qZXN0L2plc3RTcGF3blByb2Nlc3MuanMiLCJjbGFzcyBQbHVnaW5SZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSB7fTtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgfVxuICByZWdpc3RlcihuYW1lLCBwbHVnaW4pIHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnlbbmFtZV0pIHtcbiAgICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICB0aGlzLnJlZ2lzdHJ5W25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgcGx1Z2luUmVnaXN0cnkgPSBuZXcgUGx1Z2luUmVnaXN0cnkoKTtcbmNvbnN0IHBsdWdpbnMgPSBwbHVnaW5SZWdpc3RyeS5wbHVnaW5zO1xuY29uc3QgcmVnaXN0ZXIgPSBwbHVnaW5SZWdpc3RyeS5yZWdpc3Rlci5iaW5kKHBsdWdpblJlZ2lzdHJ5KTtcbmV4cG9ydCB7IHJlZ2lzdGVyIH07XG5leHBvcnQgZGVmYXVsdCBwbHVnaW5zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2luUmVnaXN0cnkuanMiLCIvKlxuICBUaGlzIGZpbGVzIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2hlbiBjYWxsZWQgZ2VuZXJhdGVzIGEgd2VicGFjayBjb25maWcganNvbi5cbiAgYGFyZ3ZgIGlzIHBhc3NlZCBpbnRvIHRoaXMgZnVuY3Rpb24uXG5cbiAgd2hlbiBgYXJndi5lbnYgPT09IGZhbHNleWBcbiAgICBUaGlzIGNvbXBpbGVzIGZvciBhIGRldiBzZXJ2ZXIgdmlhIHdlYnBhY2stZGV2LW1pZGRsZXdhcmUuICBObyBmaWxlcyBhcmUgY3JlYXRlZCB0byBkaXNrLFxuICAgIG9ubHkgY3JlYXRlZCBpbiBtZW1vcnkuXG5cbiAgd2hlbiBgYXJndi5lbnYgPT09ICdidWlsZCdgXG4gICAgVGhpcyBjb21waWxlcyBmaWxlcyB0byBkaXNrIGluIGEgL2Rpc3QgZm9sZGVyIGFuZCBhIC9kZW1vIGZvbGRlci5cblxuICB3aGVuIGBhcmd2LmRpcnJvb3QgPT09IHNvbWUgcGF0aGBcbiAgICBUaGlzIGlzIHVzZWQgd2hlbiBkZXZfZW52IGl0c2VsZiBpcyBjb21waWxlZC5cbiAgICBUaGlzIHZlcnkgZmlsZSBpcyBjb21waWxlZCBhY2NvcmRpbmcgdGhlIGNvbmZpZyBzZXQgYnkgdGhpcyBmaWxlLlxuICAgIFRoaXMgaXMgbmVlZGVkIHRvIG1ha2UgZGV2X2VudiBwb3J0YWJsZSB2aWEgbnBtLlxuICAgIGJhYmVsLW5vZGUgbmVlZHMgdG8gY29tcGlsZSB0aGlzIGRldl9lbnYgdG8gd29yayxcbiAgICBidXQgdGhpcyBkb2VzIG5vdCBwbGF5IHdlbGwgd2hlbiBkZXZfZW52IGlzIGluIGEgbm9kZV9tb2R1bGVzIGZvbGRlci5cbiAgICBTbyB3ZSBuZWVkIHRvIGNvbXBpbGUgZGV2X2VudiBiZWZvcmUgcHVibGlzaGluZyB0byBucG0uXG4gICAgRGlyZWN0b3J5IHBhdGhzIG5lZWQgdG8gYmUgdHdlYWtlZCB0byBhY2NvbXBsaXNoIHRoaXMsXG4gICAgYW5kIHRoYXQncyB3aGF0IGBhcmd2LmRpcnJvb3RgIGhlbHBzIHdpdGguXG5cblxuICBUaGlzIGZ1bmN0aW9uIGlzIGFsc28gYWZmZWN0ZWQgYnkgcGFja2FnZS5qc29uLlxuXG4gIHdoZW4gcGFja2FnZS5qc29uLmJ1bmRsZUZvck5vZGUgPT09IHRydWVcbiAgICBpbiBjb25qdW5jdGlvbiB3aXRoIGBhcmd2LmVudiA9PT0gJ2J1aWxkJ2AsIHRoZSBidW5kbGUgd2lsbFxuICAgIGhhdmUgc3BlY2lhbCBjb25zaWRlcmF0aW9uIGZvciBhIG5vZGUgcGxhdGZvcm0uXG4gICAgT25seSBhcHBsaWNhdGlvbiBmaWxlcyB3aWxsIGJlIGJ1bmRsZWQuXG4gICAgbm9kZV9tb2R1bGVzIGFuZCBub2RlIGJ1aWx0LWluIHJlcXVpcmVzIHdpbGwgbm90IGJlIGJ1bmRsZWQuXG4qL1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdOb2RlIGZyb20gJy4vY29yZS93ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnV2ViIGZyb20gJy4vd2VicGFja0VuaGFuY2VDb25maWdXZWInO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZCBmcm9tICcuL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZCc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnIGZyb20gJy4vY29yZS93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tDb25maWdDb21tYW5kTGluZSBmcm9tICcuL2NvcmUvd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lJztcbi8vIGltcG9ydCBhYWE4IGZyb20gJ0BkZWZ1YWx0L2FhYTgnO1xuLy8gY29uc29sZS5sb2coYWFhOCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuY3dkKCkpO1xuLy8gLy8gY29uc29sZS5sb2coYXJndik7XG4vLyBjb25zb2xlLmxvZyh7XG4vLyAgIGVudHJ5OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYXJndi5lbnRyeSksXG4vLyAgIG91dHB1dDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGFyZ3Yub3V0cHV0KSxcbi8vIH0pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbmZpZ0pzb24oKSB7XG4gIGNvbnN0IGlzQ29tbWFuZExpbmUgPSBhcmd2LmVudHJ5O1xuICBsZXQgY29uZmlnO1xuICBpZiAoaXNDb21tYW5kTGluZSkge1xuICAgIGNvbmZpZyA9IHdlYnBhY2tDb25maWdDb21tYW5kTGluZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZygpO1xuICAgIGNvbnN0IGlzQnVpbGQgPSBhcmd2LmVudiA9PT0gJ2J1aWxkJztcbiAgICBjb25zdCBkaXJSb290ID0gYXJndi5kaXJyb290IHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3QgcGFja2FnZUpzb24gPSBmcy5yZWFkSnNvblN5bmMoYCR7ZGlyUm9vdH0vcGFja2FnZS5qc29uYCk7XG4gICAgY29uc3Qgb3V0cHV0RmlsZXMgPSB7fTtcbiAgICBjb25zdCBsaWJyYXJ5TmFtZSA9IHBhY2thZ2VKc29uLm5hbWU7XG4gICAgY29uc3QgbGlicmFyeU5hbWVSZWR1Y2VkID0gbGlicmFyeU5hbWUuc3BsaXQoJy8nKVsxXSB8fCBsaWJyYXJ5TmFtZS5zcGxpdCgnLycpWzBdO1xuICAgIGlmIChpc0J1aWxkKSB7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5ID0gYGRpc3QvJHtsaWJyYXJ5TmFtZVJlZHVjZWR9YDtcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnlNaW4gPSBgZGlzdC8ke2xpYnJhcnlOYW1lUmVkdWNlZH0ubWluYDtcbiAgICAgIG91dHB1dEZpbGVzLmRlbW8gPSAnZGlzdC9kZW1vL2luZGV4JztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0RmlsZXMuZGVtbyA9ICdib290JztcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnkgPSBgJHtsaWJyYXJ5TmFtZVJlZHVjZWR9YDtcbiAgICB9XG5cbiAgICBsZXQgZW50cnlGaWxlcztcbiAgICBpZiAoYXJndlsnZGVtby1lbnRyeSddKSB7XG4gICAgICBlbnRyeUZpbGVzID0ge1xuICAgICAgICBbb3V0cHV0RmlsZXMuZGVtb106IFthcmd2WydkZW1vLWVudHJ5J11dLFxuICAgICAgfTtcbiAgICAvLyB9IGVsc2UgaWYgKGFyZ3ZbJ3RhaWxvci13ZWItYnVuZGxlLWZvci10ZXN0aW5nLW9mLWRldi1lbnYtaXRzZWxmJ10pIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBlbnRyeUZpbGVzID0ge1xuICAgIC8vICAgICBbb3V0cHV0RmlsZXMuZGVtb106IFtgJHtkaXJSb290fS9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzYF0sXG4gICAgLy8gICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUZpbGVzID0ge1xuICAgICAgICBNYWluQXBwOiBnbG9iYnkuc3luYyhbYCR7ZGlyUm9vdH0vcGFja2FnZXMvTWFpbkFwcC9NYWluQXBwLmpzYF0pLFxuICAgICAgICBbb3V0cHV0RmlsZXMubGlicmFyeV06IGdsb2JieS5zeW5jKFtcbiAgICAgICAgICBgJHtkaXJSb290fS8ke2xpYnJhcnlOYW1lUmVkdWNlZH0uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9L3NyYy9saWJyYXJ5L2luZGV4LmpzYCxcbiAgICAgICAgXSksXG4gICAgICAgIC4uLihcbiAgICAgICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5TWluID8ge1xuICAgICAgICAgICAgW291dHB1dEZpbGVzLmxpYnJhcnlNaW5dOiBnbG9iYnkuc3luYyhbYCR7ZGlyUm9vdH0vc3JjL2xpYnJhcnkvaW5kZXguanNgXSksXG4gICAgICAgICAgfSA6IHt9XG4gICAgICAgICksXG4gICAgICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogZ2xvYmJ5LnN5bmMoW1xuICAgICAgICAgIGAke2RpclJvb3R9LyouZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKiovKi8qLmRlbW8uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9LyoqLyovZGVtby5qc2AsXG4gICAgICAgICAgYCEke2RpclJvb3R9L3BhY2thZ2VzLyoqLypgLFxuICAgICAgICAgIGAke2RpclJvb3R9L3BhY2thZ2VzL01haW5BcHAvTWFpbkFwcC5qc2AsXG4gICAgICAgIF0pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUVudHJ5T3V0cHV0U3RhbmRhcmQoXG4gICAgICBjb25maWcsIGRpclJvb3QsIGxpYnJhcnlOYW1lLCBlbnRyeUZpbGVzLFxuICAgICk7XG4gICAgaWYgKHBhY2thZ2VKc29uLmJ1bmRsZUZvck5vZGUpIHtcbiAgICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZShjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdXNlcm5hbWUgPSBudWxsO1xuICAgICAgaWYgKHBhY2thZ2VKc29uLnJlcG9zaXRvcnkgJiYgcGFja2FnZUpzb24ucmVwb3NpdG9yeS51cmwpIHtcbiAgICAgICAgdXNlcm5hbWUgPSBwYWNrYWdlSnNvbi5yZXBvc2l0b3J5LnVybC5yZXBsYWNlKCc6Ly8nKS5zcGxpdCgnLycpWzFdO1xuICAgICAgfVxuICAgICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdXZWIoXG4gICAgICAgIGNvbmZpZywgbGlicmFyeU5hbWUsIGlzQnVpbGQsIGRpclJvb3QsIHVzZXJuYW1lLCBvdXRwdXRGaWxlcyxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGZzLndyaXRlRmlsZVN5bmMoJy4vX3dlYnBhY2stY29uZmlnLXByZXZpZXcuanNvbicsIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikpO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbmZpZ0pzb24oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tDb25maWcuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbmltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IEh0bWxXZWJwYWNrUGx1Z2luIGZyb20gJ2h0bWwtd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IFN0cmluZ1JlcGxhY2VQbHVnaW4gZnJvbSAnc3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IEV4dHJhY3RUZXh0UGx1Z2luIGZyb20gJ2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQganNvbkltcG9ydGVyIGZyb20gJ25vZGUtc2Fzcy1qc29uLWltcG9ydGVyJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgcGx1Z2lucywgeyByZWdpc3RlciBhcyByZWdpc3RlclBsdWdpbiB9IGZyb20gJy4vcGx1Z2luUmVnaXN0cnknO1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlTG9hZGVyUGFyYW1PZlVzZSh1c2VQbHVnaW4sIG1vcmVMb2FkZXJQYXJhbXMpIHtcbiAgaWYgKHVzZVBsdWdpbikge1xuICAgIHJldHVybiB7IHVzZTogRXh0cmFjdFRleHRQbHVnaW4uZXh0cmFjdChtb3JlTG9hZGVyUGFyYW1zKSB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdXNlOiBbbW9yZUxvYWRlclBhcmFtcy5mYWxsYmFjaywgLi4ubW9yZUxvYWRlclBhcmFtcy51c2VdLFxuICB9O1xufVxuXG5mdW5jdGlvbiBtb3ZlTW9kaWZ5KHNvdXJjZSwgbW9kaWZ5UGF0aCwgbW9kaWZ5Q29udGVudCkge1xuICBsZXQgc291cmNlcyA9IFtdO1xuICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzb3VyY2VzID0gc291cmNlO1xuICB9IGVsc2Uge1xuICAgIHNvdXJjZXMucHVzaChzb3VyY2UpO1xuICB9XG4gIGxldCB0b0NvcHkgPSBbXTtcbiAgc291cmNlcy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgdG9Db3B5ID0gW1xuICAgICAgLi4udG9Db3B5LFxuICAgICAgLi4uZ2xvYmJ5LnN5bmMocGF0dGVybiksXG4gICAgXTtcbiAgfSk7XG4gIHRvQ29weS5mb3JFYWNoKChmaWxlUGF0aCkgPT4ge1xuICAgIGxldCBmaWxlUGF0aE91dCA9IGZpbGVQYXRoO1xuICAgIGlmIChtb2RpZnlQYXRoKSB7XG4gICAgICBmaWxlUGF0aE91dCA9IG1vZGlmeVBhdGgoZmlsZVBhdGgpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcbiAgICBpZiAobW9kaWZ5Q29udGVudCkge1xuICAgICAgY29udGVudCA9IG1vZGlmeUNvbnRlbnQoY29udGVudCwgZmlsZVBhdGgsIGZpbGVQYXRoT3V0KTtcbiAgICB9XG4gICAgZnMub3V0cHV0RmlsZVN5bmMoZmlsZVBhdGhPdXQsIGNvbnRlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZywgbGlicmFyeU5hbWUsIGlzQnVpbGQsIGRpclJvb3QsIHVzZXJuYW1lLCBvdXRwdXRGaWxlcykge1xuICBjb25zdCBkZXZIdG1sUGF0aCA9ICcuL2luZGV4Lmh0bWwnO1xuICBpZiAoaXNCdWlsZCkge1xuICAgIG1vdmVNb2RpZnkoWydzcmMvaW1wb3J0LWV4YW1wbGVzLyoqLyEod2VicGFjay5jb25maWcpLionLCAnc3JjL3RvbmljRXhhbXBsZS5qcyddLCAoZmlsZVBhdGgpID0+IHtcbiAgICAgIHJldHVybiBmaWxlUGF0aC5yZXBsYWNlKCdzcmMvJywgJy4vJyk7XG4gICAgfSxcbiAgICAoY29udGVudCkgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvTElCUkFSWU5BTUUvZywgbGlicmFyeU5hbWUpO1xuICAgIH0pO1xuXG4gICAgcmVnaXN0ZXJQbHVnaW4oJ1VnbGlmeUpzUGx1Z2luJywgbmV3IHdlYnBhY2sub3B0aW1pemUuVWdsaWZ5SnNQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogL1xcLm1pblxcLmpzJC8sXG4gICAgICBtaW5pbWl6ZTogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVBhdGggPSAnc3JjL2RlbW8vaW5kZXguZWpzJztcbiAgICBjb25zdCBodG1sVGVtcGxhdGVFeGlzdHMgPSBmcy5leGlzdHNTeW5jKHRlbXBsYXRlUGF0aCk7XG4gICAgY29uc3QgaW5kZXhIdG1sU2V0dGluZ3MgPSB7XG4gICAgICBjaHVua3M6IFtvdXRwdXRGaWxlcy5kZW1vXSxcbiAgICAgIC4uLihcbiAgICAgICAgaHRtbFRlbXBsYXRlRXhpc3RzID8geyB0ZW1wbGF0ZTogdGVtcGxhdGVQYXRoIH0gOiB7fVxuICAgICAgKSxcbiAgICAgIHRpdGxlOiAnYWZhc2RmYXNkZmFzZCcsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGxpYnJhcnlOYW1lLFxuICAgIH07XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ2RlbW9JbmRleC1IdG1sV2VicGFja1BsdWdpbicsIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICBmaWxlbmFtZTogJy4vZGlzdC9kZW1vL2luZGV4Lmh0bWwnLFxuICAgICAgLi4uaW5kZXhIdG1sU2V0dGluZ3MsXG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdkZW1vRGV2SW5kZXgtSHRtbFdlYnBhY2tQbHVnaW4nLCBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgY2h1bmtzOiBbb3V0cHV0RmlsZXMuZGVtb10sXG4gICAgICBmaWxlbmFtZTogZGV2SHRtbFBhdGgsXG4gICAgfSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJQbHVnaW4oJ1N0cmluZ1JlcGxhY2VQbHVnaW4nLCBuZXcgU3RyaW5nUmVwbGFjZVBsdWdpbigpKTtcblxuICByZWdpc3RlclBsdWdpbignTG9hZGVyT3B0aW9uc1BsdWdpbicsIG5ldyB3ZWJwYWNrLkxvYWRlck9wdGlvbnNQbHVnaW4oe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHNhc3NMb2FkZXI6IHtcbiAgICAgICAgaW1wb3J0ZXI6IGpzb25JbXBvcnRlcixcbiAgICAgIH0sXG4gICAgICBjb250ZXh0OiBkaXJSb290LFxuICAgIH0sXG4gIH0pKTtcblxuXG4gIGNvbnN0IG1vZHVsZSA9IHsgLi4uKG9yaWdpbmFsQ29uZmlnICYmIG9yaWdpbmFsQ29uZmlnLm1vZHVsZSkgfTtcbiAgbGV0IHVzaW5nRXh0cmFjdFRleHRQbHVnaW4gPSBmYWxzZTtcbiAgaWYgKGlzQnVpbGQpIHtcbiAgICByZWdpc3RlclBsdWdpbignRXh0cmFjdFRleHRQbHVnaW4nLCBuZXcgRXh0cmFjdFRleHRQbHVnaW4oJ1tuYW1lXS5jc3MnKSk7XG4gICAgdXNpbmdFeHRyYWN0VGV4dFBsdWdpbiA9IHRydWU7XG4gIH1cbiAgbW9kdWxlLnJ1bGVzID0gW1xuICAgIC4uLihtb2R1bGUucnVsZXMgfHwgW10pLFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgIC4uLmdlbmVyYXRlTG9hZGVyUGFyYW1PZlVzZSh1c2luZ0V4dHJhY3RUZXh0UGx1Z2luLCB7XG4gICAgICAgIGZhbGxiYWNrOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgICAgdXNlOiBbJ2Nzcy1sb2FkZXInXSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLnNjc3MkLyxcbiAgICAgIC4uLmdlbmVyYXRlTG9hZGVyUGFyYW1PZlVzZSh1c2luZ0V4dHJhY3RUZXh0UGx1Z2luLCB7XG4gICAgICAgIGZhbGxiYWNrOiAnc3R5bGUtbG9hZGVyJyxcbiAgICAgICAgdXNlOiBbXG4gICAgICAgICAgJ2Nzcy1sb2FkZXI/c291cmNlTWFwJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6ICdzYXNzLWxvYWRlcj9zb3VyY2VNYXAnLFxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIEpTT04gaW1wb3J0ZXIgdmlhIHNhc3MtbG9hZGVyJ3Mgb3B0aW9ucy5cbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgaW1wb3J0ZXI6IGpzb25JbXBvcnRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmpzb24kLyxcbiAgICAgIGxvYWRlcnM6IFsnanNvbi1sb2FkZXInXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5lanMkLyxcbiAgICAgIGxvYWRlcjogJ2Vqcy1jb21waWxlZC1sb2FkZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLm1kLyxcbiAgICAgIGxvYWRlcnM6IFsnaHRtbC1sb2FkZXInLCAnbWFya2Rvd24tbG9hZGVyJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuanN8XFwuaHRtbHxcXC5lanMkLyxcbiAgICAgIGV4Y2x1ZGU6IFtfX2ZpbGVuYW1lXSxcbiAgICAgIGxvYWRlcjogU3RyaW5nUmVwbGFjZVBsdWdpbi5yZXBsYWNlKHtcbiAgICAgICAgcmVwbGFjZW1lbnRzOiBbe1xuICAgICAgICAgIHBhdHRlcm46IC9MSUJSQVJZTkFNRS9nLFxuICAgICAgICAgIHJlcGxhY2VtZW50KC8qIG1hdGNoLCBwMSwgb2Zmc2V0LCBzdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBsaWJyYXJ5TmFtZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC4uLm9yaWdpbmFsQ29uZmlnLFxuICAgIGRldnRvb2w6IGlzQnVpbGQgPyAnc291cmNlLW1hcCcgOiAnY2hlYXAtbW9kdWxlLWV2YWwtc291cmNlLW1hcCcsXG4gICAgbW9kdWxlLFxuICAgIHBsdWdpbnMsXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0VuaGFuY2VDb25maWdXZWIuanMiLCJmdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnLCBkaXJSb290LCBsaWJyYXJ5TmFtZSwgZW50cnlGaWxlcykge1xuICBjb25zdCBlbnRyeSA9IE9iamVjdC5rZXlzKGVudHJ5RmlsZXMpLnJlZHVjZSgoYWNjdW0sIGVudHJ5TmFtZSkgPT4ge1xuICAgIGlmIChlbnRyeUZpbGVzW2VudHJ5TmFtZV0ubGVuZ3RoKSB7XG4gICAgICBhY2N1bVtlbnRyeU5hbWVdID0gZW50cnlGaWxlc1tlbnRyeU5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gYWNjdW07XG4gIH0sIHt9KTtcblxuICBjb25zdCBvdXRwdXQgPSB7XG4gICAgcGF0aDogYCR7ZGlyUm9vdH1gLFxuICAgIGZpbGVuYW1lOiAnW25hbWVdLmpzJyxcbiAgICBsaWJyYXJ5OiBsaWJyYXJ5TmFtZSxcbiAgICBsaWJyYXJ5VGFyZ2V0OiAndW1kJyxcbiAgICB1bWROYW1lZERlZmluZTogdHJ1ZSxcbiAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgLy8gcHVibGljUGF0aDogJy9hc3NldHMvJyxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLm9yaWdpbmFsQ29uZmlnLFxuICAgIGVudHJ5LFxuICAgIG91dHB1dCxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrRW5oYW5jZUVudHJ5T3V0cHV0U3RhbmRhcmQuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHdlYnBhY2tNYWtlQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrTWFrZUNvbXBpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCwgcG9ydCA9IDMwMDApID0+IHtcbiAgLy8gVGhpcyBtb2R1bGUgZWl0aGVyIGV4dGVuZHMgYW4gZXhpc3RpbmcgZXhwcmVzcyBhcHBcbiAgLy8gb3IgY3JlYXRlcyBhIG5ldyBleHByZXNzIGFwcFxuICBsZXQgYXBwSXNCcmFuZE5ldyA9IGZhbHNlO1xuICBpZiAoIWFwcCkge1xuICAgIGFwcElzQnJhbmROZXcgPSB0cnVlO1xuICAgIGFwcCA9IGV4cHJlc3MoKTtcbiAgfVxuXG4gIC8vIFNQQSBzZXJ2ZXIgc3VwcG9ydFxuICAvLyBBbGwgVVJMcyB0aGF0IHN1Z2dlc3QgYW4gSFRNTCBmaWxlIHJlcXVlc3QgZ2V0IHJvdXRlZCB0aGUgc2FtZS5cbiAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCBsYXN0UGFydE9mVVJMID0gdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7XG4gICAgY29uc3QgdXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QgPSAoXG4gICAgICBsYXN0UGFydE9mVVJMLmluZGV4T2YoJy4nKSA9PT0gLTEgfHwgbGFzdFBhcnRPZlVSTC5pbmRleE9mKCcuaHRtbCcpICE9PSAtMVxuICAgICk7XG4gICAgaWYgKHVybEZvcm1hdFN1Z2dlc3RzSHRtbEZpbGVSZXF1ZXN0KSB7XG4gICAgICByZXEudXJsID0gJy8nO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUuaW5mbygn8J+UtyBTdGFydGluZyB3ZWJwYWNrIC4uLicpO1xuXG4gIGFwcC51c2Uod2VicGFja01ha2VDb21waWxlcih0cnVlKSk7XG5cbiAgYXBwLnVzZSgnL2ltYWdlcycsIGV4cHJlc3Muc3RhdGljKCdwYWNrYWdlcy9pbWFnZXMnKSk7XG4gIGFwcC51c2UoJy9mb250cycsIGV4cHJlc3Muc3RhdGljKCdwYWNrYWdlcy9mb250cycpKTtcblxuICAvLyBTb21lIEV4cHJlc3MgY29kZSBJIGRvbid0IHdhbnQgdG8gbG9zZSB5ZXQuXG4gIC8qXG4gIGFwcC5nZXQobmV3IFJlZ0V4cCgnXlsvXShpbWFnZXN8Zm9udHMpWy9dKC4rKScpLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgYHBhY2thZ2VzJHt1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWV9YCkpO1xuICB9KTtcblxuICBhcHAuZ2V0KCcvKicsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZSk7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnaW5kZXguaHRtbCcpKTtcbiAgfSk7XG5cbiAgYXBwLmdldChuZXcgUmVnRXhwKCcvXlxcLyguKilcXC5odG1sJCcpLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdpbmRleC5odG1sJykpO1xuICB9KTtcbiAgKi9cblxuICBpZiAoYXBwSXNCcmFuZE5ldykge1xuICAgIGFwcC5saXN0ZW4ocG9ydCwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgJ/CfjI4gTGlzdGVuaW5nIG9uIHBvcnQgJXMuIE9wZW4gdXAgaHR0cDovL2xvY2FsaG9zdDolcy8gaW4geW91ciBicm93c2VyLicsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgICBwb3J0LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwcDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrRXhwcmVzc1NlcnZlci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgdmFsaWRhdGVOcG1QYWNrYWdlTmFtZSBmcm9tICd2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lJztcblxuZnVuY3Rpb24gZW5zdXJlVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpIHtcbiAgbGV0IHBhY2thZ2VEb3RKc29uQ29udGVudDtcbiAgdHJ5IHtcbiAgICBwYWNrYWdlRG90SnNvbkNvbnRlbnQgPSBmcy5yZWFkSnNvblN5bmMocGFja2FnZURvdEpzb25QYXRoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHBhY2thZ2VEb3RKc29uQ29udGVudCA9IHt9O1xuICB9XG4gIHJldHVybiBwYWNrYWdlRG90SnNvbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9ibGVtc0luQ29uc29sZShwcm9ibGVtcykge1xuICBpZiAoT2JqZWN0LmtleXMocHJvYmxlbXMpLmxlbmd0aCkge1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMW0nLCAnXFxuUHJvYmxlbXMgd2l0aCBkZXBlbmRlbmNpZXMnLCAnXFx4MWJbMG0nKTtcbiAgfVxuICBPYmplY3Qua2V5cyhwcm9ibGVtcykuZm9yRWFjaCgobW9kdWxlUmVzb3VyY2UpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ1xceDFiWzM2bScsICdcXG5Qcm9ibGVtIGluIG1vZHVsZSB3aXRoIGBpbXBvcnRgIHN0YXRlbWVudDonLCAnXFx4MWJbMG0nKTtcbiAgICBjb25zb2xlLmluZm8oJ1xceDFiWzM3bScsIGAgJHttb2R1bGVSZXNvdXJjZX1gLCAnXFx4MWJbMG0nKTtcbiAgICBPYmplY3Qua2V5cyhwcm9ibGVtc1ttb2R1bGVSZXNvdXJjZV0pLmZvckVhY2goKGRlcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHByb2JsZW1Nc2cgPSBwcm9ibGVtc1ttb2R1bGVSZXNvdXJjZV1bZGVwTmFtZV0ubXNnO1xuICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszM20nLCAnRGVwZW5kZW5jeSByZXF1ZXN0ZWQgYXM6JywgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzM3bScsIGAgJHtkZXBOYW1lfWAsICdcXHgxYlswbScpO1xuICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszM20nLCBgTWVzc2FnZTogJHtwcm9ibGVtTXNnfWAsICdcXHgxYlswbScpO1xuICAgICAgY29uc3QgcHJvYmxlbUluZm8gPSBwcm9ibGVtc1ttb2R1bGVSZXNvdXJjZV1bZGVwTmFtZV0uaW5mbztcbiAgICAgIGlmIChwcm9ibGVtSW5mbykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzM3bScsIGAtICR7cHJvYmxlbUluZm8uam9pbignXFxuIC0gJyl9YCwgJ1xceDFiWzBtJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMoZGVwZW5kZW5jaWVzLCBwYWNrYWdlRG90SnNvbkNvbnRlbnQpIHtcbiAgY29uc3QgcHJvYmxlbXMgPSB7fTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgoZGVwKSA9PiB7XG4gICAgaWYgKGRlcC5tb2R1bGUpIHtcbiAgICAgIGNvbnN0IHJhd1JlcXVlc3QgPSBkZXAubW9kdWxlLnJhd1JlcXVlc3Q7XG4gICAgICAvLyBpZiAocmF3UmVxdWVzdC5pbmRleE9mKCcvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL3BhY2thZ2VzJykgPT09IDApIHtcbiAgICAgIC8vICAgY29uc29sZS5pbmZvKCdcXHgxYlszM20nLCAnZGVwV1RGJywgcmF3UmVxdWVzdCwgJ1xceDFiWzBtJyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdkZXBXVEYnLCBkZXApO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5pbmZvKCdcXHgxYlszM20nLCAnZGVwR0dHJywgcmF3UmVxdWVzdCwgJ1xceDFiWzBtJyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdkZXBHR0cnLCBkZXApO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBub3QgYSByZWxhdGl2ZSBkZXBlbmRlbmN5XG4gICAgICAvLyBub3QgYW4gYWJzb2x1dCBkZXBlbmRlbmN5XG4gICAgICAvLyB3ZSBhcmUgb25seSBjb25jZXJuZWQgd2l0aCBkZXBlbmVuY2llcyByZWZlcmVuY2VkIGxpa2VcbiAgICAgIC8vIGBpbXBvcnQgYXNkZiBmcm9tICdhc2RmJztgXG4gICAgICAvLyBvclxuICAgICAgLy8gYGltcG9ydCBxd2VyIGZyb20gJ2FzZGYvcXdlcic7YGBcbiAgICAgIC8vIG9yXG4gICAgICAvLyBgaW1wb3J0IGFzZGYgZnJvbSAnQGRlZnVhbHQvYXNkZic7YGBcbiAgICAgIC8vIFRoZXNlIGRlcGVuZGVuY2llcyB3aWxsIGJlIGVpdGhlciBpbiAvbm9kZV9tb2R1bGVzLyBvciAvcGFja2FnZXMvLFxuICAgICAgLy8gdGhlIGxhdHRlciBmb3Igb25seSBtb25vcmVwbyB1c2UuXG4gICAgICBpZiAocmF3UmVxdWVzdCAmJiByYXdSZXF1ZXN0LmluZGV4T2YoJy4nKSAhPT0gMCAmJiByYXdSZXF1ZXN0LmluZGV4T2YoJy8nKSAhPT0gMCkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGVOcG1QYWNrYWdlTmFtZShyYXdSZXF1ZXN0KTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25SZXN1bHQudmFsaWRGb3JOZXdQYWNrYWdlcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGVwZW5kZW5jaWVzIHx8XG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXBlbmRlbmNpZXNbcmF3UmVxdWVzdF1cbiAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXZEZXBlbmRlbmNpZXMgfHxcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRldkRlcGVuZGVuY2llc1tyYXdSZXF1ZXN0XVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcm9ibGVtc1tyYXdSZXF1ZXN0XSA9IHsgbXNnOiAnTUlTU0lORyBGUk9NIFBBQ0tBR0UuSlNPTicgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaW5mbyA9IFtcbiAgICAgICAgICAgIC4uLnZhbGlkYXRpb25SZXN1bHQud2FybmluZ3MgfHwgW10sIC4uLnZhbGlkYXRpb25SZXN1bHQuZXJyb3JzIHx8IFtdLFxuICAgICAgICAgIF0uZmlsdGVyKChtc2cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtc2cgIT09ICduYW1lIGNhbiBvbmx5IGNvbnRhaW4gVVJMLWZyaWVuZGx5IGNoYXJhY3RlcnMnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkYXRpb25SZXN1bHQpO1xuICAgICAgICAgIGlmIChpbmZvLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJvYmxlbXNbcmF3UmVxdWVzdF0gPSB7XG4gICAgICAgICAgICAgIG1zZzogJ0JBRCBGT1JNQVRUSU5HJyxcbiAgICAgICAgICAgICAgaW5mbzogWy4uLnZhbGlkYXRpb25SZXN1bHQud2FybmluZ3MgfHwgW10sIC4uLnZhbGlkYXRpb25SZXN1bHQuZXJyb3JzIHx8IFtdXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMocHJvYmxlbXMpLmxlbmd0aCA/IHByb2JsZW1zIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyhzdGF0cywgc2hvdWxkU2hvd1Byb2JsZW1zSW5Db25zb2xlID0gdHJ1ZSkge1xuICBjb25zdCBpc01vbm9yZXBvID0gZnMuZXhpc3RzU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlc2ApO1xuXG4gIGNvbnN0IHBhY2thZ2VEb3RKc29uQ2FjaGUgPSB7fTtcbiAgY29uc3QgcHJvYmxlbXMgPSB7fTtcbiAgY29uc29sZS5sb2coJ0dHR0dHRycpO1xuICBzdGF0cy5jb21waWxhdGlvbi5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIC8vIG9ubHkgY29uY2VybmVkIHdpdGggbW9kdWxlIGVudHJpZXMgZnJvbSAvcGFja2FnZXMvIGZvbGRlciAobm90IG5vZGVfbW9kdWxlcylcbiAgICBpZiAoXG4gICAgICBtb2R1bGUucmVzb3VyY2UgJiZcbiAgICAgIG1vZHVsZS5yZXNvdXJjZS5pbmRleE9mKCdub2RlX21vZHVsZXMnKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIGxldCBwYWNrYWdlRG90SnNvblBhdGg7XG4gICAgICBpZiAoaXNNb25vcmVwbykge1xuICAgICAgICBsZXQgcGFja2FnZXNEaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlc2A7XG4gICAgICAgIHBhY2thZ2VzRGlyID0gZW5zdXJlVHJhaWxpbmdTbGFzaChwYWNrYWdlc0Rpcik7XG4gICAgICAgIC8vIGdldCBzdWJzdHJpbmcgZnJvbSBmaXJzdCB0cmFpbGluZyBzbGFzaCBhZnRlciB3aGF0ZXZlciBwYWNrYWdlc0RpciBpc1xuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUucmVzb3VyY2UpO1xuICAgICAgICBjb25zdCBwYWNrYWdlRm9sZGVyTmFtZSA9IG1vZHVsZS5yZXNvdXJjZS5zcGxpdChwYWNrYWdlc0RpcilbMV0uc3BsaXQoJy8nKVswXTtcbiAgICAgICAgcGFja2FnZURvdEpzb25QYXRoID0gYCR7cGFja2FnZXNEaXJ9JHtwYWNrYWdlRm9sZGVyTmFtZX0vcGFja2FnZS5qc29uYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY2thZ2VEb3RKc29uUGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2UuanNvbmA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VEb3RKc29uQ29udGVudCA9IChcbiAgICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdIHx8IGVuc3VyZVJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpXG4gICAgICApO1xuICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdID0gcGFja2FnZURvdEpzb25Db250ZW50O1xuXG4gICAgICBjb25zdCBwYWNrYWdlU29tZWhvd1B1YmxpYyA9IChcbiAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5wcml2YXRlIHx8XG4gICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQucHJpdmF0ZUZyb21HaXRodWJcbiAgICAgICk7XG5cbiAgICAgIC8vIG9ubHkgY29uY2VybmVkIGlmIG1vZHVsZSdzIHBhY2thZ2UuanNvbiBpcyBub3QgZW1wdHksXG4gICAgICAvLyBhbmQgaWYgaXQgaXMgcHVibGljIG9uIGVpdGhlciBOUE0gb3IgR2lyaHViXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFja2FnZURvdEpzb25Db250ZW50KS5sZW5ndGggJiYgcGFja2FnZVNvbWVob3dQdWJsaWMpIHtcbiAgICAgICAgY29uc3QgZGVwUHJvYmxlbXMgPSBmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMobW9kdWxlLmRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KTtcbiAgICAgICAgaWYgKGRlcFByb2JsZW1zKSB7XG4gICAgICAgICAgcHJvYmxlbXNbbW9kdWxlLnJlc291cmNlXSA9IGRlcFByb2JsZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPiAwICYmIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSkge1xuICAgIHNob3dQcm9ibGVtc0luQ29uc29sZShwcm9ibGVtcyk7XG4gIH1cblxuICByZXR1cm4gcHJvYmxlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9