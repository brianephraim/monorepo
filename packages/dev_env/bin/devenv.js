#!/usr/bin/env node

const isWithinMonoRepo = require('../core/isWithinMonoRepo');

/* eslint-disable global-require */
if (isWithinMonoRepo(__dirname)) {
  // when I am in monorepo mode, with dev_env as one of my repos.
  require('../babel.start');
} else {
  // when dev_env is an installed package
  require('../dist/dev_env');
}
