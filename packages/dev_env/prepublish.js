const fs = require('fs-extra');
const path = require('path');
const shellCommand = require('./core/shellCommand');
const asyncDir = path.resolve(__dirname, './dist/asyncDir');
fs.ensureDirSync(asyncDir);
shellCommand(`./node_modules/.bin/babel-node ./core/devEnvCommandLine.js --entry=./dev_env.js --output=${path.resolve(__dirname, './dist/dev_env.js')} --asyncDir=${asyncDir}` );
