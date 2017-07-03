#!/usr/bin/env node

const shellCommand = require('../shell-command');
const fs = require('fs');

fs.writeFileSync('.lernahoist-running', '');
const proc = shellCommand('lerna bootstrap --hoist');
// --loglevel info [silent|error|warn|success|info|verbose|silly]

proc.on('exit', () => {
  fs.unlinkSync('.lernahoist-running');
});
