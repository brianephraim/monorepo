require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs-extra"), require("webpack"), require("globby"), require("path"), require("yargs"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("single-line-log"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["fs-extra", "webpack", "globby", "path", "yargs", "child_process", "directory-named-webpack-plugin", "express", "extract-text-webpack-plugin", "html-webpack-plugin", "node-sass-json-importer", "single-line-log", "string-replace-webpack-plugin", "url", "validate-npm-package-name", "webpack-dev-middleware", "webpack-node-externals"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("fs-extra"), require("webpack"), require("globby"), require("path"), require("yargs"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("single-line-log"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else
		root["@defualt/dev_env"] = factory(root["fs-extra"], root["webpack"], root["globby"], root["path"], root["yargs"], root["child_process"], root["directory-named-webpack-plugin"], root["express"], root["extract-text-webpack-plugin"], root["html-webpack-plugin"], root["node-sass-json-importer"], root["single-line-log"], root["string-replace-webpack-plugin"], root["url"], root["validate-npm-package-name"], root["webpack-dev-middleware"], root["webpack-node-externals"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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

module.exports = require("globby");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _yargs = __webpack_require__(4);

var _webpackEnhanceBaseConfig = __webpack_require__(6);

var _webpackEnhanceBaseConfig2 = _interopRequireDefault(_webpackEnhanceBaseConfig);

var _webpackEnhanceConfigNode = __webpack_require__(7);

var _webpackEnhanceConfigNode2 = _interopRequireDefault(_webpackEnhanceConfigNode);

var _webpackEnhanceImmediateConfig = __webpack_require__(15);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpackConfigResolve = __webpack_require__(13);

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
/* 7 */
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

var _path = __webpack_require__(3);

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

  var modulesDir = '../node_modules';
  if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
    modulesDir = __dirname.split('/packages/')[0] + '/node_modules';
  }
  console.log('a', modulesDir);
  console.log('b', '/Users/brianephraim/Sites/monorepo/node_modules');
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _yargs = __webpack_require__(4);

var _shellCommand = __webpack_require__(18);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _jestSpawnProcess = __webpack_require__(16);

var _jestSpawnProcess2 = _interopRequireDefault(_jestSpawnProcess);

var _webpackMakeCompiler = __webpack_require__(9);

var _webpackMakeCompiler2 = _interopRequireDefault(_webpackMakeCompiler);

var _webpackRunCompiler = __webpack_require__(8);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackBuildCommandLine = __webpack_require__(14);

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
  singleLineLog(progress + '-xxxxxx');
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


var DirectoryNamedWebpackPlugin = __webpack_require__(24);
var parseRequestResolvePlugin = __webpack_require__(12);
var path = __webpack_require__(3);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackRunCompiler = __webpack_require__(8);

var _webpackRunCompiler2 = _interopRequireDefault(_webpackRunCompiler);

var _webpackConfigCommandLine = __webpack_require__(5);

var _webpackConfigCommandLine2 = _interopRequireDefault(_webpackConfigCommandLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function webpackMakeCompiler() {
  var config = (0, _webpackConfigCommandLine2.default)();
  console.log(config);
  var compiler = (0, _webpack2.default)(config);
  return compiler;
}

exports.default = function () {
  (0, _webpackRunCompiler2.default)(webpackMakeCompiler);
};

/***/ }),
/* 15 */
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
        compiler.plugin("compilation", function (compilation, data) {
          data.normalModuleFactory.plugin("parser", function (parser, options) {
            parser.plugin("expression " + expressionName, function compilerParserPlugin() {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(10);

var _child_process2 = _interopRequireDefault(_child_process);

var _path = __webpack_require__(3);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jestConfig from './jestConfig';
// const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;

/* eslint-disable camelcase */
var configPath = __dirname + '/jestConfig.js';
var configBasePath = __dirname + '/jestConfigBase.js';
// qwer();

exports.default = function (testdevenv) {
  var watch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var testPathPattern = arguments[2];

  console.log('JEST SPAWN', testdevenv);
  var command = 'sh';
  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  var commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/jest --watch=' + (watch && watch !== 'false' ? 'true' : 'false') + ' --config=' + configPath + (testPathPattern ? [" --testPathPattern='", testPathPattern, "'"].join('') : '');
  if (testdevenv) {
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest -t testdevenv --config=${configBasePath}`;
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest ${__dirname}/testdevenv.js  --config=${configBasePath}`;
    commandBody = 'CI=true ' + process.cwd() + '/node_modules/.bin/mocha-webpack --require babel-core/register --webpack-config ' + _path2.default.resolve(__dirname, '../core/webpackConfigMocha.js') + ' "' + _path2.default.resolve(__dirname, './testdevenv2.js') + '"';
  }
  console.log('commandBody', commandBody);
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
/*
  This file used in 2 places
    1.  This file is executed by the monorepo serving as the monorepo's dev environment.
        (Only the monorepo uses dev_env like this. When the monorepo's packages are scattered
        into individual repos, each individual repo has a dev_env dependency
        in its node_modules folder,
        but this dev_env is executed from a compiled version of the dev_env.
        This is called from the individual repo's ./node_modules/.bin/devenv,
        which points to ./node_modules/@defualt/dev_env/dist/dev_env.js.)
    2.  This file is executed during the npm prepublish, which creates the /dist folder
        mentioned in (1) above.
*/
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

  var childProcess = __webpack_require__(10);
  var proc = childProcess.spawn(command, args, options || {});
  proc.on('exit', function (code, signal) {
    console.log('DOO');
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yargs = __webpack_require__(4);

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _globby = __webpack_require__(2);

var _globby2 = _interopRequireDefault(_globby);

var _webpackEnhanceConfigNode = __webpack_require__(7);

var _webpackEnhanceConfigNode2 = _interopRequireDefault(_webpackEnhanceConfigNode);

var _webpackEnhanceConfigWeb = __webpack_require__(20);

var _webpackEnhanceConfigWeb2 = _interopRequireDefault(_webpackEnhanceConfigWeb);

var _webpackEnhanceEntryOutputStandard = __webpack_require__(21);

var _webpackEnhanceEntryOutputStandard2 = _interopRequireDefault(_webpackEnhanceEntryOutputStandard);

var _webpackEnhanceBaseConfig = __webpack_require__(6);

var _webpackEnhanceBaseConfig2 = _interopRequireDefault(_webpackEnhanceBaseConfig);

var _webpackConfigCommandLine = __webpack_require__(5);

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
  console.log('ARGV', _yargs.argv);
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
    console.log('argvargvargv', _yargs.argv);
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

var _globby = __webpack_require__(2);

var _globby2 = _interopRequireDefault(_globby);

var _pluginRegistry = __webpack_require__(17);

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

var _globby = __webpack_require__(2);

var _globby2 = _interopRequireDefault(_globby);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _webpackMakeCompiler = __webpack_require__(9);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NzM1NjRhYThjZjI4MjQzOWRhMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFja0VuaGFuY2VDb25maWdXZWIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIiXSwibmFtZXMiOlsiZW5oYW5jZSIsImNvbmZpZyIsImVudHJ5IiwibWFpbiIsIm91dHB1dCIsInNwbGl0IiwiZmlsZW5hbWUiLCJwb3AiLCJwYXRoIiwiam9pbiIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JpZ2luYWxDb25maWciLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJsb2FkZXIiLCJleGNsdWRlIiwicmVzb2x2ZSIsInVzZSIsInBsdWdpbnMiLCJwdXNoIiwiQmFubmVyUGx1Z2luIiwiYmFubmVyIiwicmF3IiwiZW50cnlPbmx5IiwibW9kdWxlc0RpciIsIl9fZGlybmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiZGV2dG9vbCIsInRhcmdldCIsIm5vZGUiLCJfX2ZpbGVuYW1lIiwiZXh0ZXJuYWxzIiwid2VicGFja01ha2VDb21waWxlciIsInJ1biIsImVyciIsInN0YXRzIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwiYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUiLCJwdWJsaWNQYXRoIiwiY29sb3JzIiwid2FpdFVudGlsVmFsaWQiLCJlbnYiLCJpdGVtIiwidGVzdGRldmVudiIsIndhdGNoIiwidGVzdFBhdGhQYXR0ZXJuIiwic2luZ2xlTGluZUxvZyIsInJlcXVpcmUiLCJzdGRvdXQiLCJwcmludFByb2dyZXNzIiwicHJvZ3Jlc3MiLCJwcm9jZXNzIiwiY2xlYXJMaW5lIiwicGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbiIsInBhcnNlUmVxdWVzdCIsImFwcGx5IiwicmVzb2x2ZXIiLCJwbHVnaW4iLCJyZXF1ZXN0IiwiY2FsbGJhY2siLCJuZXdSZXF1ZXN0U3RyIiwib2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9SZXNvbHZlIiwiZXhwb3J0cyIsIkRpcmVjdG9yeU5hbWVkV2VicGFja1BsdWdpbiIsIm1vZHVsZXMiLCJjd2QiLCJleHRlbnNpb25zIiwicmVxdWVzdFN0ciIsInNldE1vZHVsZUNvbnN0YW50IiwiZXhwcmVzc2lvbk5hbWUiLCJmbiIsImNvbXBpbGF0aW9uIiwiZGF0YSIsIm5vcm1hbE1vZHVsZUZhY3RvcnkiLCJwYXJzZXIiLCJvcHRpb25zIiwiY29tcGlsZXJQYXJzZXJQbHVnaW4iLCJzdGF0ZSIsImN1cnJlbnQiLCJhZGRWYXJpYWJsZSIsInJlc291cmNlIiwiY29udGV4dCIsImNvbmZpZ1BhdGgiLCJjb25maWdCYXNlUGF0aCIsImNvbW1hbmQiLCJjb21tYW5kQm9keSIsImFyZ3MiLCJwcm9jIiwic3Bhd24iLCJzdGRpbyIsIm9uIiwiY29kZSIsInNpZ25hbCIsImtpbGwiLCJwaWQiLCJleGl0IiwiUGx1Z2luUmVnaXN0cnkiLCJyZWdpc3RyeSIsIm5hbWUiLCJwbHVnaW5SZWdpc3RyeSIsInJlZ2lzdGVyIiwiYmluZCIsImNvbW1hbmRUb1J1biIsImtpbGxQYXJlbnRPbkV4aXQiLCJjaGlsZFByb2Nlc3MiLCJnZW5lcmF0ZUNvbmZpZ0pzb24iLCJpc0NvbW1hbmRMaW5lIiwiaXNCdWlsZCIsImRpclJvb3QiLCJkaXJyb290IiwicGFja2FnZUpzb24iLCJyZWFkSnNvblN5bmMiLCJvdXRwdXRGaWxlcyIsImxpYnJhcnlOYW1lIiwibGlicmFyeU5hbWVSZWR1Y2VkIiwibGlicmFyeSIsImxpYnJhcnlNaW4iLCJkZW1vIiwiZW50cnlGaWxlcyIsIk1haW5BcHAiLCJzeW5jIiwiYnVuZGxlRm9yTm9kZSIsInVzZXJuYW1lIiwicmVwb3NpdG9yeSIsInVybCIsInJlcGxhY2UiLCJnZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UiLCJ1c2VQbHVnaW4iLCJtb3JlTG9hZGVyUGFyYW1zIiwiZXh0cmFjdCIsImZhbGxiYWNrIiwibW92ZU1vZGlmeSIsInNvdXJjZSIsIm1vZGlmeVBhdGgiLCJtb2RpZnlDb250ZW50Iiwic291cmNlcyIsInRvQ29weSIsInBhdHRlcm4iLCJmaWxlUGF0aCIsImZpbGVQYXRoT3V0IiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsIm91dHB1dEZpbGVTeW5jIiwiZGV2SHRtbFBhdGgiLCJvcHRpbWl6ZSIsIlVnbGlmeUpzUGx1Z2luIiwiaW5jbHVkZSIsIm1pbmltaXplIiwidGVtcGxhdGVQYXRoIiwiaHRtbFRlbXBsYXRlRXhpc3RzIiwiZXhpc3RzU3luYyIsImluZGV4SHRtbFNldHRpbmdzIiwiY2h1bmtzIiwidGVtcGxhdGUiLCJ0aXRsZSIsIkxvYWRlck9wdGlvbnNQbHVnaW4iLCJzYXNzTG9hZGVyIiwiaW1wb3J0ZXIiLCJ1c2luZ0V4dHJhY3RUZXh0UGx1Z2luIiwibG9hZGVycyIsInJlcGxhY2VtZW50cyIsInJlcGxhY2VtZW50Iiwia2V5cyIsInJlZHVjZSIsImFjY3VtIiwiZW50cnlOYW1lIiwibGVuZ3RoIiwibGlicmFyeVRhcmdldCIsInVtZE5hbWVkRGVmaW5lIiwiYXBwIiwicG9ydCIsImFwcElzQnJhbmROZXciLCJyZXEiLCJyZXMiLCJuZXh0IiwibGFzdFBhcnRPZlVSTCIsInBhcnNlIiwicGF0aG5hbWUiLCJ1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCIsInN0YXRpYyIsImxpc3RlbiIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJlbnN1cmVSZWFkSnNvblN5bmMiLCJwYWNrYWdlRG90SnNvblBhdGgiLCJwYWNrYWdlRG90SnNvbkNvbnRlbnQiLCJzaG93UHJvYmxlbXNJbkNvbnNvbGUiLCJwcm9ibGVtcyIsIm1vZHVsZVJlc291cmNlIiwiZGVwTmFtZSIsInByb2JsZW1Nc2ciLCJtc2ciLCJwcm9ibGVtSW5mbyIsImZpbmREZXBlbmRlbmNpZXNQcm9ibGVtcyIsImRlcGVuZGVuY2llcyIsImRlcCIsInJhd1JlcXVlc3QiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidmFsaWRGb3JOZXdQYWNrYWdlcyIsImRldkRlcGVuZGVuY2llcyIsImZpbHRlciIsIndlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMiLCJzaG91bGRTaG93UHJvYmxlbXNJbkNvbnNvbGUiLCJpc01vbm9yZXBvIiwicGFja2FnZURvdEpzb25DYWNoZSIsInBhY2thZ2VzRGlyIiwicGFja2FnZUZvbGRlck5hbWUiLCJwYWNrYWdlU29tZWhvd1B1YmxpYyIsInByaXZhdGUiLCJwcml2YXRlRnJvbUdpdGh1YiIsImRlcFByb2JsZW1zIl0sIm1hcHBp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cEIsa0JBQXBCLElBQTBDQyxxQkFBMUM7O0FBRUEsVUFBTXNCLHVCQUNKLENBQUN0QixzQkFBc0J1QixPQUF2QixJQUNBLENBQUN2QixzQkFBc0J3QixpQkFGekI7O0FBS0E7QUFDQTtBQUNBLFVBQUl0SixPQUFPdUcsSUFBUCxDQUFZdUIscUJBQVosRUFBbUNuQixNQUFuQyxJQUE2Q3lDLG9CQUFqRCxFQUF1RTtBQUNyRSxZQUFNRyxjQUFjakIseUJBQXlCek0sT0FBTzBNLFlBQWhDLEVBQThDVCxxQkFBOUMsQ0FBcEI7QUFDQSxZQUFJeUIsV0FBSixFQUFpQjtBQUNmdkIsbUJBQVNuTSxPQUFPd0YsUUFBaEIsSUFBNEJrSSxXQUE1QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBcENEO0FBcUNBLE1BQUl2SixPQUFPdUcsSUFBUCxDQUFZeUIsUUFBWixFQUFzQnJCLE1BQXRCLEdBQStCLENBQS9CLElBQW9Db0MsMkJBQXhDLEVBQXFFO0FBQ25FaEIsMEJBQXNCQyxRQUF0QjtBQUNEOztBQUVELFNBQU9BLFFBQVA7QUFDRDs7a0JBRWNjLCtCOzs7Ozs7QUN0SmYsMkQ7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSx3RDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImRpc3QvZGV2X2Vudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcImdsb2JieVwiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAZGVmdWFsdC9kZXZfZW52XCIsIFtcImZzLWV4dHJhXCIsIFwid2VicGFja1wiLCBcImdsb2JieVwiLCBcInBhdGhcIiwgXCJ5YXJnc1wiLCBcImNoaWxkX3Byb2Nlc3NcIiwgXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiwgXCJleHByZXNzXCIsIFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiLCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIsIFwic2luZ2xlLWxpbmUtbG9nXCIsIFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiwgXCJ1cmxcIiwgXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiLCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGRlZnVhbHQvZGV2X2VudlwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZzLWV4dHJhXCIpLCByZXF1aXJlKFwid2VicGFja1wiKSwgcmVxdWlyZShcImdsb2JieVwiKSwgcmVxdWlyZShcInBhdGhcIiksIHJlcXVpcmUoXCJ5YXJnc1wiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJleHByZXNzXCIpLCByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpLCByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpLCByZXF1aXJlKFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJ1cmxcIiksIHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpLCByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKSwgcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBkZWZ1YWx0L2Rldl9lbnZcIl0gPSBmYWN0b3J5KHJvb3RbXCJmcy1leHRyYVwiXSwgcm9vdFtcIndlYnBhY2tcIl0sIHJvb3RbXCJnbG9iYnlcIl0sIHJvb3RbXCJwYXRoXCJdLCByb290W1wieWFyZ3NcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wiZXhwcmVzc1wiXSwgcm9vdFtcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcImh0bWwtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiXSwgcm9vdFtcInNpbmdsZS1saW5lLWxvZ1wiXSwgcm9vdFtcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1widXJsXCJdLCByb290W1widmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXSwgcm9vdFtcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIl0sIHJvb3RbXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDczNTY0YWE4Y2YyODI0MzlkYTMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2tcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnbG9iYnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJnbG9iYnlcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInlhcmdzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwieWFyZ3NcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSBmcm9tICcuL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyc7XG5cbmZ1bmN0aW9uIGVuaGFuY2UoKSB7XG4gIGxldCBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcoKTtcbiAgY29uc3QgZW50cnkgPSB7XG4gICAgbWFpbjogYXJndi5lbnRyeSxcbiAgfTtcbiAgbGV0IG91dHB1dCA9IGFyZ3Yub3V0cHV0O1xuICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJy8nKTtcblxuICBvdXRwdXQgPSB7XG4gICAgZmlsZW5hbWU6IG91dHB1dC5wb3AoKSxcbiAgICBwYXRoOiBvdXRwdXQuam9pbignLycpLFxuICB9O1xuICBjb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGVudHJ5LFxuICAgIG91dHB1dCxcbiAgfTtcbiAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnKGNvbmZpZyk7XG4gIGZzLndyaXRlRmlsZVN5bmMoJy4vX3dlYnBhY2stY29uZmlnLXByZXZpZXctY29tbWFuZGxpbmUuanNvbicsIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikpO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUuanMiLCJpbXBvcnQgd2VicGFja0NvbmZpZ1Jlc29sdmUgZnJvbSAnLi93ZWJwYWNrLWNvbmZpZy1yZXNvbHZlJztcblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZykge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGVzdDogL1xcLihqcyk/JC8sXG4gICAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgICAvLyBpbmNsdWRlOiBgJHtkaXJSb290fWAsXG4gICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgIC8vICAgcHJlc2V0czogW1xuXG4gICAgICAgICAgLy8gICAgIFtcbiAgICAgICAgICAvLyAgICAgICAnZXMyMDE1JyxcbiAgICAgICAgICAvLyAgICAgICAvLyBuZWVkZWQgZm9yIHRyZWUgc2hha2luZ1xuICAgICAgICAgIC8vICAgICAgIHsgbW9kdWxlczogZmFsc2UgfSxcbiAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAvLyAgICAgJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgICAgLy8gJ3JlYWN0JyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICBwbHVnaW5zOiBbXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tZXMyMDE1LXNwcmVhZCcsXG4gICAgICAgICAgLy8gICAgICd0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkJyxcbiAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgLy8gICAvLyBtb2NoYSBuZWVkcyAuYmFiZWxyYyxcbiAgICAgICAgICAvLyAgIC8vIGFuZCAuYmFiZWxyYyBjYW5ub3QgdXNlIHRoZSBhYm92ZSBjb25maWdcbiAgICAgICAgICAvLyAgIC8vIHNvIGlnbm9yZSAuYmFiZWxyYyBoZXJlXG4gICAgICAgICAgLy8gICBiYWJlbHJjOiBmYWxzZSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHdlYnBhY2tDb25maWdSZXNvbHZlLnJlc29sdmUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgLi4uY29uZmlnLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBub2RlRXh0ZXJuYWxzIGZyb20gJ3dlYnBhY2stbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgeyB0ZXN0OiAvcnhcXC5saXRlXFwuYWdncmVnYXRlc1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICB7IHRlc3Q6IC9hc3luY1xcLmpzLywgdXNlOiAnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZScgfSxcbiAgICAuLi4obW9kdWxlLnJ1bGVzIHx8IFtdKSxcbiAgXTtcblxuICBjb25zdCBwbHVnaW5zID0gb3JpZ2luYWxDb25maWcucGx1Z2lucyB8fCBbXTtcbiAgcGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkJhbm5lclBsdWdpbih7XG4gICAgYmFubmVyOiBgcmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydFwiKS5pbnN0YWxsKCk7YCxcbiAgICByYXc6IHRydWUsXG4gICAgZW50cnlPbmx5OiBmYWxzZSxcbiAgfSkpO1xuXG4gIGxldCBtb2R1bGVzRGlyID0gJy4uL25vZGVfbW9kdWxlcyc7XG4gIGlmIChfX2Rpcm5hbWUuaW5kZXhPZignL3BhY2thZ2VzLycpID4gX19kaXJuYW1lLmluZGV4T2YoJy9ub2RlX21vZHVsZXMvJykpIHtcbiAgICBtb2R1bGVzRGlyID0gYCR7X19kaXJuYW1lLnNwbGl0KCcvcGFja2FnZXMvJylbMF19L25vZGVfbW9kdWxlc2A7XG4gIH1cbiAgY29uc29sZS5sb2coJ2EnLG1vZHVsZXNEaXIpO1xuICBjb25zb2xlLmxvZygnYicsJy9Vc2Vycy9icmlhbmVwaHJhaW0vU2l0ZXMvbW9ub3JlcG8vbm9kZV9tb2R1bGVzJyk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtbW9kdWxlLWV2YWwtc291cmNlLW1hcCcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2UtbWFwJyxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdzb3VyY2VtYXAnLFxuICAgIC8vIGRldnRvb2w6ICdldmFsJyxcbiAgICBtb2R1bGUsXG4gICAgdGFyZ2V0OiAnbm9kZScsXG4gICAgbm9kZToge1xuICAgICAgLi4ub3JpZ2luYWxDb25maWcubm9kZSxcbiAgICAgIF9fZGlybmFtZTogZmFsc2UsXG4gICAgICBfX2ZpbGVuYW1lOiBmYWxzZSxcbiAgICB9LFxuICAgIGV4dGVybmFsczogW1xuICAgICAgLi4uKG9yaWdpbmFsQ29uZmlnLmV4dGVybmFscyB8fCBbXSksXG4gICAgICBub2RlRXh0ZXJuYWxzKHsgXG4gICAgICAgIC8vIG1vZHVsZXNGcm9tRmlsZTogdHJ1ZSxcbiAgICAgICAgbW9kdWxlc0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZS5zcGxpdCgnL3BhY2thZ2VzL2Rldl9lbnYnKVswXSwgJy4vbm9kZV9tb2R1bGVzJylcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcGx1Z2lucyxcblxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VDb25maWdOb2RlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHdlYnBhY2tNYWtlQ29tcGlsZXIpID0+IHtcbiAgd2VicGFja01ha2VDb21waWxlcigpLnJ1bigoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVycik7XG4gICAgICBpZiAoZXJyLmRldGFpbHMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIuZGV0YWlscyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHN0YXRzLnRvSnNvbigpO1xuXG4gICAgaWYgKHN0YXRzLmhhc0Vycm9ycygpKSB7XG4gICAgICBpbmZvLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMxbScsIGUsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmhhc1dhcm5pbmdzKCkpIHtcbiAgICAgIGluZm8ud2FybmluZ3MuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1xceDFiWzMzbScsIHcsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnO1xuXG5pbXBvcnQgd2VicGFja0NvbmZpZyBmcm9tICcuL3dlYnBhY2tDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMgZnJvbSAnLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgKGlzRGV2KSA9PiB7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uc3QgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUgPSB3ZWJwYWNrRGV2TWlkZGxld2FyZShjb21waWxlciwge1xuICAgICAgcHVibGljUGF0aDogd2VicGFja0NvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbiAgICAgIHN0YXRzOiB7XG4gICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUud2FpdFVudGlsVmFsaWQoKHN0YXRzKSA9PiB7XG4gICAgICB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gY29tcGlsZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja01ha2VDb21waWxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4vc2hlbGwtY29tbWFuZCc7XG5pbXBvcnQgamVzdFNwYXduUHJvY2VzcyBmcm9tICcuL2plc3QvamVzdFNwYXduUHJvY2Vzcyc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tSdW5Db21waWxlciBmcm9tICcuL2NvcmUvd2VicGFja1J1bkNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSBmcm9tICcuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUnO1xuaW1wb3J0IHNlcnZlIGZyb20gJy4vd2VicGFja0V4cHJlc3NTZXJ2ZXIuanMnO1xuXG5jb25zdCBlbnYgPSBhcmd2LmVudjtcbmNvbnN0IGl0ZW0gPSBhcmd2Lml0ZW07XG5pZiAoaXRlbSkge1xuICBzaGVsbENvbW1hbmQoYChjZCAuL3BhY2thZ2VzLyR7aXRlbX0gJiYgbnBtIHJ1biBzdGFydClgKTtcbn0gZWxzZSBpZiAoZW52ID09PSAndGVzdCcpIHtcbiAgamVzdFNwYXduUHJvY2Vzcyhhcmd2LnRlc3RkZXZlbnYsIGFyZ3Yud2F0Y2gsIGFyZ3YudGVzdFBhdGhQYXR0ZXJuKTtcbn0gZWxzZSBpZiAoYXJndi5lbnRyeSkge1xuICB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSgpO1xufSBlbHNlIGlmIChlbnYgPT09ICdidWlsZCcpIHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufSBlbHNlIHtcbiAgc2VydmUoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldl9lbnYuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5jb25zdCBzaW5nbGVMaW5lTG9nID0gcmVxdWlyZSgnc2luZ2xlLWxpbmUtbG9nJykuc3Rkb3V0O1xuXG5mdW5jdGlvbiBwcmludFByb2dyZXNzKHByb2dyZXNzKXtcbiAgICBpZiAoIXByb2Nlc3MgfHwgIXByb2Nlc3Muc3Rkb3V0IHx8ICFwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNpbmdsZUxpbmVMb2cocHJvZ3Jlc3MgKyBgLXh4eHh4eGApO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHByb2dyZXNzICsgYC14eHh4eHhgKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4ocGFyc2VSZXF1ZXN0ID0gKCkgPT4ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBhcHBseShyZXNvbHZlcikge1xuICAgICAgLy8gSSBkb24ndCBrbm93IHdoeSAnbW9kdWxlJyBvciAncmVzb2x2ZScgYXJlIHRob3NlIHZhbHVlcy5cbiAgICAgIC8vIFNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSB0aGUgd2F5IHRoZXkgYXJlIHVzZWQgaW4gdGhpcyBmaWxlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svZW5oYW5jZWQtcmVzb2x2ZS9ibG9iL21hc3Rlci9saWIvUmVzb2x2ZXJGYWN0b3J5LmpzXG4gICAgICAvLyBTbyB0aGV5IGNhbiBiZSBvdGhlciB2YWx1ZXMgYXMgc2VlbiBpbiB0aGF0IGZpbGUuXG4gICAgICByZXNvbHZlci5wbHVnaW4oLyogJ21vZHVsZXMnKi8gJ3Jlc29sdmUnLCBmdW5jdGlvbiAocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcHJpbnRQcm9ncmVzcyhgJHtyZXF1ZXN0LnJlcXVlc3R9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0LnJlcXVlc3QnLHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgY29uc3QgbmV3UmVxdWVzdFN0ciA9IHBhcnNlUmVxdWVzdChyZXF1ZXN0LnJlcXVlc3QpO1xuICAgICAgICBpZiAobmV3UmVxdWVzdFN0ciAmJiBuZXdSZXF1ZXN0U3RyICE9PSByZXF1ZXN0LnJlcXVlc3QpIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0LCB7XG4gICAgICAgICAgICByZXF1ZXN0OiBuZXdSZXF1ZXN0U3RyLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZG9SZXNvbHZlKCdyZXNvbHZlJywgb2JqLCAnYmxhaCBibGFoJywgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXG5gKTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4uanMiLCJjb25zdCBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4gPSByZXF1aXJlKCcuL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVzb2x2ZToge1xuICAgIG1vZHVsZXM6IFtcbiAgICAgIHBhdGgucmVzb2x2ZSgnLi9zcmMvbGlicmFyeScpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcycpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLi8uLi9wYWNrYWdlcycpLFxuICAgICAgJ25vZGVfbW9kdWxlcycsXG4gICAgXSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICAnLmpzJyxcblxuICAgICAgLy8gV2h5IGlzIHRoaXMgaGVyZT8gOiBodHRwczovL2dpdGh1Yi5jb20vbnBtL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvaXNzdWVzLzg4XG4gICAgICAvLyBJc3N1ZSBvbmx5IGFwcGVhcmQgd2hlbiB3ZWJwYWNrIHJ1biBvbiBjb21tYW5kIGxpbmUgZm9yIE5vZGUgYnVuZGxlXG4gICAgICAnLmpzb24nLFxuICAgIF0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbigocmVxdWVzdFN0cikgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdFN0ci5pbmRleE9mKCdAJykgPT09IDAgJiYgcmVxdWVzdFN0ci5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RTdHIuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIG5ldyBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4odHJ1ZSksXG4gICAgXSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJpbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrUnVuQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tDb25maWcgZnJvbSAnLi93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuXG5mdW5jdGlvbiB3ZWJwYWNrTWFrZUNvbXBpbGVyKCkge1xuICBjb25zdCBjb25maWcgPSB3ZWJwYWNrQ29uZmlnKCk7XG4gIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayhjb25maWcpO1xuICByZXR1cm4gY29tcGlsZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUuanMiLCJcbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgbGV0IGNvbmZpZyA9IHsgLi4ub3JpZ2luYWxDb25maWcgfTtcbiAgY29uZmlnLnBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBbXTtcblxuICAvLyBJIG5lZWRlZCBfX2Rpcm5hbWUgaGFyZGNvZGVkIGFzIHRoZSBvcmlnaW5hbCBkaXJuYW1lXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzE1OTkjaXNzdWVjb21tZW50LTI2NjU4ODg5OFxuICBjb25maWcucGx1Z2lucy5wdXNoKHtcbiAgICBhcHBseShjb21waWxlcikge1xuICAgICAgZnVuY3Rpb24gc2V0TW9kdWxlQ29uc3RhbnQoZXhwcmVzc2lvbk5hbWUsIGZuKSB7XG4gICAgICAgIGNvbXBpbGVyLnBsdWdpbihcImNvbXBpbGF0aW9uXCIsIGZ1bmN0aW9uKGNvbXBpbGF0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgZGF0YS5ub3JtYWxNb2R1bGVGYWN0b3J5LnBsdWdpbihcInBhcnNlclwiLCBmdW5jdGlvbihwYXJzZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHBhcnNlci5wbHVnaW4oYGV4cHJlc3Npb24gJHtleHByZXNzaW9uTmFtZX1gLCBmdW5jdGlvbiBjb21waWxlclBhcnNlclBsdWdpbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LmFkZFZhcmlhYmxlKGV4cHJlc3Npb25OYW1lLCBKU09OLnN0cmluZ2lmeShmbih0aGlzLnN0YXRlLm1vZHVsZSkpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2ZpbGVuYW1lJywgKG1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnJlc291cmNlO1xuICAgICAgfSk7XG5cbiAgICAgIHNldE1vZHVsZUNvbnN0YW50KCdfX2Rpcm5hbWUnLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dDtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29yZS93ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaW1wb3J0IGplc3RDb25maWcgZnJvbSAnLi9qZXN0Q29uZmlnJztcbi8vIGNvbnN0IGNvbmZpZyA9IGAnJHtKU09OLnN0cmluZ2lmeShqZXN0Q29uZmlnKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIil9J2A7XG5cbmNvbnN0IGNvbmZpZ1BhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWcuanNgO1xuY29uc3QgY29uZmlnQmFzZVBhdGggPSBgJHtfX2Rpcm5hbWV9L2plc3RDb25maWdCYXNlLmpzYDtcbi8vIHF3ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgKHRlc3RkZXZlbnYsIHdhdGNoID0gdHJ1ZSwgdGVzdFBhdGhQYXR0ZXJuKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdKRVNUIFNQQVdOJywgdGVzdGRldmVudilcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIC8vIFdoeSBgQ0k9dHJ1ZSBgPyAtLS0tLSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svamVzdC9pc3N1ZXMvMjk1OVxuICBsZXQgY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgLS13YXRjaD0ke3dhdGNoICYmIHdhdGNoICE9PSAnZmFsc2UnID8gJ3RydWUnIDogJ2ZhbHNlJ30gLS1jb25maWc9JHtjb25maWdQYXRofSR7dGVzdFBhdGhQYXR0ZXJuID8gW1wiIC0tdGVzdFBhdGhQYXR0ZXJuPSdcIix0ZXN0UGF0aFBhdHRlcm4sXCInXCJdLmpvaW4oJycpIDogJyd9YDtcbiAgaWYgKHRlc3RkZXZlbnYpIHtcbiAgICAvLyBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vamVzdCAtdCB0ZXN0ZGV2ZW52IC0tY29uZmlnPSR7Y29uZmlnQmFzZVBhdGh9YDtcbiAgICAvLyBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vamVzdCAke19fZGlybmFtZX0vdGVzdGRldmVudi5qcyAgLS1jb25maWc9JHtjb25maWdCYXNlUGF0aH1gO1xuICAgIGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9tb2NoYS13ZWJwYWNrIC0tcmVxdWlyZSBiYWJlbC1jb3JlL3JlZ2lzdGVyIC0td2VicGFjay1jb25maWcgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuLi9jb3JlL3dlYnBhY2tDb25maWdNb2NoYS5qcycpfSBcXFwiJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuL3Rlc3RkZXZlbnYyLmpzJyl9XFxcImBcbiAgfVxuICBjb25zb2xlLmxvZygnY29tbWFuZEJvZHknLGNvbW1hbmRCb2R5KTtcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRCb2R5LFxuICBdO1xuICBjb25zdCBwcm9jID0gY2hpbGRfcHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCB7IHN0ZGlvOiAnaW5oZXJpdCcgfSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qZXN0L2plc3RTcGF3blByb2Nlc3MuanMiLCJjbGFzcyBQbHVnaW5SZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSB7fTtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgfVxuICByZWdpc3RlcihuYW1lLCBwbHVnaW4pIHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnlbbmFtZV0pIHtcbiAgICAgIHRoaXMucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICB0aGlzLnJlZ2lzdHJ5W25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgcGx1Z2luUmVnaXN0cnkgPSBuZXcgUGx1Z2luUmVnaXN0cnkoKTtcbmNvbnN0IHBsdWdpbnMgPSBwbHVnaW5SZWdpc3RyeS5wbHVnaW5zO1xuY29uc3QgcmVnaXN0ZXIgPSBwbHVnaW5SZWdpc3RyeS5yZWdpc3Rlci5iaW5kKHBsdWdpblJlZ2lzdHJ5KTtcbmV4cG9ydCB7IHJlZ2lzdGVyIH07XG5leHBvcnQgZGVmYXVsdCBwbHVnaW5zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2luUmVnaXN0cnkuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLypcbiAgVGhpcyBmaWxlIHVzZWQgaW4gMiBwbGFjZXNcbiAgICAxLiAgVGhpcyBmaWxlIGlzIGV4ZWN1dGVkIGJ5IHRoZSBtb25vcmVwbyBzZXJ2aW5nIGFzIHRoZSBtb25vcmVwbydzIGRldiBlbnZpcm9ubWVudC5cbiAgICAgICAgKE9ubHkgdGhlIG1vbm9yZXBvIHVzZXMgZGV2X2VudiBsaWtlIHRoaXMuIFdoZW4gdGhlIG1vbm9yZXBvJ3MgcGFja2FnZXMgYXJlIHNjYXR0ZXJlZFxuICAgICAgICBpbnRvIGluZGl2aWR1YWwgcmVwb3MsIGVhY2ggaW5kaXZpZHVhbCByZXBvIGhhcyBhIGRldl9lbnYgZGVwZW5kZW5jeVxuICAgICAgICBpbiBpdHMgbm9kZV9tb2R1bGVzIGZvbGRlcixcbiAgICAgICAgYnV0IHRoaXMgZGV2X2VudiBpcyBleGVjdXRlZCBmcm9tIGEgY29tcGlsZWQgdmVyc2lvbiBvZiB0aGUgZGV2X2Vudi5cbiAgICAgICAgVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgaW5kaXZpZHVhbCByZXBvJ3MgLi9ub2RlX21vZHVsZXMvLmJpbi9kZXZlbnYsXG4gICAgICAgIHdoaWNoIHBvaW50cyB0byAuL25vZGVfbW9kdWxlcy9AZGVmdWFsdC9kZXZfZW52L2Rpc3QvZGV2X2Vudi5qcy4pXG4gICAgMi4gIFRoaXMgZmlsZSBpcyBleGVjdXRlZCBkdXJpbmcgdGhlIG5wbSBwcmVwdWJsaXNoLCB3aGljaCBjcmVhdGVzIHRoZSAvZGlzdCBmb2xkZXJcbiAgICAgICAgbWVudGlvbmVkIGluICgxKSBhYm92ZS5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9PJylcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2hlbGwtY29tbWFuZC5qcyIsIi8qXG4gIFRoaXMgZmlsZXMgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGNhbGxlZCBnZW5lcmF0ZXMgYSB3ZWJwYWNrIGNvbmZpZyBqc29uLlxuICBgYXJndmAgaXMgcGFzc2VkIGludG8gdGhpcyBmdW5jdGlvbi5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gZmFsc2V5YFxuICAgIFRoaXMgY29tcGlsZXMgZm9yIGEgZGV2IHNlcnZlciB2aWEgd2VicGFjay1kZXYtbWlkZGxld2FyZS4gIE5vIGZpbGVzIGFyZSBjcmVhdGVkIHRvIGRpc2ssXG4gICAgb25seSBjcmVhdGVkIGluIG1lbW9yeS5cblxuICB3aGVuIGBhcmd2LmVudiA9PT0gJ2J1aWxkJ2BcbiAgICBUaGlzIGNvbXBpbGVzIGZpbGVzIHRvIGRpc2sgaW4gYSAvZGlzdCBmb2xkZXIgYW5kIGEgL2RlbW8gZm9sZGVyLlxuXG4gIHdoZW4gYGFyZ3YuZGlycm9vdCA9PT0gc29tZSBwYXRoYFxuICAgIFRoaXMgaXMgdXNlZCB3aGVuIGRldl9lbnYgaXRzZWxmIGlzIGNvbXBpbGVkLlxuICAgIFRoaXMgdmVyeSBmaWxlIGlzIGNvbXBpbGVkIGFjY29yZGluZyB0aGUgY29uZmlnIHNldCBieSB0aGlzIGZpbGUuXG4gICAgVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBkZXZfZW52IHBvcnRhYmxlIHZpYSBucG0uXG4gICAgYmFiZWwtbm9kZSBuZWVkcyB0byBjb21waWxlIHRoaXMgZGV2X2VudiB0byB3b3JrLFxuICAgIGJ1dCB0aGlzIGRvZXMgbm90IHBsYXkgd2VsbCB3aGVuIGRldl9lbnYgaXMgaW4gYSBub2RlX21vZHVsZXMgZm9sZGVyLlxuICAgIFNvIHdlIG5lZWQgdG8gY29tcGlsZSBkZXZfZW52IGJlZm9yZSBwdWJsaXNoaW5nIHRvIG5wbS5cbiAgICBEaXJlY3RvcnkgcGF0aHMgbmVlZCB0byBiZSB0d2Vha2VkIHRvIGFjY29tcGxpc2ggdGhpcyxcbiAgICBhbmQgdGhhdCdzIHdoYXQgYGFyZ3YuZGlycm9vdGAgaGVscHMgd2l0aC5cblxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgYWxzbyBhZmZlY3RlZCBieSBwYWNrYWdlLmpzb24uXG5cbiAgd2hlbiBwYWNrYWdlLmpzb24uYnVuZGxlRm9yTm9kZSA9PT0gdHJ1ZVxuICAgIGluIGNvbmp1bmN0aW9uIHdpdGggYGFyZ3YuZW52ID09PSAnYnVpbGQnYCwgdGhlIGJ1bmRsZSB3aWxsXG4gICAgaGF2ZSBzcGVjaWFsIGNvbnNpZGVyYXRpb24gZm9yIGEgbm9kZSBwbGF0Zm9ybS5cbiAgICBPbmx5IGFwcGxpY2F0aW9uIGZpbGVzIHdpbGwgYmUgYnVuZGxlZC5cbiAgICBub2RlX21vZHVsZXMgYW5kIG5vZGUgYnVpbHQtaW4gcmVxdWlyZXMgd2lsbCBub3QgYmUgYnVuZGxlZC5cbiovXG5pbXBvcnQgeyBhcmd2IH0gZnJvbSAneWFyZ3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdXZWIgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYic7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkIGZyb20gJy4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcgZnJvbSAnLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZyc7XG5pbXBvcnQgd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lIGZyb20gJy4vY29yZS93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuLy8gaW1wb3J0IGFhYTggZnJvbSAnQGRlZnVhbHQvYWFhOCc7XG4vLyBjb25zb2xlLmxvZyhhYWE4KTtcblxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5jd2QoKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhhcmd2KTtcbi8vIGNvbnNvbGUubG9nKHtcbi8vICAgZW50cnk6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBhcmd2LmVudHJ5KSxcbi8vICAgb3V0cHV0OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYXJndi5vdXRwdXQpLFxuLy8gfSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29uZmlnSnNvbigpIHtcbiAgY29uc29sZS5sb2coJ0FSR1YnLGFyZ3YpXG4gIGNvbnN0IGlzQ29tbWFuZExpbmUgPSBhcmd2LmVudHJ5O1xuICBsZXQgY29uZmlnO1xuICBpZiAoaXNDb21tYW5kTGluZSkge1xuICAgIGNvbmZpZyA9IHdlYnBhY2tDb25maWdDb21tYW5kTGluZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZygpO1xuICAgIGNvbnN0IGlzQnVpbGQgPSBhcmd2LmVudiA9PT0gJ2J1aWxkJztcbiAgICBjb25zdCBkaXJSb290ID0gYXJndi5kaXJyb290IHx8IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3QgcGFja2FnZUpzb24gPSBmcy5yZWFkSnNvblN5bmMoYCR7ZGlyUm9vdH0vcGFja2FnZS5qc29uYCk7XG4gICAgY29uc3Qgb3V0cHV0RmlsZXMgPSB7fTtcbiAgICBjb25zdCBsaWJyYXJ5TmFtZSA9IHBhY2thZ2VKc29uLm5hbWU7XG4gICAgY29uc3QgbGlicmFyeU5hbWVSZWR1Y2VkID0gbGlicmFyeU5hbWUuc3BsaXQoJy8nKVsxXSB8fCBsaWJyYXJ5TmFtZS5zcGxpdCgnLycpWzBdO1xuICAgIGlmIChpc0J1aWxkKSB7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5ID0gYGRpc3QvJHtsaWJyYXJ5TmFtZVJlZHVjZWR9YDtcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnlNaW4gPSBgZGlzdC8ke2xpYnJhcnlOYW1lUmVkdWNlZH0ubWluYDtcbiAgICAgIG91dHB1dEZpbGVzLmRlbW8gPSAnZGlzdC9kZW1vL2luZGV4JztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0RmlsZXMuZGVtbyA9ICdib290JztcbiAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnkgPSBgJHtsaWJyYXJ5TmFtZVJlZHVjZWR9YDtcbiAgICB9XG5cbiAgICBsZXQgZW50cnlGaWxlcztcbiAgICBjb25zb2xlLmxvZygnYXJndmFyZ3Zhcmd2Jyxhcmd2KVxuICAgIGlmIChhcmd2WydkZW1vLWVudHJ5J10pIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2FyZ3ZbJ2RlbW8tZW50cnknXV0sXG4gICAgICB9O1xuICAgIC8vIH0gZWxzZSBpZiAoYXJndlsndGFpbG9yLXdlYi1idW5kbGUtZm9yLXRlc3Rpbmctb2YtZGV2LWVudi1pdHNlbGYnXSkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGVudHJ5RmlsZXMgPSB7XG4gICAgLy8gICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogW2Ake2RpclJvb3R9L3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanNgXSxcbiAgICAvLyAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5RmlsZXMgPSB7XG4gICAgICAgIE1haW5BcHA6IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9wYWNrYWdlcy9NYWluQXBwL01haW5BcHAuanNgXSksXG4gICAgICAgIFtvdXRwdXRGaWxlcy5saWJyYXJ5XTogZ2xvYmJ5LnN5bmMoW1xuICAgICAgICAgIGAke2RpclJvb3R9LyR7bGlicmFyeU5hbWVSZWR1Y2VkfS5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vc3JjL2xpYnJhcnkvaW5kZXguanNgLFxuICAgICAgICBdKSxcbiAgICAgICAgLi4uKFxuICAgICAgICAgIG91dHB1dEZpbGVzLmxpYnJhcnlNaW4gPyB7XG4gICAgICAgICAgICBbb3V0cHV0RmlsZXMubGlicmFyeU1pbl06IGdsb2JieS5zeW5jKFtgJHtkaXJSb290fS9zcmMvbGlicmFyeS9pbmRleC5qc2BdKSxcbiAgICAgICAgICB9IDoge31cbiAgICAgICAgKSxcbiAgICAgICAgW291dHB1dEZpbGVzLmRlbW9dOiBnbG9iYnkuc3luYyhbXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKi5kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS9kZW1vLmpzYCxcbiAgICAgICAgICBgJHtkaXJSb290fS8qKi8qLyouZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKiovKi9kZW1vLmpzYCxcbiAgICAgICAgICBgISR7ZGlyUm9vdH0vcGFja2FnZXMvKiovKmAsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vcGFja2FnZXMvTWFpbkFwcC9NYWluQXBwLmpzYCxcbiAgICAgICAgXSksXG4gICAgICB9O1xuICAgIH1cbiAgICBcblxuICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZChcbiAgICAgIGNvbmZpZywgZGlyUm9vdCwgbGlicmFyeU5hbWUsIGVudHJ5RmlsZXNcbiAgICApO1xuICAgIGlmIChwYWNrYWdlSnNvbi5idW5kbGVGb3JOb2RlKSB7XG4gICAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUoY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHVzZXJuYW1lID0gbnVsbDtcbiAgICAgIGlmIChwYWNrYWdlSnNvbi5yZXBvc2l0b3J5ICYmIHBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsKSB7XG4gICAgICAgIHVzZXJuYW1lID0gcGFja2FnZUpzb24ucmVwb3NpdG9yeS51cmwucmVwbGFjZSgnOi8vJykuc3BsaXQoJy8nKVsxXTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQ29uZmlnV2ViKFxuICAgICAgICBjb25maWcsIGxpYnJhcnlOYW1lLCBpc0J1aWxkLCBkaXJSb290LCB1c2VybmFtZSwgb3V0cHV0RmlsZXMsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBmcy53cml0ZUZpbGVTeW5jKCcuL193ZWJwYWNrLWNvbmZpZy1wcmV2aWV3Lmpzb24nLCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpKTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb25maWdKc29uKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrQ29uZmlnLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBIdG1sV2VicGFja1BsdWdpbiBmcm9tICdodG1sLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBTdHJpbmdSZXBsYWNlUGx1Z2luIGZyb20gJ3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBFeHRyYWN0VGV4dFBsdWdpbiBmcm9tICdleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IGpzb25JbXBvcnRlciBmcm9tICdub2RlLXNhc3MtanNvbi1pbXBvcnRlcic7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknO1xuaW1wb3J0IHBsdWdpbnMsIHsgcmVnaXN0ZXIgYXMgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICcuL3BsdWdpblJlZ2lzdHJ5JztcblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNlUGx1Z2luLCBtb3JlTG9hZGVyUGFyYW1zKSB7XG4gIGlmICh1c2VQbHVnaW4pIHtcbiAgICByZXR1cm4geyB1c2U6IEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3QobW9yZUxvYWRlclBhcmFtcykgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVzZTogW21vcmVMb2FkZXJQYXJhbXMuZmFsbGJhY2ssIC4uLm1vcmVMb2FkZXJQYXJhbXMudXNlXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbW92ZU1vZGlmeShzb3VyY2UsIG1vZGlmeVBhdGgsIG1vZGlmeUNvbnRlbnQpIHtcbiAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgc291cmNlcyA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICBzb3VyY2VzLnB1c2goc291cmNlKTtcbiAgfVxuICBsZXQgdG9Db3B5ID0gW107XG4gIHNvdXJjZXMuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgIHRvQ29weSA9IFtcbiAgICAgIC4uLnRvQ29weSxcbiAgICAgIC4uLmdsb2JieS5zeW5jKHBhdHRlcm4pLFxuICAgIF07XG4gIH0pO1xuICB0b0NvcHkuZm9yRWFjaCgoZmlsZVBhdGgpID0+IHtcbiAgICBsZXQgZmlsZVBhdGhPdXQgPSBmaWxlUGF0aDtcbiAgICBpZiAobW9kaWZ5UGF0aCkge1xuICAgICAgZmlsZVBhdGhPdXQgPSBtb2RpZnlQYXRoKGZpbGVQYXRoKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgaWYgKG1vZGlmeUNvbnRlbnQpIHtcbiAgICAgIGNvbnRlbnQgPSBtb2RpZnlDb250ZW50KGNvbnRlbnQsIGZpbGVQYXRoLCBmaWxlUGF0aE91dCk7XG4gICAgfVxuICAgIGZzLm91dHB1dEZpbGVTeW5jKGZpbGVQYXRoT3V0LCBjb250ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcsIGxpYnJhcnlOYW1lLCBpc0J1aWxkLCBkaXJSb290LCB1c2VybmFtZSwgb3V0cHV0RmlsZXMpIHtcbiAgY29uc3QgZGV2SHRtbFBhdGggPSAnLi9pbmRleC5odG1sJztcbiAgaWYgKGlzQnVpbGQpIHtcbiAgICBtb3ZlTW9kaWZ5KFsnc3JjL2ltcG9ydC1leGFtcGxlcy8qKi8hKHdlYnBhY2suY29uZmlnKS4qJywgJ3NyYy90b25pY0V4YW1wbGUuanMnXSwgKGZpbGVQYXRoKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZVBhdGgucmVwbGFjZSgnc3JjLycsICcuLycpO1xuICAgIH0sXG4gICAgKGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL0xJQlJBUllOQU1FL2csIGxpYnJhcnlOYW1lKTtcbiAgICB9KTtcblxuICAgIHJlZ2lzdGVyUGx1Z2luKCdVZ2xpZnlKc1BsdWdpbicsIG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IC9cXC5taW5cXC5qcyQvLFxuICAgICAgbWluaW1pemU6IHRydWUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgdGVtcGxhdGVQYXRoID0gJ3NyYy9kZW1vL2luZGV4LmVqcyc7XG4gICAgY29uc3QgaHRtbFRlbXBsYXRlRXhpc3RzID0gZnMuZXhpc3RzU3luYyh0ZW1wbGF0ZVBhdGgpO1xuICAgIGNvbnN0IGluZGV4SHRtbFNldHRpbmdzID0ge1xuICAgICAgY2h1bmtzOiBbb3V0cHV0RmlsZXMuZGVtb10sXG4gICAgICAuLi4oXG4gICAgICAgIGh0bWxUZW1wbGF0ZUV4aXN0cyA/IHsgdGVtcGxhdGU6IHRlbXBsYXRlUGF0aCB9IDoge31cbiAgICAgICksXG4gICAgICB0aXRsZTogJ2FmYXNkZmFzZGZhc2QnLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBsaWJyYXJ5TmFtZSxcbiAgICB9O1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdkZW1vSW5kZXgtSHRtbFdlYnBhY2tQbHVnaW4nLCBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgZmlsZW5hbWU6ICcuL2Rpc3QvZGVtby9pbmRleC5odG1sJyxcbiAgICAgIC4uLmluZGV4SHRtbFNldHRpbmdzLFxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclBsdWdpbignZGVtb0RldkluZGV4LUh0bWxXZWJwYWNrUGx1Z2luJywgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIGNodW5rczogW291dHB1dEZpbGVzLmRlbW9dLFxuICAgICAgZmlsZW5hbWU6IGRldkh0bWxQYXRoLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlZ2lzdGVyUGx1Z2luKCdTdHJpbmdSZXBsYWNlUGx1Z2luJywgbmV3IFN0cmluZ1JlcGxhY2VQbHVnaW4oKSk7XG5cbiAgcmVnaXN0ZXJQbHVnaW4oJ0xvYWRlck9wdGlvbnNQbHVnaW4nLCBuZXcgd2VicGFjay5Mb2FkZXJPcHRpb25zUGx1Z2luKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBzYXNzTG9hZGVyOiB7XG4gICAgICAgIGltcG9ydGVyOiBqc29uSW1wb3J0ZXIsXG4gICAgICB9LFxuICAgICAgY29udGV4dDogZGlyUm9vdCxcbiAgICB9LFxuICB9KSk7XG5cblxuICBjb25zdCBtb2R1bGUgPSB7IC4uLihvcmlnaW5hbENvbmZpZyAmJiBvcmlnaW5hbENvbmZpZy5tb2R1bGUpIH07XG4gIGxldCB1c2luZ0V4dHJhY3RUZXh0UGx1Z2luID0gZmFsc2U7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ0V4dHJhY3RUZXh0UGx1Z2luJywgbmV3IEV4dHJhY3RUZXh0UGx1Z2luKCdbbmFtZV0uY3NzJykpO1xuICAgIHVzaW5nRXh0cmFjdFRleHRQbHVnaW4gPSB0cnVlO1xuICB9XG4gIG1vZHVsZS5ydWxlcyA9IFtcbiAgICAuLi4obW9kdWxlLnJ1bGVzIHx8IFtdKSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAuLi5nZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNpbmdFeHRyYWN0VGV4dFBsdWdpbiwge1xuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgIHVzZTogWydjc3MtbG9hZGVyJ10sXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5zY3NzJC8sXG4gICAgICAuLi5nZW5lcmF0ZUxvYWRlclBhcmFtT2ZVc2UodXNpbmdFeHRyYWN0VGV4dFBsdWdpbiwge1xuICAgICAgICBmYWxsYmFjazogJ3N0eWxlLWxvYWRlcicsXG4gICAgICAgIHVzZTogW1xuICAgICAgICAgICdjc3MtbG9hZGVyP3NvdXJjZU1hcCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiAnc2Fzcy1sb2FkZXI/c291cmNlTWFwJyxcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBKU09OIGltcG9ydGVyIHZpYSBzYXNzLWxvYWRlcidzIG9wdGlvbnMuXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGltcG9ydGVyOiBqc29uSW1wb3J0ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5qc29uJC8sXG4gICAgICBsb2FkZXJzOiBbJ2pzb24tbG9hZGVyJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuZWpzJC8sXG4gICAgICBsb2FkZXI6ICdlanMtY29tcGlsZWQtbG9hZGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5tZC8sXG4gICAgICBsb2FkZXJzOiBbJ2h0bWwtbG9hZGVyJywgJ21hcmtkb3duLWxvYWRlciddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmpzfFxcLmh0bWx8XFwuZWpzJC8sXG4gICAgICBleGNsdWRlOiBbX19maWxlbmFtZV0sXG4gICAgICBsb2FkZXI6IFN0cmluZ1JlcGxhY2VQbHVnaW4ucmVwbGFjZSh7XG4gICAgICAgIHJlcGxhY2VtZW50czogW3tcbiAgICAgICAgICBwYXR0ZXJuOiAvTElCUkFSWU5BTUUvZyxcbiAgICAgICAgICByZXBsYWNlbWVudCgvKiBtYXRjaCwgcDEsIG9mZnNldCwgc3RyaW5nICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlicmFyeU5hbWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICB9KSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICBkZXZ0b29sOiBpc0J1aWxkID8gJ3NvdXJjZS1tYXAnIDogJ2NoZWFwLW1vZHVsZS1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIG1vZHVsZSxcbiAgICBwbHVnaW5zLFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFbmhhbmNlQ29uZmlnV2ViLmpzIiwiaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknO1xuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnLCBkaXJSb290LCBsaWJyYXJ5TmFtZSwgZW50cnlGaWxlcykge1xuXG5cbiAgY29uc3QgZW50cnkgPSBPYmplY3Qua2V5cyhlbnRyeUZpbGVzKS5yZWR1Y2UoKGFjY3VtLCBlbnRyeU5hbWUpID0+IHtcbiAgICBpZiAoZW50cnlGaWxlc1tlbnRyeU5hbWVdLmxlbmd0aCkge1xuICAgICAgYWNjdW1bZW50cnlOYW1lXSA9IGVudHJ5RmlsZXNbZW50cnlOYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIHBhdGg6IGAke2RpclJvb3R9YCxcbiAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXG4gICAgbGlicmFyeTogbGlicmFyeU5hbWUsXG4gICAgbGlicmFyeVRhcmdldDogJ3VtZCcsXG4gICAgdW1kTmFtZWREZWZpbmU6IHRydWUsXG4gICAgcHVibGljUGF0aDogJy8nLFxuICAgIC8vIHB1YmxpY1BhdGg6ICcvYXNzZXRzLycsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5vcmlnaW5hbENvbmZpZyxcbiAgICBlbnRyeSxcbiAgICBvdXRwdXQsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB3ZWJwYWNrTWFrZUNvbXBpbGVyIGZyb20gJy4vd2VicGFja01ha2VDb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHAsIHBvcnQgPSAzMDAwKSA9PiB7XG4gIC8vIFRoaXMgbW9kdWxlIGVpdGhlciBleHRlbmRzIGFuIGV4aXN0aW5nIGV4cHJlc3MgYXBwXG4gIC8vIG9yIGNyZWF0ZXMgYSBuZXcgZXhwcmVzcyBhcHBcbiAgbGV0IGFwcElzQnJhbmROZXcgPSBmYWxzZTtcbiAgaWYgKCFhcHApIHtcbiAgICBhcHBJc0JyYW5kTmV3ID0gdHJ1ZTtcbiAgICBhcHAgPSBleHByZXNzKCk7XG4gIH1cblxuICAvLyBTUEEgc2VydmVyIHN1cHBvcnRcbiAgLy8gQWxsIFVSTHMgdGhhdCBzdWdnZXN0IGFuIEhUTUwgZmlsZSByZXF1ZXN0IGdldCByb3V0ZWQgdGhlIHNhbWUuXG4gIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgbGFzdFBhcnRPZlVSTCA9IHVybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IHVybEZvcm1hdFN1Z2dlc3RzSHRtbEZpbGVSZXF1ZXN0ID0gKFxuICAgICAgbGFzdFBhcnRPZlVSTC5pbmRleE9mKCcuJykgPT09IC0xIHx8IGxhc3RQYXJ0T2ZVUkwuaW5kZXhPZignLmh0bWwnKSAhPT0gLTFcbiAgICApO1xuICAgIGlmICh1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCkge1xuICAgICAgcmVxLnVybCA9ICcvJztcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9KTtcblxuICBjb25zb2xlLmluZm8oJ/CflLcgU3RhcnRpbmcgd2VicGFjayAuLi4nKTtcblxuICBhcHAudXNlKHdlYnBhY2tNYWtlQ29tcGlsZXIodHJ1ZSkpO1xuXG4gIGFwcC51c2UoJy9pbWFnZXMnLCBleHByZXNzLnN0YXRpYygncGFja2FnZXMvaW1hZ2VzJykpO1xuICBhcHAudXNlKCcvZm9udHMnLCBleHByZXNzLnN0YXRpYygncGFja2FnZXMvZm9udHMnKSk7XG5cbiAgLy8gU29tZSBFeHByZXNzIGNvZGUgSSBkb24ndCB3YW50IHRvIGxvc2UgeWV0LlxuICAvKlxuICBhcHAuZ2V0KG5ldyBSZWdFeHAoJ15bL10oaW1hZ2VzfGZvbnRzKVsvXSguKyknKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsIGBwYWNrYWdlcyR7dXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lfWApKTtcbiAgfSk7XG5cbiAgYXBwLmdldCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUpO1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2luZGV4Lmh0bWwnKSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQobmV3IFJlZ0V4cCgnL15cXC8oLiopXFwuaHRtbCQnKSwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnaW5kZXguaHRtbCcpKTtcbiAgfSk7XG4gICovXG5cbiAgaWYgKGFwcElzQnJhbmROZXcpIHtcbiAgICBhcHAubGlzdGVuKHBvcnQsIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICfwn4yOIExpc3RlbmluZyBvbiBwb3J0ICVzLiBPcGVuIHVwIGh0dHA6Ly9sb2NhbGhvc3Q6JXMvIGluIHlvdXIgYnJvd3Nlci4nLFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhcHA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0V4cHJlc3NTZXJ2ZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHZhbGlkYXRlTnBtUGFja2FnZU5hbWUgZnJvbSAndmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZSc7XG5cbmZ1bmN0aW9uIGVuc3VyZVRyYWlsaW5nU2xhc2goc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVSZWFkSnNvblN5bmMocGFja2FnZURvdEpzb25QYXRoKSB7XG4gIGxldCBwYWNrYWdlRG90SnNvbkNvbnRlbnQ7XG4gIHRyeSB7XG4gICAgcGFja2FnZURvdEpzb25Db250ZW50ID0gZnMucmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwYWNrYWdlRG90SnNvbkNvbnRlbnQgPSB7fTtcbiAgfVxuICByZXR1cm4gcGFja2FnZURvdEpzb25Db250ZW50O1xufVxuXG5mdW5jdGlvbiBzaG93UHJvYmxlbXNJbkNvbnNvbGUocHJvYmxlbXMpIHtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmluZm8oJ1xceDFiWzFtJywgJ1xcblByb2JsZW1zIHdpdGggZGVwZW5kZW5jaWVzJywgJ1xceDFiWzBtJyk7XG4gIH1cbiAgT2JqZWN0LmtleXMocHJvYmxlbXMpLmZvckVhY2goKG1vZHVsZVJlc291cmNlKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlszNm0nLCAnXFxuUHJvYmxlbSBpbiBtb2R1bGUgd2l0aCBgaW1wb3J0YCBzdGF0ZW1lbnQ6JywgJ1xceDFiWzBtJyk7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgICR7bW9kdWxlUmVzb3VyY2V9YCwgJ1xceDFiWzBtJyk7XG4gICAgT2JqZWN0LmtleXMocHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdKS5mb3JFYWNoKChkZXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9ibGVtTXNnID0gcHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdW2RlcE5hbWVdLm1zZztcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ0RlcGVuZGVuY3kgcmVxdWVzdGVkIGFzOicsICdcXHgxYlswbScpO1xuICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgICR7ZGVwTmFtZX1gLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgYE1lc3NhZ2U6ICR7cHJvYmxlbU1zZ31gLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnN0IHByb2JsZW1JbmZvID0gcHJvYmxlbXNbbW9kdWxlUmVzb3VyY2VdW2RlcE5hbWVdLmluZm87XG4gICAgICBpZiAocHJvYmxlbUluZm8pIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdcXHgxYlszN20nLCBgLSAke3Byb2JsZW1JbmZvLmpvaW4oJ1xcbiAtICcpfWAsICdcXHgxYlswbScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZERlcGVuZGVuY2llc1Byb2JsZW1zKGRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KSB7XG4gIGNvbnN0IHByb2JsZW1zID0ge307XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2goKGRlcCkgPT4ge1xuICAgIGlmIChkZXAubW9kdWxlKSB7XG4gICAgICBjb25zdCByYXdSZXF1ZXN0ID0gZGVwLm1vZHVsZS5yYXdSZXF1ZXN0O1xuICAgICAgLy8gaWYgKHJhd1JlcXVlc3QuaW5kZXhPZignL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby9wYWNrYWdlcycpID09PSAwKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ2RlcFdURicsIHJhd1JlcXVlc3QsICdcXHgxYlswbScpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnZGVwV1RGJywgZGVwKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzNtJywgJ2RlcEdHRycsIHJhd1JlcXVlc3QsICdcXHgxYlswbScpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnZGVwR0dHJywgZGVwKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbm90IGEgcmVsYXRpdmUgZGVwZW5kZW5jeVxuICAgICAgLy8gbm90IGFuIGFic29sdXQgZGVwZW5kZW5jeVxuICAgICAgLy8gd2UgYXJlIG9ubHkgY29uY2VybmVkIHdpdGggZGVwZW5lbmNpZXMgcmVmZXJlbmNlZCBsaWtlXG4gICAgICAvLyBgaW1wb3J0IGFzZGYgZnJvbSAnYXNkZic7YFxuICAgICAgLy8gb3JcbiAgICAgIC8vIGBpbXBvcnQgcXdlciBmcm9tICdhc2RmL3F3ZXInO2BgXG4gICAgICAvLyBvclxuICAgICAgLy8gYGltcG9ydCBhc2RmIGZyb20gJ0BkZWZ1YWx0L2FzZGYnO2BgXG4gICAgICAvLyBUaGVzZSBkZXBlbmRlbmNpZXMgd2lsbCBiZSBlaXRoZXIgaW4gL25vZGVfbW9kdWxlcy8gb3IgL3BhY2thZ2VzLyxcbiAgICAgIC8vIHRoZSBsYXR0ZXIgZm9yIG9ubHkgbW9ub3JlcG8gdXNlLlxuICAgICAgaWYgKHJhd1JlcXVlc3QgJiYgcmF3UmVxdWVzdC5pbmRleE9mKCcuJykgIT09IDAgJiYgcmF3UmVxdWVzdC5pbmRleE9mKCcvJykgIT09IDApIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRlTnBtUGFja2FnZU5hbWUocmF3UmVxdWVzdCk7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0LnZhbGlkRm9yTmV3UGFja2FnZXMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50IHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRlcGVuZGVuY2llcyB8fFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGVwZW5kZW5jaWVzW3Jhd1JlcXVlc3RdXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGV2RGVwZW5kZW5jaWVzIHx8XG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXZEZXBlbmRlbmNpZXNbcmF3UmVxdWVzdF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJvYmxlbXNbcmF3UmVxdWVzdF0gPSB7IG1zZzogJ01JU1NJTkcgRlJPTSBQQUNLQUdFLkpTT04nIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGluZm8gPSBbXG4gICAgICAgICAgICAuLi52YWxpZGF0aW9uUmVzdWx0Lndhcm5pbmdzIHx8IFtdLCAuLi52YWxpZGF0aW9uUmVzdWx0LmVycm9ycyB8fCBbXSxcbiAgICAgICAgICBdLmZpbHRlcigobXNnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbXNnICE9PSAnbmFtZSBjYW4gb25seSBjb250YWluIFVSTC1mcmllbmRseSBjaGFyYWN0ZXJzJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgICBpZiAoaW5mby5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb2JsZW1zW3Jhd1JlcXVlc3RdID0ge1xuICAgICAgICAgICAgICBtc2c6ICdCQUQgRk9STUFUVElORycsXG4gICAgICAgICAgICAgIGluZm86IFsuLi52YWxpZGF0aW9uUmVzdWx0Lndhcm5pbmdzIHx8IFtdLCAuLi52YWxpZGF0aW9uUmVzdWx0LmVycm9ycyB8fCBbXV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPyBwcm9ibGVtcyA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMoc3RhdHMsIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSA9IHRydWUpIHtcbiAgY29uc3QgaXNNb25vcmVwbyA9IGZzLmV4aXN0c1N5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vcGFja2FnZXNgKTtcblxuICBjb25zdCBwYWNrYWdlRG90SnNvbkNhY2hlID0ge307XG4gIGNvbnN0IHByb2JsZW1zID0ge307XG4gIHN0YXRzLmNvbXBpbGF0aW9uLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgLy8gb25seSBjb25jZXJuZWQgd2l0aCBtb2R1bGUgZW50cmllcyBmcm9tIC9wYWNrYWdlcy8gZm9sZGVyIChub3Qgbm9kZV9tb2R1bGVzKVxuICAgIGlmIChcbiAgICAgIG1vZHVsZS5yZXNvdXJjZSAmJlxuICAgICAgbW9kdWxlLnJlc291cmNlLmluZGV4T2YoJ25vZGVfbW9kdWxlcycpID09PSAtMVxuICAgICkge1xuICAgICAgbGV0IHBhY2thZ2VEb3RKc29uUGF0aDtcbiAgICAgIGlmIChpc01vbm9yZXBvKSB7XG4gICAgICAgIGxldCBwYWNrYWdlc0RpciA9IGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2VzYDtcbiAgICAgICAgcGFja2FnZXNEaXIgPSBlbnN1cmVUcmFpbGluZ1NsYXNoKHBhY2thZ2VzRGlyKTtcbiAgICAgICAgLy8gZ2V0IHN1YnN0cmluZyBmcm9tIGZpcnN0IHRyYWlsaW5nIHNsYXNoIGFmdGVyIHdoYXRldmVyIHBhY2thZ2VzRGlyIGlzXG4gICAgICAgIGNvbnN0IHBhY2thZ2VGb2xkZXJOYW1lID0gbW9kdWxlLnJlc291cmNlLnNwbGl0KHBhY2thZ2VzRGlyKVsxXS5zcGxpdCgnLycpWzBdO1xuICAgICAgICBwYWNrYWdlRG90SnNvblBhdGggPSBgJHtwYWNrYWdlc0Rpcn0ke3BhY2thZ2VGb2xkZXJOYW1lfS9wYWNrYWdlLmpzb25gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFja2FnZURvdEpzb25QYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vcGFja2FnZS5qc29uYDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFja2FnZURvdEpzb25Db250ZW50ID0gKFxuICAgICAgICBwYWNrYWdlRG90SnNvbkNhY2hlW3BhY2thZ2VEb3RKc29uUGF0aF0gfHwgZW5zdXJlUmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aClcbiAgICAgICk7XG4gICAgICBwYWNrYWdlRG90SnNvbkNhY2hlW3BhY2thZ2VEb3RKc29uUGF0aF0gPSBwYWNrYWdlRG90SnNvbkNvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VTb21laG93UHVibGljID0gKFxuICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LnByaXZhdGUgfHxcbiAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5wcml2YXRlRnJvbUdpdGh1YlxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBjb25jZXJuZWQgaWYgbW9kdWxlJ3MgcGFja2FnZS5qc29uIGlzIG5vdCBlbXB0eSxcbiAgICAgIC8vIGFuZCBpZiBpdCBpcyBwdWJsaWMgb24gZWl0aGVyIE5QTSBvciBHaXJodWJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhwYWNrYWdlRG90SnNvbkNvbnRlbnQpLmxlbmd0aCAmJiBwYWNrYWdlU29tZWhvd1B1YmxpYykge1xuICAgICAgICBjb25zdCBkZXBQcm9ibGVtcyA9IGZpbmREZXBlbmRlbmNpZXNQcm9ibGVtcyhtb2R1bGUuZGVwZW5kZW5jaWVzLCBwYWNrYWdlRG90SnNvbkNvbnRlbnQpO1xuICAgICAgICBpZiAoZGVwUHJvYmxlbXMpIHtcbiAgICAgICAgICBwcm9ibGVtc1ttb2R1bGUucmVzb3VyY2VdID0gZGVwUHJvYmxlbXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoT2JqZWN0LmtleXMocHJvYmxlbXMpLmxlbmd0aCA+IDAgJiYgc2hvdWxkU2hvd1Byb2JsZW1zSW5Db25zb2xlKSB7XG4gICAgc2hvd1Byb2JsZW1zSW5Db25zb2xlKHByb2JsZW1zKTtcbiAgfVxuXG4gIHJldHVybiBwcm9ibGVtcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW5cIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodG1sLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2luZ2xlLWxpbmUtbG9nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2luZ2xlLWxpbmUtbG9nXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW5cIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJsXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=