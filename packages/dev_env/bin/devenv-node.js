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
  const babelNodePathSpecific = '../node_modules/.bin/babel-node';
  const babelNodePath = path.resolve(__dirname, babelNodePathSpecific);
  const babelStartScript = path.resolve(__dirname, '../devEnvCommandLine.js');
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && rm ${tempFilePath} && node -e "$tempFileContent" someJunkArgumentHereNeeded ${process.argv.slice(3).join(' ')}`;
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && rm ${tempFilePath} && node -e "$tempFileContent" asdf --i`;
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && rm ${tempFilePath} && ( echo "$tempFileContent"; cat << EOF ) | node`;
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && echo $tempFileContent`;
  shellCommand(cmd);
} else {
  const devEnvDistPath = path.resolve(__dirname, '../dist/dev_env.js');
  const cmd = `(cd ${toCompileFolder} && node ${devEnvDistPath} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  shellCommand(cmd);
}
