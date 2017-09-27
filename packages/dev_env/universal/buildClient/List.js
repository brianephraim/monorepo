webpackJsonp([2],{

/***/ 1097:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"list":"List__list--ayaCT","row":"List__row--3yQNt","avatar":"List__avatar--3xXlt","title":"List__title--3PfX7","gradient":"List__gradient--221hC","by":"List__by--3yBZl"};

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _reduxFirstRouterLink = __webpack_require__(96);

var _reduxFirstRouterLink2 = _interopRequireDefault(_reduxFirstRouterLink);

var _List = __webpack_require__(1097);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var videos = _ref.videos;
  return _react2.default.createElement(
    'div',
    { className: _List2.default.list },
    videos.map(function (video, key) {
      return _react2.default.createElement(Row, _extends({}, video, { key: key }));
    })
  );
};

var Row = function Row(_ref2) {
  var slug = _ref2.slug,
      title = _ref2.title,
      youtubeId = _ref2.youtubeId,
      by = _ref2.by,
      color = _ref2.color;
  return _react2.default.createElement(
    _reduxFirstRouterLink2.default,
    {
      className: _List2.default.row,
      to: '/willard/video/' + slug,
      style: { backgroundImage: youtubeBackground(youtubeId) }
    },
    _react2.default.createElement(
      'div',
      { className: _List2.default.avatar, style: { backgroundColor: color } },
      initials(by)
    ),
    _react2.default.createElement(
      'span',
      { className: _List2.default.title },
      title
    ),
    _react2.default.createElement('div', { className: _List2.default.gradient }),
    _react2.default.createElement(
      'span',
      { className: _List2.default.by },
      'by: ',
      by
    )
  );
};

var youtubeBackground = function youtubeBackground(youtubeId) {
  return 'url(https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg)';
};

var initials = function initials(by) {
  return by.split(' ').map(function (name) {
    return name[0];
  }).join('');
};

var mapState = function mapState(_ref3) {
  var category = _ref3.category,
      videosByCategory = _ref3.videosByCategory,
      videosHash = _ref3.videosHash;

  var slugs = videosByCategory[category] || [];
  var videos = slugs.map(function (slug) {
    return videosHash[slug];
  });
  return { videos: videos };
};
exports.default = (0, _reactRedux.connect)(mapState)(List);

/***/ })

});
//# sourceMappingURL=List.js.map