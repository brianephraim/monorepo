const findNodeModules = require('find-node-modules');
// for NODE_PATH, on windows, seperator is ; instead of :.  What fun.
// seperator is bash array argument seperator syntax.
const nodePathSeparator = /^win/.test(process.platform) ? ';' : ':';
// Find all directories of node_modules that apply to the file we are compiling.
module.exports = ({ before = [], after = [], cwd }) => {
  const nodePaths = before
  .concat(findNodeModules({ relative: false, cwd }))
  .concat(after)
  .join(nodePathSeparator);
  return `NODE_PATH='${nodePaths}'`;
};

