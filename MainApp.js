(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-redux"), require("react-router"), require("redux"), require("normalizr"), require("styled-components"), require("babel-polyfill"), require("node-uuid"), require("re-reselect"), require("react-dom"), require("redux-logger"), require("redux-thunk"));
	else if(typeof define === 'function' && define.amd)
		define("redux-todos-example", ["react", "prop-types", "react-redux", "react-router", "redux", "normalizr", "styled-components", "babel-polyfill", "node-uuid", "re-reselect", "react-dom", "redux-logger", "redux-thunk"], factory);
	else if(typeof exports === 'object')
		exports["redux-todos-example"] = factory(require("react"), require("prop-types"), require("react-redux"), require("react-router"), require("redux"), require("normalizr"), require("styled-components"), require("babel-polyfill"), require("node-uuid"), require("re-reselect"), require("react-dom"), require("redux-logger"), require("redux-thunk"));
	else
		root["redux-todos-example"] = factory(root["react"], root["prop-types"], root["react-redux"], root["react-router"], root["redux"], root["normalizr"], root["styled-components"], root["babel-polyfill"], root["node-uuid"], root["re-reselect"], root["react-dom"], root["redux-logger"], root["redux-thunk"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function getIndexFromCoords(col, row, width) {
  var index = Math.floor(row * width + col);
  if (col > width - 1) {
    throw 'Too far right.';
  }
  return index;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function getCoordsFromIndex(index, width) {
  var row = Math.floor(index / width);
  var col = index - width * row;
  return {
    col: col,
    row: row
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var initializeHomogenousArray = __webpack_require__(10);
module.exports.initializeHomogenousArray = initializeHomogenousArray;

var getIndexFromCoords = __webpack_require__(5);
module.exports.getIndexFromCoords = getIndexFromCoords;

var getCoordsFromIndex = __webpack_require__(8);
module.exports.getCoordsFromIndex = getCoordsFromIndex;

var compose1DArrayInto2DGrid = __webpack_require__(23);
module.exports.compose1DArrayInto2DGrid = compose1DArrayInto2DGrid;

var compose2DGridArrayInto1DAndWidth = __webpack_require__(24);
module.exports.compose2DGridArrayInto1DAndWidth = compose2DGridArrayInto1DAndWidth;

var makeStringGridFrom1DArrayAndWidth = __webpack_require__(26);
module.exports.makeStringGridFrom1DArrayAndWidth = makeStringGridFrom1DArrayAndWidth;

var createNumberIncrementArray = __webpack_require__(25);
module.exports.createNumberIncrementArray = createNumberIncrementArray;

var padCharacter = __webpack_require__(27);
module.exports.padCharacter = padCharacter;

var placeOneSegmentOnGridArray = __webpack_require__(11);
module.exports.placeOneSegmentOnGridArray = placeOneSegmentOnGridArray;

var placeSegmentsOnGridArray = __webpack_require__(28);
module.exports.placeSegmentsOnGridArray = placeSegmentsOnGridArray;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function initializeHomogenousArray(size, value) {
  return Array(size).fill(value);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var initializeHomogenousArray = __webpack_require__(10);
var getIndexFromCoords = __webpack_require__(5);
module.exports = function placeOneSegmentOnGridArray(_ref) {
  var gridAsArray = _ref.gridAsArray,
      width = _ref.width,
      col = _ref.col,
      row = _ref.row,
      content = _ref.content,
      isHorizontal = _ref.isHorizontal,
      validate = _ref.validate;

  var arrayToPlace = Array.isArray(content) ? content : initializeHomogenousArray(content.size, content.value);
  return arrayToPlace.reduce(function (modifiedGridAsArray, value, i) {
    var colAdjusted = isHorizontal ? col + i : col;
    var rowAdjusted = isHorizontal ? row : row + i;
    var index = getIndexFromCoords(colAdjusted, rowAdjusted, width);
    if (index > modifiedGridAsArray.length - 1) {
      throw 'Too far down.';
    }

    var previousCellValue = modifiedGridAsArray[index];

    if (validate) {
      var validationResult = validate(previousCellValue);
      // when validation returns false, it failed genericaly
      if (!validationResult) {
        throw 'validation failed';
        // or if it returns a string, then that's an error message.
      } else if (typeof validationResult === 'string') {
        throw validationResult;
      }
      // validation passing will return true.
    }

    modifiedGridAsArray[index] = value;
    return modifiedGridAsArray;
  }, gridAsArray.slice(0));
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakePost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_uuid__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_uuid__);

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

// if localstorage exists use it, else fake it
var storage = window && window.localStorage || {
  getItem: function getItem() {},
  setItem: function setItem() {}
};

// if storage already has data, use it, otherwise use fake data
var fakeDatabase = JSON.parse(storage.getItem('fakeDatabase')) || {
  justInitialized: true,
  todos: [{
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
    text: 'do dishes',
    completed: true
  }, {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
    text: 'take out trash',
    completed: true
  }, {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
    text: 'buy food',
    completed: false
  }],
  users: [{
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
    name: 'Boomer'
  }, {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
    name: 'Mr. Z'
  }]
};

var updateFakeDatabaseStorage = function updateFakeDatabaseStorage() {
  storage.setItem('fakeDatabase', JSON.stringify(fakeDatabase));
};

var makeUnique = function makeUnique(obj) {
  return JSON.parse(JSON.stringify(obj));
};

// in case we just initialized with fake data, store it.
if (fakeDatabase.justInitialized) {
  delete fakeDatabase.justInitialized;
  updateFakeDatabaseStorage();
}

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

var fetchUsers = function fetchUsers() {
  return delay(500).then(function () {
    return makeUnique(fakeDatabase.users);
  });
};

var fetchToDos = function fetchToDos(filter) {
  return delay(500).then(function () {
    switch (filter) {
      case 'all':
        return makeUnique(fakeDatabase.todos);
      case 'active':
        return makeUnique(fakeDatabase.todos.filter(function (t) {
          return !t.completed;
        }));
      case 'completed':
        return makeUnique(fakeDatabase.todos.filter(function (t) {
          return t.completed;
        }));
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  });
};

var addToDo = function addToDo(text) {
  return delay(500).then(function () {
    var todo = {
      id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_node_uuid__["v4"])(),
      text: text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    updateFakeDatabaseStorage();
    return makeUnique(todo);
  });
};

var updateToDo = function updateToDo(toDoToUpdate) {
  return delay(500).then(function () {
    fakeDatabase.todos = fakeDatabase.todos.map(function (oldToDo) {
      if (toDoToUpdate.id === oldToDo.id) {
        return toDoToUpdate;
      }
      return oldToDo;
    });
    updateFakeDatabaseStorage();
    return makeUnique(toDoToUpdate);
  });
};

var toggleToDo = function toggleToDo(id) {
  return delay(500).then(function () {
    var todo = fakeDatabase.todos.find(function (t) {
      return t.id === id;
    });
    todo.completed = !todo.completed;
    updateFakeDatabaseStorage();
    return makeUnique(todo);
  });
};

var fakePost = function fakePost(endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (endpoint) {
    case 'fetchUsers':
      return fetchUsers(params.filter);
    case 'fetchToDos':
      return fetchToDos(params.filter);
    case 'addToDo':
      return addToDo(params.text);
    case 'updateToDo':
      return updateToDo(params.toDo);
    case 'toggleToDo':
      return toggleToDo(params.id);
    default:
      throw new Error('Unkown endpoint: ' + endpoint);
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function debounce(wait, immediate, cb) {
  cb = !!cb ? cb : function () {};
  var timeout;
  return function () {
    return new Promise(function (resolve, reject) {
      var context = this,
          args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) resolve.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      cb(timeout);
      if (callNow) resolve.apply(context, args);
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["stimulate"] = factory();else root["stimulate"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 45);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      var core = module.exports = { version: '2.4.0' };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(3)(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });

      /***/
    },
    /* 3 */
    /***/function (module, exports) {

      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    },
    /* 4 */
    /***/function (module, exports) {

      module.exports = function (it) {
        return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };

      /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return sharedTimingRaf;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
        return sharedTimingCaf;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__raf__ = __webpack_require__(15);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__raf__);
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var SharedTiming = function () {
        function SharedTiming() {
          _classCallCheck(this, SharedTiming);

          this.running = {
            count: 0,
            limit: 0
          };
          this.stamps = {
            start: null,
            raf: null
          };
          this.rafIdRegistry = {};
        }

        _createClass(SharedTiming, [{
          key: 'makeStamp',
          value: function makeStamp(stamp, reset) {
            if (!this.stamps[stamp] || reset) {
              this.stamps[stamp] = Date.now();
            }
            return this.stamps[stamp];
          }
        }, {
          key: 'raf',
          value: function raf(cb) {
            var _this = this;

            if (!this.running.count) {
              this.running.count = 1;
            } else {
              this.running.count++;
            }
            var rafId = __WEBPACK_IMPORTED_MODULE_0__raf___default()(function () {
              delete _this.rafIdRegistry[rafId];
              _this.stamps.start = null;
              if (!_this.running.limit) {
                _this.running.limit = _this.running.count;
                _this.makeStamp('raf', true);
                _this.running.count = 0;
              }
              _this.running.limit--;
              cb();
            });
            this.rafIdRegistry[rafId] = true;
            return rafId;
          }
        }, {
          key: 'caf',
          value: function caf(rafId) {
            if (rafId && this.rafIdRegistry[rafId]) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__raf__["cancel"])(rafId);
              this.stamps.start = null;
              this.running.count--;
              delete this.rafIdRegistry[rafId];
            }
          }
        }]);

        return SharedTiming;
      }();

      var sharedTiming = new SharedTiming();

      function sharedTimingRaf() {
        return sharedTiming.raf.apply(sharedTiming, arguments);
      }
      function sharedTimingCaf() {
        return sharedTiming.caf.apply(sharedTiming, arguments);
      }

      /* harmony default export */__webpack_exports__["a"] = sharedTiming;

      /***/
    },
    /* 6 */
    /***/function (module, exports) {

      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports) {

      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      var dP = __webpack_require__(28),
          createDesc = __webpack_require__(33);
      module.exports = __webpack_require__(2) ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__(21);
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };

      /***/
    },
    /* 10 */
    /***/function (module, exports) {

      // 7.1.4 ToInteger
      var ceil = Math.ceil,
          floor = Math.floor;
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__(9),
          defined = __webpack_require__(6);
      module.exports = function (it) {
        return IObject(defined(it));
      };

      /***/
    },
    /* 12 */
    /***/function (module, exports) {

      var id = 0,
          px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };

      /***/
    },
    /* 13 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_assign__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_assign__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__stimulate__ = __webpack_require__(16);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__sharedTiming__ = __webpack_require__(5);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "stimulate", function () {
        return __WEBPACK_IMPORTED_MODULE_1__stimulate__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "sharedTiming", function () {
        return __WEBPACK_IMPORTED_MODULE_2__sharedTiming__["sharedTiming"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "raf", function () {
        return __WEBPACK_IMPORTED_MODULE_2__sharedTiming__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "caf", function () {
        return __WEBPACK_IMPORTED_MODULE_2__sharedTiming__["d"];
      });

      /* harmony default export */__webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_1__stimulate__["a" /* default */];

      /***/
    },
    /* 14 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        var now = Date.now,
            root = typeof window === 'undefined' ? global : window,
            vendors = ['moz', 'webkit'],
            suffix = 'AnimationFrame',
            raf = root['request' + suffix],
            caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

        for (var i = 0; !raf && i < vendors.length; i++) {
          raf = root[vendors[i] + 'Request' + suffix];
          caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
        }

        // Some versions of FF have rAF but not cAF
        if (!raf || !caf) {
          var last = 0,
              id = 0,
              queue = [],
              frameDuration = 1000 / 60;

          raf = function raf(callback) {
            if (queue.length === 0) {
              var _now = now(),
                  next = Math.max(10, frameDuration - (_now - last));
              last = next + _now;
              setTimeout(function () {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for (var i = 0; i < cp.length; i++) {
                  if (!cp[i].cancelled) {
                    try {
                      cp[i].callback(last);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
                  }
                }
              }, frameDuration);
            }
            queue.push({
              handle: ++id,
              callback: callback,
              cancelled: false
            });
            return id;
          };

          caf = function caf(handle) {
            for (var i = 0; i < queue.length; i++) {
              if (queue[i].handle === handle) {
                queue[i].cancelled = true;
              }
            }
          };
        }

        module.exports = function (fn) {
          // Wrap in a new function to prevent
          // `cancel` potentially being assigned
          // to the native rAF function
          return raf.call(root, fn);
        };
        module.exports.cancel = function () {
          caf.apply(root, arguments);
        };
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(14));

      /***/
    },
    /* 16 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* unused harmony export stimulate */
      /* unused harmony export StimulationAspect */
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__sharedTiming__ = __webpack_require__(5);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /* eslint no-inner-declarations:0 */
      /* eslint-disable class-methods-use-this */

      var StimulationAspect = function () {
        function StimulationAspect(options) {
          var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'root';
          var parent = arguments[2];

          _classCallCheck(this, StimulationAspect);

          this.parent = parent;
          this.debug = debug;
          this.options = options;
          if (!options.noInit) {
            this.init();
          }
        }

        _createClass(StimulationAspect, [{
          key: 'init',
          value: function init(resetAll) {
            var _this = this;

            this.aspects = {};
            if (!this.persistedSettings) {
              this.persistedSettings = {};
            }
            this.inheritableDefaults = {
              duration: 1000,
              delay: 0,
              delayEveryLoop: false,
              loop: false,
              skipZeroFrame: true,
              endless: false,
              reverse: false,
              usePersistedSettings: false
            };
            this.defaultSettings = {
              delayAddsParentDelay: false,
              from: 0,
              to: 1,
              easing: null,
              aspects: this.aspects,
              frame: null,
              chainedStop: true
            };
            this.settings = _extends({}, this.defaultSettings, this.options);
            if (this.lookupSetting('usePersistedSettings')) {
              Object.assign(this.settings, this.persistedSettings);
            }

            this.aspects = this.settings.aspects;
            if (this.parent) {
              this.aspectTree = this.parent.aspectTree;
            } else {
              this.aspectTree = this;
            }

            var reverse = !!this.lookupSetting('reverse');
            this.previousReverseSetting = reverse;
            var progressDefaults = this.getProgressDefault(reverse);
            if (!this.progress) {
              this.progress = progressDefaults;
              this.progress.aspects = {};
            } else {
              Object.assign(this.progress, progressDefaults);
            }

            this.currentLoopCount = 1;
            this.lastDelaySettingWhileDelaying = null;
            this.running = true;

            this.nextRafId = null;
            this.timestamps = {};

            __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].makeStamp('start');
            this.timestamps.start = __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].stamps.start;
            this.timestamps.recentRaf = null;

            this.frameCount = 0;

            this.iterateAspectNames(function (name) {
              if (!resetAll) {
                _this.aspects[name] = new StimulationAspect(_extends({}, _this.settings.aspects[name]), name, _this);
                _this.progress.aspects[name] = _this.aspects[name].progress;
              } else {
                _this.aspects[name].init(true);
              }
            });
            var skipZeroFrame = this.lookupSetting('skipZeroFrame');
            this.recurse(!skipZeroFrame);
          }
        }, {
          key: 'getCumulativeDelay',
          value: function getCumulativeDelay() {
            var total = this.lookupSetting('delay');
            if (this.parent && this.settings.delayAddsParentDelay) {
              total += this.parent.getCumulativeDelay();
            }
            return total;
          }
        }, {
          key: 'updateSettings',
          value: function updateSettings(changeDict) {
            if (this.lookupSetting('usePersistedSettings')) {
              Object.assign(this.persistedSettings, changeDict);
            }
            Object.assign(this.settings, changeDict);

            return this;
          }
        }, {
          key: 'lookupSetting',
          value: function lookupSetting(settingsName) {
            if (typeof this.settings[settingsName] !== 'undefined' && this.settings[settingsName] !== 'inherit') {
              return this.settings[settingsName];
            } else if (this.parent) {
              return this.parent.lookupSetting(settingsName);
            }
            return this.inheritableDefaults[settingsName];
          }
        }, {
          key: 'iterateAspectNames',
          value: function iterateAspectNames(cb) {
            this.settings.aspectNames = Object.keys(this.settings.aspects);
            this.settings.aspectNames.forEach(function (name) {
              cb(name);
            });
          }
        }, {
          key: 'getProgressDefault',
          value: function getProgressDefault(reverse) {
            if (reverse) {
              return {
                ratioCompleted: 1,
                easedRatioCompleted: 1,
                tweened: this.settings.to,
                easedTweened: this.settings.to
              };
            }
            return {
              ratioCompleted: 0,
              easedRatioCompleted: 0,
              tweened: this.settings.from,
              easedTweened: this.settings.from
            };
          }
        }, {
          key: 'getTween',
          value: function getTween(from, to, ratioCompleted) {
            return from + ratioCompleted * (to - from);
          }
        }, {
          key: 'calculateRatio',
          value: function calculateRatio(options) {
            var startDelay = options.start + options.delay;
            var diff = options.later - startDelay;
            var ratioCompleted = diff / options.duration;
            return ratioCompleted;
          }
        }, {
          key: 'recurse',
          value: function recurse(resetTimestampStart, resetProgress) {
            var _this2 = this;

            if (this.running) {
              this.nextRafId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sharedTiming__["b" /* raf */])(function () {
                if (_this2.running) {
                  _this2.timestamps.recentRaf = __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].stamps.raf;
                  if (resetTimestampStart) {
                    _this2.timestamps.start = _this2.timestamps.recentRaf;
                  }

                  var reverse = !!_this2.lookupSetting('reverse');
                  var reverseIsNegativeOne = reverse ? -1 : 1;
                  var changedDirections = _this2.previousReverseSetting !== reverse;
                  var loop = _this2.lookupSetting('loop');

                  if (changedDirections) {
                    _this2.currentLoopCount = loop + 1 - _this2.currentLoopCount;
                  }

                  _this2.previousReverseSetting = reverse;

                  if (resetProgress) {
                    Object.assign(_this2.progress, _this2.getProgressDefault(reverse));
                  }

                  var delay = 0;
                  if (_this2.lastDelaySettingWhileDelaying !== null) {
                    delay = _this2.lastDelaySettingWhileDelaying;
                  } else {
                    delay = _this2.getCumulativeDelay();
                  }

                  var duration = _this2.lookupSetting('duration');

                  var ratioCompleted = _this2.calculateRatio({
                    start: _this2.timestamps.start,
                    later: _this2.timestamps.recentRaf,
                    delay: delay,
                    duration: duration
                  });

                  var delayEveryLoop = _this2.lookupSetting('delayEveryLoop');
                  if (ratioCompleted > 0 && ratioCompleted < 1 && _this2.lastDelaySettingWhileDelaying === null) {
                    _this2.lastDelaySettingWhileDelaying = delay;
                    if (!_this2.lookupSetting('skipZeroFrame') && delay && _this2.currentLoopCount <= 1 || delay && delayEveryLoop && _this2.currentLoopCount > 1) {
                      _this2.timestamps.start = _this2.timestamps.recentRaf - delay;
                      ratioCompleted = _this2.calculateRatio({
                        start: _this2.timestamps.start,
                        later: _this2.timestamps.recentRaf,
                        delay: delay,
                        duration: duration
                      });
                    }
                  }

                  if (changedDirections) {
                    if (_this2.lastDelaySettingWhileDelaying === null) {
                      _this2.currentLoopCount--;
                      _this2.progress.ratioCompleted = -reverseIsNegativeOne * (1 + (-reverseIsNegativeOne * _this2.progress.ratioCompleted + delay / duration));
                    }

                    var reverseAdjustedRatioCompleted = _this2.progress.ratioCompleted;
                    if (reverse) {
                      reverseAdjustedRatioCompleted = 1 - _this2.progress.ratioCompleted;
                    }
                    var diff = reverseAdjustedRatioCompleted * duration;
                    var startDelay = _this2.timestamps.recentRaf - diff;
                    _this2.timestamps.start = startDelay - delay;

                    ratioCompleted = _this2.calculateRatio({
                      start: _this2.timestamps.start,
                      later: _this2.timestamps.recentRaf,
                      delay: delay,
                      duration: duration
                    });
                  }

                  if (reverse) {
                    ratioCompleted = 1 - ratioCompleted;
                  }
                  var ratioLimit = 1;
                  var withinLimit = ratioCompleted < ratioLimit;
                  var from = _this2.settings.from;
                  var to = _this2.settings.to;

                  if (reverse) {
                    ratioLimit = 0;
                    withinLimit = ratioCompleted > ratioLimit;
                  }

                  var durationAchieved = false;
                  var overlapLoop = false;
                  var stillLooping = false;
                  var p = _this2.progress;
                  p.ratioCompleted = ratioCompleted;
                  if (withinLimit || !duration || _this2.lookupSetting('endless')) {
                    if (_this2.settings.easing) {
                      p.easedRatioCompleted = _this2.settings.easing(p.ratioCompleted);
                    } else {
                      p.easedRatioCompleted = p.ratioCompleted;
                    }
                    p.tweened = _this2.getTween(from, to, p.ratioCompleted);
                    p.easedTweened = _this2.getTween(from, to, p.easedRatioCompleted);
                  } else {
                    var needsAnotherLoop = loop === true || loop && _this2.currentLoopCount < loop;
                    if (needsAnotherLoop && !delayEveryLoop) {
                      p.ratioCompleted = -reverseIsNegativeOne + ratioCompleted;
                      _this2.timestamps.start = _this2.timestamps.start + duration;
                      if (_this2.settings.easing) {
                        p.easedRatioCompleted = _this2.settings.easing(p.ratioCompleted);
                      } else {
                        p.easedRatioCompleted = p.ratioCompleted;
                      }
                      p.tweened = _this2.getTween(from, to, p.ratioCompleted);
                      p.easedTweened = _this2.getTween(from, to, p.easedRatioCompleted);
                      overlapLoop = true;
                    } else {
                      p.ratioCompleted = ratioLimit;
                      p.easedRatioCompleted = ratioLimit;
                      p.tweened = to;
                      p.easedTweened = to;
                      if (reverse) {
                        p.tweened = from;
                        p.easedTweened = from;
                      }
                    }

                    if (needsAnotherLoop) {
                      _this2.currentLoopCount++;
                      stillLooping = true && !overlapLoop;
                      _this2.lastDelaySettingWhileDelaying = null;
                    } else {
                      durationAchieved = true;
                    }
                  }

                  var withinRatioBounds = _this2.progress.ratioCompleted >= 0;
                  if (reverse) {
                    withinRatioBounds = _this2.progress.ratioCompleted <= 1;
                  }

                  if (_this2.settings.frame && withinRatioBounds) {
                    // const startExtreme = reverse ? 1 : 0;
                    // if (this.settings.itDescription) {
                    //   console.log(this.settings.itDescription);
                    // }
                    // console.log(
                    // this.lookupSetting('skipZeroFrame'),
                    // this.frameCount === 0,
                    // ratioCompleted,startExtreme
                    // );
                    // if (
                    // this.settings.boomer && this.lookupSetting('skipZeroFrame') &&
                    // this.frameCount === 0 && delay && startExtreme === ratioCompleted
                    // ) {
                    // console.log('vvvvvvvvvvv');
                    // console.log('--- wtf ---');
                    // console.log('--- ' + this.settings.itDescription);
                    // console.log(this.timestamps.start,this.timestamps.raf);
                    // console.log('^^^^^^^^^^^');
                    // }
                    // if (this.settings.boomer) {
                    //   console.log('vvvvvvvvvvv');
                    //   console.log(this.timestamps.start,this.timestamps.recentRaf,ratioCompleted);
                    //   console.log('^^^^^^^^^^^');
                    // }
                    var progressChanges = _this2.settings.frame.apply(_this2, [_this2.progress]);
                    _this2.iterateFrameCbs(_this2.progress);
                    _this2.frameCount++;
                    Object.assign(_this2.progress, progressChanges);
                  }

                  if (!durationAchieved) {
                    _this2.recurse(stillLooping, stillLooping);
                  } else {
                    _this2.running = false;
                    if (_this2.settings.onComplete) {
                      _this2.settings.onComplete.apply(_this2, [_this2.progress]);
                    }
                  }
                }
              });
            }
          }
        }, {
          key: 'onFrame',
          value: function onFrame(cb) {
            var _this3 = this;

            if (!this.callbacks) {
              this.callbacks = {};
            }
            if (!this.callbacks.frame) {
              this.callbacks.frame = [];
            }
            this.callbacks.frame.push(cb);
            return function () {
              _this3.callbacks = _this3.callbacks.frame.filter(function (accum, cachedCb) {
                return cachedCb !== cb;
              });
            };
          }
        }, {
          key: 'iterateFrameCbs',
          value: function iterateFrameCbs() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (this.callbacks && this.callbacks.frame) {
              this.callbacks.frame.forEach(function (cb) {
                cb.apply(undefined, args);
              });
            }
          }
        }, {
          key: 'resetAll',
          value: function resetAll() {
            this.stop(true);
            this.init(true);

            return this;
          }
        }, {
          key: 'stop',
          value: function stop(skipCallback) {
            var _this4 = this;

            this.running = false;
            __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].caf(this.nextRafId);
            if (this.settings.onStop) {
              if (!skipCallback) {
                this.settings.onStop.apply(this, [this.progress]);
              }
            }
            this.iterateAspectNames(function (name) {
              var aspect = _this4.aspects[name];
              if (aspect.settings.chainedStop) {
                _this4.aspects[name].stop(skipCallback);
              }
            });

            return this;
          }
        }, {
          key: 'resume',
          value: function resume() {
            var _this5 = this;

            if (!this.running) {
              __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].makeStamp('start');
              var duration = this.lookupSetting('duration');
              var reverse = this.lookupSetting('reverse');

              var adjustment = this.progress.ratioCompleted * duration;
              if (reverse) {
                adjustment = (1 - this.progress.ratioCompleted) * duration;
              }
              if (this.lastDelaySettingWhileDelaying) {
                adjustment += this.lastDelaySettingWhileDelaying;
              }
              this.timestamps.start = __WEBPACK_IMPORTED_MODULE_0__sharedTiming__["a" /* default */].stamps.start - adjustment;
              this.timestamps.recentRaf = null;
              this.running = true;

              this.iterateAspectNames(function (name) {
                _this5.aspects[name].resume();
              });

              this.recurse();
            }
            return this;
          }
        }, {
          key: 'birthAspect',
          value: function birthAspect(name, settings) {
            if (this.aspects[name]) {
              this.aspects[name].stop();
            }
            this.aspects[name] = new StimulationAspect(_extends({}, settings), name, this);

            return this.aspects[name];
          }
        }, {
          key: 'progressAt',
          value: function progressAt(path) {
            var pathSplit = path.split('.');
            var place = this.aspectTree;
            if (path) {
              try {
                pathSplit.forEach(function (name) {
                  place = place.aspects[name];
                });
              } catch (e) {
                throw new Error('Error: You specified an invalid aspect path for .progressAt().');
              }
            }
            return place ? place.progress : place;
          }
        }, {
          key: 'aspectAt',
          value: function aspectAt(path) {
            var pathSplit = path.split('.');
            var place = this.aspectTree;
            if (path) {
              try {
                pathSplit.forEach(function (name) {
                  place = place.aspects[name];
                });
              } catch (e) {
                throw new Error('Error: You specified an invalid aspect path for .aspectAt().');
              }
            }
            return place;
          }
        }]);

        return StimulationAspect;
      }();

      var stimulate = function stimulate() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(StimulationAspect, [null].concat(args)))();
      };

      /* harmony default export */__webpack_exports__["a"] = stimulate;

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(41);
      module.exports = __webpack_require__(1).Object.assign;

      /***/
    },
    /* 18 */
    /***/function (module, exports) {

      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(4);
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__(11),
          toLength = __webpack_require__(38),
          toIndex = __webpack_require__(37);
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this),
              length = toLength(O.length),
              index = toIndex(fromIndex, length),
              value;
          // Array#includes uses SameValueZero equality algorithm
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            if (value != value) return true;
            // Array#toIndex ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }
          }return !IS_INCLUDES && -1;
        };
      };

      /***/
    },
    /* 21 */
    /***/function (module, exports) {

      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      // optional / simple context binding
      var aFunction = __webpack_require__(18);
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function () /* ...args */{
          return fn.apply(that, arguments);
        };
      };

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(4),
          document = __webpack_require__(0).document
      // in old IE typeof document.createElement is 'object'
      ,
          is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };

      /***/
    },
    /* 24 */
    /***/function (module, exports) {

      // IE 8- don't enum bug keys
      module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(0),
          core = __webpack_require__(1),
          hide = __webpack_require__(8),
          redefine = __webpack_require__(34),
          ctx = __webpack_require__(22),
          PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
            key,
            own,
            out,
            exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          // extend global
          if (target) redefine(target, key, out, type & $export.U);
          // export
          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global.core = core;
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library` 
      module.exports = $export;

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
        return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // 19.1.2.1 Object.assign(target, source, ...)

      var getKeys = __webpack_require__(31),
          gOPS = __webpack_require__(29),
          pIE = __webpack_require__(32),
          toObject = __webpack_require__(39),
          IObject = __webpack_require__(9),
          $assign = Object.assign;

      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports = !$assign || __webpack_require__(3)(function () {
        var A = {},
            B = {},
            S = Symbol(),
            K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) {
          B[k] = k;
        });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = toObject(target),
            aLen = arguments.length,
            index = 1,
            getSymbols = gOPS.f,
            isEnum = pIE.f;
        while (aLen > index) {
          var S = IObject(arguments[index++]),
              keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
              length = keys.length,
              j = 0,
              key;
          while (length > j) {
            if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
          }
        }return T;
      } : $assign;

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(19),
          IE8_DOM_DEFINE = __webpack_require__(26),
          toPrimitive = __webpack_require__(40),
          dP = Object.defineProperty;

      exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {/* empty */}
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports) {

      exports.f = Object.getOwnPropertySymbols;

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      var has = __webpack_require__(7),
          toIObject = __webpack_require__(11),
          arrayIndexOf = __webpack_require__(20)(false),
          IE_PROTO = __webpack_require__(35)('IE_PROTO');

      module.exports = function (object, names) {
        var O = toIObject(object),
            i = 0,
            result = [],
            key;
        for (key in O) {
          if (key != IE_PROTO) has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }return result;
      };

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__(30),
          enumBugKeys = __webpack_require__(24);

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };

      /***/
    },
    /* 32 */
    /***/function (module, exports) {

      exports.f = {}.propertyIsEnumerable;

      /***/
    },
    /* 33 */
    /***/function (module, exports) {

      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(0),
          hide = __webpack_require__(8),
          has = __webpack_require__(7),
          SRC = __webpack_require__(12)('src'),
          TO_STRING = 'toString',
          $toString = Function[TO_STRING],
          TPL = ('' + $toString).split(TO_STRING);

      __webpack_require__(1).inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val == 'function';
        if (isFunction) has(val, 'name') || hide(val, 'name', key);
        if (O[key] === val) return;
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
        if (O === global) {
          O[key] = val;
        } else {
          if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else {
            if (O[key]) O[key] = val;else hide(O, key, val);
          }
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return typeof this == 'function' && this[SRC] || $toString.call(this);
      });

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      var shared = __webpack_require__(36)('keys'),
          uid = __webpack_require__(12);
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(0),
          SHARED = '__core-js_shared__',
          store = global[SHARED] || (global[SHARED] = {});
      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(10),
          max = Math.max,
          min = Math.min;
      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.15 ToLength
      var toInteger = __webpack_require__(10),
          min = Math.min;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(6);
      module.exports = function (it) {
        return Object(defined(it));
      };

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__(4);
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.3.1 Object.assign(target, source)
      var $export = __webpack_require__(25);

      $export($export.S + $export.F, 'Object', { assign: __webpack_require__(27) });

      /***/
    },,,,
    /* 42 */
    /* 43 */
    /* 44 */
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(13);

      /***/
    }])
  );
});
//# sourceMappingURL=stimulate.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchToDos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toggleToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return assignUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(16);





var fetchToDos = function fetchToDos(filter) {
  return function (dispatch, getState) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__getters__["a" /* getIsFetching */])(getState(), filter)) {
      return Promise.resolve();
    }

    dispatch({
      type: 'FETCH_TODOS_REQUEST',
      filter: filter
    });

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_api__["a" /* fakePost */])('fetchToDos', { filter: filter }).then(function (response) {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter: filter,
        response: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(response, __WEBPACK_IMPORTED_MODULE_1__schema__["a" /* arrayOfToDos */])
      });
    }, function (error) {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter: filter,
        message: error.message || 'Something went wrong.'
      });
    });
  };
};

var addToDo = function addToDo(text) {
  return function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_api__["a" /* fakePost */])('addToDo', { text: text }).then(function (response) {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(response, __WEBPACK_IMPORTED_MODULE_1__schema__["b" /* todo */])
      });
    });
  };
};

var toggleToDo = function toggleToDo(id) {
  return function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_api__["a" /* fakePost */])('toggleToDo', { id: id }).then(function (response) {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(response, __WEBPACK_IMPORTED_MODULE_1__schema__["b" /* todo */])
      });
    });
  };
};

var assignUser = function assignUser(id) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch({
      type: 'PREPARE_EXTERNAL_ASSIGNMENT',
      userId: null
    });
    dispatch({
      type: 'ASSIGN_USER_TO_TODO',
      toDoId: id,
      userId: state.appRoot.toBeAssigned
    });
    state = getState();
    var toDo = state.toDos.toDosIdDict[id];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_api__["a" /* fakePost */])('updateToDo', { toDo: toDo });
  };
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getVisibleToDos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getToBeAssignedFromRoot; });
var getVisibleToDos = function getVisibleToDos(state, filter) {
  var ids = state.toDos.listByFilter[filter].ids;
  return ids.map(function (id) {
    return state.toDos.toDosIdDict[id];
  });
};

var getIsFetching = function getIsFetching(state, filter) {
  return state.toDos.listByFilter[filter].isFetching;
};

var getErrorMessage = function getErrorMessage(state, filter) {
  return state.toDos.listByFilter[filter].errorMessage;
};

var getToBeAssignedFromRoot = function getToBeAssignedFromRoot(state) {
  return state.appRoot.toBeAssigned;
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usersReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalizr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_re_reselect__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_re_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_re_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_styled_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background: #bbb;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n'], ['\n  background: #bbb;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











// =================

var usersReducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_redux__["combineReducers"])({
  idDict: function idDict() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return _extends({}, state, action.response.entities.users);
      default:
        return state;
    }
  },
  list: function list() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return action.response.result;
      default:
        return state;
    }
  }
});

// =================

var usersSchema = new __WEBPACK_IMPORTED_MODULE_5_normalizr__["Schema"]('users');
var arrayOfUsersSchema = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_normalizr__["arrayOf"])(usersSchema);
var schema = {
  users: usersSchema,
  arrayOfUsers: arrayOfUsersSchema
};

var actions = {
  fetchUsers: function fetchUsers() {
    return function (dispatch /* , getState*/) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_api__["a" /* fakePost */])('fetchUsers').then(function (response) {
        dispatch({
          type: 'FETCH_USERS_SUCCESS',
          response: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_normalizr__["normalize"])(response, schema.arrayOfUsers)
        });
      });
    };
  }
};

// =================

var getUserId = function getUserId(state, props) {
  return props.user.id;
};

var getTodosIdDict = function getTodosIdDict(state, props) {
  return state.toDos.toDosIdDict;
};

var getToDoAssignments = __WEBPACK_IMPORTED_MODULE_7_re_reselect___default()([getUserId, getTodosIdDict], function (userId, toDosIdDict) {
  console.log('selector processing', userId);
  return Object.keys(toDosIdDict).reduce(function (accum, toDoId) {

    if (toDosIdDict[toDoId].assignedUserId === userId) {
      accum.push(toDosIdDict[toDoId].text);
    }
    return accum;
  }, []);
})(
/*
 * Re-reselect resolver function.
 * Cache/call a new selector for each different "props.user.id"
 */
function (state, props) {
  return props.user.id;
});

// const makeMapStateToProps = () => {
//   const mapStateToProps = (state, props) => {
//     return {
//       toDoAssignments: getToDoAssignments(state, props)
//     }
//   }
//   return mapStateToProps
// }
var UserStyled = __WEBPACK_IMPORTED_MODULE_8_styled_components___default.a.div(_templateObject);

var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          _onClick = _props.onClick,
          toDoAssignments = _props.toDoAssignments;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        UserStyled,
        {
          onClick: function onClick() {
            return _onClick(user.id);
          }
        },
        user.name,
        ' - ',
        JSON.stringify(toDoAssignments)
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

User.propTypes = {
  user: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  toDoAssignments: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};

User = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(
//mapStateToProps
function (state, props) {
  return {
    toDoAssignments: getToDoAssignments(state, props)
  };
}
//,mapDispatchToProps
//,mergeProps
)(User);

// =================


var Users = function (_Component2) {
  _inherits(Users, _Component2);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Users'
        ),
        this.props.users.map(function (user) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(User, {
            key: user.id,
            user: user,
            onClick: function onClick() {
              _this3.props.prepareExternalAssignment(user.id);
            }
          });
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'assigning: ',
          this.props.toBeAssigned
        )
      );
    }
  }]);

  return Users;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Users.propTypes = {
  users: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  fetchUsers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  prepareExternalAssignment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  toBeAssigned: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

var getDetailsOfToBeAssigned = function getDetailsOfToBeAssigned(state) {
  var id = state.appRoot.toBeAssigned;
  if (!id) {
    return id;
  }
  return state.users.idDict[id].name;
};

var mapStateToProps = function mapStateToProps(state /* , { params }*/) {
  return {
    users: state.users.list.map(function (id) {
      return state.users.idDict[id];
    }),
    toBeAssigned: getDetailsOfToBeAssigned(state)
  };
};

var mapDispatchToProps = {
  fetchUsers: actions.fetchUsers,
  prepareExternalAssignment: function prepareExternalAssignment(userId) {
    return function (dispatch /* , getState*/) {
      dispatch({
        type: 'PREPARE_EXTERNAL_ASSIGNMENT',
        userId: userId
      });
    };
  }
};

Users = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Users));



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var docEl = document.documentElement;
var docBody = document.body;

function getWinWidth() {
  return window.innerWidth || docEl.clientWidth || docBody.clientWidth;
}

function getWinHeight() {
  return window.innerHeight || docEl.clientHeight || docBody.clientHeight;
}

function getDocumentHeight() {
  return Math.max(docBody.scrollHeight, docBody.offsetHeight, docEl.clientHeight, docEl.scrollHeight, docEl.offsetHeight);
}

var getOffset = function getOffset(elem) {
  var rect = elem.getBoundingClientRect();

  return {
    top: rect.top + docBody.scrollTop,
    left: rect.left + docBody.scrollLeft
  };
};

var vanilla = {
  docEl: docEl,
  docBody: docBody,
  getWinWidth: getWinWidth,
  getWinHeight: getWinHeight,
  getDocumentHeight: getDocumentHeight,
  getOffset: getOffset
};
/* harmony default export */ __webpack_exports__["a"] = (vanilla);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return heightTweak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debounce__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vanilla__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var docEl = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].docEl,
    docBody = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].docBody,
    getWinWidth = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].getWinWidth,
    getWinHeight = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].getWinHeight,
    getDocumentHeight = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].getDocumentHeight,
    getOffset = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].getOffset,
    domEfficiencyCache = __WEBPACK_IMPORTED_MODULE_1_vanilla__["a" /* default */].domEfficiencyCache;


var dimensions = {
  height: getWinHeight(),
  width: getWinWidth()
};

// const isTouchDevice = 'ontouchstart' in document.documentElement;
// const danger_of_url_bar_disappearing_and_thus_window_height_will_change = isTouchDevice;
var heightTweak = 'ontouchstart' in document.documentElement ? 75 : 0;


var resizeDeb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_debounce__["a" /* default */])(300, null);
var cbs = [];
var dims = {};
function removeCb(fun) {
  cbs = cbs.filter(function (cb) {
    return cb !== fun;
  });
}
function addCb(fun) {
  cbs.push(fun);
  return function () {
    removeCb(fun);
  };
}
window.addEventListener('resize', function () {
  var lastDimensions = _extends({}, dimensions);
  Object.assign(dimensions, {
    height: getWinHeight(),
    width: getWinWidth()
  });
  //scrolling triggers resize on some mobile browsers (minimizing url when not scrolled to top)
  //don't refresh under these conditions
  var newWindowHeight = dimensions.height - heightTweak;
  var newWindowWidth = dimensions;
  var threshTest = Math.abs(lastDimensions.height - heightTweak - newWindowHeight) > 70;
  if (threshTest || lastDimensions.width !== newWindowWidth) {
    resizeDeb().then(function () {
      cbs.forEach(function (cb) {
        cb();
      });
    });
  }
}, false);

/* harmony default export */ __webpack_exports__["a"] = ({
  cbs: cbs,
  addCb: addCb,
  removeCb: removeCb,
  dimensions: dimensions
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Routing__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configureStore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bbb__ = __webpack_require__(39);






// import 'sum/sum.mod';


console.log('bb', __WEBPACK_IMPORTED_MODULE_5_bbb__["a" /* default */]);

var rootEl = void 0;
function getRootEl() {
  if (rootEl) {
    return rootEl;
  }
  rootEl = document.getElementById('root');
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
  }
  return rootEl;
}

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__configureStore__["a" /* default */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Routing__["a" /* default */], { store: store }), getRootEl());

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Board__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Board___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Board__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gridUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gridUtils__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ReactiveBoard = function (_Board) {
  _inherits(ReactiveBoard, _Board);

  function ReactiveBoard() {
    var _ref;

    _classCallCheck(this, ReactiveBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ReactiveBoard.__proto__ || Object.getPrototypeOf(ReactiveBoard)).call.apply(_ref, [this].concat(args)));

    _this.onUpdateCbs = [];
    return _this;
  }

  _createClass(ReactiveBoard, [{
    key: 'onUpdate',
    value: function onUpdate(cb) {
      this.onUpdateCbs.push(cb);
    }
  }, {
    key: 'update',
    value: function update() {
      var _get2;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get2 = _get(ReactiveBoard.prototype.__proto__ || Object.getPrototypeOf(ReactiveBoard.prototype), 'update', this)).call.apply(_get2, [this].concat(args));
      this.onUpdateCbs.forEach(function (cb) {
        cb();
      });
    }
  }]);

  return ReactiveBoard;
}(__WEBPACK_IMPORTED_MODULE_1__Board___default.a);

var Battleship = function (_Component) {
  _inherits(Battleship, _Component);

  function Battleship() {
    _classCallCheck(this, Battleship);

    var _this2 = _possibleConstructorReturn(this, (Battleship.__proto__ || Object.getPrototypeOf(Battleship)).call(this));

    _this2.state = {
      placementLog: []
    };
    return _this2;
  }

  _createClass(Battleship, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      this.board = new ReactiveBoard(10, 10);
      this.board.onUpdate(function () {
        _this3.setState({
          stringGrid: _this3.board.getStringGrid(),
          gridAsArray: _this3.board.gridAsArray,
          width: _this3.board.width
        });
      });

      var placementAttempts = [
      // good
      this.board.place([{
        col: 2,
        row: 4,
        content: {
          size: 3,
          value: '#'
        },
        isHorizontal: false
      }, {
        col: 3,
        row: 4,
        content: ['&', '&', '&', '&'],
        isHorizontal: true
      }]),

      // overlap error
      this.board.place([{
        col: 2,
        row: 5,
        content: ['#', '#', '#'],
        isHorizontal: true
      }]),

      // too far right error
      this.board.place([{
        col: 8,
        row: 0,
        content: ['#', '#', '#'],
        isHorizontal: true
      }]),

      // too far down error
      this.board.place([{
        col: 0,
        row: 8,
        content: {
          size: 3,
          value: '#'
        },
        isHorizontal: false
      }])];

      var placementLog = placementAttempts.reduce(function (log, status) {
        return log.concat([status.success ? 'success' : status.error]);
      }, []);

      this.setState({
        placementLog: this.state.placementLog.concat(placementLog)
      });

      this.board.update();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Battleship'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          null,
          this.state.stringGrid
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'gridAsArray'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          JSON.stringify(this.state.gridAsArray)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'gridAsArray - compose1DArrayInto2DGrid (is array of cols)'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.state.gridAsArray && JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose1DArrayInto2DGrid"])(this.state.width, this.state.gridAsArray))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'gridAsArray - compose1DArrayInto2DGrid (is array of cols) - compose2DGridArrayInto1DAndWidth'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.state.gridAsArray && JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose2DGridArrayInto1DAndWidth"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose1DArrayInto2DGrid"])(this.state.width, this.state.gridAsArray)))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'gridAsArray - compose1DArrayInto2DGrid (is array of rows)'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.state.gridAsArray && JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose1DArrayInto2DGrid"])(this.state.width, this.state.gridAsArray, true))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'gridAsArray - compose1DArrayInto2DGrid (is array of rows) - compose2DGridArrayInto1DAndWidth'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.state.gridAsArray && JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose2DGridArrayInto1DAndWidth"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__gridUtils__["compose1DArrayInto2DGrid"])(this.state.width, this.state.gridAsArray, true), true))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Placement log'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          JSON.stringify(this.state.placementLog)
        )
      );
    }
  }]);

  return Battleship;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Battleship.propTypes = {};
/* harmony default export */ __webpack_exports__["a"] = (Battleship);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(9),
    createNumberIncrementArray = _require.createNumberIncrementArray,
    placeSegmentsOnGridArray = _require.placeSegmentsOnGridArray,
    makeStringGridFrom1DArrayAndWidth = _require.makeStringGridFrom1DArrayAndWidth,
    padCharacter = _require.padCharacter,
    getIndexFromCoords = _require.getIndexFromCoords;

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
    var totalCells = this.width * this.height;
    this.gridAsArray = createNumberIncrementArray(0, totalCells - 1);
    this.placements = [];
  }

  _createClass(Board, [{
    key: 'update',
    value: function update(toUpdate) {
      if (toUpdate) {
        Object.assign(this, toUpdate);
      }
    }
  }, {
    key: 'place',
    value: function place(placements) {
      try {
        var gridModification = placeSegmentsOnGridArray({
          gridAsArray: this.gridAsArray,
          width: this.width,
          placements: placements,
          validate: function validate(previousCellValue) {
            if (typeof previousCellValue !== 'number') {
              return 'Overlapping placements.';
            }
            return true;
          }
        });
        this.update({
          gridAsArray: gridModification,
          placements: this.placements.concat(placements)
        });
        return {
          success: true
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }, {
    key: 'getRemainingShips',
    value: function getRemainingShips() {
      return this.placements.reduce(function (remaining, placement) {
        var ship = placement.content[0].ship;
        if (ship) {
          remaining += ship.remainingCells > 0 ? 1 : 0;
        }
        return remaining;
      }, 0);
    }
  }, {
    key: 'attack',
    value: function attack(col, row) {
      if (col > this.width - 1) {
        return 'Too far right';
      }
      if (row > this.height - 1) {
        return 'Too far down';
      }
      var index = getIndexFromCoords(col, row, this.width);
      var cellContent = this.gridAsArray[index];
      if (cellContent && cellContent.ship) {
        var cellAttackCount = cellContent.attack();
        if (this.getRemainingShips() === 0) {
          return 'all sunk';
        } else if (cellContent.ship.remainingCells === 0) {
          return 'sunk';
        } else if (cellAttackCount === 1) {
          // If cellAttackCount is greater than 1, it's a repeat hit, therefor a miss
          return 'hit';
        }
        return 'miss';
      }
      return 'miss';
    }
  }, {
    key: 'getStringGrid',
    value: function getStringGrid() {
      var highestDigits = ('' + this.gridAsArray[this.gridAsArray.length - 1]).length;
      return makeStringGridFrom1DArrayAndWidth(this.gridAsArray, this.width, function (v) {
        if (typeof v === 'number') {
          return padCharacter(v, highestDigits, '0');
        }
        return padCharacter((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? 'O' : v, highestDigits, '_');
      });
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var getCoordsFromIndex = __webpack_require__(8);
module.exports = function compose1DArrayInto2DGrid(width, array, isArrayOfRows) {
  // const isArrayOfColumns = !isArrayOfRows;

  // Array of columns looks like this:
  /*
    [[0,3],[1,4],[2,5]]
   */
  // Array of rows looks like this:
  /*
    [[0,1],[2,3],[4,5]]
   */

  return array.reduce(function (grid, value, index) {
    // Take that item's index and the desired grid's width
    // and use that information to determine a set of x,y coordinates.
    var coords = getCoordsFromIndex(index, width);
    // (if we're making an array of columns the calculation just needs us to reverse the coords)
    if (!isArrayOfRows) {
      coords = {
        row: coords.col,
        col: coords.row
      };
    }
    // Look at the grid you are in the middle of building,
    // and check to see it already has a row array
    // for your row coordinate.
    if (!grid[coords.row]) {
      // If not, create it.
      grid[coords.row] = [];
    }
    // Now you can assign a value to that column array.
    grid[coords.row][coords.col] = value;
    return grid;
  }, []);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var getIndexFromCoords = __webpack_require__(5);
module.exports = function compose2DGridArrayInto1DAndWidth(grid, isArrayOfRows) {
  if (isArrayOfRows) {
    var _oneDimensionArray = [];
    var _width = grid[0].length;
    grid.forEach(function (row) {
      _oneDimensionArray = _oneDimensionArray.concat(row);
    });
    return {
      array: _oneDimensionArray,
      width: _width
    };
  }
  // else
  var oneDimensionArray = [];
  var width = grid.length;
  grid.forEach(function (column, colPosition) {
    column.forEach(function (value, rowPosition) {
      var oneDimensionIndex = getIndexFromCoords(colPosition, rowPosition, width);
      oneDimensionArray[oneDimensionIndex] = value;
    });
  });
  return {
    array: oneDimensionArray,
    width: width
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function createNumberIncrementArray(a, z) {
  var array = [];
  var i = a;
  while (i <= z) {
    array.push(i++);
  }
  return array;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function makeStringGridFrom1DArrayAndWidth(array, width, transform) {
  return array.reduce(function (stringGrid, value, index) {
    var isLastItemInRow = (index + 1) / width % 1 === 0;
    var suffix = isLastItemInRow ? '\n' : ' ';
    var transformedValue = transform ? transform(value) : value;
    return '' + stringGrid + transformedValue + suffix;
  }, '');
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function padCharacter(num, size, char) {
  var s = "" + num;
  while (s.length < size) {
    s = "" + char + s;
  }
  return s;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var placeOneSegmentOnGridArray = __webpack_require__(11);
module.exports = function placeSegmentsOnGridArray(options) {
  return options.placements.reduce(function (modifiedGridAsArray, placement) {
    return placeOneSegmentOnGridArray(Object.assign({}, options, placement, { gridAsArray: modifiedGridAsArray }));
  }, options.gridAsArray.slice(0));
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DragAndTosserDataHOC__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_generateCssTransformVal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var DragAndTossable = function (_Component) {
  _inherits(DragAndTossable, _Component);

  function DragAndTossable() {
    _classCallCheck(this, DragAndTossable);

    var _this = _possibleConstructorReturn(this, (DragAndTossable.__proto__ || Object.getPrototypeOf(DragAndTossable)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(DragAndTossable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.onDragUp(function () {
        var stimulation = _this2.props.toss({
          startCoords: _this2.props.delta,
          velocity: _this2.props.velocity,
          gravity: 0.3
        });

        stimulation.onFrame(function () {
          var msSinceStart = stimulation.timestamps.recentRaf - stimulation.timestamps.start;
          if (msSinceStart > 6000) {
            stimulation.stop(true);
          }
        });

        _this2.stimulation = stimulation;
      });

      this.props.onDraggerStart(function () {
        var cachedTossingCoords = _this2.props.tossingCoords && _extends({}, _this2.props.tossingCoords);
        _this2.stimulation && _this2.stimulation.stop(true);
        _this2.props.setDelta(_this2.props.tossingCoords);
        _this2.props.setTossingCoords(null);
        delete _this2.stimulation;
        return cachedTossingCoords;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {};
      var pertinentCoords = this.props.tossingCoords || this.props.delta;
      style.transform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_generateCssTransformVal__["a" /* default */])(pertinentCoords);
      style.WebkitTransform = style.transform;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: this.props.className,
          onTouchStart: this.props.onTouchStart,
          onMouseDown: this.props.onMouseDown,
          style: style
        },
        this.props.children
      );
    }
  }]);

  return DragAndTossable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DragAndTossable.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  delta: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  velocity: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  tossingCoords: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  onDragUp: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onDraggerStart: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onTouchStart: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onMouseDown: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  setDelta: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  setTossingCoords: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  toss: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};
DragAndTossable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DragAndTosserDataHOC__["a" /* default */])(DragAndTossable);

/* harmony default export */ __webpack_exports__["a"] = (DragAndTossable);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DraggerDataHOC__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TosserDataHOC__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DragAndTosserDataHOC = function DragAndTosserDataHOC(ComponentToWrap) {
  var DragAndTosserData = function (_Component) {
    _inherits(DragAndTosserData, _Component);

    function DragAndTosserData() {
      _classCallCheck(this, DragAndTosserData);

      return _possibleConstructorReturn(this, (DragAndTosserData.__proto__ || Object.getPrototypeOf(DragAndTosserData)).apply(this, arguments));
    }

    _createClass(DragAndTosserData, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          ComponentToWrap,
          this.props,
          this.props.children
        );
      }
    }]);

    return DragAndTosserData;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  DragAndTosserData.propTypes = {
    children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DraggerDataHOC__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TosserDataHOC__["a" /* default */])(DragAndTosserData));
};

/* harmony default export */ __webpack_exports__["a"] = (DragAndTosserDataHOC);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_processXY__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_docListeners__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bind_here__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_getCoordsFromEvent__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stimulate__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stimulate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_stimulate__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var DraggerDataHOC = function DraggerDataHOC(ComponentToWrap) {
  var DraggerData = function (_Component) {
    _inherits(DraggerData, _Component);

    function DraggerData() {
      _classCallCheck(this, DraggerData);

      var _this = _possibleConstructorReturn(this, (DraggerData.__proto__ || Object.getPrototypeOf(DraggerData)).call(this));

      _this.state = {
        delta: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        }
      };
      _this.methodsBoundHere = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_bind_here__["a" /* default */])(_this, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onDragUp', 'onDraggerStart', 'onDragMove', 'setDelta']);
      _this.methodsBoundHere.onMouseDown = _this.methodsBoundHere.onTouchStart;
      Object.assign(_this, _this.methodsBoundHere);
      return _this;
    }

    _createClass(DraggerData, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeDocListeners();
      }
    }, {
      key: 'onTouchStart',
      value: function onTouchStart(e) {
        e.preventDefault();
        var offset = this.onDraggerStartCb && this.onDraggerStartCb();
        var eventCoords = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_getCoordsFromEvent__["a" /* default */])(e);
        var startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_processXY__["a" /* default */])(function (xOrY) {
          return offset ? eventCoords[xOrY] - offset[xOrY] : eventCoords[xOrY];
        });
        var stateSetting = {
          startPoint: startPoint
        };
        this.addDocListeners();

        this.setState(stateSetting);
      }
    }, {
      key: 'onTouchMove',
      value: function onTouchMove(e) {
        var _this2 = this;

        e.preventDefault();
        var coords = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_getCoordsFromEvent__["a" /* default */])(e);
        var wasTouching = !!this.state.startPoint;

        if (!this.rafOccupied) {
          this.rafOccupied = true;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_stimulate__["raf"])(function () {
            var isTouching = !!_this2.state.startPoint;
            if (isTouching && wasTouching) {
              var updatedDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_processXY__["a" /* default */])(function (xOrY) {
                return coords[xOrY] - _this2.state.startPoint[xOrY];
              });

              var data = {
                velocity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_processXY__["a" /* default */])(function (xOrY) {
                  return updatedDelta[xOrY] - _this2.state.delta[xOrY];
                }),
                delta: updatedDelta
              };
              _this2.setState(data);
              _this2.props.onDraggy && _this2.props.onDraggy(data);
              _this2.onDragMoveCb && _this2.onDragMoveCb(data);
            }

            _this2.rafOccupied = false;
          });
        }
      }
    }, {
      key: 'onTouchEnd',
      value: function onTouchEnd() {
        if (this.state.startPoint) {
          var nextState = {
            startPoint: null
          };
          // if (this.props.maybeResetAtEnd && this.props.maybeResetAtEnd(this.state)) {
          // nextState.delta = {
          //   x: 0,
          //   y: 0
          // };
          // }
          this.setState(nextState);
          this.onDragUpCb && this.onDragUpCb();
        }
        this.removeDocListeners();
      }
    }, {
      key: 'onDragUp',
      value: function onDragUp(cb) {
        this.onDragUpCb = cb;
      }
    }, {
      key: 'onDraggerStart',
      value: function onDraggerStart(cb) {
        this.onDraggerStartCb = cb;
      }
    }, {
      key: 'onDragMove',
      value: function onDragMove(cb) {
        this.onDragMoveCb = cb;
      }
    }, {
      key: 'setDelta',
      value: function setDelta(coords) {
        coords && this.setState({ delta: coords });
      }
    }, {
      key: 'removeDocListeners',
      value: function removeDocListeners() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_docListeners__["a" /* default */])('remove', ['touchmove', this.onTouchMove], ['mousemove', this.onTouchMove], ['touchend', this.onTouchEnd], ['mouseup', this.onTouchEnd]);
      }
    }, {
      key: 'addDocListeners',
      value: function addDocListeners() {
        this.removeDocListeners();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_docListeners__["a" /* default */])('add', ['touchmove', this.onTouchMove], ['mousemove', this.onTouchMove], ['touchend', this.onTouchEnd], ['mouseup', this.onTouchEnd]);
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          ComponentToWrap,
          _extends({}, this.methodsBoundHere, this.state, this.props),
          this.props.children
        );
      }
    }]);

    return DraggerData;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  return DraggerData;
};
/* harmony default export */ __webpack_exports__["a"] = (DraggerDataHOC);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_StimulateHOC__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TosserDataHOC = function TosserDataHOC(ComponentToWrap) {
  var TosserData = function (_Component) {
    _inherits(TosserData, _Component);

    function TosserData() {
      _classCallCheck(this, TosserData);

      var _this = _possibleConstructorReturn(this, (TosserData.__proto__ || Object.getPrototypeOf(TosserData)).call(this));

      _this.toss = _this.toss.bind(_this);
      return _this;
    }

    _createClass(TosserData, [{
      key: 'toss',
      value: function toss(_ref) {
        var _this2 = this;

        var velocity = _ref.velocity,
            startCoords = _ref.startCoords,
            _ref$gravity = _ref.gravity,
            gravity = _ref$gravity === undefined ? 0 : _ref$gravity,
            _ref$onFrame = _ref.onFrame,
            onFrame = _ref$onFrame === undefined ? function () {} : _ref$onFrame;

        var currentVelocity = _extends({}, velocity);

        var stimulation = this.props.stimulate({
          endless: true,
          noInit: true,
          // from: 5,
          // to: 100,
          // duration: 1000,
          frame: function frame(progress) {
            currentVelocity.y = currentVelocity.y + gravity;
            var updatedTossingCoords = {
              x: _this2.state.tossingCoords.x + currentVelocity.x,
              y: _this2.state.tossingCoords.y + currentVelocity.y
            };

            _this2.setState({
              tossingCoords: updatedTossingCoords
            });

            onFrame(updatedTossingCoords);
          }
        });

        this.setState({
          tossingCoords: Object.assign({}, startCoords)
        }, function () {
          stimulation.init();
        });
        return stimulation;
      }
    }, {
      key: 'setTossingCoords',
      value: function setTossingCoords(coords) {
        this.setState({
          tossingCoords: coords
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          ComponentToWrap,
          _extends({}, this.props, this.state, {
            toss: this.toss,
            setTossingCoords: this.setTossingCoords.bind(this)
          }),
          this.props.children
        );
      }
    }]);

    return TosserData;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_StimulateHOC__["a" /* default */])(TosserData);
};
/* harmony default export */ __webpack_exports__["a"] = (TosserDataHOC);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ToDoUserAssignmentScreen__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bernie__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Battleship__ = __webpack_require__(21);








/*

*/

var routes = [{
  description: 'Todos',
  path: '/todos/(:filter)',
  demoPath: '/todos/all',
  component: __WEBPACK_IMPORTED_MODULE_4_ToDoUserAssignmentScreen__["a" /* default */]
}, {
  description: 'Bernie',
  path: '/bernie',
  component: __WEBPACK_IMPORTED_MODULE_5_bernie__["a" /* default */]
}, {
  description: 'Battleship',
  path: '/battleship',
  component: __WEBPACK_IMPORTED_MODULE_6_Battleship__["a" /* default */]
}];

var LandingScreen = function LandingScreen(_ref) {
  var dispatch = _ref.dispatch;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'WELCOME'
    ),
    routes.map(function (details) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: details.path },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
          { to: details.demoPath || details.path },
          details.description
        )
      );
    })
  );
};

var Routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_3_react_router__["Router"],
  { history: __WEBPACK_IMPORTED_MODULE_3_react_router__["browserHistory"] },
  [].concat(routes, [{
    description: 'Landing',
    path: '/',
    component: LandingScreen
  }]).map(function (details) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["Route"], { key: details.path, path: details.path, component: details.component });
  })
);

var Routing = function Routing(_ref2) {
  var store = _ref2.store;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: store },
    Routes
  );
};

Routing.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Routing);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  toBeAssigned: function toBeAssigned() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
      case 'PREPARE_EXTERNAL_ASSIGNMENT':
        return action.userId;
      default:
        return state;
    }
  }
}));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toDos_state_reducers__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_users__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appRootReducers__ = __webpack_require__(34);







var configureStore = function configureStore() {
  var middlewares = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a];
  if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(createLogger());
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    toDos: __WEBPACK_IMPORTED_MODULE_3_toDos_state_reducers__["a" /* default */],
    users: __WEBPACK_IMPORTED_MODULE_4_users__["b" /* usersReducers */],
    appRoot: __WEBPACK_IMPORTED_MODULE_5__appRootReducers__["a" /* default */]
  }), __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middlewares));
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var SingleInputForm = function SingleInputForm(_ref) {
  var _onSubmit = _ref.onSubmit,
      buttonText = _ref.buttonText;

  var input = void 0;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'form',
      {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          _onSubmit(input.value);
          input.value = '';
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { ref: function ref(node) {
          input = node;
        } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'submit' },
        buttonText
      )
    )
  );
};

SingleInputForm.propTypes = {
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  buttonText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (SingleInputForm);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stimulate__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stimulate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stimulate__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var StimulateHOC = function StimulateHOC(ComponentToWrap) {
  var StimulateComponent = function (_Component) {
    _inherits(StimulateComponent, _Component);

    function StimulateComponent() {
      _classCallCheck(this, StimulateComponent);

      return _possibleConstructorReturn(this, (StimulateComponent.__proto__ || Object.getPrototypeOf(StimulateComponent)).apply(this, arguments));
    }

    _createClass(StimulateComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._isMounted = true;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._isMounted = false;
      }
    }, {
      key: 'stimulate',
      value: function stimulate(s) {
        var settings = s;
        var stimulation = {};

        // extend the settings.step function
        // to short-circuit if unmounted (and stop the stimulation)
        var self = this;
        settings.frame = function (_super) {
          var component = self;
          return function stepExtension() {
            if (component._isMounted) {
              return _super.apply(this, arguments);
            } else if (stimulation.stop) {
              return stimulation.stop();
            }
          };
        }(settings.frame);

        // extend the settings.complete function
        // to short-circuit if unmounted
        settings.onComplete = function (_super) {
          var component = self;

          return function completeExention() {
            if (component._isMounted && _super) {
              return _super.apply(this, arguments);
            }
          };
        }(settings.onComplete);

        stimulation = __WEBPACK_IMPORTED_MODULE_1_stimulate___default()(settings);

        return stimulation;
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          ComponentToWrap,
          _extends({}, this.props, { stimulate: this.stimulate.bind(this) }),
          this.props.children
        );
      }
    }]);

    return StimulateComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  return StimulateComponent;
};

/* harmony default export */ __webpack_exports__["a"] = (StimulateHOC);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toDos_Component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_users__ = __webpack_require__(17);




// <Users filter={params.filter} />
var ToDoUserAssignmentScreen = function ToDoUserAssignmentScreen(_ref) {
  var params = _ref.params;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_toDos_Component__["a" /* default */], { filter: params.filter }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_users__["a" /* Users */], { filter: params.filter }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_users__["a" /* Users */], { filter: params.filter })
  );
};

ToDoUserAssignmentScreen.propTypes = {
  params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    filter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })
};

/* harmony default export */ __webpack_exports__["a"] = (ToDoUserAssignmentScreen);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// repo name: bbb
// npm name: @defualt/bbb
console.log('hey there from bbb -- @defualt/bbb');
/* harmony default export */ __webpack_exports__["a"] = ('bbb -- @defualt/bbb');

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_scss__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_responsive_js__ = __webpack_require__(48);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import { withRouter } from 'react-router';
// import { connect } from 'react-redux';
// import styled from 'styled-components';


var Asdf = function (_Component) {
  _inherits(Asdf, _Component);

  function Asdf() {
    _classCallCheck(this, Asdf);

    var _this = _possibleConstructorReturn(this, (Asdf.__proto__ || Object.getPrototypeOf(Asdf)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Asdf, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Asdf;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Asdf.propTypes = {};

// This component exists because its el had a class of 'bodyInner'
// and this was affected by:
//  >> var modalManager = bs.setupNewModalManager($('.bodyInner'));

var BernieHome = function (_Component2) {
  _inherits(BernieHome, _Component2);

  function BernieHome() {
    _classCallCheck(this, BernieHome);

    var _this2 = _possibleConstructorReturn(this, (BernieHome.__proto__ || Object.getPrototypeOf(BernieHome)).call(this));

    _this2.state = {};
    return _this2;
  }

  _createClass(BernieHome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return BernieHome;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieHome.propTypes = {};

// This component exists as a container to distingsh from the modals outside this container.
// THis was used for descendant selectors.
// FOr instance, .someButton within .homeLayout was styled differently than within .modal 
// (modal was outside .homeLayout)
// It was also used to display:none the home screen when modal appears.
// This can be merged into BernieHome probably.

var BernieHomeLayout = function (_Component3) {
  _inherits(BernieHomeLayout, _Component3);

  function BernieHomeLayout() {
    _classCallCheck(this, BernieHomeLayout);

    var _this3 = _possibleConstructorReturn(this, (BernieHomeLayout.__proto__ || Object.getPrototypeOf(BernieHomeLayout)).call(this));

    _this3.state = {};
    return _this3;
  }

  _createClass(BernieHomeLayout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'homeLayout' },
        this.props.children
      );
    }
  }]);

  return BernieHomeLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieHomeLayout.propTypes = {};

// This component distinguishes the photo-plus-buttongroups from disclaimer.

var BernieApp = function (_Component4) {
  _inherits(BernieApp, _Component4);

  function BernieApp() {
    _classCallCheck(this, BernieApp);

    var _this4 = _possibleConstructorReturn(this, (BernieApp.__proto__ || Object.getPrototypeOf(BernieApp)).call(this));

    _this4.state = {};
    return _this4;
  }

  _createClass(BernieApp, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app' },
        this.props.children
      );
    }
  }]);

  return BernieApp;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieApp.propTypes = {};

// This adds padding to the bottom and serves as disclaimer.
// Disclaimer can probably be nested inside BernieApp.

var BernieDisclaimer = function (_Component5) {
  _inherits(BernieDisclaimer, _Component5);

  function BernieDisclaimer() {
    _classCallCheck(this, BernieDisclaimer);

    var _this5 = _possibleConstructorReturn(this, (BernieDisclaimer.__proto__ || Object.getPrototypeOf(BernieDisclaimer)).call(this));

    _this5.state = {};
    return _this5;
  }

  _createClass(BernieDisclaimer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'disclaimer' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          null,
          'contact: admin@bernieselfie.com ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: '/terms' },
            'Terms\xA0and\xA0Conditions'
          ),
          ' -- ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { href: '/privacy' },
            'Privacy\xA0Policy'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
          'bernieselfie.com is not affiliated with any political party, candidate, or interest group.'
        )
      );
    }
  }]);

  return BernieDisclaimer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieDisclaimer.propTypes = {};

var BernieContributeBanner = function (_Component6) {
  _inherits(BernieContributeBanner, _Component6);

  function BernieContributeBanner() {
    _classCallCheck(this, BernieContributeBanner);

    var _this6 = _possibleConstructorReturn(this, (BernieContributeBanner.__proto__ || Object.getPrototypeOf(BernieContributeBanner)).call(this));

    _this6.state = {};
    return _this6;
  }

  _createClass(BernieContributeBanner, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'topBanner' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          { className: 'topBanner_link', href: 'http://www.berniesanders.com/' },
          'Contribute to Bernie at BernieSanders.com\xA0>>'
        )
      );
    }
  }]);

  return BernieContributeBanner;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieContributeBanner.propTypes = {};

var BernieAppHeader = function (_Component7) {
  _inherits(BernieAppHeader, _Component7);

  function BernieAppHeader() {
    _classCallCheck(this, BernieAppHeader);

    var _this7 = _possibleConstructorReturn(this, (BernieAppHeader.__proto__ || Object.getPrototypeOf(BernieAppHeader)).call(this));

    _this7.state = {};
    return _this7;
  }

  _createClass(BernieAppHeader, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_header header' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'app_header_leftPillar leftPillar' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'app_header_leftPillar_branding branding' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'app_header_leftPillar_branding_title branding_title' },
              'BernieSelfie.com'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'app_header_leftPillar_branding_subtitle branding_subtitle' },
              'Support Bernie with your picture'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'app_header_leftPillar_socialRow socialRow' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'app_header_leftPillar_socialRow_socialWidget socialWidget' },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'twitter-share-button',
                  href: 'https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders'
                },
                'Tweet'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
              className: 'fb-like app_header_leftPillar_socialRow_socialWidget socialWidget',
              'data-share': 'true',
              'data-width': '450',
              'data-layout': 'button_count',
              'data-show-faces': 'true'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'app_header_leftPillar_socialRow_socialWidget socialWidget' },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                { href: '//www.pinterest.com/pin/create/button/?url=xXxXxXxXxXxXxXxXxX&description=xXxXxXxXxXxXxXxXxXxXxXxXxXxXxX', 'data-pin-do': 'buttonPin', 'data-pin-config': 'beside', 'data-pin-color': 'red' },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png' })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'app_header_rightPillar rightPillar' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'app_header_rightPillar_fbLikePageWrap' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'app_header_rightPillar_fbLikePageWrap_socialWidget socialWidget', src: '/images/mock-fb-page.png' })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'app_header_rightPillar_socialRow socialRow' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'app_header_rightPillar_socialRow_socialWidget socialWidget', src: '/images/mock-fb-like.png' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'app_header_rightPillar_socialRow_socialWidget socialWidget', src: '/images/mock-tweet.png' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'app_header_rightPillar_socialRow_socialWidget socialWidget', src: '/images/mock-pintrest.png' })
          )
        )
      );
    }
  }]);

  return BernieAppHeader;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieAppHeader.propTypes = {};

var BernieAppBody = function (_Component8) {
  _inherits(BernieAppBody, _Component8);

  function BernieAppBody() {
    _classCallCheck(this, BernieAppBody);

    var _this8 = _possibleConstructorReturn(this, (BernieAppBody.__proto__ || Object.getPrototypeOf(BernieAppBody)).call(this));

    _this8.state = {};
    return _this8;
  }

  _createClass(BernieAppBody, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_body' },
        this.props.children
      );
    }
  }]);

  return BernieAppBody;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieApp.propTypes = {};

var BernieAppMainSelfieFrame = function (_Component9) {
  _inherits(BernieAppMainSelfieFrame, _Component9);

  function BernieAppMainSelfieFrame() {
    _classCallCheck(this, BernieAppMainSelfieFrame);

    var _this9 = _possibleConstructorReturn(this, (BernieAppMainSelfieFrame.__proto__ || Object.getPrototypeOf(BernieAppMainSelfieFrame)).call(this));

    _this9.state = {};
    return _this9;
  }

  _createClass(BernieAppMainSelfieFrame, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: this.props.style, className: 'app_body_leftPillar_selfieFrame js_mainSelfieFrame', ref: this.props.responsiveRef },
        this.props.children
      );
    }
  }]);

  return BernieAppMainSelfieFrame;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieAppMainSelfieFrame.propTypes = {};
var BernieAppMainSelfieFrameResponsive = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_responsive_js__["a" /* default */])(BernieAppMainSelfieFrame);

var BernieAppHero = function (_Component10) {
  _inherits(BernieAppHero, _Component10);

  function BernieAppHero() {
    _classCallCheck(this, BernieAppHero);

    var _this10 = _possibleConstructorReturn(this, (BernieAppHero.__proto__ || Object.getPrototypeOf(BernieAppHero)).call(this));

    _this10.state = {};
    _this10.onChange = function (a, b, c) {
      console.log('onCHange', a, b, c);
      _this10.setState({
        measurement: c.measurement
      });
    };
    return _this10;
  }

  _createClass(BernieAppHero, [{
    key: 'render',
    value: function render() {
      var turns = [{
        priority: 1,
        magicSquareName: __WEBPACK_IMPORTED_MODULE_3_responsive_js__["b" /* generateGiantSquareDetails */]
      }, {
        priority: 3,
        magicSquareName: function magicSquareName(el, masterClasses) {
          var gapAtBottomViaMargin = masterClasses.noFloat ? 75 : 0;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_responsive_js__["b" /* generateGiantSquareDetails */])(el, gapAtBottomViaMargin);
        }
      }];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_body_leftPillar' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          BernieAppMainSelfieFrameResponsive,
          {
            turns: turns,
            masterName: 'bernie'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'app_body_leftPillar_selfieFrame_instructions ' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              { className: 'selfieFrame_instructions_text' },
              'Right click to save',
              this.state.measurement
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'app_body_leftPillar_selfieFrame_selfie', src: '/images/mock-selfie.png' })
        )
      );
    }
  }]);

  return BernieAppHero;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieContributeBanner.propTypes = {};

var BernieAppButtonGroup = function (_Component11) {
  _inherits(BernieAppButtonGroup, _Component11);

  function BernieAppButtonGroup() {
    _classCallCheck(this, BernieAppButtonGroup);

    var _this11 = _possibleConstructorReturn(this, (BernieAppButtonGroup.__proto__ || Object.getPrototypeOf(BernieAppButtonGroup)).call(this));

    _this11.state = {};
    return _this11;
  }

  _createClass(BernieAppButtonGroup, [{
    key: 'render',
    value: function render() {
      var icon = this.props.icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'section_header_icon' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'i',
          { className: 'material-icons' },
          this.props.icon
        )
      );

      var shortHeadline = this.props.shortHeadline && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'section_header_microText' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          null,
          this.props.shortHeadline
        )
      );

      var headline = this.props.headline && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'section_header_text' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          null,
          this.props.headline
        )
      );

      var buttons = this.props.buttons && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'buttonGroup_buttons' },
        this.props.buttons.map(function (btnDetails, i) {
          var btnInner = void 0;
          var className = 'buttonGroup_button button';
          if (btnDetails.aHref) {
            btnInner = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: btnDetails.className,
                href: btnDetails.aHref
              },
              btnDetails.text
            );
          } else {
            btnInner = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              null,
              btnDetails.text
            );
            className = className + ' ' + btnDetails.className;
          }

          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: i, className: className },
            btnInner
          );
        })
      );

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_body_rightPillar_section_subsection ' + this.props.className },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'buttonGroup' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'section_header' },
            shortHeadline,
            icon,
            headline
          ),
          buttons
        )
      );
    }
  }]);

  return BernieAppButtonGroup;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieAppButtonGroup.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  headline: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  shortHeadline: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  buttons: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};

var BernieAppBusiness = function (_Component12) {
  _inherits(BernieAppBusiness, _Component12);

  function BernieAppBusiness() {
    _classCallCheck(this, BernieAppBusiness);

    var _this12 = _possibleConstructorReturn(this, (BernieAppBusiness.__proto__ || Object.getPrototypeOf(BernieAppBusiness)).call(this));

    _this12.state = {};
    return _this12;
  }

  _createClass(BernieAppBusiness, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_body_rightPillar', ref: this.props.responsiveRef },
        this.props.children
      );
    }
  }]);

  return BernieAppBusiness;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieAppBusiness.propTypes = {};
BernieAppBusiness = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_responsive_js__["a" /* default */])(BernieAppBusiness, {
  masterName: 'bernie',
  turns: [{
    priority: 2,
    statusIncrementsRoundUp: {
      noFloat: 200
    }
  }, {
    priority: 4,
    statusIncrementsRoundUp: {
      singleCol: 390,
      doubleCol: 600
    }
  }]
});

var BernieAppPod = function (_Component13) {
  _inherits(BernieAppPod, _Component13);

  function BernieAppPod() {
    _classCallCheck(this, BernieAppPod);

    var _this13 = _possibleConstructorReturn(this, (BernieAppPod.__proto__ || Object.getPrototypeOf(BernieAppPod)).call(this));

    _this13.state = {};
    return _this13;
  }

  _createClass(BernieAppPod, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'app_body_rightPillar_section ' + this.props.className },
        this.props.children
      );
    }
  }]);

  return BernieAppPod;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BernieAppPod.propTypes = {};

var Bernie = function (_Component14) {
  _inherits(Bernie, _Component14);

  function Bernie() {
    _classCallCheck(this, Bernie);

    var _this14 = _possibleConstructorReturn(this, (Bernie.__proto__ || Object.getPrototypeOf(Bernie)).call(this));

    _this14.state = {};
    return _this14;
  }

  _createClass(Bernie, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_responsive_js__["c" /* ResponsiveMaster */],
        { name: 'bernie' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          BernieHome,
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            BernieHomeLayout,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              BernieApp,
              null,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieContributeBanner, null),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppHeader, null),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                BernieAppBody,
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppHero, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  BernieAppBusiness,
                  null,
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    BernieAppPod,
                    { className: 'section_share' },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppButtonGroup, {
                      headline: 'Share this via:',
                      shortHeadline: 'share',
                      icon: 'share',
                      buttons: [{
                        className: 'shareFbPhotoButton',
                        text: 'Facebook photo'
                      }, {
                        className: 'shareFbWallButton',
                        text: 'Facebook post'
                      }, {
                        className: 'twitterBigButton mainButton',
                        text: 'Tweet',
                        aHref: 'https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSander'
                      }]
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    BernieAppPod,
                    { className: 'section_photo featured' },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppButtonGroup, {
                      headline: 'Photo from:',
                      shortHeadline: 'import',
                      icon: 'photo_camera',
                      buttons: [{
                        className: 'importFbPhotoButton',
                        text: 'Facebook'
                      }, {
                        className: 'cameraUploadizer',
                        text: 'Camera'
                      }, {
                        className: 'urlUploadizer',
                        text: 'URL'
                      }, {
                        className: 'storageUploadizer',
                        text: 'Storage'
                      }]
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    BernieAppPod,
                    { className: 'section_design' },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppButtonGroup, {
                      className: 'editMicroSubsection microSubsection',
                      shortHeadline: 'edit',
                      icon: 'brush'
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppButtonGroup, {
                      className: 'editSubsection',
                      headline: 'Edit:',
                      icon: 'transform',
                      buttons: [{
                        className: 'editSizeAndPositionButton',
                        text: 'Size and position'
                      }]
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieAppButtonGroup, {
                      className: 'designSubsection',
                      headline: 'Change design:',
                      shortHeadline: 'edit',
                      icon: 'brush',
                      buttons: [{
                        className: 'moreimageOptionsHome',
                        text: 'more options'
                      }, {
                        className: 'templateModalButton',
                        text: 'upload a template'
                      }]
                    })
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BernieDisclaimer, null)
          )
        )
      );
    }
  }]);

  return Bernie;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Bernie.propTypes = {};

// const mapStateToProps = (state, props) => {
//   return {
//     assignedUser: state.users.idDict[props.assignedUserId],
//   };
// };

// ToDoItem = withRouter(connect(mapStateToProps)(ToDoItem));

/* harmony default export */ __webpack_exports__["a"] = (Bernie);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function bind_here(context, methodNames) {
  //
  //
  //
  //
  //
  //
  return methodNames.reduce(function (dict, method) {
    dict[method] = context[method].bind(context);
    return dict;
  }, {});
}
/* harmony default export */ __webpack_exports__["a"] = (bind_here);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function docListeners(addOrRemove) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var arrayOfArgSets = args;
  if (typeof args[0] === 'string') {
    arrayOfArgSets = [eventName, cb];
  }
  arrayOfArgSets.forEach(function (argSet) {
    var _argSet = _slicedToArray(argSet, 2),
        eventName = _argSet[0],
        cb = _argSet[1];

    document[addOrRemove + 'EventListener'](eventName, cb, false);
  });
}
/* harmony default export */ __webpack_exports__["a"] = (docListeners);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function generateCssTransformVal(settings) {
  var cssVal = [];

  if (typeof settings.x === "number" || typeof settings.y === "number") {
    var translateSettings = Object.assign({
      x: 0,
      y: 0
    }, settings);
    cssVal.push("translate3d(" + translateSettings.x + "px," + translateSettings.y + "px,0)");
  }

  if (typeof settings.scale === "number") {
    cssVal.push("scale3d(" + settings.scale + ", " + settings.scale + ", 1)");
  }

  if (typeof settings.rotateZ === "number") {
    cssVal.push("rotateZ(" + settings.rotateZ + "deg)");
  }

  return cssVal.join(" ");
}

/* harmony default export */ __webpack_exports__["a"] = (generateCssTransformVal);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getCoordsFromEvent(e) {
  if (e.touches) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  }
  return {
    x: e.pageX,
    y: e.pageY
  };
}
/* harmony default export */ __webpack_exports__["a"] = (getCoordsFromEvent);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function priorityDictIntoSortedArray(dict, propertName) {
  return Object.keys(dict).reduce(function (accum, priority) {
    var _accum$push;

    accum.push((_accum$push = {}, _defineProperty(_accum$push, propertName, dict[priority]), _defineProperty(_accum$push, "priority", priority), _accum$push));
    return accum;
  }, []).sort(function (a, b) {
    return a.priority - b.priority;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (priorityDictIntoSortedArray);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function processXY(cb) {
  return ['x', 'y'].reduce(function (accum, xOrY) {
    return _extends({}, accum, _defineProperty({}, xOrY, cb(xOrY)));
  }, {});
}
/* harmony default export */ __webpack_exports__["a"] = (processXY);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vanilla__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_windowSizer__ = __webpack_require__(19);
// Takes a square element and determines the size it would
// need to stretch downward to reach the bottom of the page.
// It returns an object like this:
/*
    
  {
    style: { // optional
      width: '100px', // optional
      height: '100px', // optional
    },
    classes: { // optional
      'windowVerticalTooSmall': true // optional
    },
  }
*/




var docEl = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].docEl,
    docBody = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].docBody,
    getWinWidth = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].getWinWidth,
    getWinHeight = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].getWinHeight,
    getDocumentHeight = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].getDocumentHeight,
    getOffset = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].getOffset,
    domEfficiencyCache = __WEBPACK_IMPORTED_MODULE_0_vanilla__["a" /* default */].domEfficiencyCache;


var generateGiantSquareDetails = function generateGiantSquareDetails($el) {
  var bottomGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  var getDims = function getDims($el) {
    return {
      windowHeight: __WEBPACK_IMPORTED_MODULE_1_windowSizer__["a" /* default */].dimensions.height - __WEBPACK_IMPORTED_MODULE_1_windowSizer__["b" /* heightTweak */],
      documentHeight: getDocumentHeight(),
      top: getOffset($el).top
    };
  };
  var dims = getDims($el);

  var heightVal = dims.windowHeight - dims.top;

  var windowWidth = getWinWidth();
  var measurement = windowWidth < heightVal ? windowWidth : heightVal;

  if (measurement <= windowWidth) {
    var gap = dims.windowHeight - (dims.top + measurement);
    if (gap < bottomGap) {
      measurement -= bottomGap - gap;
    }
  }
  var min = 250;
  var toReturn = {};
  if (measurement < min) {
    if (windowWidth >= min) {
      measurement = min;
    } else {
      measurement = windowWidth;
    }
  }
  if (dims.top + measurement + bottomGap > dims.windowHeight) {
    toReturn.classes = { 'windowVerticalTooSmall': true };
  }
  toReturn.data = {
    measurement: measurement
  };
  toReturn.style = {
    height: measurement + 'px',
    width: measurement + 'px'
  };

  return toReturn;
};

/* harmony default export */ __webpack_exports__["a"] = (generateGiantSquareDetails);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResponsiveMaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generateGiantSquareDetails__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__generateGiantSquareDetails__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__responsiveService__ = __webpack_require__(49);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Passthrough



// Module deps





var ResponsiveHOC = function ResponsiveHOC(ComponentToWrap, defaults) {
  var Responsive = function (_Component) {
    _inherits(Responsive, _Component);

    function Responsive() {
      _classCallCheck(this, Responsive);

      var _this = _possibleConstructorReturn(this, (Responsive.__proto__ || Object.getPrototypeOf(Responsive)).call(this));

      _this.state = {};
      _this.unregisters = [];
      return _this;
    }

    _createClass(Responsive, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var masterName = this.props.masterName || defaults.masterName;
        var turns = this.props.turns || defaults.turns;
        turns.forEach(function (turn) {
          var instance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__responsiveService__["a" /* makeResponsive */])(masterName, turn.priority, _this2.el, turn.statusIncrementsRoundUp, function (updateDetails) {
            if (updateDetails.style) {
              _this2.setState({
                style: updateDetails.style
              });
            }
          }, turn.magicSquareName);
          _this2.unregisters.push(instance.unregisterResponsiveAssessment);
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unregisters.forEach(function (cb) {
          cb();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          ComponentToWrap,
          {
            responsiveRef: function responsiveRef(el) {
              _this3.el = el;
            },
            style: this.state.style
          },
          this.props.children
        );
      }
    }]);

    return Responsive;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  Responsive.propTypes = {
    masterName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
    priority: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    statusIncrementsRoundUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    turns: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      priority: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
      magicSquareName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
      statusIncrementsRoundUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
    }).isRequired)
  };
  return Responsive;
};
/* harmony default export */ __webpack_exports__["a"] = (ResponsiveHOC);

/* eslint-disable react/no-multi-comp */

var ResponsiveMaster = function (_Component2) {
  _inherits(ResponsiveMaster, _Component2);

  function ResponsiveMaster() {
    _classCallCheck(this, ResponsiveMaster);

    var _this4 = _possibleConstructorReturn(this, (ResponsiveMaster.__proto__ || Object.getPrototypeOf(ResponsiveMaster)).call(this));

    _this4.state = {
      activeStatusRegistry: {},
      realClassNameYall: ''
    };
    return _this4;
  }

  _createClass(ResponsiveMaster, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      this.unregisterResponsiveRefresh = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__responsiveService__["b" /* registerResponsiveRefresh */])({
        name: this.props.name,
        updateMasterClasses: function updateMasterClasses() {
          return _this5.updateMasterClasses.apply(_this5, arguments);
        },
        nukeActiveStatusRegistryOnMaster: function nukeActiveStatusRegistryOnMaster() {
          _this5.setState({
            activeStatusRegistry: {},
            realClassNameYall: ''
          });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unregisterResponsiveRefresh();
    }
  }, {
    key: 'updateMasterClasses',
    value: function updateMasterClasses(idPriority, activeStatusRegistry) {
      var objectComplexUpdate = _extends({}, this.state.activeStatusRegistry, _defineProperty({}, idPriority, activeStatusRegistry));

      var toReturn = {};
      Object.keys(objectComplexUpdate).forEach(function (priority) {
        var priorityClassNames = objectComplexUpdate[priority];
        Object.keys(priorityClassNames).forEach(function (name) {
          if (priorityClassNames[name]) {
            toReturn[name] = true;
          }
        });
      });

      var realClassNameYall = Object.keys(toReturn).reduce(function (c, n) {
        return c + ' responsive_' + n;
      }, '');
      this.setState({
        realClassNameYall: realClassNameYall,
        activeStatusRegistry: objectComplexUpdate
      });
      return toReturn;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: this.state.realClassNameYall },
        this.props.children
      );
    }
  }]);

  return ResponsiveMaster;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ResponsiveMaster.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeResponsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerResponsiveRefresh; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_windowSizer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debounce__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_priorityDictIntoSortedArray__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





// On resize, check on various elements.
// Sometimes, we want to collect the status of the elements
// with regard to their widths.
// Sometimes we want to change propertoes on those elements,
// like making them squares that are sized to the bottom of the screen.
// We calls these responsive elements, or responseiveEls.

// That parent element is the master.
// Each master has servants that make their widthStatus available to the master.

// The various responsiveEls under a master need coordination.
// They are assigned priorities, which are used to sort an array.
// The contents of the array contain object.
// The objects contain functions that manipulate components.
//

var ResponsiveElRecords = function () {
  function ResponsiveElRecords() {
    _classCallCheck(this, ResponsiveElRecords);

    // this.cache model //
    /*
      someMaster: {
        dict: {
          2: {
            assessmentFunction: functionB,
            nukeStatus: functionY
          },
          1: {
            assessmentFunction: functionA,
            nukeStatus: functionX
          },
        },
        prioritySorted: [
          {
            priority: 1,
            responsibilities:{
              assessmentFunction: functionA,
              nukeStatus: functionX
            }
          },
          {
            priority: 2,
            responsibilities:{
              assessmentFunction: functionB,
              nukeStatus: functionY
            }
          },
        ]
      }
    */
    this.cache = {};
  }

  _createClass(ResponsiveElRecords, [{
    key: 'record',
    value: function record(masterName, priority, data) {
      if (!this.cache[masterName]) {
        this.cache[masterName] = {
          dict: {},
          prioritySorted: []
        };
      }
      var dict = this.cache[masterName].dict;
      if (dict[priority]) {
        throw new Error('\n        Must set unique priority. Attemtped:\n          masterName \'' + masterName + '\', priority \'' + priority + '\'.\n      ');
      }
      dict[priority] = data;

      this.cache[masterName].prioritySorted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_priorityDictIntoSortedArray__["a" /* default */])(dict, 'responsibilities');

      return this.cache[masterName];
    }
  }, {
    key: 'purge',
    value: function purge(masterName) {
      this.cache[masterName].prioritySorted.forEach(function (prioritySortedItem) {
        prioritySortedItem.responsibilities.nukeStatus();
      });
    }
  }, {
    key: 'registerResponsiveAssessment',
    value: function registerResponsiveAssessment(masterName, priority, assessmentFunction, nukeStatus) {
      var _this = this;

      var assessmentGroup = this.record(masterName, priority, {
        assessmentFunction: assessmentFunction,
        nukeStatus: nukeStatus
      });

      // unregister
      return function () {
        if (_this.cache[masterName] && _this.cache[masterName].dict && _this.cache[masterName].dict[priority]) {
          delete _this.cache[masterName].dict[priority];
          _this.cache[masterName].prioritySorted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_priorityDictIntoSortedArray__["a" /* default */])(_this.cache[masterName].dict, 'responsibilities');
        }

        // .prioritySorted is an array, generated from and up to date with .dict
        // if empty, .dict is empty, and that's the entire content of parent object
        // parent object can be safely deleted
        if (!_this.cache[masterName].prioritySorted.length) {
          delete _this.cache[masterName];
        }
      };
    }
  }]);

  return ResponsiveElRecords;
}();

var responsiveElRecords = new ResponsiveElRecords();

var ResizeRegistry = function () {
  function ResizeRegistry() {
    var _this2 = this;

    _classCallCheck(this, ResizeRegistry);

    // this.cache //
    /*
     {
      name: this.props.name,
      nukeActiveStatusRegistryOnMaster: () => {
        this.setState({
          activeStatusRegistry: {},
          realClassNameYall:''
        });
      },
      updateMasterClasses: updateMasterClassesXXX,
    },
    */
    this.cache = {};

    var assessAndStyleDebTimeout = void 0;
    this.assessAndStyleDeb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_debounce__["a" /* default */])(0, null, function (timeout) {
      assessAndStyleDebTimeout = timeout;
    });
    __WEBPACK_IMPORTED_MODULE_0_windowSizer__["a" /* default */].addCb(function () {
      clearTimeout(assessAndStyleDebTimeout);
      Object.keys(_this2.cache).forEach(function (name) {
        var cb = _this2.cache[name].assessResponsiveEls;
        cb();
      });
    });
  }

  _createClass(ResizeRegistry, [{
    key: 'registerResponsiveRefresh',
    value: function registerResponsiveRefresh(_ref) {
      var _this3 = this;

      var name = _ref.name,
          nukeActiveStatusRegistryOnMaster = _ref.nukeActiveStatusRegistryOnMaster,
          _updateMasterClasses = _ref.updateMasterClasses;

      this.cache[name] = {
        assessResponsiveEls: function assessResponsiveEls() {
          responsiveElRecords.purge(name);
          var cbResult = nukeActiveStatusRegistryOnMaster();
          if (cbResult && cbResult.then) {
            cbResult.then(function () {
              _this3.recurseAssessmentFunctions(name);
            });
          } else {
            _this3.recurseAssessmentFunctions(name);
          }
        },
        updateMasterClasses: function updateMasterClasses() {
          masterClasses[name] = _updateMasterClasses.apply(undefined, arguments);
        }
      };

      // unregister
      return function () {
        delete _this3.cache[name];
        delete masterClasses[name];
      };
    }
  }, {
    key: 'recurseAssessmentFunctions',
    value: function recurseAssessmentFunctions(masterName, cb) {
      var _this4 = this;

      var prioritySorted = responsiveElRecords.cache[masterName].prioritySorted;
      var i = 0;
      var l = prioritySorted.length;
      var r = function r() {
        _this4.assessAndStyleDeb().then(function () {
          prioritySorted[i].responsibilities.assessmentFunction(function () {
            i++;
            if (i < l) {
              r();
            } else {
              cb && cb();
            }
          });
        });
      };
      r();
    }
  }]);

  return ResizeRegistry;
}();

var resizeRegistry = new ResizeRegistry();
var registerResponsiveRefresh = resizeRegistry.registerResponsiveRefresh.bind(resizeRegistry);

var masterClasses = {};

function makeResponsive() {
  var ElementResponsiveness = function () {
    function ElementResponsiveness(masterName, priority, $el, statusIncrementsRoundUp, onChange, magicSquareName) {
      var _this5 = this;

      _classCallCheck(this, ElementResponsiveness);

      this.masterName = masterName;
      this.onChange = onChange;
      this.statusIncrementsRoundUp = statusIncrementsRoundUp;
      this.priority = priority;

      this.unregisterResponsiveAssessment = responsiveElRecords.registerResponsiveAssessment(masterName, priority, function () {
        _this5.assessResponseiveClasses.apply(_this5, arguments);
      }, function () {
        _this5.removeAllActiveStatuses();
      });

      this.$el = $el;
      this.magicSquareName = magicSquareName;

      resizeRegistry.assessAndStyleDeb().then(function () {
        resizeRegistry.cache[masterName].assessResponsiveEls();
      });
      this.removeAllActiveStatuses();
    }

    _createClass(ElementResponsiveness, [{
      key: 'removeAllActiveStatuses',
      value: function removeAllActiveStatuses() {
        this.activeStatusRegistry = {};
        this.updateMasterClasses();
      }
    }, {
      key: 'updateActiveStatuses',
      value: function updateActiveStatuses(update) {
        Object.assign(this.activeStatusRegistry, update);
        this.updateMasterClasses();
      }
    }, {
      key: 'updateMasterClasses',
      value: function updateMasterClasses() {
        if (resizeRegistry.cache[this.masterName]) {
          resizeRegistry.cache[this.masterName].updateMasterClasses(this.priority, this.activeStatusRegistry);
        }
      }
    }, {
      key: 'getBreakpointNameJustBeyondWidth',
      value: function getBreakpointNameJustBeyondWidth(width) {
        var _this6 = this;

        return Object.keys(this.statusIncrementsRoundUp).reduce(function (leader, responsiveClassName) {
          var breakpointWidth = _this6.statusIncrementsRoundUp[responsiveClassName];
          var dif = breakpointWidth - width;
          if (dif > 0 && dif < leader.dif) {
            return {
              name: responsiveClassName,
              dif: dif
            };
          }
          return leader;
        }, {
          name: null,
          dif: Infinity
        }).name;
      }
    }, {
      key: 'assessResponseiveClasses',
      value: function assessResponseiveClasses(next) {
        if (this.statusIncrementsRoundUp) {
          var breakpointNameJustBeyondWidth = this.getBreakpointNameJustBeyondWidth(this.$el.offsetWidth);
          if (!!breakpointNameJustBeyondWidth) {
            this.updateActiveStatuses(_defineProperty({}, breakpointNameJustBeyondWidth, true));
          }
        }

        if (this.magicSquareName) {
          var magicSquareResult = this.magicSquareName(this.$el, masterClasses[this.masterName]);
          if (magicSquareResult.classes) {
            this.updateActiveStatuses(magicSquareResult.classes);
          }
          this.onChange && this.onChange(magicSquareResult);
        }
        next();
      }
    }]);

    return ElementResponsiveness;
  }();

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(ElementResponsiveness, [null].concat(args)))();
}



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toDos_state_actions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_SingleInputForm__ = __webpack_require__(36);






var AddToDo = function AddToDo(_ref) {
  var dispatch = _ref.dispatch;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_SingleInputForm__["a" /* default */], {
    buttonText: 'Add ToDo .....',
    onSubmit: function onSubmit(value) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_toDos_state_actions__["b" /* addToDo */])(value));
    }
  });
};

AddToDo.propTypes = {
  dispatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(AddToDo));

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AddToDo__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VisibleToDoList__ = __webpack_require__(57);





var ToDos = function ToDos() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AddToDo__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__VisibleToDoList__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Footer__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ToDos);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var FetchError = function FetchError(_ref) {
  var message = _ref.message,
      onRetry = _ref.onRetry;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Could not fetch todos. ',
      message
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { onClick: onRetry },
      'Retry'
    )
  );
};

FetchError.propTypes = {
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onRetry: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (FetchError);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FilterLink_scss__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FilterLink_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__FilterLink_scss__);





var FilterLink = function FilterLink(_ref) {
  var filter = _ref.filter,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
    {
      className: 'aaaa',
      to: '/todos/' + filter,
      activeClassName: 'activex',
      activeStyle: {
        textDecoration: 'none',
        color: 'black'
      }
    },
    children
  );
};

FilterLink.propTypes = {
  filter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['all', 'completed', 'active']).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (FilterLink);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilterLink__ = __webpack_require__(53);
var _templateObject = _taggedTemplateLiteral(['\n  background: #fff;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n'], ['\n  background: #fff;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    null,
    'Show:',
    " ",
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__FilterLink__["a" /* default */],
      { filter: 'all' },
      'All'
    ),
    ", ",
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__FilterLink__["a" /* default */],
      { filter: 'active' },
      'Active'
    ),
    ", ",
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__FilterLink__["a" /* default */],
      { filter: 'completed' },
      'Completed'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_DragAndTossable__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 80px;\n  height: 80px;\n  background: #aaa;\n  border-radius: 50%;\n  border: 5px solid #222;\n'], ['\n  width: 80px;\n  height: 80px;\n  background: #aaa;\n  border-radius: 50%;\n  border: 5px solid #222;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #bbb;\n  display: inline-block;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n  width: 150px;\n  height: 150px;\n'], ['\n  background: #bbb;\n  display: inline-block;\n  margin: 10px;\n  padding: 10px;\n  color: #000;\n  width: 150px;\n  height: 150px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Ball = __WEBPACK_IMPORTED_MODULE_5_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_DragAndTossable__["a" /* default */])(_templateObject);

var Wrapper = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div(_templateObject2);

var ToDoItem = function (_Component) {
  _inherits(ToDoItem, _Component);

  function ToDoItem() {
    _classCallCheck(this, ToDoItem);

    var _this = _possibleConstructorReturn(this, (ToDoItem.__proto__ || Object.getPrototypeOf(ToDoItem)).call(this));

    _this.state = {
      extreme: false
    };
    return _this;
  }

  _createClass(ToDoItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onClick = _props.onClick,
          completed = _props.completed,
          text = _props.text,
          assignedUser = _props.assignedUser;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'b' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Ball, {
            maybeResetAtEnd: function maybeResetAtEnd(data) {
              // stimulate({
              //   from: 5,
              //   to: 100,
              //   duration: 1000,
              //   frame: function(progress){
              //     console.log(progress.tweened)
              //   }
              // });
              return data.delta.x < 200;
            },
            onDraggy: function onDraggy(data) {
              if (data.delta.x > 200) {
                _this2.setState({
                  extreme: true
                });
              } else {
                _this2.setState({
                  extreme: false
                });
              }
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              onClick: onClick,
              style: {
                textDecoration: completed ? 'line-through' : 'none'
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              'Task: ',
              text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              'Assigned: ',
              assignedUser && assignedUser.name,
              ' ',
              this.state.extreme ? '!' : ''
            )
          )
        )
      );
    }
  }]);

  return ToDoItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ToDoItem.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  completed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  assignedUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    assignedUser: state.users.idDict[props.assignedUserId]
  };
};

ToDoItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(ToDoItem));

/* harmony default export */ __webpack_exports__["a"] = (ToDoItem);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ToDoItem__ = __webpack_require__(55);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var ToDoList = function ToDoList(_ref) {
  var todos = _ref.todos,
      onToDoClick = _ref.onToDoClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    todos.map(function (todo) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ToDoItem__["a" /* default */], _extends({
        key: todo.id
      }, todo, {
        onClick: function onClick() {
          return onToDoClick(todo.id);
        }
      }));
    })
  );
};

ToDoList.propTypes = {
  todos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    completed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired).isRequired,
  onToDoClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ToDoList);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toDos_state_actions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toDos_state_getters__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToDoList__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FetchError__ = __webpack_require__(52);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var VisibleToDoList = function (_Component) {
  _inherits(VisibleToDoList, _Component);

  function VisibleToDoList() {
    _classCallCheck(this, VisibleToDoList);

    return _possibleConstructorReturn(this, (VisibleToDoList.__proto__ || Object.getPrototypeOf(VisibleToDoList)).apply(this, arguments));
  }

  _createClass(VisibleToDoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.filter !== prevProps.filter) {
        this.fetchData();
      }
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      var _props = this.props,
          filter = _props.filter,
          fetchToDos = _props.fetchToDos;

      fetchToDos(filter);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          isFetching = _props2.isFetching,
          errorMessage = _props2.errorMessage,
          onToDoClick = _props2.onToDoClick,
          todos = _props2.todos;

      if (isFetching && !todos.length) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Loading...'
        );
      }
      if (errorMessage && !todos.length) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FetchError__["a" /* default */], {
          message: errorMessage,
          onRetry: function onRetry() {
            return _this2.fetchData();
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ToDoList__["a" /* default */], {
        todos: todos,
        onToDoClick: onToDoClick
      });
    }
  }]);

  return VisibleToDoList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

VisibleToDoList.propTypes = {
  filter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  todos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  isFetching: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  fetchToDos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onToDoClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var params = _ref.params;

  var filter = params.filter || 'all';
  return {
    isFetching: __WEBPACK_IMPORTED_MODULE_5_toDos_state_getters__["a" /* getIsFetching */](state, filter),
    errorMessage: __WEBPACK_IMPORTED_MODULE_5_toDos_state_getters__["b" /* getErrorMessage */](state, filter),
    todos: __WEBPACK_IMPORTED_MODULE_5_toDos_state_getters__["c" /* getVisibleToDos */](state, filter),
    toBeAssignedFromRoot: __WEBPACK_IMPORTED_MODULE_5_toDos_state_getters__["d" /* getToBeAssignedFromRoot */](state),
    filter: filter
  };
};

var mapDispatchToProps = {
  fetchToDos: __WEBPACK_IMPORTED_MODULE_4_toDos_state_actions__["a" /* fetchToDos */],
  addToDo: __WEBPACK_IMPORTED_MODULE_4_toDos_state_actions__["b" /* addToDo */],
  toggleToDo: __WEBPACK_IMPORTED_MODULE_4_toDos_state_actions__["c" /* toggleToDo */],
  assignUser: __WEBPACK_IMPORTED_MODULE_4_toDos_state_actions__["d" /* assignUser */]
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  var onToDoClick = dispatchProps.toggleToDo;
  if (stateProps.toBeAssignedFromRoot) {
    onToDoClick = dispatchProps.assignUser;
  }
  return _extends({}, stateProps, dispatchProps, {
    onToDoClick: onToDoClick

  }, ownProps);
}

VisibleToDoList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(VisibleToDoList));

/* harmony default export */ __webpack_exports__["a"] = (VisibleToDoList);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayOfToDos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);


var todo = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["Schema"]('todos');
var arrayOfToDos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["arrayOf"])(todo);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var createToDoListReducers = function createToDoListReducers(filter) {
  var handleToggle = function handleToggle(state, action) {
    var _action$response = action.response,
        toggledId = _action$response.result,
        entities = _action$response.entities;
    var completed = entities.todos[toggledId].completed;

    var shouldRemove = completed && filter === 'active' || !completed && filter === 'completed';
    return shouldRemove ? state.filter(function (id) {
      return id !== toggledId;
    }) : state;
  };

  var ids = function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ? [].concat(_toConsumableArray(state), [action.response.result]) : state;
      case 'TOGGLE_TODO_SUCCESS':
        return handleToggle(state, action);
      default:
        return state;
    }
  };

  var isFetching = function isFetching() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true;
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  var errorMessage = function errorMessage() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message;
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    ids: ids,
    isFetching: isFetching,
    errorMessage: errorMessage
  });
};

/* harmony default export */ __webpack_exports__["a"] = (createToDoListReducers);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDosIdDictReducer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createToDoListReducers__ = __webpack_require__(59);




var listByFilter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  all: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__createToDoListReducers__["a" /* default */])('all'),
  active: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__createToDoListReducers__["a" /* default */])('active'),
  completed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__createToDoListReducers__["a" /* default */])('completed')
});

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  toDosIdDict: __WEBPACK_IMPORTED_MODULE_1__toDosIdDictReducer__["a" /* default */],
  listByFilter: listByFilter
}));

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// action.response.entities.todos is an object.
// It's property keys are toDoIds
// This function returns a toDos object.
// state as a toDos object.
// Redux will make this function name a property on its state
// And that property is an object containing key/val todoIds/todoObjects
var toDosIdDictReducer = function toDosIdDictReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (action.type === 'ASSIGN_USER_TO_TODO') {
    var toDo = _extends({}, state[action.toDoId], {
      assignedUserId: action.userId
    });
    return _extends({}, state, _defineProperty({}, action.toDoId, toDo));
  }
  if (action.response) {
    return _extends({}, state, action.response.entities.todos);
  }
  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (toDosIdDictReducer);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("re-reselect");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ })
/******/ ]);
});
//# sourceMappingURL=MainApp.js.map