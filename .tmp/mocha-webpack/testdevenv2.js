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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(11);
var colorPairsPicker = __webpack_require__(13);
var hasAnsi = __webpack_require__(14);

var chalk = new chalkLib.constructor({ level: 3 });
function formatLog(color, heading) {
  var _chalk$rgb;

  var bg = colorPairsPicker(color, { contrast: 8 }).bg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  var fg = colorPairsPicker(color, { contrast: 8 }).fg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  console.log((_chalk$rgb = chalk.rgb.apply(chalk, _toConsumableArray(fg))).bgRgb.apply(_chalk$rgb, _toConsumableArray(bg))(heading));

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof args.find(function (item) {
    return hasAnsi(item);
  }) === 'undefined') {
    console.log(chalk.keyword(color).apply(undefined, args));
  } else {
    var _console;

    (_console = console).log.apply(_console, args);
  }
}
module.exports = formatLog;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}
module.exports = function () {
  var devEnvRoot = ensureTrailingSlash(__dirname).split('/dev_env/');
  devEnvRoot[devEnvRoot.length - 1] = '';
  devEnvRoot = devEnvRoot.join('/dev_env/');
  return devEnvRoot;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/core"))

/***/ }),
/* 2 */
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

  var childProcess = __webpack_require__(12);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(8);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(3);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(4);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(9);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(6);

var _mocha = __webpack_require__(5);

var _shellCommand = __webpack_require__(2);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(0);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _getDevEnvRoot = __webpack_require__(1);

var _getDevEnvRoot2 = _interopRequireDefault(_getDevEnvRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var devEnvRoot = (0, _getDevEnvRoot2.default)(__dirname);

var symlinkNodeModulesContents = function symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath) {
  var promises = [];
  _fsExtra2.default.readdirSync(nodeModulesOriginalPath).forEach(function (file, i) {
    if (i < 20) {
      console.log('symlinking node_modules content', file);
    }
    if (file !== '.bin') {
      promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(nodeModulesOriginalPath, file), _path2.default.resolve(nodeModulesCopyPath, file)));
    }
  });
  return Promise.all(promises);
};

var binPromises = function binPromises(devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath) {
  var promises = [];
  var devEnvCopyPackageDotJson = _fsExtra2.default.readJsonSync(devEnvCopyPackageDotJsonPath);
  var devEnvBinDict = devEnvCopyPackageDotJson.bin;
  Object.keys(devEnvBinDict).forEach(function (key) {
    var val = devEnvBinDict[key];
    promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(devEnvCopyPath, val), _path2.default.resolve(binCopyPath, './' + key)));
  });
  return Promise.all(promises);
};

function duringProcess(_ref) {
  var _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      _ref$makeShellCmdStr = _ref.makeShellCmdStr,
      makeShellCmdStr = _ref$makeShellCmdStr === undefined ? function () {} : _ref$makeShellCmdStr,
      _ref$cleanup = _ref.cleanup,
      cleanup = _ref$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref$cleanup,
      _ref$early = _ref.early,
      early = _ref$early === undefined ? function () {
    return Promise.resolve();
  } : _ref$early,
      _ref$assetsToGenerate = _ref.assetsToGenerate,
      assetsToGenerate = _ref$assetsToGenerate === undefined ? [] : _ref$assetsToGenerate;

  (0, _mocha.before)(function duringProcessBefore(done) {
    this.timeout(60000);
    early().then(function () {
      var pathToDemoEntry = void 0;
      assetsToGenerate.forEach(function (assetInfo) {
        (0, _fancyLog2.default)('green', 'GENERATING', assetInfo.path);
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.ensureDirSync(dir);
        _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
        if (assetInfo.isDemoEntry) {
          pathToDemoEntry = assetInfo.path;
        }
      });
      var cmd = makeShellCmdStr(pathToDemoEntry);
      var devEnvProcess = (0, _shellCommand2.default)(cmd, null, false);
      var finished = false;
      function finish() {
        if (finished) {
          return;
        }
        (0, _fancyLog2.default)('green', 'FINISHED', '');
        finished = true;
        cleanup(devEnvProcess).then(function () {
          (0, _fancyLog2.default)('orange', 'remove assets', '');
          assetsToGenerate.forEach(function (assetInfo) {
            var dir = _path2.default.dirname(assetInfo.path);
            _fsExtra2.default.removeSync(dir);
          });
          (0, _fancyLog2.default)('orange', 'before\'s done() called', '');
          done();
        });
      }
      devEnvProcess.stdout.on('data', function (data) {
        var dataString = data.toString();
        (0, _fancyLog2.default)('blue', 'devEnvProcess.stdout:', dataString);
        onData(dataString, finish);
      });
      devEnvProcess.stderr.on('data', function (data) {
        if (data && data.toString) {
          data = data.toString();
          onStderr(data);
        }
        (0, _fancyLog2.default)('cyan', 'devEnvProcess.stderr:', data);
      });
      devEnvProcess.on('exit', function (code) {
        (0, _fancyLog2.default)('yellow', 'child process exited with code:', code);
        finish();
      });
    });
  });
}

function duringServer(_ref2) {
  var useDist = _ref2.useDist,
      _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      _onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$onStderr = _ref2.onStderr,
      onStderr = _ref2$onStderr === undefined ? function () {} : _ref2$onStderr,
      _ref2$cleanup = _ref2.cleanup,
      _cleanup = _ref2$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref2$cleanup,
      _makeShellCmdStr = _ref2.makeShellCmdStr,
      assetsToGenerate = _ref2.assetsToGenerate,
      early = _ref2.early;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
    early: early,
    makeShellCmdStr: function makeShellCmdStr(pathToDemoEntry) {
      if (_makeShellCmdStr) {
        return _makeShellCmdStr(pathToDemoEntry);
      }
      var prepublish = useDist ? '(cd ' + devEnvRoot + ' && npm run prepublish) && ' : '';
      return '(\n        ' + prepublish + 'npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'' + (useDist ? ' --use-dist' : '') + ' \n      )';
    },
    onData: function onData(dataString, finish) {
      _onData(dataString, finish);
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
                (0, _fancyLog2.default)('pink', 'scrape resource error:', err);
              }
            }]);

            return MyResourceSaver;
          }()
        }).then(function () {
          finish();
        });
      }
    },
    onStderr: onStderr,
    assetsToGenerate: assetsToGenerate,
    cleanup: function cleanup(devEnvProcess) {
      return new Promise(function (resolve, reject) {
        (0, _fancyLog2.default)('orange', 'terminate start', '');
        (0, _terminate2.default)(devEnvProcess.pid, function (err) {
          (0, _fancyLog2.default)('orange', 'terminate end', '');
          if (err) {
            (0, _fancyLog2.default)('red', 'Oopsy during terminate:', err);
            reject();
          } else {
            (0, _fancyLog2.default)('green', 'done for terminate', '');
            _cleanup(devEnvProcess);
            _fsExtra2.default.removeSync(scrapeDir);
            resolve();
          }
        });
      });
    }
  });
}

function duringTest(_ref3) {
  var testPathPattern = _ref3.testPathPattern,
      _ref3$onStderr = _ref3.onStderr,
      onStderr = _ref3$onStderr === undefined ? function () {} : _ref3$onStderr,
      _ref3$onData = _ref3.onData,
      onData = _ref3$onData === undefined ? function () {} : _ref3$onData,
      _ref3$cleanup = _ref3.cleanup,
      cleanup = _ref3$cleanup === undefined ? function () {} : _ref3$cleanup,
      assetsToGenerate = _ref3.assetsToGenerate;

  duringProcess({
    onStderr: onStderr,
    onData: onData,
    assetsToGenerate: assetsToGenerate,
    cleanup: cleanup,
    makeShellCmdStr: function makeShellCmdStr() {
      return '(\n        npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n      )';
    }
  });
}

