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

function duringServer(_ref) {
  var _ref$onAsset = _ref.onAsset,
      onAsset = _ref$onAsset === undefined ? function () {} : _ref$onAsset,
      _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      assetsToGenerate = _ref.assetsToGenerate;

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
    var importToAttempt = 'some-depMAYBE-A-TYPE';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/some-dep/some-dep.js'),
        text: 'export default () => { document.body.append(\'some-dep\'); };'
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
    var importToAttempt = 'some-dep';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/some-dep/some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('webpack bundling throws error for non-existent imports within assets', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmVmNGRiMWRjOTQ4N2FmMmVjNzAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImFyZ3MiLCJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwicHJvY2VzcyIsImtpbGwiLCJwaWQiLCJleGl0IiwiZHVyaW5nU2VydmVyIiwib25Bc3NldCIsIm9uRGF0YSIsImFzc2V0c1RvR2VuZXJhdGUiLCJiZWZvcmUiLCJkb25lIiwidGltZW91dCIsInBhdGhUb0RlbW9FbnRyeSIsImZvckVhY2giLCJhc3NldEluZm8iLCJkaXIiLCJkaXJuYW1lIiwicGF0aCIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiZGV2RW52UHJvY2VzcyIsInNjcmFwZURpciIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJmaW5pc2hlZCIsImZpbmlzaCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVTeW5jIiwiZXJyIiwib25jZSIsInN0ZG91dCIsImRhdGEiLCJkYXRhU3RyaW5nIiwidG9TdHJpbmciLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsInRoZW4iLCJzdGRlcnIiLCJtb25vcmVwb0RpciIsImRlc2NyaWJlIiwiY29udGVudFRvQnVuZGxlIiwiYnVuZGxlSGFzQ29udGVudCIsIml0IiwiZXF1YWwiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLDBDOzs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFDQyxZQUFELEVBQTJFO0FBQUEsTUFBNURDLE9BQTRELHVFQUFsRCxFQUFFQyxPQUFPLFNBQVQsRUFBa0Q7QUFBQSxNQUE1QkMsZ0JBQTRCLHVFQUFULElBQVM7O0FBQzFGLE1BQU1DLFVBQVUsSUFBaEI7QUFDQSxNQUFNQyxPQUFPLENBQ1gsSUFEVyxFQUVYTCxZQUZXLENBQWI7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFOztBQUVGLE1BQU1NLGVBQWUsbUJBQUFDLENBQVEsQ0FBUixDQUFyQjtBQUNBLE1BQU1DLE9BQU9GLGFBQWFHLEtBQWIsQ0FBbUJMLE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ0osV0FBVyxFQUE3QyxDQUFiO0FBQ0FPLE9BQUtFLEVBQUwsQ0FBUSxNQUFSLEVBQWdCLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUNoQyxRQUFJVCxnQkFBSixFQUFzQjtBQUNwQlUsY0FBUUgsRUFBUixDQUFXLE1BQVgsRUFBbUIsWUFBTTtBQUN2QixZQUFJRSxNQUFKLEVBQVk7QUFDVkMsa0JBQVFDLElBQVIsQ0FBYUQsUUFBUUUsR0FBckIsRUFBMEJILE1BQTFCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xDLGtCQUFRRyxJQUFSLENBQWFMLElBQWI7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGLEdBVkQ7QUFXQSxTQUFPSCxJQUFQO0FBQ0E7QUFDRCxDQTlCRCxDOzs7Ozs7QUNiQSxtQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7cWpCQ0FBOztBQUtBOzs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU1MsWUFBVCxPQUFpRjtBQUFBLDBCQUExREMsT0FBMEQ7QUFBQSxNQUExREEsT0FBMEQsZ0NBQWhELFlBQU0sQ0FBRSxDQUF3QztBQUFBLHlCQUF0Q0MsTUFBc0M7QUFBQSxNQUF0Q0EsTUFBc0MsK0JBQTdCLFlBQU0sQ0FBRSxDQUFxQjtBQUFBLE1BQW5CQyxnQkFBbUIsUUFBbkJBLGdCQUFtQjs7QUFDL0VDLFNBQU8sVUFBVUMsSUFBVixFQUFnQjtBQUNyQixTQUFLQyxPQUFMLENBQWEsS0FBYjtBQUNBLFFBQUlDLHdCQUFKO0FBQ0FKLHFCQUFpQkssT0FBakIsQ0FBeUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RDLFVBQU1DLE1BQU0sZUFBS0MsT0FBTCxDQUFhRixVQUFVRyxJQUF2QixDQUFaO0FBQ0Esd0JBQUdDLGFBQUgsQ0FBaUJILEdBQWpCO0FBQ0Esd0JBQUdJLGFBQUgsQ0FBaUJMLFVBQVVHLElBQTNCLEVBQWlDSCxVQUFVTSxJQUEzQztBQUNBLFVBQUlOLFVBQVVPLFdBQWQsRUFBMkI7QUFDekJULDBCQUFrQkUsVUFBVUcsSUFBNUI7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBTUssZ0JBQWdCLHdFQUNXVixlQURYLGdCQUVsQixJQUZrQixDQUVkLHNCQUZjLEVBRVUsS0FGVixDQUF0QjtBQUdBLFFBQU1XLFlBQVksZUFBS0MsT0FBTCxDQUFhQyxTQUFiLEVBQXVCLFVBQXZCLENBQWxCO0FBQ0EsUUFBSUMsV0FBVyxLQUFmO0FBQ0EsYUFBU0MsTUFBVCxHQUFrQjtBQUNoQixVQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNEO0FBQ0RFLGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FILGlCQUFXLElBQVg7O0FBRUEsd0JBQUdJLFVBQUgsQ0FBY1AsU0FBZDtBQUNBZix1QkFBaUJLLE9BQWpCLENBQXlCLFVBQUNDLFNBQUQsRUFBZTtBQUN0QyxZQUFNQyxNQUFNLGVBQUtDLE9BQUwsQ0FBYUYsVUFBVUcsSUFBdkIsQ0FBWjtBQUNBLDBCQUFHYSxVQUFILENBQWNmLEdBQWQ7QUFDRCxPQUhEOztBQUtBLCtCQUFVTyxjQUFjbkIsR0FBeEIsRUFBNEIsVUFBVTRCLEdBQVYsRUFBZTtBQUN6QyxZQUFJQSxHQUFKLEVBQVM7QUFBRTtBQUNUSCxrQkFBUUMsR0FBUixDQUFZLDBCQUFaLEVBQXdDRSxHQUF4QyxFQURPLENBQ3VDO0FBQy9DLFNBRkQsTUFHSztBQUNISCxrQkFBUUMsR0FBUixDQUFZLG9CQUFaLEVBREcsQ0FDZ0M7QUFDcEM7QUFDRixPQVBEOztBQVNBO0FBQ0VuQjtBQUNGOztBQUdEO0FBQ0QsUUFBSXNCLE9BQU8sS0FBWDtBQUNBVixrQkFBY1csTUFBZCxDQUFxQm5DLEVBQXJCLENBQXdCLE1BQXhCLEVBQWdDLFVBQUNvQyxJQUFELEVBQVU7QUFDeEMsVUFBTUMsYUFBYUQsS0FBS0UsUUFBTCxFQUFuQjtBQUNBN0IsYUFBTzRCLFVBQVA7QUFDQVAsY0FBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDTSxVQUF0QztBQUNBLFVBQUlBLFdBQVdFLE9BQVgsQ0FBbUIsNkJBQW5CLE1BQXNELENBQUMsQ0FBdkQsSUFBNEQsQ0FBQ0wsSUFBakUsRUFBdUU7QUFDckVBLGVBQU8sSUFBUDtBQUNBTDtBQUNEO0FBQ0QsVUFBSVEsV0FBV0UsT0FBWCxDQUFtQixpQ0FBbkIsTUFBMEQsQ0FBQyxDQUEzRCxJQUFnRSxDQUFDTCxJQUFyRSxFQUEyRTtBQUN6RUEsZUFBTyxJQUFQOztBQUVBLHNDQUFPO0FBQ0xNLGdCQUFNLENBQUMsd0JBQUQsQ0FERDtBQUVMQyxxQkFBV2hCLFNBRk47QUFHTGlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQ0FDZ0JDLFFBRGhCLEVBQzBCO0FBQ3RCbkMsd0JBQVFtQyxRQUFSO0FBQ0Q7QUFISDtBQUFBO0FBQUEsMkNBSWdCVixHQUpoQixFQUlxQjtBQUNqQkgsd0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkUsR0FBOUI7QUFDRDtBQU5IOztBQUFBO0FBQUE7QUFISyxTQUFQLEVBV0dXLElBWEgsQ0FXUSxZQUFNO0FBQ1pmO0FBQ0QsU0FiRDtBQWNEO0FBQ0YsS0ExQkQ7QUEyQkFMLGtCQUFjcUIsTUFBZCxDQUFxQjdDLEVBQXJCLENBQXdCLE1BQXhCLEVBQWdDLFVBQVVvQyxJQUFWLEVBQWdCO0FBQzlDLFVBQUlBLFFBQVFBLEtBQUtFLFFBQWpCLEVBQTBCO0FBQ3hCRixlQUFPQSxLQUFLRSxRQUFMLEVBQVA7QUFDRDtBQUNEUixjQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkssSUFBeEI7QUFDRCxLQUxEO0FBTUFaLGtCQUFjeEIsRUFBZCxDQUFpQixNQUFqQixFQUF5QixVQUFVQyxJQUFWLEVBQWdCO0FBQ3ZDNkIsY0FBUUMsR0FBUixDQUFZLGlDQUFaLEVBQThDOUIsSUFBOUM7QUFDQTRCO0FBQ0QsS0FIRDtBQUlELEdBbkZEO0FBb0ZEOztBQUVELElBQU1pQixjQUFjLGVBQUtwQixPQUFMLENBQWFDLFNBQWIsRUFBd0IsV0FBeEIsQ0FBcEI7QUFDQW9CLFNBQVMsWUFBVCxFQUF1QixZQUFXO0FBQ2hDQSxXQUFTLDJCQUFULEVBQXNDLFlBQU07QUFDMUMsUUFBTUMsa0JBQWtCLG1CQUF4QjtBQUNBLFFBQUlDLG1CQUFtQixLQUF2Qjs7QUFFQTFDLGlCQUFhO0FBQ1hHLHdCQUFrQixDQUNoQjtBQUNFUyxjQUFNLGVBQUtPLE9BQUwsQ0FBYW9CLFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRXhCLDBDQUErQjBCLGVBQS9CLFNBRkY7QUFHRXpCLHFCQUFhO0FBSGYsT0FEZ0IsQ0FEUDtBQVFYZixlQUFTLGlCQUFDbUMsUUFBRCxFQUFjO0FBQ3JCTSwyQkFBbUJBLG9CQUFvQk4sU0FBU3JCLElBQVQsQ0FBY2lCLE9BQWQsQ0FBc0JTLGVBQXRCLE1BQTJDLENBQUMsQ0FBbkY7QUFDRDtBQVZVLEtBQWI7QUFZQUUsT0FBRyx3QkFBSCxFQUE2QixZQUFNO0FBQ2pDLHVCQUFPQyxLQUFQLENBQWFGLGdCQUFiLEVBQStCLElBQS9CO0FBQ0QsS0FGRDtBQUdELEdBbkJEOztBQXFCQUYsV0FBUyxzQkFBVCxFQUFpQyxZQUFNO0FBQ3JDLFFBQUlLLGdCQUFnQixLQUFwQjtBQUNBLFFBQU1DLGtCQUFrQixzQkFBeEI7QUFDQTlDLGlCQUFhO0FBQ1hHLHdCQUFrQixDQUNoQjtBQUNFUyxjQUFNLGVBQUtPLE9BQUwsQ0FBYW9CLFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRXhCLHlDQUE4QitCLGVBQTlCLHFCQUZGO0FBR0U5QixxQkFBYTtBQUhmLE9BRGdCLEVBTWhCO0FBQ0VKLGNBQU0sZUFBS08sT0FBTCxDQUFhb0IsV0FBYixFQUEwQixpQ0FBMUIsQ0FEUjtBQUVFeEI7QUFGRixPQU5nQixDQURQO0FBWVhiLGNBQVEsZ0JBQUMyQixJQUFELEVBQVU7QUFDaEJnQix3QkFBZ0JBLGlCQUFpQmhCLEtBQUtHLE9BQUwsZ0RBQXdEYyxlQUF4RCxhQUFnRixDQUFDLENBQWxIO0FBQ0Q7QUFkVSxLQUFiO0FBZ0JBSCxPQUFHLHNFQUFILEVBQTJFLFlBQU07QUFDL0UsdUJBQU9DLEtBQVAsQ0FBYUMsYUFBYixFQUE0QixJQUE1QjtBQUVELEtBSEQ7QUFJRCxHQXZCRDs7QUF5QkFMLFdBQVMsa0JBQVQsRUFBNkIsWUFBTTtBQUNqQyxRQUFNQyxrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBSUMsbUJBQW1CLEtBQXZCO0FBQ0EsUUFBTUksa0JBQWtCLFVBQXhCO0FBQ0E5QyxpQkFBYTtBQUNYRyx3QkFBa0IsQ0FDaEI7QUFDRVMsY0FBTSxlQUFLTyxPQUFMLENBQWFvQixXQUFiLEVBQTBCLCtDQUExQixDQURSO0FBRUV4Qix5Q0FBOEIrQixlQUE5QixxQkFGRjtBQUdFOUIscUJBQWE7QUFIZixPQURnQixFQU1oQjtBQUNFSixjQUFNLGVBQUtPLE9BQUwsQ0FBYW9CLFdBQWIsRUFBMEIsaUNBQTFCLENBRFI7QUFFRXhCLGlFQUFzRDBCLGVBQXREO0FBRkYsT0FOZ0IsQ0FEUDtBQVlYeEMsZUFBUyxpQkFBQ21DLFFBQUQsRUFBYztBQUNyQk0sMkJBQW1CQSxvQkFBb0JOLFNBQVNyQixJQUFULENBQWNpQixPQUFkLENBQXNCUyxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0Q7QUFkVSxLQUFiO0FBZ0JBRSxPQUFHLHNFQUFILEVBQTJFLFlBQU07QUFDL0UsdUJBQU9DLEtBQVAsQ0FBYUYsZ0JBQWIsRUFBK0IsSUFBL0I7QUFFRCxLQUhEO0FBSUQsR0F4QkQ7QUF5QkQsQ0F4RUQsRSIsImZpbGUiOiJ0ZXN0ZGV2ZW52Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmVmNGRiMWRjOTQ4N2FmMmVjNzAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG4vKlxuICBUaGlzIGZpbGUgdXNlZCBpbiAyIHBsYWNlc1xuICAgIDEuICBUaGlzIGZpbGUgaXMgZXhlY3V0ZWQgYnkgdGhlIG1vbm9yZXBvIHNlcnZpbmcgYXMgdGhlIG1vbm9yZXBvJ3MgZGV2IGVudmlyb25tZW50LlxuICAgICAgICAoT25seSB0aGUgbW9ub3JlcG8gdXNlcyBkZXZfZW52IGxpa2UgdGhpcy4gV2hlbiB0aGUgbW9ub3JlcG8ncyBwYWNrYWdlcyBhcmUgc2NhdHRlcmVkXG4gICAgICAgIGludG8gaW5kaXZpZHVhbCByZXBvcywgZWFjaCBpbmRpdmlkdWFsIHJlcG8gaGFzIGEgZGV2X2VudiBkZXBlbmRlbmN5XG4gICAgICAgIGluIGl0cyBub2RlX21vZHVsZXMgZm9sZGVyLFxuICAgICAgICBidXQgdGhpcyBkZXZfZW52IGlzIGV4ZWN1dGVkIGZyb20gYSBjb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBkZXZfZW52LlxuICAgICAgICBUaGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBpbmRpdmlkdWFsIHJlcG8ncyAuL25vZGVfbW9kdWxlcy8uYmluL2RldmVudixcbiAgICAgICAgd2hpY2ggcG9pbnRzIHRvIC4vbm9kZV9tb2R1bGVzL0BkZWZ1YWx0L2Rldl9lbnYvZGlzdC9kZXZfZW52LmpzLilcbiAgICAyLiAgVGhpcyBmaWxlIGlzIGV4ZWN1dGVkIGR1cmluZyB0aGUgbnBtIHByZXB1Ymxpc2gsIHdoaWNoIGNyZWF0ZXMgdGhlIC9kaXN0IGZvbGRlclxuICAgICAgICBtZW50aW9uZWQgaW4gKDEpIGFib3ZlLlxuKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc2hlbGwtY29tbWFuZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWV4dHJhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZXh0cmFcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXV1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXV1aWRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlcm1pbmF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRlcm1pbmF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnNpdGUtc2NyYXBlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbi8vIGltcG9ydCB3YWxrU3luYyBmcm9tICd3YWxrLXN5bmMnO1xuaW1wb3J0IHNjcmFwZSBmcm9tICd3ZWJzaXRlLXNjcmFwZXInO1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi4vc2hlbGwtY29tbWFuZCc7XG5pbXBvcnQgeyB2NCBhcyBtYWtlVXVpZCAgfSBmcm9tICdub2RlLXV1aWQnO1xuXG5mdW5jdGlvbiBkdXJpbmdTZXJ2ZXIoe29uQXNzZXQgPSAoKSA9PiB7fSwgb25EYXRhID0gKCkgPT4ge30sIGFzc2V0c1RvR2VuZXJhdGV9KSB7XG4gIGJlZm9yZShmdW5jdGlvbiAoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgIGZzLmVuc3VyZURpclN5bmMoZGlyKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgcGF0aFRvRGVtb0VudHJ5ID0gYXNzZXRJbmZvLnBhdGg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXZFbnZQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoXG4gICAgICBucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fSdcbiAgICApYCwgbnVsbC8qeyBkZXRhY2hlZDogdHJ1ZSB9Ki8sIGZhbHNlKTtcbiAgICBjb25zdCBzY3JhcGVEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuL3NjcmFwZScpO1xuICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnRklOSVNIRUQnKTtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgZnMucmVtb3ZlU3luYyhzY3JhcGVEaXIpO1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyhkaXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCxmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHsgLy8geW91IHdpbGwgZ2V0IGFuIGVycm9yIGlmIHlvdSBkaWQgbm90IHN1cHBseSBhIHZhbGlkIHByb2Nlc3MucGlkXG4gICAgICAgICAgY29uc29sZS5sb2coXCJPb3BzeSBkdXJpbmcgdGVybWluYXRlOiBcIiwgZXJyKTsgLy8gaGFuZGxlIGVycm9ycyBpbiB5b3VyIHByZWZlcnJlZCB3YXkuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUgZm9yIHRlcm1pbmF0ZScpOyAvLyB0ZXJtaW5hdGluZyB0aGUgUHJvY2Vzc2VzIHN1Y2NlZWRlZC5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgZG9uZSgpO1xuICAgICAgLy8gfSwgMTAwMCk7XG5cbiAgICAgIFxuICAgIH1cbiAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgIGRldkVudlByb2Nlc3Muc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZyk7XG4gICAgICBjb25zb2xlLmxvZygnZGV2RW52UHJvY2Vzcy5zdGRvdXRcXG4nLCBkYXRhU3RyaW5nKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgc2NyYXBlKHtcbiAgICAgICAgICB1cmxzOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nXSxcbiAgICAgICAgICBkaXJlY3Rvcnk6IHNjcmFwZURpcixcbiAgICAgICAgICByZXNvdXJjZVNhdmVyOiBjbGFzcyBNeVJlc291cmNlU2F2ZXIge1xuICAgICAgICAgICAgc2F2ZVJlc291cmNlIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNvdXJjZSBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZyl7XG4gICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnc3RkZXJyOiAnLCBkYXRhKTtcbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6Jyxjb2RlKTtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgbW9ub3JlcG9EaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vJyk7XG5kZXNjcmliZSgndGVzdGRldmVudicsIGZ1bmN0aW9uKCkge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgXG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdub24tZXhpc3RlbnQgaW1wb3J0cycsICgpID0+IHtcbiAgICBsZXQgbm90Rm91bmRFcnJvciA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICdzb21lLWRlcE1BWUJFLUEtVFlQRSc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvc29tZS1kZXAvc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnc29tZS1kZXAnKTsgfTtgLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25EYXRhOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZXhpc3RlbnQgaW1wb3J0cycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3NvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy9zb21lLWRlcC9zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTsgfTtgLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=