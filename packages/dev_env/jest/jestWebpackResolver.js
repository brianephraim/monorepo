/* eslint-disable global-require */
/* eslint-disable comma-dangle */
// https://github.com/mkg0/jest-webpack-resolver
const ResolverFactory = require('enhanced-resolve').ResolverFactory;

const webpackConfigResolve = require('../core/webpack-config-resolve.js');

module.exports = (value, options) => {
  const resolver = ResolverFactory.createResolver(
    Object.assign(
      {
        fileSystem: require('fs'),
        useSyncFileSystemCalls: true,
      },
      webpackConfigResolve.resolve
    )
  );
  return resolver.resolveSync({}, options.basedir, value);
};
