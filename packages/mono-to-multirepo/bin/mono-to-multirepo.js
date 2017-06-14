#!/usr/bin/env node

/* eslint-disable global-require */
/* eslint-disable no-console */
console.log('mono-to-multirepo.js bin');

// if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
//   // when I am in monorepo mode, with dev_env as one of my repos.
//   require('../babel.start');
// } else {
//   // when dev_env is an installed package
//   require('../dist/dev_env');
// }

require('../mono-to-multirepo');
