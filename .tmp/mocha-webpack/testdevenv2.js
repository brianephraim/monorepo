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

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run test -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n    )', null /*{ detached: true }*/, false);
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
    var importToAttempt = 'testdevenv-some-depMAYBE-A-TYPE';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'testdevenv-some-dep\'); };'
      }],
      onData: function onData(data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmM0M2NlZjUxNjJlYmJhMmRkNWQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImFyZ3MiLCJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwicHJvY2VzcyIsImtpbGwiLCJwaWQiLCJleGl0IiwiZHVyaW5nVGVzdCIsIm9uQXNzZXQiLCJvbkRhdGEiLCJvblN0ZGVyciIsImFzc2V0c1RvR2VuZXJhdGUiLCJ0ZXN0UGF0aFBhdHRlcm4iLCJiZWZvcmUiLCJkb25lIiwidGltZW91dCIsInBhdGhUb0RlbW9FbnRyeSIsImZvckVhY2giLCJhc3NldEluZm8iLCJkaXIiLCJkaXJuYW1lIiwicGF0aCIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiZGV2RW52UHJvY2VzcyIsImZpbmlzaGVkIiwiZmluaXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZVN5bmMiLCJvbmNlIiwic3Rkb3V0IiwiZGF0YSIsImRhdGFTdHJpbmciLCJ0b1N0cmluZyIsInN0ZGVyciIsImR1cmluZ1NlcnZlciIsInNjcmFwZURpciIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJlcnIiLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsInRoZW4iLCJtb25vcmVwb0RpciIsImRlc2NyaWJlIiwiY29udGVudFRvQnVuZGxlIiwiYnVuZGxlSGFzQ29udGVudCIsIml0IiwiZXF1YWwiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsMEM7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBQSxPQUFPQyxPQUFQLEdBQWlCLFVBQUNDLFlBQUQsRUFBMkU7QUFBQSxNQUE1REMsT0FBNEQsdUVBQWxELEVBQUVDLE9BQU8sU0FBVCxFQUFrRDtBQUFBLE1BQTVCQyxnQkFBNEIsdUVBQVQsSUFBUzs7QUFDMUYsTUFBTUMsVUFBVSxJQUFoQjtBQUNBLE1BQU1DLE9BQU8sQ0FDWCxJQURXLEVBRVhMLFlBRlcsQ0FBYjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7O0FBRUYsTUFBTU0sZUFBZSxt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QkFBYixFQUErQixJQUEvQjtBQUVELEtBSEQ7QUFJRCxHQXhCRDs7QUEwQkFGLFdBQVMsTUFBVCxFQUFpQixZQUFNO0FBQ3JCLFFBQU1DLGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJTSxjQUFjLEtBQWxCO0FBQ0EsUUFBTUQsa0JBQWtCLHFCQUF4QjtBQUNBakQsZUFBVztBQUNUSyx1QkFBaUIsMkJBRFI7QUFFVEQsd0JBQWtCLENBQ2hCO0FBQ0VVLGNBQU0sZUFBS21CLE9BQUwsQ0FBYVMsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFekIseUNBQThCZ0MsZUFBOUIscUJBRkY7QUFHRS9CLHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRUosY0FBTSxlQUFLbUIsT0FBTCxDQUFhUyxXQUFiLEVBQTBCLHVEQUExQixDQURSO0FBRUV6QixpRUFBc0QyQixlQUF0RDtBQUZGLE9BTmdCLEVBVWhCO0FBQ0U5QixjQUFNLGVBQUttQixPQUFMLENBQWFTLFdBQWIsRUFBMEIsNERBQTFCLENBRFI7QUFFRXpCO0FBRkYsT0FWZ0IsQ0FGVDtBQWlCVGQsZ0JBQVUsa0JBQUN3QixJQUFELEVBQVU7QUFDbEJ1QixzQkFBY0EsZUFBZXZCLEtBQUtTLE9BQUwsMEJBQXNDLENBQUMsQ0FBcEU7QUFDRDtBQW5CUSxLQUFYO0FBcUJBVSxPQUFHLGNBQUgsRUFBbUIsWUFBTTtBQUN2Qix1QkFBT0MsS0FBUCxDQUFhRyxXQUFiLEVBQTBCLElBQTFCO0FBRUQsS0FIRDtBQUlELEdBN0JEO0FBOEJELENBaklELEUiLCJmaWxlIjoidGVzdGRldmVudjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJjNDNjZWY1MTYyZWJiYTJkZDVkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLypcbiAgVGhpcyBmaWxlIHVzZWQgaW4gMiBwbGFjZXNcbiAgICAxLiAgVGhpcyBmaWxlIGlzIGV4ZWN1dGVkIGJ5IHRoZSBtb25vcmVwbyBzZXJ2aW5nIGFzIHRoZSBtb25vcmVwbydzIGRldiBlbnZpcm9ubWVudC5cbiAgICAgICAgKE9ubHkgdGhlIG1vbm9yZXBvIHVzZXMgZGV2X2VudiBsaWtlIHRoaXMuIFdoZW4gdGhlIG1vbm9yZXBvJ3MgcGFja2FnZXMgYXJlIHNjYXR0ZXJlZFxuICAgICAgICBpbnRvIGluZGl2aWR1YWwgcmVwb3MsIGVhY2ggaW5kaXZpZHVhbCByZXBvIGhhcyBhIGRldl9lbnYgZGVwZW5kZW5jeVxuICAgICAgICBpbiBpdHMgbm9kZV9tb2R1bGVzIGZvbGRlcixcbiAgICAgICAgYnV0IHRoaXMgZGV2X2VudiBpcyBleGVjdXRlZCBmcm9tIGEgY29tcGlsZWQgdmVyc2lvbiBvZiB0aGUgZGV2X2Vudi5cbiAgICAgICAgVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgaW5kaXZpZHVhbCByZXBvJ3MgLi9ub2RlX21vZHVsZXMvLmJpbi9kZXZlbnYsXG4gICAgICAgIHdoaWNoIHBvaW50cyB0byAuL25vZGVfbW9kdWxlcy9AZGVmdWFsdC9kZXZfZW52L2Rpc3QvZGV2X2Vudi5qcy4pXG4gICAgMi4gIFRoaXMgZmlsZSBpcyBleGVjdXRlZCBkdXJpbmcgdGhlIG5wbSBwcmVwdWJsaXNoLCB3aGljaCBjcmVhdGVzIHRoZSAvZGlzdCBmb2xkZXJcbiAgICAgICAgbWVudGlvbmVkIGluICgxKSBhYm92ZS5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NoZWxsLWNvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS11dWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS11dWlkXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXJtaW5hdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJzaXRlLXNjcmFwZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgdGVybWluYXRlIGZyb20gJ3Rlcm1pbmF0ZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG4vLyBpbXBvcnQgd2Fsa1N5bmMgZnJvbSAnd2Fsay1zeW5jJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4uL3NoZWxsLWNvbW1hbmQnO1xuaW1wb3J0IHsgdjQgYXMgbWFrZVV1aWQgIH0gZnJvbSAnbm9kZS11dWlkJztcblxuZnVuY3Rpb24gZHVyaW5nVGVzdCh7b25Bc3NldCA9ICgpID0+IHt9LCBvbkRhdGEgPSAoKSA9PiB7fSwgb25TdGRlcnIgPSAoKSA9PiB7fSwgYXNzZXRzVG9HZW5lcmF0ZSwgdGVzdFBhdGhQYXR0ZXJufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB0aGlzLnRpbWVvdXQoNjAwMDApO1xuICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICBpZiAoYXNzZXRJbmZvLmlzRGVtb0VudHJ5KSB7XG4gICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChgKFxuICAgICAgbnBtIHJ1biB0ZXN0IC0tIC0td2F0Y2g9ZmFsc2UgLS10ZXN0UGF0aFBhdHRlcm49JyR7dGVzdFBhdGhQYXR0ZXJufSdcbiAgICApYCwgbnVsbC8qeyBkZXRhY2hlZDogdHJ1ZSB9Ki8sIGZhbHNlKTtcbiAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ0ZJTklTSEVEJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICBcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB0ZXJtaW5hdGUoZGV2RW52UHJvY2Vzcy5waWQsZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gICBpZiAoZXJyKSB7IC8vIHlvdSB3aWxsIGdldCBhbiBlcnJvciBpZiB5b3UgZGlkIG5vdCBzdXBwbHkgYSB2YWxpZCBwcm9jZXNzLnBpZFxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiT29wc3kgZHVyaW5nIHRlcm1pbmF0ZTogXCIsIGVycik7IC8vIGhhbmRsZSBlcnJvcnMgaW4geW91ciBwcmVmZXJyZWQgd2F5LlxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdkb25lIGZvciB0ZXJtaW5hdGUnKTsgLy8gdGVybWluYXRpbmcgdGhlIFByb2Nlc3NlcyBzdWNjZWVkZWQuXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIC8vIH0sIDEwMDApO1xuXG4gICAgICBcbiAgICB9XG4gICAgdmFyIG9uY2UgPSBmYWxzZTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coJ2RldkVudlByb2Nlc3Muc3Rkb3V0XFxuJywgZGF0YVN0cmluZyk7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZyk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZyl7XG4gICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIG9uU3RkZXJyKGRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3N0ZGVycjogJywgZGF0YSk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsY29kZSk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7b25Bc3NldCA9ICgpID0+IHt9LCBvbkRhdGEgPSAoKSA9PiB7fSwgYXNzZXRzVG9HZW5lcmF0ZX0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBsZXQgcGF0aFRvRGVtb0VudHJ5O1xuICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgZnMuZW5zdXJlRGlyU3luYyhkaXIpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhhc3NldEluZm8ucGF0aCwgYXNzZXRJbmZvLnRleHQpO1xuICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICBwYXRoVG9EZW1vRW50cnkgPSBhc3NldEluZm8ucGF0aDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoYChcbiAgICAgIG5wbSBydW4gZGV2IC0tIC0tZGVtby1lbnRyeT0nJHtwYXRoVG9EZW1vRW50cnl9J1xuICAgIClgLCBudWxsLyp7IGRldGFjaGVkOiB0cnVlIH0qLywgZmFsc2UpO1xuICAgIGNvbnN0IHNjcmFwZURpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJy4vc2NyYXBlJyk7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdGSU5JU0hFRCcpO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBmcy5yZW1vdmVTeW5jKHNjcmFwZURpcik7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKGRpcik7XG4gICAgICB9KTtcblxuICAgICAgdGVybWluYXRlKGRldkVudlByb2Nlc3MucGlkLGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikgeyAvLyB5b3Ugd2lsbCBnZXQgYW4gZXJyb3IgaWYgeW91IGRpZCBub3Qgc3VwcGx5IGEgdmFsaWQgcHJvY2Vzcy5waWRcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vcHN5IGR1cmluZyB0ZXJtaW5hdGU6IFwiLCBlcnIpOyAvLyBoYW5kbGUgZXJyb3JzIGluIHlvdXIgcHJlZmVycmVkIHdheS5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBmb3IgdGVybWluYXRlJyk7IC8vIHRlcm1pbmF0aW5nIHRoZSBQcm9jZXNzZXMgc3VjY2VlZGVkLlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICBkb25lKCk7XG4gICAgICAvLyB9LCAxMDAwKTtcblxuICAgICAgXG4gICAgfVxuICAgIHZhciBvbmNlID0gZmFsc2U7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZXZFbnZQcm9jZXNzLnN0ZG91dFxcbicsIGRhdGFTdHJpbmcpO1xuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogRmFpbGVkIHRvIGNvbXBpbGUuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IENvbXBpbGVkIHN1Y2Nlc3NmdWxseS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBzY3JhcGUoe1xuICAgICAgICAgIHVybHM6IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwLyddLFxuICAgICAgICAgIGRpcmVjdG9yeTogc2NyYXBlRGlyLFxuICAgICAgICAgIHJlc291cmNlU2F2ZXI6IGNsYXNzIE15UmVzb3VyY2VTYXZlciB7XG4gICAgICAgICAgICBzYXZlUmVzb3VyY2UgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgIG9uQXNzZXQocmVzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JDbGVhbnVwIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc291cmNlIGVycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZGVyci5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKXtcbiAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzdGRlcnI6ICcsIGRhdGEpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdGVkIHdpdGggY29kZTonLGNvZGUpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgZnVuY3Rpb24oKSB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUEUnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCd0ZXN0ZGV2ZW52LXNvbWUtZGVwJyk7IH07YCxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRGF0YTogKGRhdGEpID0+IHtcbiAgICAgICAgbm90Rm91bmRFcnJvciA9IG5vdEZvdW5kRXJyb3IgfHwgZGF0YS5pbmRleE9mKGBNb2R1bGUgbm90IGZvdW5kOiBFcnJvcjogQ2FuJ3QgcmVzb2x2ZSAnJHtpbXBvcnRUb0F0dGVtcHR9J2ApICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgdGVzdCgnYWRkcyAxICsgMiB0byBlcXVhbCAzJywgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pO2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKGAxIHBhc3NlZCwgMSB0b3RhbGApICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==