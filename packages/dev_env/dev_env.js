/* eslint-disable no-console */
import { argv } from 'yargs';
import shellCommand from './shell-command';
import jestSpawnProcess from './jestSpawnProcess';
import webpackBuild from './webpackBuild';
import webpackBuildCommandLine from './core/webpackBuildCommandLine';
import serve from './webpackExpressServer.js';

const env = argv.env;
const item = argv.item;
if (item) {
  console.log('aaaa', argv);
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess();
} else {
  if (argv.entry) {
    webpackBuildCommandLine();
  } else if (env === 'build') {
    webpackBuild();
  } else {
    serve();
  }
}
