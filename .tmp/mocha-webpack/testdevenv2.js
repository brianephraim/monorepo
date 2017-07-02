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

  var childProcess = __webpack_require__(0);
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

function duringTest(_ref) {
  var _ref$onAsset = _ref.onAsset,
      onAsset = _ref$onAsset === undefined ? function () {} : _ref$onAsset,
      _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      assetsToGenerate = _ref.assetsToGenerate,
      testPathPattern = _ref.testPathPattern;

  before(function (done) {
    this.timeout(60000);
    var pathToDemoEntry = void 0;
    assetsToGenerate.forEach(function (assetInfo) {
      var dir = _path2.default.dirname(assetInfo.path);
      _fsExtra2.default.ensureDirSync(dir);
      _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
      if (assetInfo.isDemoEntry) {
        pathToDemoEntry = assetInfo.path;
      }
    });

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n    )', null /*{ detached: true }*/, false);
    var finished = false;
    function finish() {
      if (finished) {
        return;
      }
      console.log('FINISHED');
      finished = true;

      assetsToGenerate.forEach(function (assetInfo) {
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.removeSync(dir);
      });

      // terminate(devEnvProcess.pid,function (err) {
      //   if (err) { // you will get an error if you did not supply a valid process.pid
      //     console.log("Oopsy during terminate: ", err); // handle errors in your preferred way.
      //   }
      //   else {
      //     console.log('done for terminate'); // terminating the Processes succeeded.
      //   }
      // });

      // setTimeout(() => { 
      done();
      // }, 1000);

    }
    var once = false;
    devEnvProcess.stdout.on('data', function (data) {
      var dataString = data.toString();
      console.log('devEnvProcess.stdout\n', dataString);
      onData(dataString);
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString) {
        data = data.toString();
        onStderr(data);
      }
      console.log('stderr: ', data);
    });
    devEnvProcess.on('exit', function (code) {
      console.log('child process exited with code:', code);
      finish();
    });
  });
}

function duringServer(_ref2) {
  var _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$onStderr = _ref2.onStderr,
      onStderr = _ref2$onStderr === undefined ? function () {} : _ref2$onStderr,
      assetsToGenerate = _ref2.assetsToGenerate;

  before(function (done) {
    this.timeout(60000);
    var pathToDemoEntry = void 0;
    assetsToGenerate.forEach(function (assetInfo) {
      var dir = _path2.default.dirname(assetInfo.path);
      _fsExtra2.default.ensureDirSync(dir);
      _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
      if (assetInfo.isDemoEntry) {
        pathToDemoEntry = assetInfo.path;
      }
    });

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'\n    )', null /*{ detached: true }*/, false);
    var scrapeDir = _path2.default.resolve(__dirname, './scrape');
    var finished = false;
    function finish() {
      if (finished) {
        return;
      }
      console.log('FINISHED');
      finished = true;

      _fsExtra2.default.removeSync(scrapeDir);
      assetsToGenerate.forEach(function (assetInfo) {
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.removeSync(dir);
      });

      (0, _terminate2.default)(devEnvProcess.pid, function (err) {
        if (err) {
          // you will get an error if you did not supply a valid process.pid
          console.log("Oopsy during terminate: ", err); // handle errors in your preferred way.
        } else {
          console.log('done for terminate'); // terminating the Processes succeeded.
        }
      });

      // setTimeout(() => { 
      done();
      // }, 1000);

    }
    var once = false;
    devEnvProcess.stdout.on('data', function (data) {
      var dataString = data.toString();
      onData(dataString);
      console.log('devEnvProcess.stdout\n', dataString);
      if (dataString.indexOf('webpack: Failed to compile.') !== -1 && !once) {
        once = true;
        finish();
      }
      if (dataString.indexOf('webpack: Compiled successfully.') !== -1 && !once) {
        once = true;

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
                onAsset(resource);
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
          finish();
        });
      }
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString) {
        data = data.toString();
        onStderr(data);
      }
      console.log('stderr: ', data);
    });
    devEnvProcess.on('exit', function (code) {
      console.log('child process exited with code:', code);
      finish();
    });
  });
}

