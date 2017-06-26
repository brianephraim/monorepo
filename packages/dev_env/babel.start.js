/* eslint-disable global-require */
/*
  This file used in 2 places
    1.  This file is executed by the monorepo serving as the monorepo's dev environment.
        (Only the monorepo uses dev_env like this. When the monorepo's packages are scattered
        into individual repos, each individual repo has a dev_env dependency
        in its node_modules folder,
        but this dev_env is executed from a compiled version of the dev_env.
        This is called from the individual repo's ./node_modules/.bin/devenv,
        which points to ./node_modules/@defualt/dev_env/dist/dev_env.js.)
    2.  This file is executed during the npm prepublish, which creates the /dist folder
        mentioned in (1) above.
*/
const path = require('path');
const shellCommand = require('./shell-command');

const argumentsPassThrough = process.argv.reduce((accum, argString) => {
  const toAppend = argString.indexOf('--') === 0 ? ` ${argString}` : '';
  return `${accum}${toAppend}`;
}, '');

// const devEnv = argv.entry ? './devEnvCommandLine.js' : './dev_env.js';
const devEnv = './dev_env.js';
console.log('xxxxv');
// shellCommand(`${path.resolve(__dirname, './node_modules/.bin/babel-node')} ${path.resolve(__dirname, devEnv)}${argumentsPassThrough}`);
shellCommand(`${path.resolve(__dirname, './bin/devenv-node.js')} ${path.resolve(__dirname, devEnv)}${argumentsPassThrough}`);