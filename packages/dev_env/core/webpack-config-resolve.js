const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const parseRequestResolvePlugin = require('./parseRequestResolvePlugin');
const path = require('path');
module.exports = {
  resolve: {
    modules: [
      // '/Users/brianephraim/Sites/monorepo/node_modules',
      path.resolve('./src/library'),
      path.resolve(process.cwd(), 'packages'),
      path.resolve(process.cwd(), '../../packages'),
      'node_modules',
      // path.resolve(process.cwd(), '../monorepo/node_modules'),
      // '../monorepo/node_modules',
    ],
    extensions: [
      '.js',

      // Why is this here? : https://github.com/npm/normalize-package-data/issues/88
      // Issue only appeard when webpack run on command line for Node bundle
      '.json',
    ],
    plugins: [
      parseRequestResolvePlugin((requestStr) => {
        // console.log('requestStr', requestStr);
        if (requestStr.indexOf('@') === 0 && requestStr.indexOf('/') !== -1) {
          const split = requestStr.split('/');
          split.shift();
          split.join('/');
          console.log('Afindme',split.join('/'),requestStr.split('/')[1]);
          console.log('Bfindme',requestStr.split('/')[1]);
          return split.join('/');
          return requestStr.split('/')[1];
        }
        return false;
      }),
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
};
