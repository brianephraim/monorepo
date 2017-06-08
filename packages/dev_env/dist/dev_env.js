(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs-extra"), require("webpack"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("globby"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("path"), require("stats-webpack-plugin"), require("string-replace-webpack-plugin"), require("url"), require("util"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"), require("yargs"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["fs-extra", "webpack", "child_process", "directory-named-webpack-plugin", "express", "extract-text-webpack-plugin", "globby", "html-webpack-plugin", "node-sass-json-importer", "path", "stats-webpack-plugin", "string-replace-webpack-plugin", "url", "util", "validate-npm-package-name", "webpack-dev-middleware", "webpack-node-externals", "yargs"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("fs-extra"), require("webpack"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("globby"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("path"), require("stats-webpack-plugin"), require("string-replace-webpack-plugin"), require("url"), require("util"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"), require("yargs"));
	else
		root["@defualt/dev_env"] = factory(root["fs-extra"], root["webpack"], root["child_process"], root["directory-named-webpack-plugin"], root["express"], root["extract-text-webpack-plugin"], root["globby"], root["html-webpack-plugin"], root["node-sass-json-importer"], root["path"], root["stats-webpack-plugin"], root["string-replace-webpack-plugin"], root["url"], root["util"], root["validate-npm-package-name"], root["webpack-dev-middleware"], root["webpack-node-externals"], root["yargs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webpack_start_js__ = __webpack_require__(4);
// This file is the entrypoint for webpack to compile the dev environemnt for publishing to npm.


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_child_process__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_child_process___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_child_process__);
/* eslint-disable camelcase */


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var command = 'sh';

  var configJSONString = JSON.stringify({
    testMatch: ['**/?(*.)(test).js?(x)']
  });
  // const(`CI=true ${process.cwd()}/node_modules/.bin/jest --watch --config=${/*process.cwd()*/__dirname}/jest.config.js`);
  var args = ['-c',
  // `${__dirname}/node_modules/.bin/jest`,
  // `${__dirname}/node_modules/.bin/jest --config='${configJSONString}'`,

  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  'CI=true ' + process.cwd() + '/node_modules/.bin/jest --watch --config=' + __dirname + '/jest.config.js'];

  var proc = __WEBPACK_IMPORTED_MODULE_0_child_process___default.a.spawn(command, args, { stdio: 'inherit' });
  proc.on('exit', function (code, signal) {
    process.on('exit', function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs_extra__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yargs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yargs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_yargs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webpack_dev_middleware__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webpack_dev_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_webpack_dev_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_webpack__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generate_webpack_config_babel__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_validate_npm_package_name__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_validate_npm_package_name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_validate_npm_package_name__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testSetup__ = __webpack_require__(3);
/* eslint-disable no-console */












var env = __WEBPACK_IMPORTED_MODULE_1_yargs__["argv"].env;

var doWebpack = true;
var doTest = env !== 'build';

if (!doWebpack && doTest) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__testSetup__["a" /* default */])();
}

if (doWebpack) {
  var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
  var port = 3000;
  var config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__generate_webpack_config_babel__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_yargs__["argv"]);
  var compiler = __WEBPACK_IMPORTED_MODULE_4_webpack___default()(config);
  if (env === 'build' || env === 'node') {
    compiler.run(function (err /* , stats*/) {
      if (err) {
        console.warn(err);
      } else {
        // fs.writeFileSync(process.cwd() + '/_webpack_stats.json',JSON.stringify(stats, null, 2));
        // console.log(stats);
      }
    });
  } else {
    if (doTest) {
      // testSetup();
    }
    app.use(function (req, res, next) {
      var urlSplit = __WEBPACK_IMPORTED_MODULE_5_url___default.a.parse(req.url).pathname.split('/');
      var lastPart = urlSplit[urlSplit.length - 1];
      var lastPartContainsDot = lastPart.indexOf('.') !== -1;
      var lastPartContainsDotHtml = lastPart.indexOf('.html') !== -1;
      if (!lastPartContainsDot || lastPartContainsDotHtml) {
        req.url = '/';
      }
      next();
    });

    console.info('🔷 Starting webpack ...');

    var activeWebpackDevMiddleware = __WEBPACK_IMPORTED_MODULE_3_webpack_dev_middleware___default()(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    });
    activeWebpackDevMiddleware.waitUntilValid(function (stats) {
      var packageDotJsonCache = {};
      var packageDepsCache = {};
      // fs.writeFileSync(process.cwd()+'/stats.json', JSON.stringify(stats.compilation.modules, null, 2));
      var toWrite = [];
      var problems = {};
      var registerProblem = function registerProblem(module, dep, problem) {
        if (!problems[module]) {
          problems[module] = {};
        }
        problems[module][dep] = problem;
      };
      stats.compilation.modules.forEach(function (module) {

        // only concerned with module entries from /packages/ folder (not node_modules)
        if (module.resource && module.resource.indexOf(process.cwd() + '/packages') !== -1) {
          var resourceSplit = module.resource.split('/packages/');
          var packageFolder = resourceSplit[1].split('/')[0];

          var packageDotJsonPath = resourceSplit[0] + '/packages/' + packageFolder + '/package.json';

          var packageDotJsonContent = void 0;
          var packageDotJsonDeps = void 0;
          if (packageDotJsonCache[packageDotJsonPath]) {
            packageDotJsonContent = packageDotJsonCache[packageDotJsonPath];
            packageDotJsonDeps = packageDepsCache[packageDotJsonPath];
          } else {
            try {
              packageDotJsonContent = __WEBPACK_IMPORTED_MODULE_0_fs_extra___default.a.readJsonSync(packageDotJsonPath);
            } catch (e) {
              packageDotJsonContent = {};
            }
            packageDotJsonCache[packageDotJsonPath] = packageDotJsonContent;
            packageDotJsonDeps = Object.assign({}, packageDotJsonContent.dependencies, packageDotJsonContent.devDependencies);
            packageDepsCache[packageDotJsonPath] = packageDotJsonDeps;
          }

          // only concerned if module's package.json has a name, and if it is public on either NPM or Girhub
          if (packageDotJsonContent.name && (!packageDotJsonContent.private || !packageDotJsonContent.privateFromGithub)) {
            var slimModule = {
              resource: module.resource,
              context: module.context,
              rawRequest: module.rawRequest,
              dependencies: [],
              depsSummary: {}
            };

            module.dependencies.forEach(function (dep) {
              if (dep.module) {
                var rawRequest = dep.module.rawRequest;
                // not a relative dependency
                if (rawRequest.indexOf('.') !== 0) {
                  var validationResult = __WEBPACK_IMPORTED_MODULE_8_validate_npm_package_name___default()(rawRequest);
                  var depToPush = {
                    resource: dep.module.resource,
                    context: dep.module.context,
                    rawRequest: rawRequest,
                    validationResult: validationResult
                  };
                  if (validationResult.validForNewPackages) {
                    // console.log(module.resource.split('/packages/')[0])
                    // depToPush.summary = "GOOD !!!!!!";
                    slimModule.depsSummary[rawRequest] = packageDotJsonDeps[rawRequest] || 'MISSING FROM PACKAGE.JSON';
                    if (!packageDotJsonDeps[rawRequest]) {
                      registerProblem(module.resource, rawRequest, 'MISSING FROM PACKAGE.JSON');
                    }
                  } else {
                    // depToPush.summary = "BAD #$**#$*";
                    slimModule.depsSummary[rawRequest] = 'BAD FORMATTING';
                    registerProblem(module.resource, rawRequest, 'BAD FORMATTING');
                  }
                  slimModule.dependencies.push(depToPush);
                }
              }
              // slimModule.dependencies.push(Object.keys(dep.module));
              // slimModule.dependencies.push(dep.resource);
            });
            toWrite.push(slimModule);
          }
        }
      });

      Object.keys(problems).forEach(function (moduleResource) {
        console.log('--------------');
        console.log('moduleResource', moduleResource);
        Object.keys(problems[moduleResource]).forEach(function (depName) {
          var problemMsg = problems[moduleResource][depName];
          console.log('depName', depName);
          console.log('problemMsg', problemMsg);
        });
      });

      __WEBPACK_IMPORTED_MODULE_0_fs_extra___default.a.writeFileSync(process.cwd() + '/stats.json', JSON.stringify(toWrite, null, 2));

      // fs.writeFileSync(process.cwd()+'/stats.json', inspect(stats.compilation.modules));
      // fs.writeFileSync(process.cwd()+'/stats.json', inspect(stats.compilation.modules[1].dependencies));
    });
    app.use(activeWebpackDevMiddleware);

    app.use('/images', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static('packages/images'));
    app.use('/fonts', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static('packages/fonts'));
    // app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
    //   res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
    // });

    // app.get('/*', (req, res) => {
    //   console.log(url.parse(req.url).pathname);
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    // app.get(new RegExp('/^\/(.*)\.html$'), (req, res) => {
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    app.listen(port, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.info('🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
      }
    });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stats_webpack_plugin__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stats_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stats_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_replace_webpack_plugin__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string_replace_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_string_replace_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webpack__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_sass_json_importer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_sass_json_importer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_node_sass_json_importer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_extract_text_webpack_plugin__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_extract_text_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_extract_text_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_directory_named_webpack_plugin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_directory_named_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_directory_named_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_webpack_node_externals__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_webpack_node_externals___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_webpack_node_externals__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_globby__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_globby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_globby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fs_extra__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_path__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
  This files return a function that when called generates a webpack config json.
  `argv` is passed into this function.

  when `argv.env === falsey`
    This compiles for a dev server via webpack-dev-middleware.  No files are created to disk,
    only created in memory.

  when `argv.env === 'build'`
    This compiles files to disk in a /dist folder and a /demo folder.

  when `argv.env === 'node'`
    Similar to 'build', but with special consideration for node environments.
    Code from node_modules will not be bundled.

  when `argv.dirroot === some path`
    This is used when dev_env itself is compiled.  
    This very file is compiled according the config set by this file.
    This is needed to make dev_env portable via npm.
    babel-node needs to compile this dev_env to work,
    but this does not play well when dev_env is in a node_modules folder.
    So we need to compile dev_env before publishing to npm.
    Directory paths need to be tweaked to accomplish this,
    and that's what `argv.dirroot` helps with.

*/












var devHtmlPath = './index.html';

/* harmony default export */ __webpack_exports__["a"] = (function (argv) {
  var env = argv.env;

  var dirRoot = argv.dirroot || process.cwd();

  var packageJson = __WEBPACK_IMPORTED_MODULE_9_fs_extra___default.a.readJsonSync(dirRoot + '/package.json');

  var username = null;
  if (packageJson.repository && packageJson.repository.url) {
    username = packageJson.repository.url.replace('://').split('/')[1];
  }

  var libraryName = packageJson.name;
  var libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];

  var plugins = [];
  var pluginRegistry = {};
  function registerPlugin(name, plugin) {
    if (!pluginRegistry[name]) {
      plugins.push(plugin);
      pluginRegistry[name] = true;
      return true;
    }
    return false;
  }

  function conditionalExtractTextLoaderCss(usePlugin, moreLoaderParams) {
    if (usePlugin) {
      registerPlugin('ExtractTextPlugin', new __WEBPACK_IMPORTED_MODULE_4_extract_text_webpack_plugin___default.a('[name].css'));
      return { use: __WEBPACK_IMPORTED_MODULE_4_extract_text_webpack_plugin___default.a.extract(moreLoaderParams) };
    }
    return {
      use: [moreLoaderParams.fallback].concat(_toConsumableArray(moreLoaderParams.use))
    };
  }

  var outputFiles = {};
  if (env === 'node') {
    outputFiles.library = 'dist/' + libraryNameReduced;
  } else if (env === 'build') {
    outputFiles.library = 'dist/' + libraryNameReduced;
    outputFiles.libraryMin = 'dist/' + libraryNameReduced + '.min';
    outputFiles.demo = 'demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = '' + libraryNameReduced;
  }
  var entryFiles = _extends(_defineProperty({
    MainApp: __WEBPACK_IMPORTED_MODULE_8_globby___default.a.sync([dirRoot + '/packages/MainApp/MainApp.js'])
  }, outputFiles.library, __WEBPACK_IMPORTED_MODULE_8_globby___default.a.sync([dirRoot + '/' + libraryNameReduced + '.js', dirRoot + '/src/library/index.js'])), outputFiles.libraryMin ? _defineProperty({}, outputFiles.libraryMin, __WEBPACK_IMPORTED_MODULE_8_globby___default.a.sync([dirRoot + '/src/library/index.js'])) : {}, _defineProperty({}, outputFiles.demo, __WEBPACK_IMPORTED_MODULE_8_globby___default.a.sync([dirRoot + '/*.demo.js', dirRoot + '/demo.js', dirRoot + '/**/*/*.demo.js', dirRoot + '/**/*/demo.js', '!' + dirRoot + '/packages/**/*', dirRoot + '/packages/MainApp/MainApp.js'])));
  var entry = Object.keys(entryFiles).reduce(function (accum, entryName) {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  // entry[outputFiles.library] = entryFiles.library;
  // if (outputFiles.libraryMin) {
  //   entry[outputFiles.libraryMin] = entryFiles.library;
  // }
  // entry[outputFiles.demo] = entryFiles.demo;

  // if (isLerna) {
  //   // /Users/brianephraim/Sites/todos-tacos/packages/MainApp/MainApp.js
  //   entry = {
  //     MainApp: './packages/MainApp/MainApp.js',
  //   };
  // }

  function moveModify(source, modifyPath, modifyContent) {
    var sources = [];
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
      sources = source;
    } else {
      sources.push(source);
    }
    var toCopy = [];
    sources.forEach(function (pattern) {
      toCopy = [].concat(_toConsumableArray(toCopy), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_8_globby___default.a.sync(pattern)));
    });
    toCopy.forEach(function (filePath) {
      var filePathOut = filePath;
      if (modifyPath) {
        filePathOut = modifyPath(filePath);
      }
      var content = __WEBPACK_IMPORTED_MODULE_9_fs_extra___default.a.readFileSync(filePath, 'utf8');
      if (modifyContent) {
        content = modifyContent(content, filePath, filePathOut);
      }
      __WEBPACK_IMPORTED_MODULE_9_fs_extra___default.a.outputFileSync(filePathOut, content);
    });
  }

  if (env === 'build' || env === 'node') {
    moveModify(['src/import-examples/**/!(webpack.config).*', 'src/tonicExample.js'], function (filePath) {
      return filePath.replace('src/', './');
    }, function (content) {
      return content.replace(/LIBRARYNAME/g, libraryName);
    });

    registerPlugin('UglifyJsPlugin', new __WEBPACK_IMPORTED_MODULE_2_webpack___default.a.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }));
    var indexHtmlSettings = {
      chunks: [outputFiles.demo],
      template: 'src/demo/index.ejs',
      title: 'afasdfasdfasd',
      username: username,
      libraryName: libraryName
    };
    registerPlugin('demoIndex-HtmlWebpackPlugin', new __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default.a(_extends({
      filename: './demo/index.html'
    }, indexHtmlSettings)));
    registerPlugin('rootIndex-HtmlWebpackPlugin', new __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default.a(_extends({
      filename: './index.html'
    }, indexHtmlSettings)));
  } else {
    registerPlugin('demoDevIndex-HtmlWebpackPlugin', new __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default.a({
      chunks: [outputFiles.demo],
      filename: devHtmlPath
    }));

    console.log('STATS');
    console.log('STATS');
    console.log('STATS');
    console.log('STATS');
    console.log('STATS');
    console.log('STATS');
    console.log('STATS');
    registerPlugin('statsPlugin', new __WEBPACK_IMPORTED_MODULE_0_stats_webpack_plugin___default.a('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    }));
  }
  registerPlugin('StringReplacePlugin', new __WEBPACK_IMPORTED_MODULE_1_string_replace_webpack_plugin___default.a());

  registerPlugin('LoaderOptionsPlugin', new __WEBPACK_IMPORTED_MODULE_2_webpack___default.a.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: __WEBPACK_IMPORTED_MODULE_3_node_sass_json_importer___default.a
      },
      context: dirRoot
    }
  }));

  var config = _extends({
    entry: entry,
    devtool: env === 'build' || env === 'node' ? 'source-map' : 'eval',
    output: {
      path: '' + dirRoot,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // include: `${dirRoot}`,
        options: {
          presets: [['es2015',
          // needed for tree shaking
          { modules: false }], 'react'],
          plugins: ['transform-es2015-spread', 'transform-object-rest-spread'],
          // mocha needs .babelrc,
          // and .babelrc cannot use the above config
          // so ignore .babelrc here
          babelrc: false
        }
      }, _extends({
        test: /\.css$/
      }, conditionalExtractTextLoaderCss(env === 'build' || env === 'node', {
        fallback: 'style-loader',
        use: ['css-loader']
      })), _extends({
        test: /\.scss$/
      }, conditionalExtractTextLoaderCss(env === 'build' || env === 'node', {
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', {
          loader: 'sass-loader?sourceMap',
          // Apply the JSON importer via sass-loader's options.
          options: {
            importer: __WEBPACK_IMPORTED_MODULE_3_node_sass_json_importer___default.a
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
        loader: __WEBPACK_IMPORTED_MODULE_1_string_replace_webpack_plugin___default.a.replace({
          replacements: [{
            pattern: /LIBRARYNAME/g,
            replacement: function replacement() /* match, p1, offset, string */{
              return libraryName;
            }
          }]
        })
      }]
    },
    resolve: {
      modules: [__WEBPACK_IMPORTED_MODULE_10_path___default.a.resolve('./src/library'), __WEBPACK_IMPORTED_MODULE_10_path___default.a.resolve(process.cwd(), 'packages'),
      // path.resolve('./packages'),
      'node_modules'],
      extensions: ['.js'],
      plugins: [new __WEBPACK_IMPORTED_MODULE_6_directory_named_webpack_plugin___default.a(true)]
    },
    // stats: 'verbose',
    plugins: plugins
  }, env === 'node' ? {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [__WEBPACK_IMPORTED_MODULE_7_webpack_node_externals___default()({ modulesFromFile: true })]
  } : {});

  __WEBPACK_IMPORTED_MODULE_9_fs_extra___default.a.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("stats-webpack-plugin");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("string-replace-webpack-plugin");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=dev_env.js.map