var monorepoDir = _path2.default.resolve(__dirname, '../../../');
(0, _mocha.describe)('testdevenv', function () {
  (0, _mocha.describe)('localhost dev environment of monorepo via on demand compiled script', function () {
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
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('localhost dev environment of monorepo via pre-compiled script', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    duringServer({
      useDist: true,
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  _mocha.describe.only('localhost dev environment of scattered package repo via pre-compiled script, similar to npm usage', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var testProjectPath = _path2.default.resolve(monorepoDir, '../testdevenv-main/asdf');
    var devEnvOriginalPath = _path2.default.resolve(monorepoDir, './packages/dev_env');
    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
    var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
    var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');
    var devEnvCopyDistPath = _path2.default.resolve(devEnvCopyPath, './dist');
    var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
    var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');

    var bundleHasContent = false;
    duringServer({
      cleanup: function cleanup() /* devEnvProcess */{
        (0, _fancyLog2.default)('orange', 'remove testProjectPath', '');
        _fsExtra2.default.removeSync(testProjectPath);
      },
      early: function early() {
        (0, _fancyLog2.default)('orange', 'EARLY', '');

        var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n            "name": "test-project-for-dev-env",\n            "version": "0.0.2",\n            "publishConfig": {\n              "access": "public"\n            },\n            "scripts": {\n              "dev": "devenv",\n              "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n              "start": "devenv",\n              "thing": "devenv --env=build --dirroot=$(pwd)"\n            },\n            "devDependencies": {\n              "@defualt/dev_env": "^0.0.14"\n            },\n            "repository": {\n              "type": "git",\n              "url": "https://github.com/defualt/test-project-for-dev-env.git"\n            }\n          }')];

        promises.push(symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath));

        promises.push(binPromises(devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath));

        return Promise.all(promises);
      },
      // useDist: true,
      makeShellCmdStr: function makeShellCmdStr() {
        return '(cd ' + devEnvOriginalPath + ' && npm run prepublish) && cp -rf ' + _path2.default.resolve(devEnvRoot, './dist') + ' ' + devEnvCopyDistPath + ' && (cd ' + testProjectPath + ' && npm run dev)';
        // return `(cd ${devEnvOriginalPath} && npm run prepublish) && (cd ${testProjectPath} && node ${path.resolve(devEnvOriginalPath, './dist/dev_env.js')} --demo-entry='${path.resolve(testProjectPath, './testdevenv-main.demo.js')}' --use-dist)`;
        // return `(cd /Users/brianephraim/Sites/monorepo/packages/dev_env/ && npm run prepublish) && npm run dev -- --demo-entry='/Users/brianephraim/Sites/monorepo/testdevenv-main/asdf/testdevenv-main.demo.js' --use-dist`;
      },
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('localhost dev environment similar to npm usage', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var testProjectPath = _path2.default.resolve(monorepoDir, './test-project-for-dev-env');

    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
    var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');
    var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
    var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');

    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
    // const cmdx = `(cd ${testProjectPath} && node ./node_modules/dev_env/dist/dev_env --demo-entry='${pathToMain}')`;
    var cmdX = '(cd ' + testProjectPath + ' && ls)';
    var cmdY = '(cd ' + testProjectPath + ' && echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' && npm run dev)';
    var cmdZ = '(cd ' + testProjectPath + ' && echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' && node ./node_modules/dev_env/dist/dev_env)';
    var cmd = '\n      (cd ' + devEnvRoot + ' && npm run prepublish) && \n      rm -rf ' + testProjectPath + ' &&\n      mkdir ' + testProjectPath + ' &&\n      mkdir ' + nodeModulesCopyPath + ' &&\n      mkdir ' + devEnvCopyPath + ' &&\n      cp ' + _path2.default.resolve(devEnvRoot, './package.json') + ' ' + _path2.default.resolve(devEnvCopyPath, './package.json') + ' &&\n      echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' &&\n      echo \'{"name": "test-project-for-dev-env","scripts": {"dev": "devenv"}}\' > ' + _path2.default.resolve(testProjectPath, './package.json') + ' &&\n      (cd ' + testProjectPath + '  && node ../packages/dev_env/dist/dev_env)\n    ';
    // const cmd = `(cd ${testProjectPath}  && node ../packages/dev_env/dist/dev_env)`;
    // const cmd = `(cd ${devEnvRoot} && npm run prepublish)`;
    console.log('cmd', cmd);
    duringServer({
      // useDist,
      earlyx: function earlyx() {

        (0, _fancyLog2.default)('orange', 'EARLY', '');
        // return Promise.resolve();
        var prepublish = new Promise(function (resolve) {
          console.log('aaa');
          var aProcess = (0, _shellCommand2.default)('(cd ' + devEnvRoot + ' && npm run prepublish)', undefined, false);
          aProcess.on('exit', function () {
            console.log('bbb');
            resolve();
          });
        });

        return prepublish.then(function () {
          var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './dist'), _path2.default.resolve(devEnvCopyPath, './dist')), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), _path2.default.resolve(devEnvCopyPath, './package.json')), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n              "name": "test-project-for-dev-env",\n              "version": "0.0.2",\n              "publishConfig": {\n                "access": "public"\n              },\n              "scripts": {\n                "dev": "devenv",\n                "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n                "start": "devenv",\n                "thing": "devenv --env=build --dirroot=$(pwd)"\n              },\n              "devDependencies": {\n                "@defualt/dev_env": "^0.0.14"\n              },\n              "repository": {\n                "type": "git",\n                "url": "https://github.com/defualt/test-project-for-dev-env.git"\n              }\n            }')];

          var i = 0;
          // fs.readdirSync(nodeModulesOriginalPath).forEach((file) => {
          //   if (i++ < 20) {
          //     console.log('EARLY3')
          //     console.log(file);
          //   }
          //   if (file !== '.bin') {
          //     promises.push(
          //       fs.symlinkSync(path.resolve(nodeModulesOriginalPath, file), path.resolve(nodeModulesCopyPath, file))
          //     );
          //   }
          // });

          // const devEnvCopyPackageDotJson = fs.readJsonSync(devEnvCopyPackageDotJsonPath);
          // const devEnvBinDict = devEnvCopyPackageDotJson.bin;
          // Object.keys(devEnvBinDict).forEach((key) => {
          //   const val = devEnvBinDict[key];
          //   promises.push(
          //     fs.symlinkSync(path.resolve(devEnvCopyPath, val), path.resolve(binCopyPath, `./${key}`))
          //   );
          // });
          return Promise.all(promises);
        });
      },
      // nodePath: nodePathVar,
      makeShellCmdStr: function makeShellCmdStr() {
        console.log('FIND ME DO STUFF');return cmd;
      },
      assetsToGenerate: [
        // {
        //   path: pathToMain,
        //   text: `document.body.append('${contentToBundle}');`,
        //   isDemoEntry: true,
        // },
        // {
        //   path: path.resolve(testProjectPath, './package.json'),
        //   text: `{
        //     "name": "test-project-for-dev-env",
        //     "version": "0.0.2",
        //     "publishConfig": {
        //       "access": "public"
        //     },
        //     "scripts": {
        //       "dev": "devenv",
        //       "devx": "devenv --demo-entry='${pathToMain}'",
        //       "start": "devenv",
        //       "thing": "devenv --env=build --dirroot=$(pwd)"
        //     },
        //     "devDependencies": {
        //       "@defualt/dev_env": "^0.0.14"
        //     },
        //     "repository": {
        //       "type": "git",
        //       "url": "https://github.com/defualt/test-project-for-dev-env.git"
        //     }
        //   }`,
        // },
      ],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
      cleanup: function cleanup() /* devEnvProcess */{
        (0, _fancyLog2.default)('orange', 'remove testProjectPath', '');
        _fsExtra2.default.removeSync(testProjectPath);
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('non-existent imports', function () {
    var notFoundError = false;
    var importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append("testdevenv-some-dep"); };'
      }],
      onStderr: function onStderr(data) {
        notFoundError = notFoundError || data.indexOf('Module not found: Error: Can\'t resolve \'' + importToAttempt + '\'') !== -1;
      }
    });
    (0, _mocha.it)('webpack bundling throws error for non-existent imports within assets', function () {
      _assert2.default.equal(notFoundError, true);
    });
  });

  (0, _mocha.describe)('existent imports', function () {
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
    (0, _mocha.it)('bundleHasContent proving import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('existent imports with npm-scoping', function () {
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
    (0, _mocha.it)('bundleHasContent proving npm-scoped import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('test', function () {
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
        text: 'test("adds 1 + 2 to equal 3", () => { expect(1 + 2).toBe(3); });'
      }],
      onStderr: function onStderr(data) {
        testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
      }
    });
    (0, _mocha.it)('testtesttest', function () {
      _assert2.default.equal(testsPassed, true);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWViNDk5NTIzZGJiYTAwNzkzNGIiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NoYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXMtYW5zaVwiIl0sIm5hbWVzIjpbImNoYWxrTGliIiwicmVxdWlyZSIsImNvbG9yUGFpcnNQaWNrZXIiLCJoYXNBbnNpIiwiY2hhbGsiLCJjb25zdHJ1Y3RvciIsImxldmVsIiwiZm9ybWF0TG9nIiwiY29sb3IiLCJoZWFkaW5nIiwiYmciLCJjb250cmFzdCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImZnIiwiY29uc29sZSIsImxvZyIsInJnYiIsImJnUmdiIiwiYXJncyIsImZpbmQiLCJrZXl3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJyZXBsYWNlIiwiZGV2RW52Um9vdCIsIl9fZGlybmFtZSIsImxlbmd0aCIsImpvaW4iLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImNoaWxkUHJvY2VzcyIsInByb2MiLCJzcGF3biIsIm9uIiwiY29kZSIsInNpZ25hbCIsInByb2Nlc3MiLCJraWxsIiwicGlkIiwiZXhpdCIsInN5bWxpbmtOb2RlTW9kdWxlc0NvbnRlbnRzIiwibm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgiLCJub2RlTW9kdWxlc0NvcHlQYXRoIiwicHJvbWlzZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlIiwiaSIsInB1c2giLCJzeW1saW5rU3luYyIsInJlc29sdmUiLCJQcm9taXNlIiwiYWxsIiwiYmluUHJvbWlzZXMiLCJkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoIiwiZGV2RW52Q29weVBhdGgiLCJiaW5Db3B5UGF0aCIsImRldkVudkNvcHlQYWNrYWdlRG90SnNvbiIsInJlYWRKc29uU3luYyIsImRldkVudkJpbkRpY3QiLCJiaW4iLCJPYmplY3QiLCJrZXlzIiwia2V5IiwidmFsIiwiZHVyaW5nUHJvY2VzcyIsIm9uRGF0YSIsIm9uU3RkZXJyIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsImVhcmx5IiwiYXNzZXRzVG9HZW5lcmF0ZSIsImR1cmluZ1Byb2Nlc3NCZWZvcmUiLCJkb25lIiwidGltZW91dCIsInRoZW4iLCJwYXRoVG9EZW1vRW50cnkiLCJhc3NldEluZm8iLCJwYXRoIiwiZGlyIiwiZGlybmFtZSIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiY21kIiwiZGV2RW52UHJvY2VzcyIsImZpbmlzaGVkIiwiZmluaXNoIiwicmVtb3ZlU3luYyIsInN0ZG91dCIsImRhdGEiLCJkYXRhU3RyaW5nIiwidG9TdHJpbmciLCJzdGRlcnIiLCJkdXJpbmdTZXJ2ZXIiLCJ1c2VEaXN0Iiwib25Bc3NldCIsInNjcmFwZURpciIsIm9uY2UiLCJwcmVwdWJsaXNoIiwiaW5kZXhPZiIsInVybHMiLCJkaXJlY3RvcnkiLCJyZXNvdXJjZVNhdmVyIiwicmVzb3VyY2UiLCJlcnIiLCJyZWplY3QiLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJvbmx5IiwidGVzdFByb2plY3RQYXRoIiwiZGV2RW52T3JpZ2luYWxQYXRoIiwicGF0aFRvTWFpbiIsImRldkVudkNvcHlEaXN0UGF0aCIsImJpbk9yaWdpbmFsUGF0aCIsImNvcHlTeW5jIiwid3JpdGVGaWxlIiwiY21kWCIsImNtZFkiLCJjbWRaIiwiZWFybHl4IiwiYVByb2Nlc3MiLCJ1bmRlZmluZWQiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBLElBQU1BLFdBQVcsbUJBQUFDLENBQVEsRUFBUixDQUFqQjtBQUNBLElBQU1DLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXpCO0FBQ0EsSUFBTUUsVUFBVSxtQkFBQUYsQ0FBUSxFQUFSLENBQWhCOztBQUdBLElBQU1HLFFBQVEsSUFBSUosU0FBU0ssV0FBYixDQUF5QixFQUFFQyxPQUFPLENBQVQsRUFBekIsQ0FBZDtBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxPQUExQixFQUE0QztBQUFBOztBQUMxQyxNQUFNQyxLQUFLUixpQkFBaUJNLEtBQWpCLEVBQXdCLEVBQUVHLFVBQVUsQ0FBWixFQUF4QixFQUF5Q0QsRUFBekMsQ0FBNENFLEtBQTVDLENBQWtELEdBQWxELEVBQXVELENBQXZELEVBQTBEQSxLQUExRCxDQUFnRSxHQUFoRSxFQUFxRSxDQUFyRSxFQUF3RUEsS0FBeEUsQ0FBOEUsR0FBOUUsRUFBbUZDLEdBQW5GLENBQXVGLFVBQUNDLElBQUQsRUFBVTtBQUMxRyxXQUFPLENBQUNBLElBQVI7QUFDRCxHQUZVLENBQVg7QUFHQSxNQUFNQyxLQUFLYixpQkFBaUJNLEtBQWpCLEVBQXdCLEVBQUVHLFVBQVUsQ0FBWixFQUF4QixFQUF5Q0ksRUFBekMsQ0FBNENILEtBQTVDLENBQWtELEdBQWxELEVBQXVELENBQXZELEVBQTBEQSxLQUExRCxDQUFnRSxHQUFoRSxFQUFxRSxDQUFyRSxFQUF3RUEsS0FBeEUsQ0FBOEUsR0FBOUUsRUFBbUZDLEdBQW5GLENBQXVGLFVBQUNDLElBQUQsRUFBVTtBQUMxRyxXQUFPLENBQUNBLElBQVI7QUFDRCxHQUZVLENBQVg7QUFHQUUsVUFBUUMsR0FBUixDQUFZLG9CQUFNQyxHQUFOLGlDQUFhSCxFQUFiLElBQWlCSSxLQUFqQixzQ0FBMEJULEVBQTFCLEdBQThCRCxPQUE5QixDQUFaOztBQVAwQyxvQ0FBTlcsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBUzFDLE1BQUksT0FBT0EsS0FBS0MsSUFBTCxDQUFVLFVBQUNQLElBQUQsRUFBVTtBQUFFLFdBQU9YLFFBQVFXLElBQVIsQ0FBUDtBQUF1QixHQUE3QyxDQUFQLEtBQTBELFdBQTlELEVBQTJFO0FBQ3pFRSxZQUFRQyxHQUFSLENBQVliLE1BQU1rQixPQUFOLENBQWNkLEtBQWQsbUJBQXdCWSxJQUF4QixDQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQUE7O0FBQ0wseUJBQVFILEdBQVIsaUJBQWVHLElBQWY7QUFDRDtBQUNGO0FBQ0RHLE9BQU9DLE9BQVAsR0FBaUJqQixTQUFqQixDOzs7Ozs7Ozs7QUN0QkEsU0FBU2tCLG1CQUFULENBQTZCQyxHQUE3QixFQUFrQztBQUNoQyxTQUFPQSxJQUFJQyxPQUFKLENBQVksTUFBWixFQUFvQixHQUFwQixDQUFQO0FBQ0Q7QUFDREosT0FBT0MsT0FBUCxHQUFpQixZQUFNO0FBQ3JCLE1BQUlJLGFBQWFILG9CQUFvQkksU0FBcEIsRUFBK0JqQixLQUEvQixDQUFxQyxXQUFyQyxDQUFqQjtBQUNBZ0IsYUFBV0EsV0FBV0UsTUFBWCxHQUFvQixDQUEvQixJQUFvQyxFQUFwQztBQUNBRixlQUFhQSxXQUFXRyxJQUFYLENBQWdCLFdBQWhCLENBQWI7QUFDQSxTQUFPSCxVQUFQO0FBQ0QsQ0FMRCxDOzs7Ozs7Ozs7O0FDSEE7QUFDQUwsT0FBT0MsT0FBUCxHQUFpQixVQUFDUSxZQUFELEVBQTJFO0FBQUEsTUFBNURDLE9BQTRELHVFQUFsRCxFQUFFQyxPQUFPLFNBQVQsRUFBa0Q7QUFBQSxNQUE1QkMsZ0JBQTRCLHVFQUFULElBQVM7O0FBQzFGLE1BQU1DLFVBQVUsSUFBaEI7QUFDQSxNQUFNaEIsT0FBTyxDQUNYLElBRFcsRUFFWFksWUFGVyxDQUFiO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTs7QUFFRixNQUFNSyxlQUFlLG1CQUFBcEMsQ0FBUSxFQUFSLENBQXJCO0FBQ0EsTUFBTXFDLE9BQU9ELGFBQWFFLEtBQWIsQ0FBbUJILE9BQW5CLEVBQTRCaEIsSUFBNUIsRUFBa0NhLFdBQVcsRUFBN0MsQ0FBYjtBQUNBSyxPQUFLRSxFQUFMLENBQVEsTUFBUixFQUFnQixVQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDaEMsUUFBSVAsZ0JBQUosRUFBc0I7QUFDcEJRLGNBQVFILEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFlBQU07QUFDdkIsWUFBSUUsTUFBSixFQUFZO0FBQ1ZDLGtCQUFRQyxJQUFSLENBQWFELFFBQVFFLEdBQXJCLEVBQTBCSCxNQUExQjtBQUNELFNBRkQsTUFFTztBQUNMQyxrQkFBUUcsSUFBUixDQUFhTCxJQUFiO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7QUFDRixHQVZEO0FBV0EsU0FBT0gsSUFBUDtBQUNBO0FBQ0QsQ0E5QkQsQzs7Ozs7O0FDREEsbUM7Ozs7OztBQ0FBLHFDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxzQzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7OztxakJDQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTVYsYUFBYSw2QkFBY0MsU0FBZCxDQUFuQjs7QUFFQSxJQUFNa0IsNkJBQTZCLFNBQTdCQSwwQkFBNkIsQ0FBQ0MsdUJBQUQsRUFBMEJDLG1CQUExQixFQUFrRDtBQUNuRixNQUFNQyxXQUFXLEVBQWpCO0FBQ0Esb0JBQUdDLFdBQUgsQ0FBZUgsdUJBQWYsRUFBd0NJLE9BQXhDLENBQWdELFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzNELFFBQUlBLElBQUksRUFBUixFQUFZO0FBQ1Z0QyxjQUFRQyxHQUFSLENBQVksaUNBQVosRUFBK0NvQyxJQUEvQztBQUNEO0FBQ0QsUUFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ25CSCxlQUFTSyxJQUFULENBQ0Usa0JBQUdDLFdBQUgsQ0FDRSxlQUFLQyxPQUFMLENBQWFULHVCQUFiLEVBQXNDSyxJQUF0QyxDQURGLEVBRUUsZUFBS0ksT0FBTCxDQUFhUixtQkFBYixFQUFrQ0ksSUFBbEMsQ0FGRixDQURGO0FBS0Q7QUFDRixHQVhEO0FBWUEsU0FBT0ssUUFBUUMsR0FBUixDQUFZVCxRQUFaLENBQVA7QUFDRCxDQWZEOztBQWlCQSxJQUFNVSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsNEJBQUQsRUFBK0JDLGNBQS9CLEVBQStDQyxXQUEvQyxFQUErRDtBQUNqRixNQUFNYixXQUFXLEVBQWpCO0FBQ0EsTUFBTWMsMkJBQTJCLGtCQUFHQyxZQUFILENBQWdCSiw0QkFBaEIsQ0FBakM7QUFDQSxNQUFNSyxnQkFBZ0JGLHlCQUF5QkcsR0FBL0M7QUFDQUMsU0FBT0MsSUFBUCxDQUFZSCxhQUFaLEVBQTJCZCxPQUEzQixDQUFtQyxVQUFDa0IsR0FBRCxFQUFTO0FBQzFDLFFBQU1DLE1BQU1MLGNBQWNJLEdBQWQsQ0FBWjtBQUNBcEIsYUFBU0ssSUFBVCxDQUNFLGtCQUFHQyxXQUFILENBQWUsZUFBS0MsT0FBTCxDQUFhSyxjQUFiLEVBQTZCUyxHQUE3QixDQUFmLEVBQWtELGVBQUtkLE9BQUwsQ0FBYU0sV0FBYixTQUErQk8sR0FBL0IsQ0FBbEQsQ0FERjtBQUdELEdBTEQ7QUFNQSxTQUFPWixRQUFRQyxHQUFSLENBQVlULFFBQVosQ0FBUDtBQUNELENBWEQ7O0FBYUEsU0FBU3NCLGFBQVQsT0FPRztBQUFBLHlCQU5EQyxNQU1DO0FBQUEsTUFOREEsTUFNQywrQkFOUSxZQUFNLENBQUUsQ0FNaEI7QUFBQSwyQkFMREMsUUFLQztBQUFBLE1BTERBLFFBS0MsaUNBTFUsWUFBTSxDQUFFLENBS2xCO0FBQUEsa0NBSkRDLGVBSUM7QUFBQSxNQUpEQSxlQUlDLHdDQUppQixZQUFNLENBQUUsQ0FJekI7QUFBQSwwQkFIREMsT0FHQztBQUFBLE1BSERBLE9BR0MsZ0NBSFMsWUFBTTtBQUFFLFdBQU9sQixRQUFRRCxPQUFSLEVBQVA7QUFBMkIsR0FHNUM7QUFBQSx3QkFGRG9CLEtBRUM7QUFBQSxNQUZEQSxLQUVDLDhCQUZPLFlBQU07QUFBRSxXQUFPbkIsUUFBUUQsT0FBUixFQUFQO0FBQTJCLEdBRTFDO0FBQUEsbUNBRERxQixnQkFDQztBQUFBLE1BRERBLGdCQUNDLHlDQURrQixFQUNsQjs7QUFDRCxxQkFBTyxTQUFTQyxtQkFBVCxDQUE2QkMsSUFBN0IsRUFBbUM7QUFDeEMsU0FBS0MsT0FBTCxDQUFhLEtBQWI7QUFDQUosWUFBUUssSUFBUixDQUFhLFlBQU07QUFDakIsVUFBSUMsd0JBQUo7QUFDQUwsdUJBQWlCMUIsT0FBakIsQ0FBeUIsVUFBQ2dDLFNBQUQsRUFBZTtBQUN0QyxnQ0FBUyxPQUFULEVBQWtCLFlBQWxCLEVBQWdDQSxVQUFVQyxJQUExQztBQUNBLFlBQU1DLE1BQU0sZUFBS0MsT0FBTCxDQUFhSCxVQUFVQyxJQUF2QixDQUFaO0FBQ0EsMEJBQUdHLGFBQUgsQ0FBaUJGLEdBQWpCO0FBQ0EsMEJBQUdHLGFBQUgsQ0FBaUJMLFVBQVVDLElBQTNCLEVBQWlDRCxVQUFVTSxJQUEzQztBQUNBLFlBQUlOLFVBQVVPLFdBQWQsRUFBMkI7QUFDekJSLDRCQUFrQkMsVUFBVUMsSUFBNUI7QUFDRDtBQUNGLE9BUkQ7QUFTQSxVQUFNTyxNQUFNakIsZ0JBQWdCUSxlQUFoQixDQUFaO0FBQ0EsVUFBTVUsZ0JBQWdCLDRCQUFhRCxHQUFiLEVBQWtCLElBQWxCLEVBQXdCLEtBQXhCLENBQXRCO0FBQ0EsVUFBSUUsV0FBVyxLQUFmO0FBQ0EsZUFBU0MsTUFBVCxHQUFrQjtBQUNoQixZQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNEO0FBQ0QsZ0NBQVMsT0FBVCxFQUFrQixVQUFsQixFQUE4QixFQUE5QjtBQUNBQSxtQkFBVyxJQUFYO0FBQ0FsQixnQkFBUWlCLGFBQVIsRUFBdUJYLElBQXZCLENBQTRCLFlBQU07QUFDaEMsa0NBQVMsUUFBVCxFQUFtQixlQUFuQixFQUFvQyxFQUFwQztBQUNBSiwyQkFBaUIxQixPQUFqQixDQUF5QixVQUFDZ0MsU0FBRCxFQUFlO0FBQ3RDLGdCQUFNRSxNQUFNLGVBQUtDLE9BQUwsQ0FBYUgsVUFBVUMsSUFBdkIsQ0FBWjtBQUNBLDhCQUFHVyxVQUFILENBQWNWLEdBQWQ7QUFDRCxXQUhEO0FBSUEsa0NBQVMsUUFBVCxFQUFtQix5QkFBbkIsRUFBOEMsRUFBOUM7QUFDQU47QUFDRCxTQVJEO0FBU0Q7QUFDRGEsb0JBQWNJLE1BQWQsQ0FBcUJ6RCxFQUFyQixDQUF3QixNQUF4QixFQUFnQyxVQUFDMEQsSUFBRCxFQUFVO0FBQ3hDLFlBQU1DLGFBQWFELEtBQUtFLFFBQUwsRUFBbkI7QUFDQSxnQ0FBUyxNQUFULEVBQWlCLHVCQUFqQixFQUEwQ0QsVUFBMUM7QUFDQTFCLGVBQU8wQixVQUFQLEVBQW1CSixNQUFuQjtBQUNELE9BSkQ7QUFLQUYsb0JBQWNRLE1BQWQsQ0FBcUI3RCxFQUFyQixDQUF3QixNQUF4QixFQUFnQyxVQUFDMEQsSUFBRCxFQUFVO0FBQ3hDLFlBQUlBLFFBQVFBLEtBQUtFLFFBQWpCLEVBQTJCO0FBQ3pCRixpQkFBT0EsS0FBS0UsUUFBTCxFQUFQO0FBQ0ExQixtQkFBU3dCLElBQVQ7QUFDRDtBQUNELGdDQUFTLE1BQVQsRUFBaUIsdUJBQWpCLEVBQTBDQSxJQUExQztBQUNELE9BTkQ7QUFPQUwsb0JBQWNyRCxFQUFkLENBQWlCLE1BQWpCLEVBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQyxnQ0FBUyxRQUFULEVBQW1CLGlDQUFuQixFQUFzREEsSUFBdEQ7QUFDQXNEO0FBQ0QsT0FIRDtBQUlELEtBOUNEO0FBK0NELEdBakREO0FBa0REOztBQUVELFNBQVNPLFlBQVQsUUFTRztBQUFBLE1BUkRDLE9BUUMsU0FSREEsT0FRQztBQUFBLDRCQVBEQyxPQU9DO0FBQUEsTUFQREEsT0FPQyxpQ0FQUyxZQUFNLENBQUUsQ0FPakI7QUFBQSwyQkFORC9CLE1BTUM7QUFBQSxNQU5EQSxPQU1DLGdDQU5RLFlBQU0sQ0FBRSxDQU1oQjtBQUFBLDZCQUxEQyxRQUtDO0FBQUEsTUFMREEsUUFLQyxrQ0FMVSxZQUFNLENBQUUsQ0FLbEI7QUFBQSw0QkFKREUsT0FJQztBQUFBLE1BSkRBLFFBSUMsaUNBSlMsWUFBTTtBQUFFLFdBQU9sQixRQUFRRCxPQUFSLEVBQVA7QUFBMkIsR0FJNUM7QUFBQSxNQUhEa0IsZ0JBR0MsU0FIREEsZUFHQztBQUFBLE1BRkRHLGdCQUVDLFNBRkRBLGdCQUVDO0FBQUEsTUFEREQsS0FDQyxTQUREQSxLQUNDOztBQUNELE1BQU00QixZQUFZLGVBQUtoRCxPQUFMLENBQWE1QixTQUFiLEVBQXdCLFVBQXhCLENBQWxCO0FBQ0EsTUFBSTZFLE9BQU8sS0FBWDtBQUNBbEMsZ0JBQWM7QUFDWkssZ0JBRFk7QUFFWkYscUJBQWlCLHlCQUFDUSxlQUFELEVBQXFCO0FBQ3BDLFVBQUlSLGdCQUFKLEVBQXFCO0FBQ25CLGVBQU9BLGlCQUFnQlEsZUFBaEIsQ0FBUDtBQUNEO0FBQ0QsVUFBTXdCLGFBQWFKLG1CQUFpQjNFLFVBQWpCLG1DQUEyRCxFQUE5RTtBQUNBLDZCQUNJK0UsVUFESixzQ0FDOEN4QixlQUQ5QyxXQUNpRW9CLFVBQVUsYUFBVixHQUEwQixFQUQzRjtBQUdELEtBVlc7QUFXWjlCLFlBQVEsZ0JBQUMwQixVQUFELEVBQWFKLE1BQWIsRUFBd0I7QUFDOUJ0QixjQUFPMEIsVUFBUCxFQUFtQkosTUFBbkI7QUFDQSxVQUFJSSxXQUFXUyxPQUFYLENBQW1CLDZCQUFuQixNQUFzRCxDQUFDLENBQXZELElBQTRELENBQUNGLElBQWpFLEVBQXVFO0FBQ3JFQSxlQUFPLElBQVA7QUFDQVg7QUFDRDtBQUNELFVBQUlJLFdBQVdTLE9BQVgsQ0FBbUIsaUNBQW5CLE1BQTBELENBQUMsQ0FBM0QsSUFBZ0UsQ0FBQ0YsSUFBckUsRUFBMkU7QUFDekVBLGVBQU8sSUFBUDtBQUNBLHNDQUFPO0FBQ0xHLGdCQUFNLENBQUMsd0JBQUQsQ0FERDtBQUVMQyxxQkFBV0wsU0FGTjtBQUdMTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkNBQ2VDLFFBRGYsRUFDeUI7QUFDckJSLHdCQUFRUSxRQUFSO0FBQ0Q7QUFISDtBQUFBO0FBQUEsMkNBSWVDLEdBSmYsRUFJb0I7QUFDaEIsd0NBQVMsTUFBVCxFQUFpQix3QkFBakIsRUFBMkNBLEdBQTNDO0FBQ0Q7QUFOSDs7QUFBQTtBQUFBO0FBSEssU0FBUCxFQVdHL0IsSUFYSCxDQVdRLFlBQU07QUFDWmE7QUFDRCxTQWJEO0FBY0Q7QUFDRixLQWxDVztBQW1DWnJCLHNCQW5DWTtBQW9DWkksc0NBcENZO0FBcUNaRixhQUFTLGlCQUFDaUIsYUFBRCxFQUFtQjtBQUMxQixhQUFPLElBQUluQyxPQUFKLENBQVksVUFBQ0QsT0FBRCxFQUFVeUQsTUFBVixFQUFxQjtBQUN0QyxnQ0FBUyxRQUFULEVBQW1CLGlCQUFuQixFQUFzQyxFQUF0QztBQUNBLGlDQUFVckIsY0FBY2hELEdBQXhCLEVBQTZCLFVBQUNvRSxHQUFELEVBQVM7QUFDcEMsa0NBQVMsUUFBVCxFQUFtQixlQUFuQixFQUFvQyxFQUFwQztBQUNBLGNBQUlBLEdBQUosRUFBUztBQUNQLG9DQUFTLEtBQVQsRUFBZ0IseUJBQWhCLEVBQTJDQSxHQUEzQztBQUNBQztBQUNELFdBSEQsTUFHTztBQUNMLG9DQUFTLE9BQVQsRUFBa0Isb0JBQWxCLEVBQXdDLEVBQXhDO0FBQ0F0QyxxQkFBUWlCLGFBQVI7QUFDQSw4QkFBR0csVUFBSCxDQUFjUyxTQUFkO0FBQ0FoRDtBQUNEO0FBQ0YsU0FYRDtBQVlELE9BZE0sQ0FBUDtBQWVEO0FBckRXLEdBQWQ7QUF1REQ7O0FBRUQsU0FBUzBELFVBQVQsUUFNRztBQUFBLE1BTERDLGVBS0MsU0FMREEsZUFLQztBQUFBLDZCQUpEMUMsUUFJQztBQUFBLE1BSkRBLFFBSUMsa0NBSlUsWUFBTSxDQUFFLENBSWxCO0FBQUEsMkJBSERELE1BR0M7QUFBQSxNQUhEQSxNQUdDLGdDQUhRLFlBQU0sQ0FBRSxDQUdoQjtBQUFBLDRCQUZERyxPQUVDO0FBQUEsTUFGREEsT0FFQyxpQ0FGUyxZQUFNLENBQUUsQ0FFakI7QUFBQSxNQURERSxnQkFDQyxTQUREQSxnQkFDQzs7QUFDRE4sZ0JBQWM7QUFDWkUsc0JBRFk7QUFFWkQsa0JBRlk7QUFHWkssc0NBSFk7QUFJWkYsb0JBSlk7QUFLWkQscUJBQWlCLDJCQUFNO0FBQ3JCLHVGQUM2RHlDLGVBRDdEO0FBR0Q7QUFUVyxHQUFkO0FBV0Q7O0FBRUQsSUFBTUMsY0FBYyxlQUFLNUQsT0FBTCxDQUFhNUIsU0FBYixFQUF3QixXQUF4QixDQUFwQjtBQUNBLHFCQUFTLFlBQVQsRUFBdUIsWUFBTTtBQUMzQix1QkFBUyxxRUFBVCxFQUFnRixZQUFNO0FBQ3BGLFFBQU15RixrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBSUMsbUJBQW1CLEtBQXZCOztBQUVBakIsaUJBQWE7QUFDWHhCLHdCQUFrQixDQUNoQjtBQUNFTyxjQUFNLGVBQUs1QixPQUFMLENBQWE0RCxXQUFiLEVBQTBCLCtDQUExQixDQURSO0FBRUUzQiwwQ0FBK0I0QixlQUEvQixTQUZGO0FBR0UzQixxQkFBYTtBQUhmLE9BRGdCLENBRFA7QUFRWGEsZUFBUyxpQkFBQ1EsUUFBRCxFQUFjO0FBQ3JCTywyQkFBbUJBLG9CQUFvQlAsU0FBU3RCLElBQVQsQ0FBY2tCLE9BQWQsQ0FBc0JVLGVBQXRCLE1BQTJDLENBQUMsQ0FBbkY7QUFDRDtBQVZVLEtBQWI7QUFZQSxtQkFBRyx3QkFBSCxFQUE2QixZQUFNO0FBQ2pDLHVCQUFPRSxLQUFQLENBQWFELGdCQUFiLEVBQStCLElBQS9CO0FBQ0QsS0FGRDtBQUdELEdBbkJEOztBQXFCQSx1QkFBUywrREFBVCxFQUEwRSxZQUFNO0FBQzlFLFFBQU1ELGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJQyxtQkFBbUIsS0FBdkI7QUFDQWpCLGlCQUFhO0FBQ1hDLGVBQVMsSUFERTtBQUVYekIsd0JBQWtCLENBQ2hCO0FBQ0VPLGNBQU0sZUFBSzVCLE9BQUwsQ0FBYTRELFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRTNCLDBDQUErQjRCLGVBQS9CLFNBRkY7QUFHRTNCLHFCQUFhO0FBSGYsT0FEZ0IsQ0FGUDtBQVNYYSxlQUFTLGlCQUFDUSxRQUFELEVBQWM7QUFDckJPLDJCQUFtQkEsb0JBQW9CUCxTQUFTdEIsSUFBVCxDQUFja0IsT0FBZCxDQUFzQlUsZUFBdEIsTUFBMkMsQ0FBQyxDQUFuRjtBQUNEO0FBWFUsS0FBYjtBQWFBLG1CQUFHLHdCQUFILEVBQTZCLFlBQU07QUFDakMsdUJBQU9FLEtBQVAsQ0FBYUQsZ0JBQWIsRUFBK0IsSUFBL0I7QUFDRCxLQUZEO0FBR0QsR0FuQkQ7O0FBcUJBLGtCQUFTRSxJQUFULENBQWMsbUdBQWQsRUFBbUgsWUFBTTtBQUN2SCxRQUFNSCxrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBTUksa0JBQWtCLGVBQUtqRSxPQUFMLENBQWE0RCxXQUFiLEVBQTBCLHlCQUExQixDQUF4QjtBQUNBLFFBQU1NLHFCQUFxQixlQUFLbEUsT0FBTCxDQUFhNEQsV0FBYixFQUEwQixvQkFBMUIsQ0FBM0I7QUFDQSxRQUFNckUsMEJBQTBCLGVBQUtTLE9BQUwsQ0FBYTRELFdBQWIsRUFBMEIsZ0JBQTFCLENBQWhDO0FBQ0EsUUFBTXBFLHNCQUFzQixlQUFLUSxPQUFMLENBQWFpRSxlQUFiLEVBQThCLGdCQUE5QixDQUE1QjtBQUNBLFFBQU1FLGFBQWEsZUFBS25FLE9BQUwsQ0FBYWlFLGVBQWIsRUFBOEIsMkJBQTlCLENBQW5CO0FBQ0EsUUFBTTVELGlCQUFpQixlQUFLTCxPQUFMLENBQWFSLG1CQUFiLEVBQWtDLFdBQWxDLENBQXZCO0FBQ0EsUUFBTVksK0JBQStCLGVBQUtKLE9BQUwsQ0FBYUssY0FBYixFQUE2QixnQkFBN0IsQ0FBckM7QUFDQSxRQUFNK0QscUJBQXFCLGVBQUtwRSxPQUFMLENBQWFLLGNBQWIsRUFBNkIsUUFBN0IsQ0FBM0I7QUFDQSxRQUFNQyxjQUFjLGVBQUtOLE9BQUwsQ0FBYVIsbUJBQWIsRUFBa0MsUUFBbEMsQ0FBcEI7QUFDQSxRQUFNNkUsa0JBQWtCLGVBQUtyRSxPQUFMLENBQWFULHVCQUFiLEVBQXNDLFFBQXRDLENBQXhCOztBQUVBLFFBQUl1RSxtQkFBbUIsS0FBdkI7QUFDQWpCLGlCQUFhO0FBQ1gxQixlQUFTLG1CQUFDLG1CQUF3QjtBQUNoQyxnQ0FBUyxRQUFULEVBQW1CLHdCQUFuQixFQUE2QyxFQUE3QztBQUNBLDBCQUFHb0IsVUFBSCxDQUFjMEIsZUFBZDtBQUNELE9BSlU7QUFLWDdDLGFBQU8saUJBQU07QUFDWCxnQ0FBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCLEVBQTVCOztBQUVBLFlBQU0zQixXQUFXLENBQ2Ysa0JBQUc4QyxVQUFILENBQWMwQixlQUFkLENBRGUsRUFFZixrQkFBR2xDLGFBQUgsQ0FBaUJrQyxlQUFqQixDQUZlLEVBR2Ysa0JBQUdsQyxhQUFILENBQWlCdkMsbUJBQWpCLENBSGUsRUFJZixrQkFBR3VDLGFBQUgsQ0FBaUIxQixjQUFqQixDQUplLEVBS2Ysa0JBQUdpRSxRQUFILENBQVksZUFBS3RFLE9BQUwsQ0FBYTdCLFVBQWIsRUFBeUIsZ0JBQXpCLENBQVosRUFBd0RpQyw0QkFBeEQsQ0FMZSxFQU1mLGtCQUFHa0UsUUFBSCxDQUFZLGVBQUt0RSxPQUFMLENBQWE3QixVQUFiLEVBQXlCLE9BQXpCLENBQVosRUFBK0MsZUFBSzZCLE9BQUwsQ0FBYUssY0FBYixFQUE2QixPQUE3QixDQUEvQyxDQU5lLEVBT2Ysa0JBQUdpRSxRQUFILENBQVlELGVBQVosRUFBNkIvRCxXQUE3QixDQVBlLEVBUWYsa0JBQUdpRSxTQUFILENBQWFKLFVBQWIsOEJBQWtETixlQUFsRCxVQVJlLEVBU2Ysa0JBQUc3QixhQUFILENBQWlCLGVBQUtoQyxPQUFMLENBQWFpRSxlQUFiLEVBQThCLGdCQUE5QixDQUFqQixxUkFRb0NFLFVBUnBDLGdZQVRlLENBQWpCOztBQWdDQTFFLGlCQUFTSyxJQUFULENBQWNSLDJCQUNaQyx1QkFEWSxFQUVaQyxtQkFGWSxDQUFkOztBQUtBQyxpQkFBU0ssSUFBVCxDQUFjSyxZQUNaQyw0QkFEWSxFQUVaQyxjQUZZLEVBR1pDLFdBSFksQ0FBZDs7QUFNQSxlQUFPTCxRQUFRQyxHQUFSLENBQVlULFFBQVosQ0FBUDtBQUNELE9BcERVO0FBcURYO0FBQ0F5Qix1QkFBaUIsMkJBQU07QUFDckIsd0JBQWNnRCxrQkFBZCwwQ0FBcUUsZUFBS2xFLE9BQUwsQ0FBYTdCLFVBQWIsRUFBeUIsUUFBekIsQ0FBckUsU0FBMkdpRyxrQkFBM0csZ0JBQXdJSCxlQUF4STtBQUNBO0FBQ0E7QUFDRCxPQTFEVTtBQTJEWGxCLGVBQVMsaUJBQUNRLFFBQUQsRUFBYztBQUNyQk8sMkJBQW1CQSxvQkFBb0JQLFNBQVN0QixJQUFULENBQWNrQixPQUFkLENBQXNCVSxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0Q7QUE3RFUsS0FBYjtBQStEQSxtQkFBRyx3QkFBSCxFQUE2QixZQUFNO0FBQ2pDLHVCQUFPRSxLQUFQLENBQWFELGdCQUFiLEVBQStCLElBQS9CO0FBQ0QsS0FGRDtBQUdELEdBaEZEOztBQW1GQSx1QkFBUyxnREFBVCxFQUEyRCxZQUFNO0FBQy9ELFFBQU1ELGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJQyxtQkFBbUIsS0FBdkI7QUFDQSxRQUFNRyxrQkFBa0IsZUFBS2pFLE9BQUwsQ0FBYTRELFdBQWIsRUFBMEIsNEJBQTFCLENBQXhCOztBQUVBLFFBQU1yRSwwQkFBMEIsZUFBS1MsT0FBTCxDQUFhNEQsV0FBYixFQUEwQixnQkFBMUIsQ0FBaEM7QUFDQSxRQUFNcEUsc0JBQXNCLGVBQUtRLE9BQUwsQ0FBYWlFLGVBQWIsRUFBOEIsZ0JBQTlCLENBQTVCO0FBQ0EsUUFBTTVELGlCQUFpQixlQUFLTCxPQUFMLENBQWFSLG1CQUFiLEVBQWtDLFdBQWxDLENBQXZCO0FBQ0EsUUFBTTZFLGtCQUFrQixlQUFLckUsT0FBTCxDQUFhVCx1QkFBYixFQUFzQyxRQUF0QyxDQUF4QjtBQUNBLFFBQU1lLGNBQWMsZUFBS04sT0FBTCxDQUFhUixtQkFBYixFQUFrQyxRQUFsQyxDQUFwQjtBQUNBLFFBQU1ZLCtCQUErQixlQUFLSixPQUFMLENBQWFLLGNBQWIsRUFBNkIsZ0JBQTdCLENBQXJDOztBQUlBLFFBQU04RCxhQUFhLGVBQUtuRSxPQUFMLENBQWFpRSxlQUFiLEVBQThCLDJCQUE5QixDQUFuQjtBQUNBO0FBQ0EsUUFBTU8sZ0JBQWNQLGVBQWQsWUFBTjtBQUNBLFFBQU1RLGdCQUFjUixlQUFkLHlDQUFnRUosZUFBaEUsZ0JBQXlGTSxVQUF6RixxQkFBTjtBQUNBLFFBQU1PLGdCQUFjVCxlQUFkLHlDQUFnRUosZUFBaEUsZ0JBQXlGTSxVQUF6RixrREFBTjtBQUNBLFFBQU1oQyx1QkFDRWhFLFVBREYsa0RBRUs4RixlQUZMLHlCQUdJQSxlQUhKLHlCQUlJekUsbUJBSkoseUJBS0lhLGNBTEosc0JBTUMsZUFBS0wsT0FBTCxDQUFhN0IsVUFBYixFQUF5QixnQkFBekIsQ0FORCxTQU0rQyxlQUFLNkIsT0FBTCxDQUFhSyxjQUFiLEVBQTZCLGdCQUE3QixDQU4vQyxnREFPMEJ3RCxlQVAxQixnQkFPbURNLFVBUG5ELGdHQVF5RSxlQUFLbkUsT0FBTCxDQUFhaUUsZUFBYixFQUE4QixnQkFBOUIsQ0FSekUsdUJBU0VBLGVBVEYsc0RBQU47QUFXQTtBQUNBO0FBQ0ExRyxZQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQjJFLEdBQW5CO0FBQ0FVLGlCQUFhO0FBQ1g7QUFDQThCLGNBQVEsa0JBQU07O0FBRVosZ0NBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0QixFQUE1QjtBQUNBO0FBQ0EsWUFBTXpCLGFBQWEsSUFBSWpELE9BQUosQ0FBWSxVQUFDRCxPQUFELEVBQWE7QUFDMUN6QyxrQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxjQUFNb0gsV0FBVyxxQ0FBb0J6RyxVQUFwQiw4QkFBeUQwRyxTQUF6RCxFQUFvRSxLQUFwRSxDQUFqQjtBQUNBRCxtQkFBUzdGLEVBQVQsQ0FBWSxNQUFaLEVBQW9CLFlBQU07QUFDeEJ4QixvQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQXdDO0FBQ0QsV0FIRDtBQUlELFNBUGtCLENBQW5COztBQVNBLGVBQU9rRCxXQUFXekIsSUFBWCxDQUFnQixZQUFNO0FBQzNCLGNBQU1oQyxXQUFXLENBQ2Ysa0JBQUc4QyxVQUFILENBQWMwQixlQUFkLENBRGUsRUFFZixrQkFBR2xDLGFBQUgsQ0FBaUJrQyxlQUFqQixDQUZlLEVBR2Ysa0JBQUdsQyxhQUFILENBQWlCdkMsbUJBQWpCLENBSGUsRUFJZixrQkFBR3VDLGFBQUgsQ0FBaUIxQixjQUFqQixDQUplLEVBS2Ysa0JBQUdpRSxRQUFILENBQVksZUFBS3RFLE9BQUwsQ0FBYTdCLFVBQWIsRUFBeUIsUUFBekIsQ0FBWixFQUFnRCxlQUFLNkIsT0FBTCxDQUFhSyxjQUFiLEVBQTZCLFFBQTdCLENBQWhELENBTGUsRUFNZixrQkFBR2lFLFFBQUgsQ0FBWSxlQUFLdEUsT0FBTCxDQUFhN0IsVUFBYixFQUF5QixnQkFBekIsQ0FBWixFQUF3RCxlQUFLNkIsT0FBTCxDQUFhSyxjQUFiLEVBQTZCLGdCQUE3QixDQUF4RCxDQU5lLEVBT2Ysa0JBQUdpRSxRQUFILENBQVksZUFBS3RFLE9BQUwsQ0FBYTdCLFVBQWIsRUFBeUIsT0FBekIsQ0FBWixFQUErQyxlQUFLNkIsT0FBTCxDQUFhSyxjQUFiLEVBQTZCLE9BQTdCLENBQS9DLENBUGUsRUFRZixrQkFBR2lFLFFBQUgsQ0FBWUQsZUFBWixFQUE2Qi9ELFdBQTdCLENBUmUsRUFTZixrQkFBR2lFLFNBQUgsQ0FBYUosVUFBYiw4QkFBa0ROLGVBQWxELFVBVGUsRUFVZixrQkFBRzdCLGFBQUgsQ0FBaUIsZUFBS2hDLE9BQUwsQ0FBYWlFLGVBQWIsRUFBOEIsZ0JBQTlCLENBQWpCLHFTQVFvQ0UsVUFScEMsc1pBVmUsQ0FBakI7O0FBZ0NBLGNBQUl0RSxJQUFJLENBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBT0ksUUFBUUMsR0FBUixDQUFZVCxRQUFaLENBQVA7QUFDRCxTQXZETSxDQUFQO0FBd0RELE9BdkVVO0FBd0VYO0FBQ0F5Qix1QkFBaUIsMkJBQU07QUFBQzNELGdCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBaUMsT0FBTzJFLEdBQVA7QUFBYSxPQXpFM0Q7QUEwRVhkLHdCQUFrQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCZ0IsT0ExRVA7QUF3R1gwQixlQUFTLGlCQUFDUSxRQUFELEVBQWM7QUFDckJPLDJCQUFtQkEsb0JBQW9CUCxTQUFTdEIsSUFBVCxDQUFja0IsT0FBZCxDQUFzQlUsZUFBdEIsTUFBMkMsQ0FBQyxDQUFuRjtBQUNELE9BMUdVO0FBMkdYMUMsZUFBUyxtQkFBQyxtQkFBd0I7QUFDaEMsZ0NBQVMsUUFBVCxFQUFtQix3QkFBbkIsRUFBNkMsRUFBN0M7QUFDQSwwQkFBR29CLFVBQUgsQ0FBYzBCLGVBQWQ7QUFDRDtBQTlHVSxLQUFiO0FBZ0hBLG1CQUFHLHdCQUFILEVBQTZCLFlBQU07QUFDakMsdUJBQU9GLEtBQVAsQ0FBYUQsZ0JBQWIsRUFBK0IsSUFBL0I7QUFDRCxLQUZEO0FBR0QsR0FwSkQ7O0FBc0pBLHVCQUFTLHNCQUFULEVBQWlDLFlBQU07QUFDckMsUUFBSWdCLGdCQUFnQixLQUFwQjtBQUNBLFFBQU1DLGtCQUFrQixpQ0FBeEI7QUFDQWxDLGlCQUFhO0FBQ1h4Qix3QkFBa0IsQ0FDaEI7QUFDRU8sY0FBTSxlQUFLNUIsT0FBTCxDQUFhNEQsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFM0IseUNBQThCOEMsZUFBOUIscUJBRkY7QUFHRTdDLHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRU4sY0FBTSxlQUFLNUIsT0FBTCxDQUFhNEQsV0FBYixFQUEwQix1REFBMUIsQ0FEUjtBQUVFM0IsY0FBTTtBQUZSLE9BTmdCLENBRFA7QUFZWGhCLGdCQUFVLGtCQUFDd0IsSUFBRCxFQUFVO0FBQ2xCcUMsd0JBQWdCQSxpQkFBaUJyQyxLQUFLVSxPQUFMLGdEQUF3RDRCLGVBQXhELGFBQWdGLENBQUMsQ0FBbEg7QUFDRDtBQWRVLEtBQWI7QUFnQkEsbUJBQUcsc0VBQUgsRUFBMkUsWUFBTTtBQUMvRSx1QkFBT2hCLEtBQVAsQ0FBYWUsYUFBYixFQUE0QixJQUE1QjtBQUNELEtBRkQ7QUFHRCxHQXRCRDs7QUF3QkEsdUJBQVMsa0JBQVQsRUFBNkIsWUFBTTtBQUNqQyxRQUFNakIsa0JBQWtCLG1CQUF4QjtBQUNBLFFBQUlDLG1CQUFtQixLQUF2QjtBQUNBLFFBQU1pQixrQkFBa0IscUJBQXhCO0FBQ0FsQyxpQkFBYTtBQUNYeEIsd0JBQWtCLENBQ2hCO0FBQ0VPLGNBQU0sZUFBSzVCLE9BQUwsQ0FBYTRELFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRTNCLHlDQUE4QjhDLGVBQTlCLHFCQUZGO0FBR0U3QyxxQkFBYTtBQUhmLE9BRGdCLEVBTWhCO0FBQ0VOLGNBQU0sZUFBSzVCLE9BQUwsQ0FBYTRELFdBQWIsRUFBMEIsdURBQTFCLENBRFI7QUFFRTNCLGlFQUFzRDRCLGVBQXREO0FBRkYsT0FOZ0IsQ0FEUDtBQVlYZCxlQUFTLGlCQUFDUSxRQUFELEVBQWM7QUFDckJPLDJCQUFtQkEsb0JBQW9CUCxTQUFTdEIsSUFBVCxDQUFja0IsT0FBZCxDQUFzQlUsZUFBdEIsTUFBMkMsQ0FBQyxDQUFuRjtBQUNEO0FBZFUsS0FBYjtBQWdCQSxtQkFBRywwQ0FBSCxFQUErQyxZQUFNO0FBQ25ELHVCQUFPRSxLQUFQLENBQWFELGdCQUFiLEVBQStCLElBQS9CO0FBQ0QsS0FGRDtBQUdELEdBdkJEOztBQXlCQSx1QkFBUyxtQ0FBVCxFQUE4QyxZQUFNO0FBQ2xELFFBQU1ELGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJQyxtQkFBbUIsS0FBdkI7QUFDQSxRQUFNaUIsa0JBQWtCLHFCQUF4QjtBQUNBbEMsaUJBQWE7QUFDWHhCLHdCQUFrQixDQUNoQjtBQUNFTyxjQUFNLGVBQUs1QixPQUFMLENBQWE0RCxXQUFiLEVBQTBCLCtDQUExQixDQURSO0FBRUUzQix5REFBOEM4QyxlQUE5QyxxQkFGRjtBQUdFN0MscUJBQWE7QUFIZixPQURnQixFQU1oQjtBQUNFTixjQUFNLGVBQUs1QixPQUFMLENBQWE0RCxXQUFiLEVBQTBCLHVEQUExQixDQURSO0FBRUUzQixpRUFBc0Q0QixlQUF0RDtBQUZGLE9BTmdCLENBRFA7QUFZWGQsZUFBUyxpQkFBQ1EsUUFBRCxFQUFjO0FBQ3JCTywyQkFBbUJBLG9CQUFvQlAsU0FBU3RCLElBQVQsQ0FBY2tCLE9BQWQsQ0FBc0JVLGVBQXRCLE1BQTJDLENBQUMsQ0FBbkY7QUFDRDtBQWRVLEtBQWI7QUFnQkEsbUJBQUcscURBQUgsRUFBMEQsWUFBTTtBQUM5RCx1QkFBT0UsS0FBUCxDQUFhRCxnQkFBYixFQUErQixJQUEvQjtBQUNELEtBRkQ7QUFHRCxHQXZCRDs7QUF5QkEsdUJBQVMsTUFBVCxFQUFpQixZQUFNO0FBQ3JCLFFBQU1ELGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJbUIsY0FBYyxLQUFsQjtBQUNBLFFBQU1ELGtCQUFrQixxQkFBeEI7QUFDQXJCLGVBQVc7QUFDVEMsdUJBQWlCLDJCQURSO0FBRVR0Qyx3QkFBa0IsQ0FDaEI7QUFDRU8sY0FBTSxlQUFLNUIsT0FBTCxDQUFhNEQsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFM0IseUNBQThCOEMsZUFBOUIscUJBRkY7QUFHRTdDLHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRU4sY0FBTSxlQUFLNUIsT0FBTCxDQUFhNEQsV0FBYixFQUEwQix1REFBMUIsQ0FEUjtBQUVFM0IsaUVBQXNENEIsZUFBdEQ7QUFGRixPQU5nQixFQVVoQjtBQUNFakMsY0FBTSxlQUFLNUIsT0FBTCxDQUFhNEQsV0FBYixFQUEwQiw0REFBMUIsQ0FEUjtBQUVFM0IsY0FBTTtBQUZSLE9BVmdCLENBRlQ7QUFpQlRoQixnQkFBVSxrQkFBQ3dCLElBQUQsRUFBVTtBQUNsQnVDLHNCQUFjQSxlQUFldkMsS0FBS1UsT0FBTCxDQUFhLG1CQUFiLE1BQXNDLENBQUMsQ0FBcEU7QUFDRDtBQW5CUSxLQUFYO0FBcUJBLG1CQUFHLGNBQUgsRUFBbUIsWUFBTTtBQUN2Qix1QkFBT1ksS0FBUCxDQUFhaUIsV0FBYixFQUEwQixJQUExQjtBQUNELEtBRkQ7QUFHRCxHQTVCRDtBQTZCRCxDQTNYRCxFOzs7Ozs7O0FDbE1BLGtDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InRlc3RkZXZlbnYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWViNDk5NTIzZGJiYTAwNzkzNGIiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5jb25zdCBjaGFsa0xpYiA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBjb2xvclBhaXJzUGlja2VyID0gcmVxdWlyZSgnY29sb3ItcGFpcnMtcGlja2VyJyk7XG5jb25zdCBoYXNBbnNpID0gcmVxdWlyZSgnaGFzLWFuc2knKTtcblxuXG5jb25zdCBjaGFsayA9IG5ldyBjaGFsa0xpYi5jb25zdHJ1Y3Rvcih7IGxldmVsOiAzIH0pO1xuZnVuY3Rpb24gZm9ybWF0TG9nKGNvbG9yLCBoZWFkaW5nLCAuLi5hcmdzKSB7XG4gIGNvbnN0IGJnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5iZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zdCBmZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHsgY29udHJhc3Q6IDggfSkuZmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2coY2hhbGsucmdiKC4uLmZnKS5iZ1JnYiguLi5iZykoaGVhZGluZykpO1xuXG4gIGlmICh0eXBlb2YgYXJncy5maW5kKChpdGVtKSA9PiB7IHJldHVybiBoYXNBbnNpKGl0ZW0pOyB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5rZXl3b3JkKGNvbG9yKSguLi5hcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0TG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZmFuY3lMb2cuanMiLCJmdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICBsZXQgZGV2RW52Um9vdCA9IGVuc3VyZVRyYWlsaW5nU2xhc2goX19kaXJuYW1lKS5zcGxpdCgnL2Rldl9lbnYvJyk7XG4gIGRldkVudlJvb3RbZGV2RW52Um9vdC5sZW5ndGggLSAxXSA9ICcnO1xuICBkZXZFbnZSb290ID0gZGV2RW52Um9vdC5qb2luKCcvZGV2X2Vudi8nKTtcbiAgcmV0dXJuIGRldkVudlJvb3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNzZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vY2hhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9jaGFcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXV1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXV1aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlcm1pbmF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRlcm1pbmF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnNpdGUtc2NyYXBlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkIH0gZnJvbSAnbm9kZS11dWlkJztcbmltcG9ydCB7IGl0LCBkZXNjcmliZSwgYmVmb3JlIH0gZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgZmFuY3lMb2cgZnJvbSAnLi4vY29yZS9mYW5jeUxvZyc7XG5pbXBvcnQgZ2V0RGV2RW52Um9vdCBmcm9tICcuLi9jb3JlL2dldERldkVudlJvb3QnO1xuXG5jb25zdCBkZXZFbnZSb290ID0gZ2V0RGV2RW52Um9vdChfX2Rpcm5hbWUpO1xuXG5jb25zdCBzeW1saW5rTm9kZU1vZHVsZXNDb250ZW50cyA9IChub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgbm9kZU1vZHVsZXNDb3B5UGF0aCkgPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICBmcy5yZWFkZGlyU3luYyhub2RlTW9kdWxlc09yaWdpbmFsUGF0aCkuZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xuICAgIGlmIChpIDwgMjApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzeW1saW5raW5nIG5vZGVfbW9kdWxlcyBjb250ZW50JywgZmlsZSk7XG4gICAgfVxuICAgIGlmIChmaWxlICE9PSAnLmJpbicpIHtcbiAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgIGZzLnN5bWxpbmtTeW5jKFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgZmlsZSksXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsIGZpbGUpKSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmNvbnN0IGJpblByb21pc2VzID0gKGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGgsIGRldkVudkNvcHlQYXRoLCBiaW5Db3B5UGF0aCkgPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb24gPSBmcy5yZWFkSnNvblN5bmMoZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCk7XG4gIGNvbnN0IGRldkVudkJpbkRpY3QgPSBkZXZFbnZDb3B5UGFja2FnZURvdEpzb24uYmluO1xuICBPYmplY3Qua2V5cyhkZXZFbnZCaW5EaWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWwgPSBkZXZFbnZCaW5EaWN0W2tleV07XG4gICAgcHJvbWlzZXMucHVzaChcbiAgICAgIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgdmFsKSwgcGF0aC5yZXNvbHZlKGJpbkNvcHlQYXRoLCBgLi8ke2tleX1gKSksXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5mdW5jdGlvbiBkdXJpbmdQcm9jZXNzKHtcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG1ha2VTaGVsbENtZFN0ciA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH0sXG4gIGVhcmx5ID0gKCkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH0sXG4gIGFzc2V0c1RvR2VuZXJhdGUgPSBbXSxcbn0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIGR1cmluZ1Byb2Nlc3NCZWZvcmUoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgZWFybHkoKS50aGVuKCgpID0+IHtcbiAgICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnR0VORVJBVElORycsIGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhkaXIpO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgICBwYXRoVG9EZW1vRW50cnkgPSBhc3NldEluZm8ucGF0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBjbWQgPSBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoY21kLCBudWxsLCBmYWxzZSk7XG4gICAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICcnKTtcbiAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwKGRldkVudlByb2Nlc3MpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIGFzc2V0cycsICcnKTtcbiAgICAgICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ2JlZm9yZVxcJ3MgZG9uZSgpIGNhbGxlZCcsICcnKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBmYW5jeUxvZygnYmx1ZScsICdkZXZFbnZQcm9jZXNzLnN0ZG91dDonLCBkYXRhU3RyaW5nKTtcbiAgICAgICAgb25EYXRhKGRhdGFTdHJpbmcsIGZpbmlzaCk7XG4gICAgICB9KTtcbiAgICAgIGRldkVudlByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZykge1xuICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgb25TdGRlcnIoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZmFuY3lMb2coJ2N5YW4nLCAnZGV2RW52UHJvY2Vzcy5zdGRlcnI6JywgZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgICBmYW5jeUxvZygneWVsbG93JywgJ2NoaWxkIHByb2Nlc3MgZXhpdGVkIHdpdGggY29kZTonLCBjb2RlKTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7XG4gIHVzZURpc3QsXG4gIG9uQXNzZXQgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgbWFrZVNoZWxsQ21kU3RyLFxuICBhc3NldHNUb0dlbmVyYXRlLFxuICBlYXJseSxcbn0pIHtcbiAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyYXBlJyk7XG4gIGxldCBvbmNlID0gZmFsc2U7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIGVhcmx5LFxuICAgIG1ha2VTaGVsbENtZFN0cjogKHBhdGhUb0RlbW9FbnRyeSkgPT4ge1xuICAgICAgaWYgKG1ha2VTaGVsbENtZFN0cikge1xuICAgICAgICByZXR1cm4gbWFrZVNoZWxsQ21kU3RyKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmVwdWJsaXNoID0gdXNlRGlzdCA/IGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGAgOiAnJztcbiAgICAgIHJldHVybiBgKFxuICAgICAgICAke3ByZXB1Ymxpc2h9bnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScke3BhdGhUb0RlbW9FbnRyeX0nJHt1c2VEaXN0ID8gJyAtLXVzZS1kaXN0JyA6ICcnfSBcbiAgICAgIClgO1xuICAgIH0sXG4gICAgb25EYXRhOiAoZGF0YVN0cmluZywgZmluaXNoKSA9PiB7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBzY3JhcGUoe1xuICAgICAgICAgIHVybHM6IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwLyddLFxuICAgICAgICAgIGRpcmVjdG9yeTogc2NyYXBlRGlyLFxuICAgICAgICAgIHJlc291cmNlU2F2ZXI6IGNsYXNzIE15UmVzb3VyY2VTYXZlciB7XG4gICAgICAgICAgICBzYXZlUmVzb3VyY2UocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgb25Bc3NldChyZXNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvckNsZWFudXAoZXJyKSB7XG4gICAgICAgICAgICAgIGZhbmN5TG9nKCdwaW5rJywgJ3NjcmFwZSByZXNvdXJjZSBlcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RkZXJyLFxuICAgIGFzc2V0c1RvR2VuZXJhdGUsXG4gICAgY2xlYW51cDogKGRldkVudlByb2Nlc3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIHN0YXJ0JywgJycpO1xuICAgICAgICB0ZXJtaW5hdGUoZGV2RW52UHJvY2Vzcy5waWQsIChlcnIpID0+IHtcbiAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3Rlcm1pbmF0ZSBlbmQnLCAnJyk7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgZmFuY3lMb2coJ3JlZCcsICdPb3BzeSBkdXJpbmcgdGVybWluYXRlOicsIGVycik7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgICAgIGNsZWFudXAoZGV2RW52UHJvY2Vzcyk7XG4gICAgICAgICAgICBmcy5yZW1vdmVTeW5jKHNjcmFwZURpcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkdXJpbmdUZXN0KHtcbiAgdGVzdFBhdGhQYXR0ZXJuLFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBkdXJpbmdQcm9jZXNzKHtcbiAgICBvblN0ZGVycixcbiAgICBvbkRhdGEsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwLFxuICAgIG1ha2VTaGVsbENtZFN0cjogKCkgPT4ge1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgIG5wbSBydW4gdGVzdHBhY2thZ2VzIC0tIC0td2F0Y2g9ZmFsc2UgLS10ZXN0UGF0aFBhdHRlcm49JyR7dGVzdFBhdGhQYXR0ZXJufSdcbiAgICAgIClgO1xuICAgIH0sXG4gIH0pO1xufVxuXG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgKCkgPT4ge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBvZiBtb25vcmVwbyB2aWEgb24gZGVtYW5kIGNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG5cbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBvZiBtb25vcmVwbyB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIHVzZURpc3Q6IHRydWUsXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlLm9ubHkoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQgb2Ygc2NhdHRlcmVkIHBhY2thZ2UgcmVwbyB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCwgc2ltaWxhciB0byBucG0gdXNhZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBjb25zdCB0ZXN0UHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0ZGV2ZW52LW1haW4vYXNkZicpO1xuICAgIGNvbnN0IGRldkVudk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvZGV2X2VudicpO1xuICAgIGNvbnN0IG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBub2RlTW9kdWxlc0NvcHlQYXRoID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgJy4vZGV2X2VudicpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGggPSBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL3BhY2thZ2UuanNvbicpO1xuICAgIGNvbnN0IGRldkVudkNvcHlEaXN0UGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpO1xuICAgIGNvbnN0IGJpbkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBiaW5PcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsICcuLy5iaW4nKTtcblxuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGNsZWFudXA6ICgvKiBkZXZFbnZQcm9jZXNzICovKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIHRlc3RQcm9qZWN0UGF0aCcsICcnKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICAgIGVhcmx5OiAoKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnRUFSTFknLCAnJyk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKG5vZGVNb2R1bGVzQ29weVBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMoZGV2RW52Q29weVBhdGgpLFxuICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9wYWNrYWdlLmpzb24nKSwgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCksXG4gICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL2JpbicpLCBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL2JpbicpKSxcbiAgICAgICAgICBmcy5jb3B5U3luYyhiaW5PcmlnaW5hbFBhdGgsIGJpbkNvcHlQYXRoKSxcbiAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aFRvTWFpbiwgYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgKSxcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3BhY2thZ2UuanNvbicpLCBge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAgICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgICAgICAgIFwic3RhcnRcIjogXCJkZXZlbnZcIixcbiAgICAgICAgICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1gKSxcbiAgICAgICAgXTtcblxuXG4gICAgICAgIHByb21pc2VzLnB1c2goc3ltbGlua05vZGVNb2R1bGVzQ29udGVudHMoXG4gICAgICAgICAgbm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsXG4gICAgICAgICAgbm9kZU1vZHVsZXNDb3B5UGF0aCxcbiAgICAgICAgKSk7XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaChiaW5Qcm9taXNlcyhcbiAgICAgICAgICBkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoLFxuICAgICAgICAgIGRldkVudkNvcHlQYXRoLFxuICAgICAgICAgIGJpbkNvcHlQYXRoLFxuICAgICAgICApKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSxcbiAgICAgIC8vIHVzZURpc3Q6IHRydWUsXG4gICAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAoY2QgJHtkZXZFbnZPcmlnaW5hbFBhdGh9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgY3AgLXJmICR7cGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL2Rpc3QnKX0gJHtkZXZFbnZDb3B5RGlzdFBhdGh9ICYmIChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gJiYgbnBtIHJ1biBkZXYpYDtcbiAgICAgICAgLy8gcmV0dXJuIGAoY2QgJHtkZXZFbnZPcmlnaW5hbFBhdGh9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBub2RlICR7cGF0aC5yZXNvbHZlKGRldkVudk9yaWdpbmFsUGF0aCwgJy4vZGlzdC9kZXZfZW52LmpzJyl9IC0tZGVtby1lbnRyeT0nJHtwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycpfScgLS11c2UtZGlzdClgO1xuICAgICAgICAvLyByZXR1cm4gYChjZCAvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL3BhY2thZ2VzL2Rldl9lbnYvICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgbnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL3Rlc3RkZXZlbnYtbWFpbi9hc2RmL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyAtLXVzZS1kaXN0YDtcbiAgICAgIH0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgdGVzdFByb2plY3RQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYnKTtcbiAgICBcbiAgICBjb25zdCBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuL2Rldl9lbnYnKTtcbiAgICBjb25zdCBiaW5PcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBiaW5Db3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi8uYmluJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gICAgLy8gY29uc3QgY21keCA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59JylgO1xuICAgIGNvbnN0IGNtZFggPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBscylgO1xuICAgIGNvbnN0IGNtZFkgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBucG0gcnVuIGRldilgO1xuICAgIGNvbnN0IGNtZFogPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBub2RlIC4vbm9kZV9tb2R1bGVzL2Rldl9lbnYvZGlzdC9kZXZfZW52KWA7XG4gICAgY29uc3QgY21kID0gYFxuICAgICAgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKSAmJiBcbiAgICAgIHJtIC1yZiAke3Rlc3RQcm9qZWN0UGF0aH0gJiZcbiAgICAgIG1rZGlyICR7dGVzdFByb2plY3RQYXRofSAmJlxuICAgICAgbWtkaXIgJHtub2RlTW9kdWxlc0NvcHlQYXRofSAmJlxuICAgICAgbWtkaXIgJHtkZXZFbnZDb3B5UGF0aH0gJiZcbiAgICAgIGNwICR7cGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpfSAke3BhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJlxuICAgICAgZWNobyAne1wibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFwic2NyaXB0c1wiOiB7XCJkZXZcIjogXCJkZXZlbnZcIn19JyA+ICR7cGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICAmJiBub2RlIC4uL3BhY2thZ2VzL2Rldl9lbnYvZGlzdC9kZXZfZW52KVxuICAgIGA7XG4gICAgLy8gY29uc3QgY21kID0gYChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gICYmIG5vZGUgLi4vcGFja2FnZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpYDtcbiAgICAvLyBjb25zdCBjbWQgPSBgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWA7XG4gICAgY29uc29sZS5sb2coJ2NtZCcsIGNtZCk7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIC8vIHVzZURpc3QsXG4gICAgICBlYXJseXg6ICgpID0+IHtcblxuICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ0VBUkxZJywgJycpO1xuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICAgICAgICBjb25zdCBhUHJvY2VzcyA9IHNoZWxsQ29tbWFuZChgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWAsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgIGFQcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JiYicpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJlcHVibGlzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCksXG4gICAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRldkVudkNvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0JyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9wYWNrYWdlLmpzb24nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSksXG4gICAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vYmluJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vYmluJykpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMoYmluT3JpZ2luYWxQYXRoLCBiaW5Db3B5UGF0aCksXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aFRvTWFpbiwgYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgKSxcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksIGB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAgICAgICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCksXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAvLyBmcy5yZWFkZGlyU3luYyhub2RlTW9kdWxlc09yaWdpbmFsUGF0aCkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgIC8vICAgaWYgKGkrKyA8IDIwKSB7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFQVJMWTMnKVxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGlmIChmaWxlICE9PSAnLmJpbicpIHtcbiAgICAgICAgICAvLyAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAvLyAgICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIGZpbGUpLCBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgZmlsZSkpXG4gICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAvLyBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb24gPSBmcy5yZWFkSnNvblN5bmMoZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCk7XG4gICAgICAgICAgLy8gY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gICAgICAgICAgLy8gT2JqZWN0LmtleXMoZGV2RW52QmluRGljdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zdCB2YWwgPSBkZXZFbnZCaW5EaWN0W2tleV07XG4gICAgICAgICAgLy8gICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgIC8vICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsIHZhbCksIHBhdGgucmVzb2x2ZShiaW5Db3B5UGF0aCwgYC4vJHtrZXl9YCkpXG4gICAgICAgICAgLy8gICApO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9LFxuICAgICAgLy8gbm9kZVBhdGg6IG5vZGVQYXRoVmFyLFxuICAgICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7Y29uc29sZS5sb2coJ0ZJTkQgTUUgRE8gU1RVRkYnKTsgcmV0dXJuIGNtZDsgfSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHBhdGg6IHBhdGhUb01haW4sXG4gICAgICAgIC8vICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAvLyAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksXG4gICAgICAgIC8vICAgdGV4dDogYHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAvLyAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgLy8gICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAvLyAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAvLyAgICAgICBcImRldnhcIjogXCJkZXZlbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59J1wiLFxuICAgICAgICAvLyAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgIC8vICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAvLyAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAvLyAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgLy8gICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9YCxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICAgIGNsZWFudXA6ICgvKiBkZXZFbnZQcm9jZXNzICovKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIHRlc3RQcm9qZWN0UGF0aCcsICcnKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6ICdleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKFwidGVzdGRldmVudi1zb21lLWRlcFwiKTsgfTsnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogJ3Rlc3QoXCJhZGRzIDEgKyAyIHRvIGVxdWFsIDNcIiwgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pOycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKCcxIHBhc3NlZCwgMSB0b3RhbCcpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhcy1hbnNpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGFzLWFuc2lcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==