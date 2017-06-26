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
  const babelStartScript = path.resolve(__dirname, '../core/devEnvCommandLine.js');
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  

  const cmd1 = [
    '(',
      `cd ${toCompileFolder}`,
      ' && ',
      `${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}`,
    ')',
    ' && ',
    `node ${tempFilePath} ${process.argv.slice(3).join(' ')}`,
    // `rm ${tempFilePath}`
  ].join('');

  const cmd2 = [
    `TMPFILE=\`mktemp -u $TMPDIR$(uuidgen).js \` &&`,
    // `echo "$TMPFILE"`
    '(',
      `cd ${toCompileFolder}`,
      ' && ',
      `${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=$TMPFILE`,
    ')',
    ' && ',
    `NODE_PATH='${path.resolve(process.cwd(),'./node_modules')}' `,
    `node $TMPFILE ${process.argv.slice(3).join(' ')}`,
    ' && ',
    'rm $TMPFILE',
    '\n',
  ].join('');

  const cmd = cmd2;
  console.log(cmd);
  // Within parenthesis so terminal doesn't really cd. The command will run in the cd directory tho.  Nice.
  // Ok, so cd to the folder of the file that is getting compiled.
  // Run babel-node on the babelStartScript with entry and output args
  // This will run webpack, which will generate a file.
  // Cache the contents of that file to a file.
  // Remove the webpack-generated file.
  // Run that file with node.
  // Pass in the arguments from the original command.
  // Node wants a superflous argument before real arguments here so we'll use someJunkArgumentHereNeeded.
  // With this approach, we are delecting the generated file as quickly as possible.
  // This is because we don't want a temp file sitting around with the possiblity of getting commited to git.
  // This is especially important because the webpack generated file that gets its content run could be a server
  // that stays open indefinately.  If we removed the temp file at the end of the process, it would hang around
  // until that server was closed.
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && rm ${tempFilePath} && node -e "$tempFileContent" someJunkArgumentHereNeeded ${process.argv.slice(3).join(' ')}`;
  // const cmd = `(cd ${toCompileFolder} && ${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}) && tempFileContent=$(<${tempFilePath}) && node -e "$tempFileContent" someJunkArgumentHereNeeded ${process.argv.slice(3).join(' ')}`;
  // const cmd = `(cd ${toCompileFolder} && node ${tempFilePath} ${process.argv.slice(3).join(' ')})`;

  shellCommand(cmd);
} else {
  const devEnvDistPath = path.resolve(__dirname, '../dist/dev_env.js');
  const cmd = `(cd ${toCompileFolder} && node ${devEnvDistPath} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  shellCommand(cmd);
}
