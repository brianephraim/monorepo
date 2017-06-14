import { argv } from 'yargs';
import publish from './src/publish';
import initPackage from './src/initPackage';

if (argv.m) {
  publish();
}

if (argv.i) {
  initPackage();
}
