function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}
module.exports = () => {
  console.log('typeof __xdirname',typeof __xdirname,'/Users/brianephraim/Sites/monorepo/packages/dev_env/core/getDevEnvRoot.js')
  let devEnvRoot = ensureTrailingSlash(typeof __xdirname !== 'undefined' ? __xdirname : __dirname).split('/dev_env/');
  devEnvRoot[devEnvRoot.length - 1] = '';
  devEnvRoot = devEnvRoot.join('/dev_env/');
  return devEnvRoot;
};
