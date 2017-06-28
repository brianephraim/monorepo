#!/usr/bin/env node

/* eslint-disable global-require */
if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
  // when I am in monorepo mode, with dev_env as one of my repos.
  require('../babel.start');
} else {
  // when dev_env is an installed package
  require('../dist/dev_env');
}
