'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var command = 'sh';

  var configJSONString = JSON.stringify({
    testMatch: ['**/?(*.)(test).js?(x)']
  });
  var args = ['-c',
  // `${__dirname}/node_modules/.bin/jest`,
  // `${__dirname}/node_modules/.bin/jest --config='${configJSONString}'`,

  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  'CI=true ' + __dirname + '/node_modules/.bin/jest --watch --config=' + __dirname + '/jest.config.js'];

  var proc = _child_process2.default.spawn(command, args, { stdio: 'inherit' });
  proc.on('exit', function (code, signal) {
    process.on('exit', function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
}; /* eslint-disable camelcase */