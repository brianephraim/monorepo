/* eslint-disable global-require */
module.exports = (commandToRun, options = { stdio: 'inherit' }, killParentOnExit = true) => {
  const command = 'sh';
  const args = [
    '-c',
    // commandToRun.replace('node $TMPFILE','node --inspect=9223 $TMPFILE'),
    commandToRun.replace('node $TMPFILE','node --trace-warnings $TMPFILE'),
    // commandToRun,
  ];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
    // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  const childProcess = require('child_process');
  const proc = childProcess.spawn(command, args, options || {});
  proc.on('exit', (code, signal) => {
    if (killParentOnExit) {
      process.on('exit', () => {
        if (signal) {
          process.kill(process.pid, signal);
        } else {
          process.exit(code);
        }
      });
    }
  });
  return proc;
  // }
};
