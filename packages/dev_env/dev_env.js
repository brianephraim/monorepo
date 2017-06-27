/* eslint-disable no-console */
import { argv } from 'yargs';
import shellCommand from './shell-command';
import jestSpawnProcess from './jest/jestSpawnProcess';
import webpackMakeCompiler from './webpackMakeCompiler';
import webpackRunCompiler from './core/webpackRunCompiler';
import webpackBuildCommandLine from './core/webpackBuildCommandLine';
import serve from './webpackExpressServer.js';

const env = argv.env;
const item = argv.item;
console.log('0000');
console.log(argv)
if (item) {
  console.log('aaaa', argv);
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess(argv.testdevenv);
} else if (argv.entry) {
  webpackBuildCommandLine();
} else if (env === 'build') {
  webpackRunCompiler(webpackMakeCompiler);
} else {
  serve();
}
