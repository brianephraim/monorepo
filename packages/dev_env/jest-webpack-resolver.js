// https://github.com/mkg0/jest-webpack-resolver
var ResolverFactory = require("enhanced-resolve").ResolverFactory;
var path = require("path");

var packagejson = require(path.join(process.cwd(), "package.json"));
var config = (packagejson && packagejson["jestWebpackResolver"]) || {
  webpackConfig: "./webpack.config.js"
};
// var webpack = require(path.join(process.cwd(), config["webpackConfig"]));
// var webpack = require(path.join(__dirname, 'generate.webpack.config.babel'))();
var webpack = require(path.join(__dirname, 'webpack-config-resolve.js'));

module.exports = function(value, options) {
  var resolver = ResolverFactory.createResolver(
    Object.assign(
      {
        fileSystem: require("fs"),
        useSyncFileSystemCalls: true
      },
      webpack.resolve || {}
    )
  );
  return resolver.resolveSync({}, options.basedir, value);
};

