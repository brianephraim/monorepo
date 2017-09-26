function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}
module.exports = () => {
  let devEnvRoot = ensureTrailingSlash(typeof __xdirname !== 'undefined' ? __xdirname : __dirname).split('/dev_env/');
  devEnvRoot[devEnvRoot.length - 1] = '';
  devEnvRoot = devEnvRoot.join('/dev_env/');
  return devEnvRoot;
};
