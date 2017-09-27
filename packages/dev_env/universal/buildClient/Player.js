webpackJsonp([1],{

/***/ 1094:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"video":"Video__video--UYMVj","heroContainer":"Video__heroContainer--36H7B","iframe":"Video__iframe--1r_kc","infoContainer":"Video__infoContainer--32Oo_","videoTitle":"Video__videoTitle--wYlWv","infoRow":"Video__infoRow--2f8QX","category":"Video__category--1jcJD","byText":"Video__byText--2AyAn","separator":"Video__separator--2JkeC","tipTitle":"Video__tipTitle--3bfVu","tip":"Video__tip--3x9av"};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reduxFirstRouterLink = __webpack_require__(96);

var _reduxFirstRouterLink2 = _interopRequireDefault(_reduxFirstRouterLink);

var _Video = __webpack_require__(1094);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = function Player(_ref) {
  var playing = _ref.playing,
      youtubeId = _ref.youtubeId,
      slug = _ref.slug,
      color = _ref.color;
  return !playing ? _react2.default.createElement(
    'div',
    {
      className: _Video2.default.heroContainer,
      style: { backgroundImage: youtubeBackground(youtubeId) }
    },
    _react2.default.createElement(
      _reduxFirstRouterLink2.default,
      { to: '/willard/video/' + slug + '/play' },
      _react2.default.createElement('span', { className: 'ion-play', style: { backgroundColor: color } })
    )
  ) : _react2.default.createElement('iframe', {
    className: _Video2.default.iframe,
    frameBorder: '0',
    allowFullScreen: true,
    src: youtubeIframeSrc(youtubeId)
  });
};

var youtubeBackground = function youtubeBackground(youtubeId) {
  return 'url(https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg)';
};

var youtubeIframeSrc = function youtubeIframeSrc(youtubeId) {
  return 'https://www.youtube.com/embed/' + youtubeId + '?playlist=' + youtubeId + '&autoplay=1&rel=0&theme=dark&loop=1&color=white&controls=2&autohide=1&showinfo=0';
};

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var playing = _ref2.playing;
  return { playing: playing };
})(Player);

/***/ })

});
//# sourceMappingURL=Player.js.map