// devenv-node
// Like babel-node, but instead of just babel-ifying, if webpack-ifies.
// So webpack-ify some file, then run it with node.

const path = require('path');
const makeUuid = require('node-uuid').v4;
const shellCommand = require('./shellCommand');
const isWithinMonoRepo = require('./isWithinMonoRepo');
const getDevEnvRoot = require('./getDevEnvRoot');
const getNodePathShVar = require('./getNodePathShVar');


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
    // Use parens so parent shell doesn't change directories.
    '(',
    // Cd to the directory of the file we are compiling.
    `cd ${toCompileFolder}`,
    ' && ',
    // Compile the file as the temp file we created.
    // `${babelNodePath} --inspect=9225 ${devEnvCommandLinePath} --entry=${toCompile} --output=$TMPFILE`,
    `${babelNodePath} ${devEnvCommandLinePath} --entry=${toCompile} --output=$TMPFILE`,
    ')',
    ' && ',
    // We are manually setting the node path because
    // we are running the file we just compiled with node from the temp directory,
    // and that directory is outside this project's directroy,
    // so it doesn't know where to file node_modules
    `${getNodePathShVar({})} `,
    // Ok, now run the compiled script with node.
    // Passthrough arguments from the parent process.
    `node $TMPFILE ${process.argv.slice(3).join(' ')}`,
    ' && ',
    // When the compiled scripts process ends, remove the compiled script.
    'rm $TMPFILE',
    // ' && echo "$NODE_PATH"',
    '\n',
  ].join('');

  console.log('cmd', cmd);

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
  const devEnvDistPath = path.resolve(__dirname, '../dist/dev_env.js');
  const cmd = `(cd ${toCompileFolder} && node ${devEnvDistPath} --entry=${toCompile} --output=${tempFilePath}) && node ${tempFilePath} ${process.argv.slice(3).join(' ')} && rm ${tempFilePath}`;
  shellCommand(cmd);
}
