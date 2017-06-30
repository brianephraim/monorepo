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
      modulesDir: '/Users/brianephraim/Sites/monorepo/node_modules'
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


var _singleLineLog = __webpack_require__(29);

function printProgress(progress) {
  if (!process || !process.stdout || !process.stdout.clearLine) {
    return;
  }
  (0, _singleLineLog.stdout)(progress + '-xxxxxx');
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
  // process.stdout.write(progress + `-xxxxxx`);
} /* eslint-disable func-names */

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
  var compiler = (0, _webpack2.default)((0, _webpackConfigCommandLine2.default)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYmFkYjlkYTliM2MxY2E3Y2E1YSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iYnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieWFyZ3NcIiIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tDb25maWdDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrTWFrZUNvbXBpbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vLi9kZXZfZW52LmpzIiwid2VicGFjazovLy8uL2NvcmUvcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS93ZWJwYWNrQnVpbGRDb21tYW5kTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3dlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2plc3QvamVzdFNwYXduUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5SZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFja0VuaGFuY2VDb25maWdXZWIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFja0VuaGFuY2VFbnRyeU91dHB1dFN0YW5kYXJkLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIiXSwibmFtZXMiOlsiZW5oYW5jZSIsImNvbmZpZyIsImVudHJ5IiwibWFpbiIsIm91dHB1dCIsInNwbGl0IiwiZmlsZW5hbWUiLCJwb3AiLCJwYXRoIiwiam9pbiIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JpZ2luYWxDb25maWciLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJsb2FkZXIiLCJleGNsdWRlIiwicmVzb2x2ZSIsInVzZSIsInBsdWdpbnMiLCJwdXNoIiwiQmFubmVyUGx1Z2luIiwiYmFubmVyIiwicmF3IiwiZW50cnlPbmx5IiwibW9kdWxlc0RpciIsIl9fZGlybmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiZGV2dG9vbCIsInRhcmdldCIsIm5vZGUiLCJfX2ZpbGVuYW1lIiwiZXh0ZXJuYWxzIiwid2VicGFja01ha2VDb21waWxlciIsInJ1biIsImVyciIsInN0YXRzIiwiZXJyb3IiLCJzdGFjayIsImRldGFpbHMiLCJpbmZvIiwidG9Kc29uIiwiaGFzRXJyb3JzIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJoYXNXYXJuaW5ncyIsIndhcm5pbmdzIiwidyIsIndhcm4iLCJpc0RldiIsImNvbXBpbGVyIiwiYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUiLCJwdWJsaWNQYXRoIiwiY29sb3JzIiwid2FpdFVudGlsVmFsaWQiLCJlbnYiLCJpdGVtIiwidGVzdGRldmVudiIsIndhdGNoIiwidGVzdFBhdGhQYXR0ZXJuIiwicHJpbnRQcm9ncmVzcyIsInByb2dyZXNzIiwicHJvY2VzcyIsInN0ZG91dCIsImNsZWFyTGluZSIsInBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4iLCJwYXJzZVJlcXVlc3QiLCJhcHBseSIsInJlc29sdmVyIiwicGx1Z2luIiwicmVxdWVzdCIsImNhbGxiYWNrIiwibmV3UmVxdWVzdFN0ciIsIm9iaiIsIk9iamVjdCIsImFzc2lnbiIsImRvUmVzb2x2ZSIsImV4cG9ydHMiLCJEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4iLCJyZXF1aXJlIiwibW9kdWxlcyIsImN3ZCIsImV4dGVuc2lvbnMiLCJyZXF1ZXN0U3RyIiwic2V0TW9kdWxlQ29uc3RhbnQiLCJleHByZXNzaW9uTmFtZSIsImZuIiwiY29tcGlsYXRpb24iLCJkYXRhIiwibm9ybWFsTW9kdWxlRmFjdG9yeSIsInBhcnNlciIsIm9wdGlvbnMiLCJjb21waWxlclBhcnNlclBsdWdpbiIsInN0YXRlIiwiY3VycmVudCIsImFkZFZhcmlhYmxlIiwicmVzb3VyY2UiLCJjb250ZXh0IiwiY29uZmlnUGF0aCIsImNvbmZpZ0Jhc2VQYXRoIiwiY29tbWFuZCIsImNvbW1hbmRCb2R5IiwiYXJncyIsInByb2MiLCJzcGF3biIsInN0ZGlvIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJQbHVnaW5SZWdpc3RyeSIsInJlZ2lzdHJ5IiwibmFtZSIsInBsdWdpblJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJiaW5kIiwiY29tbWFuZFRvUnVuIiwia2lsbFBhcmVudE9uRXhpdCIsImNoaWxkUHJvY2VzcyIsImdlbmVyYXRlQ29uZmlnSnNvbiIsImlzQ29tbWFuZExpbmUiLCJpc0J1aWxkIiwiZGlyUm9vdCIsImRpcnJvb3QiLCJwYWNrYWdlSnNvbiIsInJlYWRKc29uU3luYyIsIm91dHB1dEZpbGVzIiwibGlicmFyeU5hbWUiLCJsaWJyYXJ5TmFtZVJlZHVjZWQiLCJsaWJyYXJ5IiwibGlicmFyeU1pbiIsImRlbW8iLCJlbnRyeUZpbGVzIiwiTWFpbkFwcCIsInN5bmMiLCJidW5kbGVGb3JOb2RlIiwidXNlcm5hbWUiLCJyZXBvc2l0b3J5IiwidXJsIiwicmVwbGFjZSIsImdlbmVyYXRlTG9hZGVyUGFyYW1PZlVzZSIsInVzZVBsdWdpbiIsIm1vcmVMb2FkZXJQYXJhbXMiLCJleHRyYWN0IiwiZmFsbGJhY2siLCJtb3ZlTW9kaWZ5Iiwic291cmNlIiwibW9kaWZ5UGF0aCIsIm1vZGlmeUNvbnRlbnQiLCJzb3VyY2VzIiwidG9Db3B5IiwicGF0dGVybiIsImZpbGVQYXRoIiwiZmlsZVBhdGhPdXQiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwib3V0cHV0RmlsZVN5bmMiLCJkZXZIdG1sUGF0aCIsIm9wdGltaXplIiwiVWdsaWZ5SnNQbHVnaW4iLCJpbmNsdWRlIiwibWluaW1pemUiLCJ0ZW1wbGF0ZVBhdGgiLCJodG1sVGVtcGxhdGVFeGlzdHMiLCJleGlzdHNTeW5jIiwiaW5kZXhIdG1sU2V0dGluZ3MiLCJjaHVua3MiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiTG9hZGVyT3B0aW9uc1BsdWdpbiIsInNhc3NMb2FkZXIiLCJpbXBvcnRlciIsInVzaW5nRXh0cmFjdFRleHRQbHVnaW4iLCJsb2FkZXJzIiwicmVwbGFjZW1lbnRzIiwicmVwbGFjZW1lbnQiLCJrZXlzIiwicmVkdWNlIiwiYWNjdW0iLCJlbnRyeU5hbWUiLCJsZW5ndGgiLCJsaWJyYXJ5VGFyZ2V0IiwidW1kTmFtZWREZWZpbmUiLCJhcHAiLCJwb3J0IiwiYXBwSXNCcmFuZE5ldyIsInJlcSIsInJlcyIsIm5leHQiLCJsYXN0UGFydE9mVVJMIiwicGFyc2UiLCJwYXRobmFtZSIsInVybEZvcm1hdFN1Z2dlc3RzSHRtbEZpbGVSZXF1ZXN0Iiwic3RhdGljIiwibGlzdGVuIiwiZW5zdXJlVHJhaWxpbmdTbGFzaCIsInN0ciIsImVuc3VyZVJlYWRKc29uU3luYyIsInBhY2thZ2VEb3RKc29uUGF0aCIsInBhY2thZ2VEb3RKc29uQ29udGVudCIsInNob3dQcm9ibGVtc0luQ29uc29sZSIsInByb2JsZW1zIiwibW9kdWxlUmVzb3VyY2UiLCJkZXBOYW1lIiwicHJvYmxlbU1zZyIsIm1zZyIsInByb2JsZW1JbmZvIiwiZmluZERlcGVuZGVuY2llc1Byb2JsZW1zIiwiZGVwZW5kZW5jaWVzIiwiZGVwIiwicmF3UmVxdWVzdCIsInZhbGlkYXRpb25SZXN1bHQiLCJ2YWxpZEZvck5ld1BhY2thZ2VzIiwiZGV2RGVwZW5kZW5jaWVzIiwiZmlsdGVyIiwid2VicGFja1BhcnNlU3RhdHNGb3JEZXBQcm9ibGVtcyIsInNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSIsImlzTW9ub3JlcG8iLCJwYWNrYWdlRG90SnNvbkNhY2hlIiwicGFja2FnZXNEaXIiLCJwYWNrYWdlRm9sZGVyTmFtZSIsInBhY2thZ2VTb21laG93UHVibGljIiwicHJpdmF0ZSIsInByaXZhdGVGcm9tR2l0aHViIiwiZGVwUHJvYmxlbXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNB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TUcsY0FBY2pCLHlCQUF5QnhNLE9BQU95TSxZQUFoQyxFQUE4Q1QscUJBQTlDLENBQXBCO0FBQ0EsWUFBSXlCLFdBQUosRUFBaUI7QUFDZnZCLG1CQUFTbE0sT0FBT3VGLFFBQWhCLElBQTRCa0ksV0FBNUI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQXBDRDtBQXFDQSxNQUFJeEosT0FBT3dHLElBQVAsQ0FBWXlCLFFBQVosRUFBc0JyQixNQUF0QixHQUErQixDQUEvQixJQUFvQ29DLDJCQUF4QyxFQUFxRTtBQUNuRWhCLDBCQUFzQkMsUUFBdEI7QUFDRDs7QUFFRCxTQUFPQSxRQUFQO0FBQ0Q7O2tCQUVjYywrQjs7Ozs7O0FDdEpmLDJEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsd0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDBEOzs7Ozs7QUNBQSxnQzs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSxtRCIsImZpbGUiOiJkaXN0L2Rldl9lbnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJmcy1leHRyYVwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwieWFyZ3NcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiZXhwcmVzc1wiKSwgcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKSwgcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKSwgcmVxdWlyZShcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwidXJsXCIpLCByZXF1aXJlKFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiKSwgcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGRlZnVhbHQvZGV2X2VudlwiLCBbXCJmcy1leHRyYVwiLCBcIndlYnBhY2tcIiwgXCJnbG9iYnlcIiwgXCJwYXRoXCIsIFwieWFyZ3NcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIsIFwiZXhwcmVzc1wiLCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiLCBcImh0bWwtd2VicGFjay1wbHVnaW5cIiwgXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiLCBcInNpbmdsZS1saW5lLWxvZ1wiLCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIsIFwidXJsXCIsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiLCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBkZWZ1YWx0L2Rldl9lbnZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmcy1leHRyYVwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJnbG9iYnlcIiksIHJlcXVpcmUoXCJwYXRoXCIpLCByZXF1aXJlKFwieWFyZ3NcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwiZXhwcmVzc1wiKSwgcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKSwgcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIiksIHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKSwgcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKSwgcmVxdWlyZShcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCIpLCByZXF1aXJlKFwidXJsXCIpLCByZXF1aXJlKFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiKSwgcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAZGVmdWFsdC9kZXZfZW52XCJdID0gZmFjdG9yeShyb290W1wiZnMtZXh0cmFcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1wiZ2xvYmJ5XCJdLCByb290W1wicGF0aFwiXSwgcm9vdFtcInlhcmdzXCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImRpcmVjdG9yeS1uYW1lZC13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcImV4cHJlc3NcIl0sIHJvb3RbXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIl0sIHJvb3RbXCJodG1sLXdlYnBhY2stcGx1Z2luXCJdLCByb290W1wibm9kZS1zYXNzLWpzb24taW1wb3J0ZXJcIl0sIHJvb3RbXCJzaW5nbGUtbGluZS1sb2dcIl0sIHJvb3RbXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiXSwgcm9vdFtcInVybFwiXSwgcm9vdFtcInZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWVcIl0sIHJvb3RbXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCJdLCByb290W1wid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJiYWRiOWRhOWIzYzFjYTdjYTVhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYmJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZ2xvYmJ5XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5YXJnc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInlhcmdzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnIGZyb20gJy4vd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnJztcbmltcG9ydCB3ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUgZnJvbSAnLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlSW1tZWRpYXRlQ29uZmlnIGZyb20gJy4vd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcnO1xuXG5mdW5jdGlvbiBlbmhhbmNlKCkge1xuICBsZXQgY29uZmlnID0gd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnKCk7XG4gIGNvbnN0IGVudHJ5ID0ge1xuICAgIG1haW46IGFyZ3YuZW50cnksXG4gIH07XG4gIGxldCBvdXRwdXQgPSBhcmd2Lm91dHB1dDtcbiAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcvJyk7XG5cbiAgb3V0cHV0ID0ge1xuICAgIGZpbGVuYW1lOiBvdXRwdXQucG9wKCksXG4gICAgcGF0aDogb3V0cHV0LmpvaW4oJy8nKSxcbiAgfTtcbiAgY29uZmlnID0ge1xuICAgIC4uLmNvbmZpZyxcbiAgICBlbnRyeSxcbiAgICBvdXRwdXQsXG4gIH07XG4gIGNvbmZpZyA9IHdlYnBhY2tFbmhhbmNlQ29uZmlnTm9kZShjb25maWcpO1xuICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUltbWVkaWF0ZUNvbmZpZyhjb25maWcpO1xuICBmcy53cml0ZUZpbGVTeW5jKCcuL193ZWJwYWNrLWNvbmZpZy1wcmV2aWV3LWNvbW1hbmRsaW5lLmpzb24nLCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpKTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lLmpzIiwiaW1wb3J0IHdlYnBhY2tDb25maWdSZXNvbHZlIGZyb20gJy4vd2VicGFjay1jb25maWctcmVzb2x2ZSc7XG5cbmZ1bmN0aW9uIGVuaGFuY2Uob3JpZ2luYWxDb25maWcpIHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIG1vZHVsZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRlc3Q6IC9cXC4oanMpPyQvLFxuICAgICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICAgICAgLy8gaW5jbHVkZTogYCR7ZGlyUm9vdH1gLFxuICAgICAgICAgIC8vIG9wdGlvbnM6IHtcbiAgICAgICAgICAvLyAgIHByZXNldHM6IFtcblxuICAgICAgICAgIC8vICAgICBbXG4gICAgICAgICAgLy8gICAgICAgJ2VzMjAxNScsXG4gICAgICAgICAgLy8gICAgICAgLy8gbmVlZGVkIGZvciB0cmVlIHNoYWtpbmdcbiAgICAgICAgICAvLyAgICAgICB7IG1vZHVsZXM6IGZhbHNlIH0sXG4gICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgLy8gICAgICdyZWFjdCcsXG4gICAgICAgICAgLy8gICAgIC8vICdyZWFjdCcsXG4gICAgICAgICAgLy8gICBdLFxuICAgICAgICAgIC8vICAgcGx1Z2luczogW1xuICAgICAgICAgIC8vICAgICAndHJhbnNmb3JtLWVzMjAxNS1zcHJlYWQnLFxuICAgICAgICAgIC8vICAgICAndHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZCcsXG4gICAgICAgICAgLy8gICBdLFxuICAgICAgICAgIC8vICAgLy8gbW9jaGEgbmVlZHMgLmJhYmVscmMsXG4gICAgICAgICAgLy8gICAvLyBhbmQgLmJhYmVscmMgY2Fubm90IHVzZSB0aGUgYWJvdmUgY29uZmlnXG4gICAgICAgICAgLy8gICAvLyBzbyBpZ25vcmUgLmJhYmVscmMgaGVyZVxuICAgICAgICAgIC8vICAgYmFiZWxyYzogZmFsc2UsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB3ZWJwYWNrQ29uZmlnUmVzb2x2ZS5yZXNvbHZlLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLm9yaWdpbmFsQ29uZmlnLFxuICAgIC4uLmNvbmZpZyxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tFbmhhbmNlQmFzZUNvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgbm9kZUV4dGVybmFscyBmcm9tICd3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnKSB7XG4gIGNvbnN0IG1vZHVsZSA9IHsgLi4uKG9yaWdpbmFsQ29uZmlnICYmIG9yaWdpbmFsQ29uZmlnLm1vZHVsZSkgfTtcbiAgbW9kdWxlLnJ1bGVzID0gW1xuICAgIHsgdGVzdDogL3J4XFwubGl0ZVxcLmFnZ3JlZ2F0ZXNcXC5qcy8sIHVzZTogJ2ltcG9ydHMtbG9hZGVyP2RlZmluZT0+ZmFsc2UnIH0sXG4gICAgeyB0ZXN0OiAvYXN5bmNcXC5qcy8sIHVzZTogJ2ltcG9ydHMtbG9hZGVyP2RlZmluZT0+ZmFsc2UnIH0sXG4gICAgLi4uKG1vZHVsZS5ydWxlcyB8fCBbXSksXG4gIF07XG5cbiAgY29uc3QgcGx1Z2lucyA9IG9yaWdpbmFsQ29uZmlnLnBsdWdpbnMgfHwgW107XG4gIHBsdWdpbnMucHVzaChuZXcgd2VicGFjay5CYW5uZXJQbHVnaW4oe1xuICAgIGJhbm5lcjogYHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnRcIikuaW5zdGFsbCgpO2AsXG4gICAgcmF3OiB0cnVlLFxuICAgIGVudHJ5T25seTogZmFsc2UsXG4gIH0pKTtcblxuICBsZXQgbW9kdWxlc0RpciA9ICcuLi9ub2RlX21vZHVsZXMnO1xuICBpZiAoX19kaXJuYW1lLmluZGV4T2YoJy9wYWNrYWdlcy8nKSA+IF9fZGlybmFtZS5pbmRleE9mKCcvbm9kZV9tb2R1bGVzLycpKSB7XG4gICAgbW9kdWxlc0RpciA9IGAke19fZGlybmFtZS5zcGxpdCgnL3BhY2thZ2VzLycpWzBdfS9ub2RlX21vZHVsZXNgO1xuICB9XG4gIGNvbnNvbGUubG9nKCdhJyxtb2R1bGVzRGlyKTtcbiAgY29uc29sZS5sb2coJ2InLCcvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL25vZGVfbW9kdWxlcycpO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgLy8gZGV2dG9vbDogJ2NoZWFwLW1vZHVsZS1ldmFsLXNvdXJjZS1tYXAnLFxuICAgIC8vIGRldnRvb2w6ICdjaGVhcC1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnY2hlYXAtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnc291cmNlLW1hcCcsXG4gICAgZGV2dG9vbDogJ2lubGluZS1zb3VyY2UtbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnc291cmNlbWFwJyxcbiAgICAvLyBkZXZ0b29sOiAnZXZhbCcsXG4gICAgbW9kdWxlLFxuICAgIHRhcmdldDogJ25vZGUnLFxuICAgIG5vZGU6IHtcbiAgICAgIC4uLm9yaWdpbmFsQ29uZmlnLm5vZGUsXG4gICAgICBfX2Rpcm5hbWU6IGZhbHNlLFxuICAgICAgX19maWxlbmFtZTogZmFsc2UsXG4gICAgfSxcbiAgICBleHRlcm5hbHM6IFtcbiAgICAgIC4uLihvcmlnaW5hbENvbmZpZy5leHRlcm5hbHMgfHwgW10pLFxuICAgICAgbm9kZUV4dGVybmFscyh7IFxuICAgICAgICAvLyBtb2R1bGVzRnJvbUZpbGU6IHRydWUsXG4gICAgICAgIG1vZHVsZXNEaXI6ICcvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL25vZGVfbW9kdWxlcydcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcGx1Z2lucyxcblxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VDb25maWdOb2RlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHdlYnBhY2tNYWtlQ29tcGlsZXIpID0+IHtcbiAgd2VicGFja01ha2VDb21waWxlcigpLnJ1bigoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVycik7XG4gICAgICBpZiAoZXJyLmRldGFpbHMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIuZGV0YWlscyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHN0YXRzLnRvSnNvbigpO1xuXG4gICAgaWYgKHN0YXRzLmhhc0Vycm9ycygpKSB7XG4gICAgICBpbmZvLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1xceDFiWzMxbScsIGUsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmhhc1dhcm5pbmdzKCkpIHtcbiAgICAgIGluZm8ud2FybmluZ3MuZm9yRWFjaCgodykgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1xceDFiWzMzbScsIHcsICdcXHgxYlswbScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tSdW5Db21waWxlci5qcyIsImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnO1xuXG5pbXBvcnQgd2VicGFja0NvbmZpZyBmcm9tICcuL3dlYnBhY2tDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXMgZnJvbSAnLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zJztcblxuZXhwb3J0IGRlZmF1bHQgKGlzRGV2KSA9PiB7XG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgaWYgKGlzRGV2KSB7XG4gICAgY29uc3QgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUgPSB3ZWJwYWNrRGV2TWlkZGxld2FyZShjb21waWxlciwge1xuICAgICAgcHVibGljUGF0aDogd2VicGFja0NvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbiAgICAgIHN0YXRzOiB7XG4gICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYWN0aXZlV2VicGFja0Rldk1pZGRsZXdhcmUud2FpdFVudGlsVmFsaWQoKHN0YXRzKSA9PiB7XG4gICAgICB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhY3RpdmVXZWJwYWNrRGV2TWlkZGxld2FyZTtcbiAgfVxuICByZXR1cm4gY29tcGlsZXI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja01ha2VDb21waWxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGFyZ3YgfSBmcm9tICd5YXJncyc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4vc2hlbGwtY29tbWFuZCc7XG5pbXBvcnQgamVzdFNwYXduUHJvY2VzcyBmcm9tICcuL2plc3QvamVzdFNwYXduUHJvY2Vzcyc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tSdW5Db21waWxlciBmcm9tICcuL2NvcmUvd2VicGFja1J1bkNvbXBpbGVyJztcbmltcG9ydCB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSBmcm9tICcuL2NvcmUvd2VicGFja0J1aWxkQ29tbWFuZExpbmUnO1xuaW1wb3J0IHNlcnZlIGZyb20gJy4vd2VicGFja0V4cHJlc3NTZXJ2ZXIuanMnO1xuXG5jb25zdCBlbnYgPSBhcmd2LmVudjtcbmNvbnN0IGl0ZW0gPSBhcmd2Lml0ZW07XG5pZiAoaXRlbSkge1xuICBzaGVsbENvbW1hbmQoYChjZCAuL3BhY2thZ2VzLyR7aXRlbX0gJiYgbnBtIHJ1biBzdGFydClgKTtcbn0gZWxzZSBpZiAoZW52ID09PSAndGVzdCcpIHtcbiAgamVzdFNwYXduUHJvY2Vzcyhhcmd2LnRlc3RkZXZlbnYsIGFyZ3Yud2F0Y2gsIGFyZ3YudGVzdFBhdGhQYXR0ZXJuKTtcbn0gZWxzZSBpZiAoYXJndi5lbnRyeSkge1xuICB3ZWJwYWNrQnVpbGRDb21tYW5kTGluZSgpO1xufSBlbHNlIGlmIChlbnYgPT09ICdidWlsZCcpIHtcbiAgd2VicGFja1J1bkNvbXBpbGVyKHdlYnBhY2tNYWtlQ29tcGlsZXIpO1xufSBlbHNlIHtcbiAgc2VydmUoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldl9lbnYuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5pbXBvcnQgeyBzdGRvdXQgYXMgc2luZ2xlTGluZUxvZyB9IGZyb20gJ3NpbmdsZS1saW5lLWxvZyc7XG5mdW5jdGlvbiBwcmludFByb2dyZXNzKHByb2dyZXNzKXtcbiAgICBpZiAoIXByb2Nlc3MgfHwgIXByb2Nlc3Muc3Rkb3V0IHx8ICFwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNpbmdsZUxpbmVMb2cocHJvZ3Jlc3MgKyBgLXh4eHh4eGApO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHByb2dyZXNzICsgYC14eHh4eHhgKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4ocGFyc2VSZXF1ZXN0ID0gKCkgPT4ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBhcHBseShyZXNvbHZlcikge1xuICAgICAgLy8gSSBkb24ndCBrbm93IHdoeSAnbW9kdWxlJyBvciAncmVzb2x2ZScgYXJlIHRob3NlIHZhbHVlcy5cbiAgICAgIC8vIFNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSB0aGUgd2F5IHRoZXkgYXJlIHVzZWQgaW4gdGhpcyBmaWxlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svZW5oYW5jZWQtcmVzb2x2ZS9ibG9iL21hc3Rlci9saWIvUmVzb2x2ZXJGYWN0b3J5LmpzXG4gICAgICAvLyBTbyB0aGV5IGNhbiBiZSBvdGhlciB2YWx1ZXMgYXMgc2VlbiBpbiB0aGF0IGZpbGUuXG4gICAgICByZXNvbHZlci5wbHVnaW4oLyogJ21vZHVsZXMnKi8gJ3Jlc29sdmUnLCBmdW5jdGlvbiAocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcHJpbnRQcm9ncmVzcyhgJHtyZXF1ZXN0LnJlcXVlc3R9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0LnJlcXVlc3QnLHJlcXVlc3QucmVxdWVzdClcbiAgICAgICAgY29uc3QgbmV3UmVxdWVzdFN0ciA9IHBhcnNlUmVxdWVzdChyZXF1ZXN0LnJlcXVlc3QpO1xuICAgICAgICBpZiAobmV3UmVxdWVzdFN0ciAmJiBuZXdSZXF1ZXN0U3RyICE9PSByZXF1ZXN0LnJlcXVlc3QpIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0LCB7XG4gICAgICAgICAgICByZXF1ZXN0OiBuZXdSZXF1ZXN0U3RyLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZG9SZXNvbHZlKCdyZXNvbHZlJywgb2JqLCAnYmxhaCBibGFoJywgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBcXG5gKTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4uanMiLCJjb25zdCBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdkaXJlY3RvcnktbmFtZWQtd2VicGFjay1wbHVnaW4nKTtcbmNvbnN0IHBhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4gPSByZXF1aXJlKCcuL3BhcnNlUmVxdWVzdFJlc29sdmVQbHVnaW4nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVzb2x2ZToge1xuICAgIG1vZHVsZXM6IFtcbiAgICAgIHBhdGgucmVzb2x2ZSgnLi9zcmMvbGlicmFyeScpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcycpLFxuICAgICAgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLi8uLi9wYWNrYWdlcycpLFxuICAgICAgJ25vZGVfbW9kdWxlcycsXG4gICAgXSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICAnLmpzJyxcblxuICAgICAgLy8gV2h5IGlzIHRoaXMgaGVyZT8gOiBodHRwczovL2dpdGh1Yi5jb20vbnBtL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvaXNzdWVzLzg4XG4gICAgICAvLyBJc3N1ZSBvbmx5IGFwcGVhcmQgd2hlbiB3ZWJwYWNrIHJ1biBvbiBjb21tYW5kIGxpbmUgZm9yIE5vZGUgYnVuZGxlXG4gICAgICAnLmpzb24nLFxuICAgIF0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcGFyc2VSZXF1ZXN0UmVzb2x2ZVBsdWdpbigocmVxdWVzdFN0cikgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdFN0ci5pbmRleE9mKCdAJykgPT09IDAgJiYgcmVxdWVzdFN0ci5pbmRleE9mKCcvJykgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3RTdHIuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIG5ldyBEaXJlY3RvcnlOYW1lZFdlYnBhY2tQbHVnaW4odHJ1ZSksXG4gICAgXSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2stY29uZmlnLXJlc29sdmUuanMiLCJpbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCB3ZWJwYWNrUnVuQ29tcGlsZXIgZnJvbSAnLi93ZWJwYWNrUnVuQ29tcGlsZXInO1xuaW1wb3J0IHdlYnBhY2tDb25maWcgZnJvbSAnLi93ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUnO1xuXG5mdW5jdGlvbiB3ZWJwYWNrTWFrZUNvbXBpbGVyKCkge1xuICBjb25zdCBjb21waWxlciA9IHdlYnBhY2sod2VicGFja0NvbmZpZygpKTtcbiAgcmV0dXJuIGNvbXBpbGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHdlYnBhY2tSdW5Db21waWxlcih3ZWJwYWNrTWFrZUNvbXBpbGVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3JlL3dlYnBhY2tCdWlsZENvbW1hbmRMaW5lLmpzIiwiXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnKSB7XG4gIGxldCBjb25maWcgPSB7IC4uLm9yaWdpbmFsQ29uZmlnIH07XG4gIGNvbmZpZy5wbHVnaW5zID0gY29uZmlnLnBsdWdpbnMgfHwgW107XG5cbiAgLy8gSSBuZWVkZWQgX19kaXJuYW1lIGhhcmRjb2RlZCBhcyB0aGUgb3JpZ2luYWwgZGlybmFtZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8xNTk5I2lzc3VlY29tbWVudC0yNjY1ODg4OThcbiAgY29uZmlnLnBsdWdpbnMucHVzaCh7XG4gICAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICAgIGZ1bmN0aW9uIHNldE1vZHVsZUNvbnN0YW50KGV4cHJlc3Npb25OYW1lLCBmbikge1xuICAgICAgICBjb21waWxlci5wbHVnaW4oXCJjb21waWxhdGlvblwiLCBmdW5jdGlvbihjb21waWxhdGlvbiwgZGF0YSkge1xuICAgICAgICAgIGRhdGEubm9ybWFsTW9kdWxlRmFjdG9yeS5wbHVnaW4oXCJwYXJzZXJcIiwgZnVuY3Rpb24ocGFyc2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBwYXJzZXIucGx1Z2luKGBleHByZXNzaW9uICR7ZXhwcmVzc2lvbk5hbWV9YCwgZnVuY3Rpb24gY29tcGlsZXJQYXJzZXJQbHVnaW4oKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5hZGRWYXJpYWJsZShleHByZXNzaW9uTmFtZSwgSlNPTi5zdHJpbmdpZnkoZm4odGhpcy5zdGF0ZS5tb2R1bGUpKSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRNb2R1bGVDb25zdGFudCgnX19maWxlbmFtZScsIChtb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5yZXNvdXJjZTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRNb2R1bGVDb25zdGFudCgnX19kaXJuYW1lJywgKG1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW9kdWxlLmNvbnRleHQ7XG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvcmUvd2VicGFja0VuaGFuY2VJbW1lZGlhdGVDb25maWcuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGltcG9ydCBqZXN0Q29uZmlnIGZyb20gJy4vamVzdENvbmZpZyc7XG4vLyBjb25zdCBjb25maWcgPSBgJyR7SlNPTi5zdHJpbmdpZnkoamVzdENvbmZpZykucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpfSdgO1xuXG5jb25zdCBjb25maWdQYXRoID0gYCR7X19kaXJuYW1lfS9qZXN0Q29uZmlnLmpzYDtcbmNvbnN0IGNvbmZpZ0Jhc2VQYXRoID0gYCR7X19kaXJuYW1lfS9qZXN0Q29uZmlnQmFzZS5qc2A7XG4vLyBxd2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXN0ZGV2ZW52LCB3YXRjaCA9IHRydWUsIHRlc3RQYXRoUGF0dGVybikgPT4ge1xuICBjb25zb2xlLmxvZygnSkVTVCBTUEFXTicsIHRlc3RkZXZlbnYpXG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICAvLyBXaHkgYENJPXRydWUgYD8gLS0tLS0gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2plc3QvaXNzdWVzLzI5NTlcbiAgbGV0IGNvbW1hbmRCb2R5ID0gYENJPXRydWUgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvLmJpbi9qZXN0IC0td2F0Y2g9JHt3YXRjaCAmJiB3YXRjaCAhPT0gJ2ZhbHNlJyA/ICd0cnVlJyA6ICdmYWxzZSd9IC0tY29uZmlnPSR7Y29uZmlnUGF0aH0ke3Rlc3RQYXRoUGF0dGVybiA/IFtcIiAtLXRlc3RQYXRoUGF0dGVybj0nXCIsdGVzdFBhdGhQYXR0ZXJuLFwiJ1wiXS5qb2luKCcnKSA6ICcnfWA7XG4gIGlmICh0ZXN0ZGV2ZW52KSB7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgLXQgdGVzdGRldmVudiAtLWNvbmZpZz0ke2NvbmZpZ0Jhc2VQYXRofWA7XG4gICAgLy8gY29tbWFuZEJvZHkgPSBgQ0k9dHJ1ZSAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy8uYmluL2plc3QgJHtfX2Rpcm5hbWV9L3Rlc3RkZXZlbnYuanMgIC0tY29uZmlnPSR7Y29uZmlnQmFzZVBhdGh9YDtcbiAgICBjb21tYW5kQm9keSA9IGBDST10cnVlICR7cHJvY2Vzcy5jd2QoKX0vbm9kZV9tb2R1bGVzLy5iaW4vbW9jaGEtd2VicGFjayAtLXJlcXVpcmUgYmFiZWwtY29yZS9yZWdpc3RlciAtLXdlYnBhY2stY29uZmlnICR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnLi4vY29yZS93ZWJwYWNrQ29uZmlnTW9jaGEuanMnKX0gXFxcIiR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnLi90ZXN0ZGV2ZW52Mi5qcycpfVxcXCJgXG4gIH1cbiAgY29uc29sZS5sb2coJ2NvbW1hbmRCb2R5Jyxjb21tYW5kQm9keSk7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kQm9keSxcbiAgXTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgeyBzdGRpbzogJ2luaGVyaXQnIH0pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vamVzdC9qZXN0U3Bhd25Qcm9jZXNzLmpzIiwiY2xhc3MgUGx1Z2luUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0ge307XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gIH1cbiAgcmVnaXN0ZXIobmFtZSwgcGx1Z2luKSB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5W25hbWVdKSB7XG4gICAgICB0aGlzLnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgdGhpcy5yZWdpc3RyeVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IHBsdWdpblJlZ2lzdHJ5ID0gbmV3IFBsdWdpblJlZ2lzdHJ5KCk7XG5jb25zdCBwbHVnaW5zID0gcGx1Z2luUmVnaXN0cnkucGx1Z2lucztcbmNvbnN0IHJlZ2lzdGVyID0gcGx1Z2luUmVnaXN0cnkucmVnaXN0ZXIuYmluZChwbHVnaW5SZWdpc3RyeSk7XG5leHBvcnQgeyByZWdpc3RlciB9O1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2lucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpblJlZ2lzdHJ5LmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbi8qXG4gIFRoaXMgZmlsZSB1c2VkIGluIDIgcGxhY2VzXG4gICAgMS4gIFRoaXMgZmlsZSBpcyBleGVjdXRlZCBieSB0aGUgbW9ub3JlcG8gc2VydmluZyBhcyB0aGUgbW9ub3JlcG8ncyBkZXYgZW52aXJvbm1lbnQuXG4gICAgICAgIChPbmx5IHRoZSBtb25vcmVwbyB1c2VzIGRldl9lbnYgbGlrZSB0aGlzLiBXaGVuIHRoZSBtb25vcmVwbydzIHBhY2thZ2VzIGFyZSBzY2F0dGVyZWRcbiAgICAgICAgaW50byBpbmRpdmlkdWFsIHJlcG9zLCBlYWNoIGluZGl2aWR1YWwgcmVwbyBoYXMgYSBkZXZfZW52IGRlcGVuZGVuY3lcbiAgICAgICAgaW4gaXRzIG5vZGVfbW9kdWxlcyBmb2xkZXIsXG4gICAgICAgIGJ1dCB0aGlzIGRldl9lbnYgaXMgZXhlY3V0ZWQgZnJvbSBhIGNvbXBpbGVkIHZlcnNpb24gb2YgdGhlIGRldl9lbnYuXG4gICAgICAgIFRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGluZGl2aWR1YWwgcmVwbydzIC4vbm9kZV9tb2R1bGVzLy5iaW4vZGV2ZW52LFxuICAgICAgICB3aGljaCBwb2ludHMgdG8gLi9ub2RlX21vZHVsZXMvQGRlZnVhbHQvZGV2X2Vudi9kaXN0L2Rldl9lbnYuanMuKVxuICAgIDIuICBUaGlzIGZpbGUgaXMgZXhlY3V0ZWQgZHVyaW5nIHRoZSBucG0gcHJlcHVibGlzaCwgd2hpY2ggY3JlYXRlcyB0aGUgL2Rpc3QgZm9sZGVyXG4gICAgICAgIG1lbnRpb25lZCBpbiAoMSkgYWJvdmUuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTycpXG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NoZWxsLWNvbW1hbmQuanMiLCIvKlxuICBUaGlzIGZpbGVzIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2hlbiBjYWxsZWQgZ2VuZXJhdGVzIGEgd2VicGFjayBjb25maWcganNvbi5cbiAgYGFyZ3ZgIGlzIHBhc3NlZCBpbnRvIHRoaXMgZnVuY3Rpb24uXG5cbiAgd2hlbiBgYXJndi5lbnYgPT09IGZhbHNleWBcbiAgICBUaGlzIGNvbXBpbGVzIGZvciBhIGRldiBzZXJ2ZXIgdmlhIHdlYnBhY2stZGV2LW1pZGRsZXdhcmUuICBObyBmaWxlcyBhcmUgY3JlYXRlZCB0byBkaXNrLFxuICAgIG9ubHkgY3JlYXRlZCBpbiBtZW1vcnkuXG5cbiAgd2hlbiBgYXJndi5lbnYgPT09ICdidWlsZCdgXG4gICAgVGhpcyBjb21waWxlcyBmaWxlcyB0byBkaXNrIGluIGEgL2Rpc3QgZm9sZGVyIGFuZCBhIC9kZW1vIGZvbGRlci5cblxuICB3aGVuIGBhcmd2LmRpcnJvb3QgPT09IHNvbWUgcGF0aGBcbiAgICBUaGlzIGlzIHVzZWQgd2hlbiBkZXZfZW52IGl0c2VsZiBpcyBjb21waWxlZC5cbiAgICBUaGlzIHZlcnkgZmlsZSBpcyBjb21waWxlZCBhY2NvcmRpbmcgdGhlIGNvbmZpZyBzZXQgYnkgdGhpcyBmaWxlLlxuICAgIFRoaXMgaXMgbmVlZGVkIHRvIG1ha2UgZGV2X2VudiBwb3J0YWJsZSB2aWEgbnBtLlxuICAgIGJhYmVsLW5vZGUgbmVlZHMgdG8gY29tcGlsZSB0aGlzIGRldl9lbnYgdG8gd29yayxcbiAgICBidXQgdGhpcyBkb2VzIG5vdCBwbGF5IHdlbGwgd2hlbiBkZXZfZW52IGlzIGluIGEgbm9kZV9tb2R1bGVzIGZvbGRlci5cbiAgICBTbyB3ZSBuZWVkIHRvIGNvbXBpbGUgZGV2X2VudiBiZWZvcmUgcHVibGlzaGluZyB0byBucG0uXG4gICAgRGlyZWN0b3J5IHBhdGhzIG5lZWQgdG8gYmUgdHdlYWtlZCB0byBhY2NvbXBsaXNoIHRoaXMsXG4gICAgYW5kIHRoYXQncyB3aGF0IGBhcmd2LmRpcnJvb3RgIGhlbHBzIHdpdGguXG5cblxuICBUaGlzIGZ1bmN0aW9uIGlzIGFsc28gYWZmZWN0ZWQgYnkgcGFja2FnZS5qc29uLlxuXG4gIHdoZW4gcGFja2FnZS5qc29uLmJ1bmRsZUZvck5vZGUgPT09IHRydWVcbiAgICBpbiBjb25qdW5jdGlvbiB3aXRoIGBhcmd2LmVudiA9PT0gJ2J1aWxkJ2AsIHRoZSBidW5kbGUgd2lsbFxuICAgIGhhdmUgc3BlY2lhbCBjb25zaWRlcmF0aW9uIGZvciBhIG5vZGUgcGxhdGZvcm0uXG4gICAgT25seSBhcHBsaWNhdGlvbiBmaWxlcyB3aWxsIGJlIGJ1bmRsZWQuXG4gICAgbm9kZV9tb2R1bGVzIGFuZCBub2RlIGJ1aWx0LWluIHJlcXVpcmVzIHdpbGwgbm90IGJlIGJ1bmRsZWQuXG4qL1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3lhcmdzJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VDb25maWdOb2RlIGZyb20gJy4vY29yZS93ZWJwYWNrRW5oYW5jZUNvbmZpZ05vZGUnO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlQ29uZmlnV2ViIGZyb20gJy4vd2VicGFja0VuaGFuY2VDb25maWdXZWInO1xuaW1wb3J0IHdlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZCBmcm9tICcuL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZCc7XG5pbXBvcnQgd2VicGFja0VuaGFuY2VCYXNlQ29uZmlnIGZyb20gJy4vY29yZS93ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcnO1xuaW1wb3J0IHdlYnBhY2tDb25maWdDb21tYW5kTGluZSBmcm9tICcuL2NvcmUvd2VicGFja0NvbmZpZ0NvbW1hbmRMaW5lJztcbi8vIGltcG9ydCBhYWE4IGZyb20gJ0BkZWZ1YWx0L2FhYTgnO1xuLy8gY29uc29sZS5sb2coYWFhOCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuY3dkKCkpO1xuLy8gLy8gY29uc29sZS5sb2coYXJndik7XG4vLyBjb25zb2xlLmxvZyh7XG4vLyAgIGVudHJ5OiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYXJndi5lbnRyeSksXG4vLyAgIG91dHB1dDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGFyZ3Yub3V0cHV0KSxcbi8vIH0pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbmZpZ0pzb24oKSB7XG4gIGNvbnNvbGUubG9nKCdBUkdWJyxhcmd2KVxuICBjb25zdCBpc0NvbW1hbmRMaW5lID0gYXJndi5lbnRyeTtcbiAgbGV0IGNvbmZpZztcbiAgaWYgKGlzQ29tbWFuZExpbmUpIHtcbiAgICBjb25maWcgPSB3ZWJwYWNrQ29uZmlnQ29tbWFuZExpbmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUJhc2VDb25maWcoKTtcbiAgICBjb25zdCBpc0J1aWxkID0gYXJndi5lbnYgPT09ICdidWlsZCc7XG4gICAgY29uc3QgZGlyUm9vdCA9IGFyZ3YuZGlycm9vdCB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IHBhY2thZ2VKc29uID0gZnMucmVhZEpzb25TeW5jKGAke2RpclJvb3R9L3BhY2thZ2UuanNvbmApO1xuICAgIGNvbnN0IG91dHB1dEZpbGVzID0ge307XG4gICAgY29uc3QgbGlicmFyeU5hbWUgPSBwYWNrYWdlSnNvbi5uYW1lO1xuICAgIGNvbnN0IGxpYnJhcnlOYW1lUmVkdWNlZCA9IGxpYnJhcnlOYW1lLnNwbGl0KCcvJylbMV0gfHwgbGlicmFyeU5hbWUuc3BsaXQoJy8nKVswXTtcbiAgICBpZiAoaXNCdWlsZCkge1xuICAgICAgb3V0cHV0RmlsZXMubGlicmFyeSA9IGBkaXN0LyR7bGlicmFyeU5hbWVSZWR1Y2VkfWA7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5TWluID0gYGRpc3QvJHtsaWJyYXJ5TmFtZVJlZHVjZWR9Lm1pbmA7XG4gICAgICBvdXRwdXRGaWxlcy5kZW1vID0gJ2Rpc3QvZGVtby9pbmRleCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dEZpbGVzLmRlbW8gPSAnYm9vdCc7XG4gICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5ID0gYCR7bGlicmFyeU5hbWVSZWR1Y2VkfWA7XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5RmlsZXM7XG4gICAgY29uc29sZS5sb2coJ2FyZ3Zhcmd2YXJndicsYXJndilcbiAgICBpZiAoYXJndlsnZGVtby1lbnRyeSddKSB7XG4gICAgICBlbnRyeUZpbGVzID0ge1xuICAgICAgICBbb3V0cHV0RmlsZXMuZGVtb106IFthcmd2WydkZW1vLWVudHJ5J11dLFxuICAgICAgfTtcbiAgICAvLyB9IGVsc2UgaWYgKGFyZ3ZbJ3RhaWxvci13ZWItYnVuZGxlLWZvci10ZXN0aW5nLW9mLWRldi1lbnYtaXRzZWxmJ10pIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnWUVFRUVIQVcnKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdZRUVFRUhBVycpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ1lFRUVFSEFXJyk7XG4gICAgLy8gICBlbnRyeUZpbGVzID0ge1xuICAgIC8vICAgICBbb3V0cHV0RmlsZXMuZGVtb106IFtgJHtkaXJSb290fS9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzYF0sXG4gICAgLy8gICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUZpbGVzID0ge1xuICAgICAgICBNYWluQXBwOiBnbG9iYnkuc3luYyhbYCR7ZGlyUm9vdH0vcGFja2FnZXMvTWFpbkFwcC9NYWluQXBwLmpzYF0pLFxuICAgICAgICBbb3V0cHV0RmlsZXMubGlicmFyeV06IGdsb2JieS5zeW5jKFtcbiAgICAgICAgICBgJHtkaXJSb290fS8ke2xpYnJhcnlOYW1lUmVkdWNlZH0uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9L3NyYy9saWJyYXJ5L2luZGV4LmpzYCxcbiAgICAgICAgXSksXG4gICAgICAgIC4uLihcbiAgICAgICAgICBvdXRwdXRGaWxlcy5saWJyYXJ5TWluID8ge1xuICAgICAgICAgICAgW291dHB1dEZpbGVzLmxpYnJhcnlNaW5dOiBnbG9iYnkuc3luYyhbYCR7ZGlyUm9vdH0vc3JjL2xpYnJhcnkvaW5kZXguanNgXSksXG4gICAgICAgICAgfSA6IHt9XG4gICAgICAgICksXG4gICAgICAgIFtvdXRwdXRGaWxlcy5kZW1vXTogZ2xvYmJ5LnN5bmMoW1xuICAgICAgICAgIGAke2RpclJvb3R9LyouZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vZGVtby5qc2AsXG4gICAgICAgICAgYCR7ZGlyUm9vdH0vKiovKi8qLmRlbW8uanNgLFxuICAgICAgICAgIGAke2RpclJvb3R9LyoqLyovZGVtby5qc2AsXG4gICAgICAgICAgYCEke2RpclJvb3R9L3BhY2thZ2VzLyoqLypgLFxuICAgICAgICAgIGAke2RpclJvb3R9L3BhY2thZ2VzL01haW5BcHAvTWFpbkFwcC5qc2AsXG4gICAgICAgIF0pLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUVudHJ5T3V0cHV0U3RhbmRhcmQoXG4gICAgICBjb25maWcsIGRpclJvb3QsIGxpYnJhcnlOYW1lLCBlbnRyeUZpbGVzXG4gICAgKTtcbiAgICBpZiAocGFja2FnZUpzb24uYnVuZGxlRm9yTm9kZSkge1xuICAgICAgY29uZmlnID0gd2VicGFja0VuaGFuY2VDb25maWdOb2RlKGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VybmFtZSA9IG51bGw7XG4gICAgICBpZiAocGFja2FnZUpzb24ucmVwb3NpdG9yeSAmJiBwYWNrYWdlSnNvbi5yZXBvc2l0b3J5LnVybCkge1xuICAgICAgICB1c2VybmFtZSA9IHBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsLnJlcGxhY2UoJzovLycpLnNwbGl0KCcvJylbMV07XG4gICAgICB9XG4gICAgICBjb25maWcgPSB3ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYihcbiAgICAgICAgY29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZnMud3JpdGVGaWxlU3luYygnLi9fd2VicGFjay1jb25maWctcHJldmlldy5qc29uJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29uZmlnSnNvbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFja0NvbmZpZy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgSHRtbFdlYnBhY2tQbHVnaW4gZnJvbSAnaHRtbC13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgU3RyaW5nUmVwbGFjZVBsdWdpbiBmcm9tICdzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgRXh0cmFjdFRleHRQbHVnaW4gZnJvbSAnZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCBqc29uSW1wb3J0ZXIgZnJvbSAnbm9kZS1zYXNzLWpzb24taW1wb3J0ZXInO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCBwbHVnaW5zLCB7IHJlZ2lzdGVyIGFzIHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5SZWdpc3RyeSc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzZVBsdWdpbiwgbW9yZUxvYWRlclBhcmFtcykge1xuICBpZiAodXNlUGx1Z2luKSB7XG4gICAgcmV0dXJuIHsgdXNlOiBFeHRyYWN0VGV4dFBsdWdpbi5leHRyYWN0KG1vcmVMb2FkZXJQYXJhbXMpIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1c2U6IFttb3JlTG9hZGVyUGFyYW1zLmZhbGxiYWNrLCAuLi5tb3JlTG9hZGVyUGFyYW1zLnVzZV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdmVNb2RpZnkoc291cmNlLCBtb2RpZnlQYXRoLCBtb2RpZnlDb250ZW50KSB7XG4gIGxldCBzb3VyY2VzID0gW107XG4gIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgIHNvdXJjZXMgPSBzb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgc291cmNlcy5wdXNoKHNvdXJjZSk7XG4gIH1cbiAgbGV0IHRvQ29weSA9IFtdO1xuICBzb3VyY2VzLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICB0b0NvcHkgPSBbXG4gICAgICAuLi50b0NvcHksXG4gICAgICAuLi5nbG9iYnkuc3luYyhwYXR0ZXJuKSxcbiAgICBdO1xuICB9KTtcbiAgdG9Db3B5LmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgbGV0IGZpbGVQYXRoT3V0ID0gZmlsZVBhdGg7XG4gICAgaWYgKG1vZGlmeVBhdGgpIHtcbiAgICAgIGZpbGVQYXRoT3V0ID0gbW9kaWZ5UGF0aChmaWxlUGF0aCk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgIGlmIChtb2RpZnlDb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gbW9kaWZ5Q29udGVudChjb250ZW50LCBmaWxlUGF0aCwgZmlsZVBhdGhPdXQpO1xuICAgIH1cbiAgICBmcy5vdXRwdXRGaWxlU3luYyhmaWxlUGF0aE91dCwgY29udGVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmhhbmNlKG9yaWdpbmFsQ29uZmlnLCBsaWJyYXJ5TmFtZSwgaXNCdWlsZCwgZGlyUm9vdCwgdXNlcm5hbWUsIG91dHB1dEZpbGVzKSB7XG4gIGNvbnN0IGRldkh0bWxQYXRoID0gJy4vaW5kZXguaHRtbCc7XG4gIGlmIChpc0J1aWxkKSB7XG4gICAgbW92ZU1vZGlmeShbJ3NyYy9pbXBvcnQtZXhhbXBsZXMvKiovISh3ZWJwYWNrLmNvbmZpZykuKicsICdzcmMvdG9uaWNFeGFtcGxlLmpzJ10sIChmaWxlUGF0aCkgPT4ge1xuICAgICAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoJ3NyYy8nLCAnLi8nKTtcbiAgICB9LFxuICAgIChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9MSUJSQVJZTkFNRS9nLCBsaWJyYXJ5TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZWdpc3RlclBsdWdpbignVWdsaWZ5SnNQbHVnaW4nLCBuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XG4gICAgICBpbmNsdWRlOiAvXFwubWluXFwuanMkLyxcbiAgICAgIG1pbmltaXplOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlUGF0aCA9ICdzcmMvZGVtby9pbmRleC5lanMnO1xuICAgIGNvbnN0IGh0bWxUZW1wbGF0ZUV4aXN0cyA9IGZzLmV4aXN0c1N5bmModGVtcGxhdGVQYXRoKTtcbiAgICBjb25zdCBpbmRleEh0bWxTZXR0aW5ncyA9IHtcbiAgICAgIGNodW5rczogW291dHB1dEZpbGVzLmRlbW9dLFxuICAgICAgLi4uKFxuICAgICAgICBodG1sVGVtcGxhdGVFeGlzdHMgPyB7IHRlbXBsYXRlOiB0ZW1wbGF0ZVBhdGggfSA6IHt9XG4gICAgICApLFxuICAgICAgdGl0bGU6ICdhZmFzZGZhc2RmYXNkJyxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgbGlicmFyeU5hbWUsXG4gICAgfTtcbiAgICByZWdpc3RlclBsdWdpbignZGVtb0luZGV4LUh0bWxXZWJwYWNrUGx1Z2luJywgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIGZpbGVuYW1lOiAnLi9kaXN0L2RlbW8vaW5kZXguaHRtbCcsXG4gICAgICAuLi5pbmRleEh0bWxTZXR0aW5ncyxcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJQbHVnaW4oJ2RlbW9EZXZJbmRleC1IdG1sV2VicGFja1BsdWdpbicsIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICBjaHVua3M6IFtvdXRwdXRGaWxlcy5kZW1vXSxcbiAgICAgIGZpbGVuYW1lOiBkZXZIdG1sUGF0aCxcbiAgICB9KSk7XG4gIH1cblxuICByZWdpc3RlclBsdWdpbignU3RyaW5nUmVwbGFjZVBsdWdpbicsIG5ldyBTdHJpbmdSZXBsYWNlUGx1Z2luKCkpO1xuXG4gIHJlZ2lzdGVyUGx1Z2luKCdMb2FkZXJPcHRpb25zUGx1Z2luJywgbmV3IHdlYnBhY2suTG9hZGVyT3B0aW9uc1BsdWdpbih7XG4gICAgb3B0aW9uczoge1xuICAgICAgc2Fzc0xvYWRlcjoge1xuICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgfSxcbiAgICAgIGNvbnRleHQ6IGRpclJvb3QsXG4gICAgfSxcbiAgfSkpO1xuXG5cbiAgY29uc3QgbW9kdWxlID0geyAuLi4ob3JpZ2luYWxDb25maWcgJiYgb3JpZ2luYWxDb25maWcubW9kdWxlKSB9O1xuICBsZXQgdXNpbmdFeHRyYWN0VGV4dFBsdWdpbiA9IGZhbHNlO1xuICBpZiAoaXNCdWlsZCkge1xuICAgIHJlZ2lzdGVyUGx1Z2luKCdFeHRyYWN0VGV4dFBsdWdpbicsIG5ldyBFeHRyYWN0VGV4dFBsdWdpbignW25hbWVdLmNzcycpKTtcbiAgICB1c2luZ0V4dHJhY3RUZXh0UGx1Z2luID0gdHJ1ZTtcbiAgfVxuICBtb2R1bGUucnVsZXMgPSBbXG4gICAgLi4uKG1vZHVsZS5ydWxlcyB8fCBbXSksXG4gICAge1xuICAgICAgdGVzdDogL1xcLmNzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFsnY3NzLWxvYWRlciddLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuc2NzcyQvLFxuICAgICAgLi4uZ2VuZXJhdGVMb2FkZXJQYXJhbU9mVXNlKHVzaW5nRXh0cmFjdFRleHRQbHVnaW4sIHtcbiAgICAgICAgZmFsbGJhY2s6ICdzdHlsZS1sb2FkZXInLFxuICAgICAgICB1c2U6IFtcbiAgICAgICAgICAnY3NzLWxvYWRlcj9zb3VyY2VNYXAnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogJ3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCcsXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgSlNPTiBpbXBvcnRlciB2aWEgc2Fzcy1sb2FkZXIncyBvcHRpb25zLlxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBpbXBvcnRlcjoganNvbkltcG9ydGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwuanNvbiQvLFxuICAgICAgbG9hZGVyczogWydqc29uLWxvYWRlciddLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdDogL1xcLmVqcyQvLFxuICAgICAgbG9hZGVyOiAnZWpzLWNvbXBpbGVkLWxvYWRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXN0OiAvXFwubWQvLFxuICAgICAgbG9hZGVyczogWydodG1sLWxvYWRlcicsICdtYXJrZG93bi1sb2FkZXInXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRlc3Q6IC9cXC5qc3xcXC5odG1sfFxcLmVqcyQvLFxuICAgICAgZXhjbHVkZTogW19fZmlsZW5hbWVdLFxuICAgICAgbG9hZGVyOiBTdHJpbmdSZXBsYWNlUGx1Z2luLnJlcGxhY2Uoe1xuICAgICAgICByZXBsYWNlbWVudHM6IFt7XG4gICAgICAgICAgcGF0dGVybjogL0xJQlJBUllOQU1FL2csXG4gICAgICAgICAgcmVwbGFjZW1lbnQoLyogbWF0Y2gsIHAxLCBvZmZzZXQsIHN0cmluZyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGxpYnJhcnlOYW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgfSksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZGV2dG9vbDogaXNCdWlsZCA/ICdzb3VyY2UtbWFwJyA6ICdjaGVhcC1tb2R1bGUtZXZhbC1zb3VyY2UtbWFwJyxcbiAgICBtb2R1bGUsXG4gICAgcGx1Z2lucyxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrRW5oYW5jZUNvbmZpZ1dlYi5qcyIsImltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcblxuZnVuY3Rpb24gZW5oYW5jZShvcmlnaW5hbENvbmZpZywgZGlyUm9vdCwgbGlicmFyeU5hbWUsIGVudHJ5RmlsZXMpIHtcblxuXG4gIGNvbnN0IGVudHJ5ID0gT2JqZWN0LmtleXMoZW50cnlGaWxlcykucmVkdWNlKChhY2N1bSwgZW50cnlOYW1lKSA9PiB7XG4gICAgaWYgKGVudHJ5RmlsZXNbZW50cnlOYW1lXS5sZW5ndGgpIHtcbiAgICAgIGFjY3VtW2VudHJ5TmFtZV0gPSBlbnRyeUZpbGVzW2VudHJ5TmFtZV07XG4gICAgfVxuICAgIHJldHVybiBhY2N1bTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICBwYXRoOiBgJHtkaXJSb290fWAsXG4gICAgZmlsZW5hbWU6ICdbbmFtZV0uanMnLFxuICAgIGxpYnJhcnk6IGxpYnJhcnlOYW1lLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICd1bWQnLFxuICAgIHVtZE5hbWVkRGVmaW5lOiB0cnVlLFxuICAgIHB1YmxpY1BhdGg6ICcvJyxcbiAgICAvLyBwdWJsaWNQYXRoOiAnL2Fzc2V0cy8nLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub3JpZ2luYWxDb25maWcsXG4gICAgZW50cnksXG4gICAgb3V0cHV0LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFbmhhbmNlRW50cnlPdXRwdXRTdGFuZGFyZC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgd2VicGFja01ha2VDb21waWxlciBmcm9tICcuL3dlYnBhY2tNYWtlQ29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwLCBwb3J0ID0gMzAwMCkgPT4ge1xuICAvLyBUaGlzIG1vZHVsZSBlaXRoZXIgZXh0ZW5kcyBhbiBleGlzdGluZyBleHByZXNzIGFwcFxuICAvLyBvciBjcmVhdGVzIGEgbmV3IGV4cHJlc3MgYXBwXG4gIGxldCBhcHBJc0JyYW5kTmV3ID0gZmFsc2U7XG4gIGlmICghYXBwKSB7XG4gICAgYXBwSXNCcmFuZE5ldyA9IHRydWU7XG4gICAgYXBwID0gZXhwcmVzcygpO1xuICB9XG5cbiAgLy8gU1BBIHNlcnZlciBzdXBwb3J0XG4gIC8vIEFsbCBVUkxzIHRoYXQgc3VnZ2VzdCBhbiBIVE1MIGZpbGUgcmVxdWVzdCBnZXQgcm91dGVkIHRoZSBzYW1lLlxuICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGxhc3RQYXJ0T2ZVUkwgPSB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBjb25zdCB1cmxGb3JtYXRTdWdnZXN0c0h0bWxGaWxlUmVxdWVzdCA9IChcbiAgICAgIGxhc3RQYXJ0T2ZVUkwuaW5kZXhPZignLicpID09PSAtMSB8fCBsYXN0UGFydE9mVVJMLmluZGV4T2YoJy5odG1sJykgIT09IC0xXG4gICAgKTtcbiAgICBpZiAodXJsRm9ybWF0U3VnZ2VzdHNIdG1sRmlsZVJlcXVlc3QpIHtcbiAgICAgIHJlcS51cmwgPSAnLyc7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfSk7XG5cbiAgY29uc29sZS5pbmZvKCfwn5S3IFN0YXJ0aW5nIHdlYnBhY2sgLi4uJyk7XG5cbiAgYXBwLnVzZSh3ZWJwYWNrTWFrZUNvbXBpbGVyKHRydWUpKTtcblxuICBhcHAudXNlKCcvaW1hZ2VzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ltYWdlcycpKTtcbiAgYXBwLnVzZSgnL2ZvbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3BhY2thZ2VzL2ZvbnRzJykpO1xuXG4gIC8vIFNvbWUgRXhwcmVzcyBjb2RlIEkgZG9uJ3Qgd2FudCB0byBsb3NlIHlldC5cbiAgLypcbiAgYXBwLmdldChuZXcgUmVnRXhwKCdeWy9dKGltYWdlc3xmb250cylbL10oLispJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBgcGFja2FnZXMke3VybC5wYXJzZShyZXEudXJsKS5wYXRobmFtZX1gKSk7XG4gIH0pO1xuXG4gIGFwcC5nZXQoJy8qJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2codXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lKTtcbiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdpbmRleC5odG1sJykpO1xuICB9KTtcblxuICBhcHAuZ2V0KG5ldyBSZWdFeHAoJy9eXFwvKC4qKVxcLmh0bWwkJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2luZGV4Lmh0bWwnKSk7XG4gIH0pO1xuICAqL1xuXG4gIGlmIChhcHBJc0JyYW5kTmV3KSB7XG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAn8J+MjiBMaXN0ZW5pbmcgb24gcG9ydCAlcy4gT3BlbiB1cCBodHRwOi8vbG9jYWxob3N0OiVzLyBpbiB5b3VyIGJyb3dzZXIuJyxcbiAgICAgICAgICBwb3J0LFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2tFeHByZXNzU2VydmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lIGZyb20gJ3ZhbGlkYXRlLW5wbS1wYWNrYWdlLW5hbWUnO1xuXG5mdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlUmVhZEpzb25TeW5jKHBhY2thZ2VEb3RKc29uUGF0aCkge1xuICBsZXQgcGFja2FnZURvdEpzb25Db250ZW50O1xuICB0cnkge1xuICAgIHBhY2thZ2VEb3RKc29uQ29udGVudCA9IGZzLnJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcGFja2FnZURvdEpzb25Db250ZW50ID0ge307XG4gIH1cbiAgcmV0dXJuIHBhY2thZ2VEb3RKc29uQ29udGVudDtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zSW5Db25zb2xlKHByb2JsZW1zKSB7XG4gIGlmIChPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoKSB7XG4gICAgY29uc29sZS5pbmZvKCdcXHgxYlsxbScsICdcXG5Qcm9ibGVtcyB3aXRoIGRlcGVuZGVuY2llcycsICdcXHgxYlswbScpO1xuICB9XG4gIE9iamVjdC5rZXlzKHByb2JsZW1zKS5mb3JFYWNoKChtb2R1bGVSZXNvdXJjZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzZtJywgJ1xcblByb2JsZW0gaW4gbW9kdWxlIHdpdGggYGltcG9ydGAgc3RhdGVtZW50OicsICdcXHgxYlswbScpO1xuICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke21vZHVsZVJlc291cmNlfWAsICdcXHgxYlswbScpO1xuICAgIE9iamVjdC5rZXlzKHByb2JsZW1zW21vZHVsZVJlc291cmNlXSkuZm9yRWFjaCgoZGVwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcHJvYmxlbU1zZyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5tc2c7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdEZXBlbmRlbmN5IHJlcXVlc3RlZCBhczonLCAnXFx4MWJbMG0nKTtcbiAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYCAke2RlcE5hbWV9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsIGBNZXNzYWdlOiAke3Byb2JsZW1Nc2d9YCwgJ1xceDFiWzBtJyk7XG4gICAgICBjb25zdCBwcm9ibGVtSW5mbyA9IHByb2JsZW1zW21vZHVsZVJlc291cmNlXVtkZXBOYW1lXS5pbmZvO1xuICAgICAgaWYgKHByb2JsZW1JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnXFx4MWJbMzdtJywgYC0gJHtwcm9ibGVtSW5mby5qb2luKCdcXG4gLSAnKX1gLCAnXFx4MWJbMG0nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmREZXBlbmRlbmNpZXNQcm9ibGVtcyhkZXBlbmRlbmNpZXMsIHBhY2thZ2VEb3RKc29uQ29udGVudCkge1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICBpZiAoZGVwLm1vZHVsZSkge1xuICAgICAgY29uc3QgcmF3UmVxdWVzdCA9IGRlcC5tb2R1bGUucmF3UmVxdWVzdDtcbiAgICAgIC8vIGlmIChyYXdSZXF1ZXN0LmluZGV4T2YoJy9Vc2Vycy9icmlhbmVwaHJhaW0vU2l0ZXMvbW9ub3JlcG8vcGFja2FnZXMnKSA9PT0gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBXVEYnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcFdURicsIGRlcCk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmluZm8oJ1xceDFiWzMzbScsICdkZXBHR0cnLCByYXdSZXF1ZXN0LCAnXFx4MWJbMG0nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2RlcEdHRycsIGRlcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIG5vdCBhIHJlbGF0aXZlIGRlcGVuZGVuY3lcbiAgICAgIC8vIG5vdCBhbiBhYnNvbHV0IGRlcGVuZGVuY3lcbiAgICAgIC8vIHdlIGFyZSBvbmx5IGNvbmNlcm5lZCB3aXRoIGRlcGVuZW5jaWVzIHJlZmVyZW5jZWQgbGlrZVxuICAgICAgLy8gYGltcG9ydCBhc2RmIGZyb20gJ2FzZGYnO2BcbiAgICAgIC8vIG9yXG4gICAgICAvLyBgaW1wb3J0IHF3ZXIgZnJvbSAnYXNkZi9xd2VyJztgYFxuICAgICAgLy8gb3JcbiAgICAgIC8vIGBpbXBvcnQgYXNkZiBmcm9tICdAZGVmdWFsdC9hc2RmJztgYFxuICAgICAgLy8gVGhlc2UgZGVwZW5kZW5jaWVzIHdpbGwgYmUgZWl0aGVyIGluIC9ub2RlX21vZHVsZXMvIG9yIC9wYWNrYWdlcy8sXG4gICAgICAvLyB0aGUgbGF0dGVyIGZvciBvbmx5IG1vbm9yZXBvIHVzZS5cbiAgICAgIGlmIChyYXdSZXF1ZXN0ICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLicpICE9PSAwICYmIHJhd1JlcXVlc3QuaW5kZXhPZignLycpICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZU5wbVBhY2thZ2VOYW1lKHJhd1JlcXVlc3QpO1xuICAgICAgICBpZiAodmFsaWRhdGlvblJlc3VsdC52YWxpZEZvck5ld1BhY2thZ2VzKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudCB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5kZXBlbmRlbmNpZXMgfHxcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRlcGVuZGVuY2llc1tyYXdSZXF1ZXN0XVxuICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhcGFja2FnZURvdEpzb25Db250ZW50LmRldkRlcGVuZGVuY2llcyB8fFxuICAgICAgICAgICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQuZGV2RGVwZW5kZW5jaWVzW3Jhd1JlcXVlc3RdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByb2JsZW1zW3Jhd1JlcXVlc3RdID0geyBtc2c6ICdNSVNTSU5HIEZST00gUEFDS0FHRS5KU09OJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gW1xuICAgICAgICAgICAgLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW10sXG4gICAgICAgICAgXS5maWx0ZXIoKG1zZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1zZyAhPT0gJ25hbWUgY2FuIG9ubHkgY29udGFpbiBVUkwtZnJpZW5kbHkgY2hhcmFjdGVycyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgICAgaWYgKGluZm8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcm9ibGVtc1tyYXdSZXF1ZXN0XSA9IHtcbiAgICAgICAgICAgICAgbXNnOiAnQkFEIEZPUk1BVFRJTkcnLFxuICAgICAgICAgICAgICBpbmZvOiBbLi4udmFsaWRhdGlvblJlc3VsdC53YXJuaW5ncyB8fCBbXSwgLi4udmFsaWRhdGlvblJlc3VsdC5lcnJvcnMgfHwgW11dLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9ibGVtcykubGVuZ3RoID8gcHJvYmxlbXMgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB3ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zKHN0YXRzLCBzaG91bGRTaG93UHJvYmxlbXNJbkNvbnNvbGUgPSB0cnVlKSB7XG4gIGNvbnN0IGlzTW9ub3JlcG8gPSBmcy5leGlzdHNTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2VzYCk7XG5cbiAgY29uc3QgcGFja2FnZURvdEpzb25DYWNoZSA9IHt9O1xuICBjb25zdCBwcm9ibGVtcyA9IHt9O1xuICBzdGF0cy5jb21waWxhdGlvbi5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIC8vIG9ubHkgY29uY2VybmVkIHdpdGggbW9kdWxlIGVudHJpZXMgZnJvbSAvcGFja2FnZXMvIGZvbGRlciAobm90IG5vZGVfbW9kdWxlcylcbiAgICBpZiAoXG4gICAgICBtb2R1bGUucmVzb3VyY2UgJiZcbiAgICAgIG1vZHVsZS5yZXNvdXJjZS5pbmRleE9mKCdub2RlX21vZHVsZXMnKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIGxldCBwYWNrYWdlRG90SnNvblBhdGg7XG4gICAgICBpZiAoaXNNb25vcmVwbykge1xuICAgICAgICBsZXQgcGFja2FnZXNEaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS9wYWNrYWdlc2A7XG4gICAgICAgIHBhY2thZ2VzRGlyID0gZW5zdXJlVHJhaWxpbmdTbGFzaChwYWNrYWdlc0Rpcik7XG4gICAgICAgIC8vIGdldCBzdWJzdHJpbmcgZnJvbSBmaXJzdCB0cmFpbGluZyBzbGFzaCBhZnRlciB3aGF0ZXZlciBwYWNrYWdlc0RpciBpc1xuICAgICAgICBjb25zdCBwYWNrYWdlRm9sZGVyTmFtZSA9IG1vZHVsZS5yZXNvdXJjZS5zcGxpdChwYWNrYWdlc0RpcilbMV0uc3BsaXQoJy8nKVswXTtcbiAgICAgICAgcGFja2FnZURvdEpzb25QYXRoID0gYCR7cGFja2FnZXNEaXJ9JHtwYWNrYWdlRm9sZGVyTmFtZX0vcGFja2FnZS5qc29uYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY2thZ2VEb3RKc29uUGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L3BhY2thZ2UuanNvbmA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VEb3RKc29uQ29udGVudCA9IChcbiAgICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdIHx8IGVuc3VyZVJlYWRKc29uU3luYyhwYWNrYWdlRG90SnNvblBhdGgpXG4gICAgICApO1xuICAgICAgcGFja2FnZURvdEpzb25DYWNoZVtwYWNrYWdlRG90SnNvblBhdGhdID0gcGFja2FnZURvdEpzb25Db250ZW50O1xuXG4gICAgICBjb25zdCBwYWNrYWdlU29tZWhvd1B1YmxpYyA9IChcbiAgICAgICAgIXBhY2thZ2VEb3RKc29uQ29udGVudC5wcml2YXRlIHx8XG4gICAgICAgICFwYWNrYWdlRG90SnNvbkNvbnRlbnQucHJpdmF0ZUZyb21HaXRodWJcbiAgICAgICk7XG5cbiAgICAgIC8vIG9ubHkgY29uY2VybmVkIGlmIG1vZHVsZSdzIHBhY2thZ2UuanNvbiBpcyBub3QgZW1wdHksXG4gICAgICAvLyBhbmQgaWYgaXQgaXMgcHVibGljIG9uIGVpdGhlciBOUE0gb3IgR2lyaHViXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFja2FnZURvdEpzb25Db250ZW50KS5sZW5ndGggJiYgcGFja2FnZVNvbWVob3dQdWJsaWMpIHtcbiAgICAgICAgY29uc3QgZGVwUHJvYmxlbXMgPSBmaW5kRGVwZW5kZW5jaWVzUHJvYmxlbXMobW9kdWxlLmRlcGVuZGVuY2llcywgcGFja2FnZURvdEpzb25Db250ZW50KTtcbiAgICAgICAgaWYgKGRlcFByb2JsZW1zKSB7XG4gICAgICAgICAgcHJvYmxlbXNbbW9kdWxlLnJlc291cmNlXSA9IGRlcFByb2JsZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKE9iamVjdC5rZXlzKHByb2JsZW1zKS5sZW5ndGggPiAwICYmIHNob3VsZFNob3dQcm9ibGVtc0luQ29uc29sZSkge1xuICAgIHNob3dQcm9ibGVtc0luQ29uc29sZShwcm9ibGVtcyk7XG4gIH1cblxuICByZXR1cm4gcHJvYmxlbXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnBhY2tQYXJzZVN0YXRzRm9yRGVwUHJvYmxlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrUGFyc2VTdGF0c0ZvckRlcFByb2JsZW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGlyZWN0b3J5LW5hbWVkLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXNhc3MtanNvbi1pbXBvcnRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc2Fzcy1qc29uLWltcG9ydGVyXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0ZS1ucG0tcGFja2FnZS1uYW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmFsaWRhdGUtbnBtLXBhY2thZ2UtbmFtZVwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9