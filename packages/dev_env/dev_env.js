/* eslint-disable no-console */
import { argv } from 'yargs';
import shellCommand from './shell-command';
import testSetup from './testSetup';
import webpackBuild from './webpackBuild';
import webpackBuildCommandLine from './webpackBuildCommandLine';
import serve from './webpackExpressServer.js';

const env = argv.env;
const item = argv.item;
if (item) {
  console.log('aaaa', argv);
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  testSetup();
} else {
  if (argv.entry) {
    webpackBuildCommandLine();
  } else if (env === 'build') {
    webpackBuild();
  } else {
    serve();
  }
}
