#!/usr/bin/env node
// --inspect=9224
const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs-extra');

const isWithinMonoRepo = (dirname) => {
  return dirname.indexOf('/packages/') > dirname.indexOf('/node_modules/');
};

/* eslint-disable global-require */
if (isWithinMonoRepo(__dirname)) {
  const shellCommand = require('../core/shellCommand');
  const getDoubleDashArgumentsPassthrough = require('../core/getDoubleDashArgumentsPassthrough');
  const getDevEnvRoot = require('../core/getDevEnvRoot');
  if (!argv.useDist) {
    console.log('NOT USING DIST');

    const pathToCheckFile = path.resolve('../../', '.lernahoist-running');
    if (!fs.existsSync(pathToCheckFile)) {
      shellCommand(`${path.resolve(__dirname, '../bin/devenv-node.js')} ${path.resolve(__dirname, '../dev_env.js')}${getDoubleDashArgumentsPassthrough()}`);
    }
  } else {
    const devEnvRoot = isWithinMonoRepo(__dirname) ? getDevEnvRoot(__dirname) : './';

    const devEnvCommandLinePath = path.resolve(devEnvRoot, './dist/dev_env.js');
    const cmd = [
      `TMPASYNCDIR=\`mktemp -d \` &&`,
      `node ${devEnvCommandLinePath} --asyncDir=$TMPASYNCDIR${getDoubleDashArgumentsPassthrough()}`,
      '\n',
    ].join('');
    shellCommand(cmd);
  }
} else {
  console.log('is not monorepo -- is external');
  require('../dist/dev_env');
}
