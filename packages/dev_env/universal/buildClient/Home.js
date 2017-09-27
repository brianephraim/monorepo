webpackJsonp([3],{

/***/ 1096:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"Home__home--14GF1","directions":"Home__directions--16OoK","articleLinks":"Home__articleLinks--2xLqm"};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asdf = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(1096);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: _Home2.default.home },
    _react2.default.createElement(
      'h1',
      null,
      'HOME_UNIVERSAL_DEMO'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'NOTE: The top set of links are real links made like this:'
    ),
    _react2.default.createElement(
      'span',
      { style: { color: 'rgb(200,200,200)', marginTop: 20 } },
      'HREF STRING:'
    ),
    _react2.default.createElement(
      'span',
      null,
      "<Link to='/willard/list/db-graphql'>DB & GRAPHQL</Link>"
    ),
    _react2.default.createElement(
      'span',
      { style: { color: 'rgb(200,200,200)', marginTop: 20 } },
      'PATH SEGMENTS:'
    ),
    _react2.default.createElement(
      'span',
      null,
      "<Link to={['willard/list', 'react-redux']}>REACT & REDUX</Link>"
    ),
    _react2.default.createElement(
      'span',
      { style: { color: 'rgb(200,200,200)', marginTop: 20 } },
      'ACTION:'
    ),
    _react2.default.createElement(
      'span',
      null,
      "<Link to={{ type: 'LIST', payload: {slug: 'fp'} }}>FP</Link>"
    ),
    _react2.default.createElement(
      'h1',
      { style: { margin: 20 } },
      'EVENT HANDLERS DISPATCH ACTION'
    ),
    _react2.default.createElement(
      'pre',
      null,
      '\nonClick: () => dispatch({\n  type: \'LIST\',\n  payload: { category: \'react-redux\' }\n})\n      '
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { style: { color: '#c5af8f', display: 'inline' } },
        'DIRECTIONS: '
      ),
      _react2.default.createElement(
        'span',
        { className: _Home2.default.directions },
        'inspect the sidebar tabs to see the top set are real <a> tag links and the\n        bottom set not, yet the address bar changes for both. The decision is up to you.\n        When using the <Link /> component, if you provide an action as the `href` prop, you never\n        need to worry if you change the static path segments (e.g: `/list`) in the routes passed \n        to `connectRoutes`. ALSO: DON\'T FORGET TO USE THE BROWSER BACK/NEXT BUTTONS TO SEE THAT WORKING TOO!'
      )
    ),
    _react2.default.createElement(
      'h1',
      { style: { marginTop: 25 } },
      'LINKS ABOUT REDUX-FIRST ROUTER:'
    ),
    '> ',
    _react2.default.createElement(
      'a',
      {
        className: _Home2.default.articleLinks,
        target: '_blank',
        href: 'https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de',
        rel: 'noopener noreferrer'
      },
      'Server-Render Like A Pro in 10 Steps /w Redux-First Router \uD83D\uDE80'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    '> ',
    _react2.default.createElement(
      'a',
      {
        className: _Home2.default.articleLinks,
        target: '_blank',
        href: 'https://medium.com/faceyspacey/redux-first-router-lookin-sexy-on-code-sandbox-d9d9bea15053',
        rel: 'noopener noreferrer'
      },
      'Things To Pay Attention To In This Demo'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    '> ',
    _react2.default.createElement(
      'a',
      {
        className: _Home2.default.articleLinks,
        target: '_blank',
        href: 'https://medium.com/faceyspacey/pre-release-redux-first-router-a-step-beyond-redux-little-router-cd2716576aea',
        rel: 'noopener noreferrer'
      },
      'Pre Release: Redux-First Router\u200A\u2014\u200AA Step Beyond Redux-Little-Router'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    '> ',
    _react2.default.createElement(
      'a',
      {
        className: _Home2.default.articleLinks,
        target: '_blank',
        href: 'https://medium.com/faceyspacey/redux-first-router-data-fetching-solving-the-80-use-case-for-async-middleware-14529606c262',
        rel: 'noopener noreferrer'
      },
      'Redux-First Router data-fetching: solving the 80% use case for async Middleware'
    )
  );
};

exports.default = Home;
var asdf = exports.asdf = {
  asdf: 'qwer',
  zxcv: 123
};

/***/ })

});
//# sourceMappingURL=Home.js.map