#!/usr/bin/env node
const path = require('path');
const shellCommand = require('../shell-command');

const toCompile = path.resolve(process.cwd(), process.argv[2]);

const toCompileSplit = toCompile.split('/');
const fileName = toCompileSplit.pop();
const tempFileName = fileName.replace('.js', '.temp.js');
const toCompileFolder = toCompileSplit.join('/');
const tempFilePath = `${toCompileFolder}/${tempFileName}`;

if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
  // const monorepoMode = __dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/');
  // const babelNodePathSpecific = (
  //   monorepoMode ? '../node_modules/.bin/babel-node' : '../../.bin/babel-node'
  // );
  const babelNodePathSpecific = '../node_modules/.bin/babel-node';
  const babelNodePath = path.resolve(__dirname, babelNodePathSpecific);
  const babelStartScript = path.resolve(__dirname, '../babel.start.js');
  const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath} && rm ${tempFilePath}.map`;
  shellCommand(cmd);
} else {
  const devEnvDistPath = path.resolve(__dirname, '../dist/dev_env.js');
  const cmd = `(cd ${toCompileFolder} && node ${devEnvDistPath} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath} && rm ${tempFilePath}.map`;
  shellCommand(cmd);
}
