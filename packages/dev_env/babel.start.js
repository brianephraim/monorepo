/*
  This file used in 2 places 
    1.  This file is executed by the monorepo serving as the monorepo's dev environment.
        (Only the monorepo uses dev_env like this. When the monorepo's packages are scattered
        into individual repos, each individual repo has a dev_env dependency in its node_modules folder,
        but this dev_env is executed from a compiled version of the dev_env.  
        This is called from the individual repo's ./node_modules/.bin/devenv,
        which points to ./node_modules/@defualt/dev_env/dist/dev_env.js.)
    2.  This file is executed during the npm prepublish, which creates the /dist folder
        mentioned in (1) above.
*/

const argumentsPassThrough = process.argv.reduce((accum, argString) => {
  const toAppend = argString.indexOf('--') === 0 ? ` ${argString}` : '';
  return `${accum}${toAppend}`;
}, '');
const command = 'sh';
const args = [
  '-c',
  `${__dirname}/node_modules/.bin/babel-node ${__dirname}/webpack.start.js${argumentsPassThrough}`
];
//
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


