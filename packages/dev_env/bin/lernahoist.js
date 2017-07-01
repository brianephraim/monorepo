#!/usr/bin/env node

var shellCommand = require('../shell-command');
var fs = require('fs');
var path = require('path');
fs.writeFileSync('.lernahoist-running', '');
const proc = shellCommand(`lerna bootstrap --hoist --loglevel info`);//[silent|error|warn|success|info|verbose|silly]
proc.on('exit', (code, signal) => {
  console.log('DOO2');
  fs.unlinkSync('.lernahoist-running')
});
// proc.on('exit', () => {
//   fs.unlinkSync(path);
//   console.log('.lernahoist-running')
// });