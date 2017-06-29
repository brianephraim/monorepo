require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 1 */
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

  var childProcess = __webpack_require__(0);
  var proc = childProcess.spawn(command, args, options || {});
  proc.on('exit', function (code, signal) {
    process.on('exit', function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
  return proc;
  // }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-console */

// import walkSync from 'walk-sync';


var _terminate = __webpack_require__(6);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(2);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(3);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(7);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _child_process = __webpack_require__(0);

var _shellCommand = __webpack_require__(1);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _nodeUuid = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('asdf', function () {
  describe('localhost dev environment', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    before(function (done) {
      this.timeout(60000);
      var monorepoDir = _path2.default.resolve(__dirname, '../../../');
      var testdevenvMain = _path2.default.resolve(monorepoDir, './packages/testdevenv-main');
      var testdevenvMainJs = _path2.default.resolve(testdevenvMain, './testdevenv-main.js');
      _fsExtra2.default.ensureDirSync(testdevenvMain);
      _fsExtra2.default.writeFileSync(testdevenvMainJs, 'document.body.append(\'' + contentToBundle + '\');');

      var devEnvProcess = (0, _shellCommand2.default)('(\n        npm run dev -- --asdf\n      )', null /*{ detached: true }*/);
      devEnvProcess.stdout.on('data', function (data) {
        console.log('stdout from mocha child process of `npm run dev`:\n---\n' + data.toString());
        var dataString = data.toString();

        if (dataString.indexOf('webpack: Compiled successfully.') !== -1) {
          console.log('OK LETS CHECK OUT THE HTML');
          var scrapeDir = _path2.default.resolve(testdevenvMain, './scrape');
          _fsExtra2.default.removeSync(scrapeDir);
          var d = false;
          (0, _websiteScraper2.default)({
            urls: ['http://localhost:3000/'],
            directory: scrapeDir,
            resourceSaver: function () {
              function MyResourceSaver() {
                _classCallCheck(this, MyResourceSaver);
              }

              _createClass(MyResourceSaver, [{
                key: 'saveResource',
                value: function saveResource(resource) {
                  console.log('resource', resource.url, resource.text.substring(0, 20));
                  console.log('IS IT THERE', resource.text.indexOf(contentToBundle) !== -1);
                  bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
                  // assert.equal(-1, [1,2,3].indexOf(4));
                  // !d && done();
                  // d = true;
                  // assert.equal(2, 3);

                  // resolvex();
                }
              }, {
                key: 'errorCleanup',
                value: function errorCleanup(err) {
                  console.log('resource error', err);
                }
              }]);

              return MyResourceSaver;
            }()
          }).then(function () {
            console.log('THEN');
            // 
            done();
            console.log('devEnvProcess', devEnvProcess.pid, _typeof(devEnvProcess.pid)
            // process.kill(-devEnvProcess.pid);
            );(0, _terminate2.default)(devEnvProcess.pid, function (err) {
              if (err) {
                // you will get an error if you did not supply a valid process.pid
                console.log("Oopsy: " + err); // handle errors in your preferred way.
              } else {
                console.log('done'); // terminating the Processes succeeded.
              }
            });
            // process.kill(devEnvProcess.pid, 'SIGTERM');
            // ;
          });
        }
      });
      devEnvProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
      });
      devEnvProcess.on('exit', function (code) {
        // shellCommand(`rm -rf ${testingTempDir}`);
        console.log('child process exited with code:', code);
      });
    });
    it('should return -1 when the value is not present', function () {
      console.log('bundleHasContentbundleHasContentbundleHasContentbundleHasContent', bundleHasContent);
      _assert2.default.equal(2, 2);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ })
/******/ ]);
//# sourceMappingURL=testdevenv2.js.map