var monorepoDir = _path2.default.resolve(__dirname, '../../../');
describe('testdevenv', function () {
  describe('localhost dev environment', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;

    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('non-existent imports', function () {
    var notFoundError = false;
    var importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'testdevenv-some-dep\'); };'
      }],
      onStderr: function onStderr(data) {
        console.log('onData', data);
        notFoundError = notFoundError || data.indexOf('Module not found: Error: Can\'t resolve \'' + importToAttempt + '\'') !== -1;
      }
    });
    it('webpack bundling throws error for non-existent imports within assets', function () {
      _assert2.default.equal(notFoundError, true);
    });
  });

  describe('existent imports', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent proving import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('existent imports with npm-scoping', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'@some-npm-scope/' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent proving npm-scoped import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('test', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var testsPassed = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringTest({
      testPathPattern: '.*/testdevenv-some-dep/.*',
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.test.js'),
        text: 'test(\'adds 1 + 2 to equal 3\', () => { expect(1 + 2).toBe(3); });'
      }],
      onStderr: function onStderr(data) {
        testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
      }
    });
    it('testtesttest', function () {
      _assert2.default.equal(testsPassed, true);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQyMjBkZThlYmU2ZmY0ZTU2NDMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImFyZ3MiLCJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJraWxsIiwicGlkIiwiZXhpdCIsImR1cmluZ1Rlc3QiLCJvbkFzc2V0Iiwib25EYXRhIiwib25TdGRlcnIiLCJhc3NldHNUb0dlbmVyYXRlIiwidGVzdFBhdGhQYXR0ZXJuIiwiYmVmb3JlIiwiZG9uZSIsInRpbWVvdXQiLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwiZGlyIiwiZGlybmFtZSIsInBhdGgiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJvbmNlIiwic3Rkb3V0IiwiZGF0YSIsImRhdGFTdHJpbmciLCJ0b1N0cmluZyIsInN0ZGVyciIsImR1cmluZ1NlcnZlciIsInNjcmFwZURpciIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJlcnIiLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsInRoZW4iLCJtb25vcmVwb0RpciIsImRlc2NyaWJlIiwiY29udGVudFRvQnVuZGxlIiwiYnVuZGxlSGFzQ29udGVudCIsIml0IiwiZXF1YWwiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsMEM7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBQSxPQUFPQyxPQUFQLEdBQWlCLFVBQUNDLFlBQUQsRUFBMkU7QUFBQSxNQUE1REMsT0FBNEQsdUVBQWxELEVBQUVDLE9BQU8sU0FBVCxFQUFrRDtBQUFBLE1BQTVCQyxnQkFBNEIsdUVBQVQsSUFBUzs7QUFDMUYsTUFBTUMsVUFBVSxJQUFoQjtBQUNBLE1BQU1DLE9BQU8sQ0FDWCxJQURXLEVBRVhMLFlBRlcsQ0FBYjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7O0FBRUYsTUFBTU0sZUFBZSxt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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDIyMGRlOGViZTZmZjRlNTY0MyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbi8qXG4gIFRoaXMgZmlsZSB1c2VkIGluIDIgcGxhY2VzXG4gICAgMS4gIFRoaXMgZmlsZSBpcyBleGVjdXRlZCBieSB0aGUgbW9ub3JlcG8gc2VydmluZyBhcyB0aGUgbW9ub3JlcG8ncyBkZXYgZW52aXJvbm1lbnQuXG4gICAgICAgIChPbmx5IHRoZSBtb25vcmVwbyB1c2VzIGRldl9lbnYgbGlrZSB0aGlzLiBXaGVuIHRoZSBtb25vcmVwbydzIHBhY2thZ2VzIGFyZSBzY2F0dGVyZWRcbiAgICAgICAgaW50byBpbmRpdmlkdWFsIHJlcG9zLCBlYWNoIGluZGl2aWR1YWwgcmVwbyBoYXMgYSBkZXZfZW52IGRlcGVuZGVuY3lcbiAgICAgICAgaW4gaXRzIG5vZGVfbW9kdWxlcyBmb2xkZXIsXG4gICAgICAgIGJ1dCB0aGlzIGRldl9lbnYgaXMgZXhlY3V0ZWQgZnJvbSBhIGNvbXBpbGVkIHZlcnNpb24gb2YgdGhlIGRldl9lbnYuXG4gICAgICAgIFRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGluZGl2aWR1YWwgcmVwbydzIC4vbm9kZV9tb2R1bGVzLy5iaW4vZGV2ZW52LFxuICAgICAgICB3aGljaCBwb2ludHMgdG8gLi9ub2RlX21vZHVsZXMvQGRlZnVhbHQvZGV2X2Vudi9kaXN0L2Rldl9lbnYuanMuKVxuICAgIDIuICBUaGlzIGZpbGUgaXMgZXhlY3V0ZWQgZHVyaW5nIHRoZSBucG0gcHJlcHVibGlzaCwgd2hpY2ggY3JlYXRlcyB0aGUgL2Rpc3QgZm9sZGVyXG4gICAgICAgIG1lbnRpb25lZCBpbiAoMSkgYWJvdmUuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTycpXG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zaGVsbC1jb21tYW5kLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNzZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdXVpZFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVybWluYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGVybWluYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHRlcm1pbmF0ZSBmcm9tICd0ZXJtaW5hdGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuLy8gaW1wb3J0IHdhbGtTeW5jIGZyb20gJ3dhbGstc3luYyc7XG5pbXBvcnQgc2NyYXBlIGZyb20gJ3dlYnNpdGUtc2NyYXBlcic7XG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9zaGVsbC1jb21tYW5kJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkICB9IGZyb20gJ25vZGUtdXVpZCc7XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe29uQXNzZXQgPSAoKSA9PiB7fSwgb25EYXRhID0gKCkgPT4ge30sIG9uU3RkZXJyID0gKCkgPT4ge30sIGFzc2V0c1RvR2VuZXJhdGUsIHRlc3RQYXRoUGF0dGVybn0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBsZXQgcGF0aFRvRGVtb0VudHJ5O1xuICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgZnMuZW5zdXJlRGlyU3luYyhkaXIpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhhc3NldEluZm8ucGF0aCwgYXNzZXRJbmZvLnRleHQpO1xuICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICBwYXRoVG9EZW1vRW50cnkgPSBhc3NldEluZm8ucGF0aDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoYChcbiAgICAgIG5wbSBydW4gdGVzdHBhY2thZ2VzIC0tIC0td2F0Y2g9ZmFsc2UgLS10ZXN0UGF0aFBhdHRlcm49JyR7dGVzdFBhdGhQYXR0ZXJufSdcbiAgICApYCwgbnVsbC8qeyBkZXRhY2hlZDogdHJ1ZSB9Ki8sIGZhbHNlKTtcbiAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ0ZJTklTSEVEJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICBcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB0ZXJtaW5hdGUoZGV2RW52UHJvY2Vzcy5waWQsZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gICBpZiAoZXJyKSB7IC8vIHlvdSB3aWxsIGdldCBhbiBlcnJvciBpZiB5b3UgZGlkIG5vdCBzdXBwbHkgYSB2YWxpZCBwcm9jZXNzLnBpZFxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiT29wc3kgZHVyaW5nIHRlcm1pbmF0ZTogXCIsIGVycik7IC8vIGhhbmRsZSBlcnJvcnMgaW4geW91ciBwcmVmZXJyZWQgd2F5LlxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdkb25lIGZvciB0ZXJtaW5hdGUnKTsgLy8gdGVybWluYXRpbmcgdGhlIFByb2Nlc3NlcyBzdWNjZWVkZWQuXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIC8vIH0sIDEwMDApO1xuXG4gICAgICBcbiAgICB9XG4gICAgdmFyIG9uY2UgPSBmYWxzZTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coJ2RldkVudlByb2Nlc3Muc3Rkb3V0XFxuJywgZGF0YVN0cmluZyk7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZyk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZyl7XG4gICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIG9uU3RkZXJyKGRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3N0ZGVycjogJywgZGF0YSk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsY29kZSk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7b25Bc3NldCA9ICgpID0+IHt9LCBvbkRhdGEgPSAoKSA9PiB7fSwgb25TdGRlcnIgPSAoKSA9PiB7fSwgYXNzZXRzVG9HZW5lcmF0ZX0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBsZXQgcGF0aFRvRGVtb0VudHJ5O1xuICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgZnMuZW5zdXJlRGlyU3luYyhkaXIpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhhc3NldEluZm8ucGF0aCwgYXNzZXRJbmZvLnRleHQpO1xuICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICBwYXRoVG9EZW1vRW50cnkgPSBhc3NldEluZm8ucGF0aDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoYChcbiAgICAgIG5wbSBydW4gZGV2IC0tIC0tZGVtby1lbnRyeT0nJHtwYXRoVG9EZW1vRW50cnl9J1xuICAgIClgLCBudWxsLyp7IGRldGFjaGVkOiB0cnVlIH0qLywgZmFsc2UpO1xuICAgIGNvbnN0IHNjcmFwZURpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJy4vc2NyYXBlJyk7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdGSU5JU0hFRCcpO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBmcy5yZW1vdmVTeW5jKHNjcmFwZURpcik7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKGRpcik7XG4gICAgICB9KTtcblxuICAgICAgdGVybWluYXRlKGRldkVudlByb2Nlc3MucGlkLGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikgeyAvLyB5b3Ugd2lsbCBnZXQgYW4gZXJyb3IgaWYgeW91IGRpZCBub3Qgc3VwcGx5IGEgdmFsaWQgcHJvY2Vzcy5waWRcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vcHN5IGR1cmluZyB0ZXJtaW5hdGU6IFwiLCBlcnIpOyAvLyBoYW5kbGUgZXJyb3JzIGluIHlvdXIgcHJlZmVycmVkIHdheS5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBmb3IgdGVybWluYXRlJyk7IC8vIHRlcm1pbmF0aW5nIHRoZSBQcm9jZXNzZXMgc3VjY2VlZGVkLlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICBkb25lKCk7XG4gICAgICAvLyB9LCAxMDAwKTtcblxuICAgICAgXG4gICAgfVxuICAgIHZhciBvbmNlID0gZmFsc2U7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXZFbnZQcm9jZXNzLnN0ZG91dFxcbicsIGRhdGFTdHJpbmcpO1xuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogRmFpbGVkIHRvIGNvbXBpbGUuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IENvbXBpbGVkIHN1Y2Nlc3NmdWxseS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBzY3JhcGUoe1xuICAgICAgICAgIHVybHM6IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwLyddLFxuICAgICAgICAgIGRpcmVjdG9yeTogc2NyYXBlRGlyLFxuICAgICAgICAgIHJlc291cmNlU2F2ZXI6IGNsYXNzIE15UmVzb3VyY2VTYXZlciB7XG4gICAgICAgICAgICBzYXZlUmVzb3VyY2UgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgIG9uQXNzZXQocmVzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JDbGVhbnVwIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc291cmNlIGVycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZGVyci5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKXtcbiAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgb25TdGRlcnIoZGF0YSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnc3RkZXJyOiAnLCBkYXRhKTtcbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6Jyxjb2RlKTtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgbW9ub3JlcG9EaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vJyk7XG5kZXNjcmliZSgndGVzdGRldmVudicsIGZ1bmN0aW9uKCkge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgXG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdub24tZXhpc3RlbnQgaW1wb3J0cycsICgpID0+IHtcbiAgICBsZXQgbm90Rm91bmRFcnJvciA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwTUFZQkUtQS1UWVBPJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgndGVzdGRldmVudi1zb21lLWRlcCcpOyB9O2AsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRGF0YScsZGF0YSk7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ3dlYnBhY2sgYnVuZGxpbmcgdGhyb3dzIGVycm9yIGZvciBub24tZXhpc3RlbnQgaW1wb3J0cyB3aXRoaW4gYXNzZXRzJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKG5vdEZvdW5kRXJyb3IsIHRydWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCdidW5kbGVIYXNDb250ZW50IHByb3ZpbmcgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCdidW5kbGVIYXNDb250ZW50IHByb3ZpbmcgbnBtLXNjb3BlZCBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogYHRlc3QoJ2FkZHMgMSArIDIgdG8gZXF1YWwgMycsICgpID0+IHsgZXhwZWN0KDEgKyAyKS50b0JlKDMpOyB9KTtgLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICB0ZXN0c1Bhc3NlZCA9IHRlc3RzUGFzc2VkIHx8IGRhdGEuaW5kZXhPZihgMSBwYXNzZWQsIDEgdG90YWxgKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=