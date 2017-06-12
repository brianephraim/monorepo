const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const parseRequestResolvePlugin = require('./parseRequestResolvePlugin');
const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./src/library'),
      path.resolve(process.cwd(), 'packages'),
      'node_modules',
    ],
    extensions: ['.js'],
    plugins: [
      parseRequestResolvePlugin((requestStr) => {
        if (requestStr.indexOf('@') === 0 && requestStr.indexOf('/') !== -1) {
          return requestStr.split('/')[1];
        }
        return false;
      }),
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
};
