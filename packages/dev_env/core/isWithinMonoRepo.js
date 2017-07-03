// isWithinMonoRepo, as opposed to when called as a typcial NPM dependency
// from a project's node_modules folder.
module.exports = (dirname) => {
  return dirname.indexOf('/packages/') > dirname.indexOf('/node_modules/');
};
