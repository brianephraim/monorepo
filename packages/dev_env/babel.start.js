const argumentsPassThrough = process.argv.reduce((accum, argString) => {
  const toAppend = argString.indexOf('--') === 0 ? ` ${argString}` : '';
  return `${accum}${toAppend}`;
}, '');
const command = 'sh';
const args = [
  '-c',
  `${__dirname}/node_modules/.bin/babel-node ${__dirname}/webpack.start.js${argumentsPassThrough}`
];

// kexec doesn't work in windows, so fallback to child_process.spawn
// this logic copied from babel-cli/lib/babel-node.js
try {
    var kexec = require("kexec");
    kexec(command, args);
  } catch (err) {
  if (err.code !== "MODULE_NOT_FOUND") throw err;

  var child_process = require("child_process");
  var proc = child_process.spawn(command, args, { stdio: "inherit" });
  proc.on("exit", function (code, signal) {
    process.on("exit", function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
}


