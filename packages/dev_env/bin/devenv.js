#!/usr/bin/env node
var argv = require('yargs').argv;
const isWithinMonoRepo = require('../core/isWithinMonoRepo');
console.log('!!!!!!!');
console.log(argv);

/* eslint-disable global-require */
if (isWithinMonoRepo(__dirname) && !argv.useDist) {
  // when I am in monorepo mode, with dev_env as one of my repos.
  require('../babel.start');
} else {
  console.log('USING DIST');
  // when dev_env is an installed package
  require('../dist/dev_env');
}
