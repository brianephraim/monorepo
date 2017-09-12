require("source-map-support").install();
exports.ids = [1];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _makeServeChainableExpress = __webpack_require__(56);

var _makeServeChainableExpress2 = _interopRequireDefault(_makeServeChainableExpress);

var _ensureLeadingSlash = __webpack_require__(51);

var _ensureLeadingSlash2 = _interopRequireDefault(_ensureLeadingSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeServeChainableExpress2.default)(function (app, nameSpace) {
    app.get((0, _ensureLeadingSlash2.default)(nameSpace + '/junk-express'), function (req, res) {
        res.send({
            status: "success"
        });
    });
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ensureLeadingSlash(str) {
  return str.replace(/^\/?/, '/');
}
exports.default = ensureLeadingSlash;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeServeChainableExpress(serverLogic) {
  return function (_ref) {
    var app = _ref.app,
        _ref$port = _ref.port,
        port = _ref$port === undefined ? 3000 : _ref$port,
        _ref$nameSpace = _ref.nameSpace,
        nameSpace = _ref$nameSpace === undefined ? '' : _ref$nameSpace;

    var appIsBrandNew = false;
    if (!app) {
      appIsBrandNew = true;
      app = (0, _express2.default)();
    }

    serverLogic(app, nameSpace);

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
  };
}

exports.default = makeServeChainableExpress;

/***/ })

};;
//# sourceMappingURL=1.js.map