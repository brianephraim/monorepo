#!/usr/bin/env node

/* eslint-disable global-require */
const path = require('path');
const shellCommand = require('@defualt/dev_env/pre-webpack/shell-command');

if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
  const command = `./node_modules/.bin/babel-node ${path.resolve(__dirname, '../mono-to-multirepo.js')} ${process.argv.slice(2).join(' ')}`;
  shellCommand(command);
} else {
  require('../dist/mono-to-multirepo');
}
