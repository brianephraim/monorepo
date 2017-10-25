var fs = require('fs-extra');

var __dirnameBeforeCompiled = '/Users/brianephraim/Sites/monorepo/packages/hackathon-starter'
// var pwdTxt = '/Users/brianephraim/Sites/monorepo'
var cwd ='/app'



let pwdTxt;
if (fs.existsSync('./pwd.txt')) {
  pwdTxt = fs.readFileSync('./pwd.txt', 'utf8').trim();
  console.log('pwdTxt',pwdTxt);
}

const toReturn = __dirnameBeforeCompiled.replace(pwdTxt, cwd);
console.log('toReturn',toReturn);