/* eslint-disable no-useless-escape */
const jestConfigBase = require('./jestConfigBase');

module.exports = Object.assign({}, jestConfigBase, {
  testMatch: ['**/?(*.)(test).js?(x)'],
  rootDir: process.cwd(),
});
