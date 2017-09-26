#!/usr/bin/env node

/* eslint-disable global-require */
const path = require('path');
const shellCommand = require('@defualt/dev_env/core/shellCommand');
const isWithinMonoRepo = require('@defualt/dev_env/core/isWithinMonoRepo');

if (isWithinMonoRepo(__xdirname)) {
  const command = `./node_modules/.bin/babel-node ${path.resolve(__xdirname, '../mono-to-multirepo.js')} ${process.argv.slice(2).join(' ')}`;
  shellCommand(command);
} else {
  require('../dist/mono-to-multirepo');
}
