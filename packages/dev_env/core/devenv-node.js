// devenv-node
// Like babel-node, but instead of just babel-ifying, it webpack-ifies.
// So webpack-ify some file, then run it with node.

const path = require('path');
const makeUuid = require('node-uuid').v4;
const shellCommand = require('./shellCommand');
const isWithinMonoRepo = require('./isWithinMonoRepo');
const getDevEnvRoot = require('./getDevEnvRoot');
const getNodePathShVar = require('./getNodePathShVar');
const getDoubleDashArgumentsPassthrough = require('./getDoubleDashArgumentsPassthrough');

const os = require('os');

const toCompile = path.resolve(process.cwd(), process.argv[2]);
const toCompileSplit = toCompile.split('/');
const fileName = toCompileSplit.pop();
const tempFileName = fileName.replace('.js', '.temp.js');
const toCompileFolder = toCompileSplit.join('/');
if (isWithinMonoRepo(__dirname)) {
  // Determine some paths, with logic that is resilient to
  // unlikely situation of nested /dev_env/ instances is __dirname
  const devEnvRoot = getDevEnvRoot(__dirname);

  const babelNodePath = path.resolve(devEnvRoot, './node_modules/.bin/babel-node');
  const devEnvCommandLinePath = path.resolve(devEnvRoot, './core/devEnvCommandLine.js');

  const tempFilePath = path.resolve(os.tmpdir(), `./${makeUuid()}XXX.js`);
  const cmd = [
    // Make a temp file
    `TMPFILE=\`mktemp -u ${tempFilePath} \` &&`,
    `TMPASYNCDIR=\`mktemp -d \` &&`,
    // use babel-node, not vanilla node, to compile webpack bundle that is used in command line
    `${babelNodePath} --trace-warnings ${devEnvCommandLinePath} --entry=${toCompile} --output=$TMPFILE ${getDoubleDashArgumentsPassthrough()}`,
    // ')',
    ' && ',
    // We are manually setting the node path because
    // we are running the file we just compiled with node from the temp directory,
    // and that directory is outside this project's directroy,
    // so it doesn't know where to file node_modules
    `${getNodePathShVar({})} `,
    // Ok, now run the compiled bundle with node.
    // Passthrough arguments from the parent process.
    `node $TMPFILE ${process.argv.slice(3).join(' ')} --asyncDir=$TMPASYNCDIR`,
    '\n',
  ].join('');

  /* eslint-disable no-console */
  console.log('devenv-node.js shell command using');
  console.log(cmd);
  /* eslint-enable no-console */

  // VARIATION WITHOUT SYSTEM TEMP FILE
  // const cmd = [
  //   '(',
  //   `cd ${toCompileFolder}`,
  //   ' && ',
  //   `${babelNodePath} ${babelStartScript} --entry=${toCompile} --output=${tempFilePath}`,
  //   ')',
  //   ' && ',
  //   `node ${tempFilePath} ${process.argv.slice(3).join(' ')}`,
  //   ' && ',
  //   `rm ${tempFilePath}`
  // ].join('');

  shellCommand(cmd);
} else {
  const tempFilePath = `${toCompileFolder}/${tempFileName}`;
   /* eslint-disable no-console */
  console.log('IF THERE IS A PROBLEM, IT COULD BE DUE TO __DIRNAME AND COMPILATION ISSUES - devenv-node.js');
  /* eslint-enable no-console */
  const devEnvDistPath = path.resolve(__dirname, '../dist/dev_env.js');
  const cmd = `(cd ${toCompileFolder} && node ${devEnvDistPath} --entry=${toCompile} --output=${tempFilePath}${getDoubleDashArgumentsPassthrough()}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  shellCommand(cmd);
}
