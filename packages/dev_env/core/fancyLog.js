/* eslint-disable no-console */
const chalkLib = require('chalk');
const colorPairsPicker = require('color-pairs-picker');
const hasAnsi = require('has-ansi');


const chalk = new chalkLib.constructor({ level: 3 });
function formatLog(color, heading, ...args) {
  const bg = colorPairsPicker(color, { contrast: 8 }).bg.split('(')[1].split(')')[0].split(',').map((item) => {
    return +item;
  });
  const fg = colorPairsPicker(color, { contrast: 8 }).fg.split('(')[1].split(')')[0].split(',').map((item) => {
    return +item;
  });
  console.log(chalk.rgb(...fg).bgRgb(...bg)(heading));

  if (typeof args.find((item) => { return hasAnsi(item); }) === 'undefined') {
    console.log(chalk.keyword(color)(...args));
  } else {
    console.log(...args);
  }
}
module.exports = formatLog;
