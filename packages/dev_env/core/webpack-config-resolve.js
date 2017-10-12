const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const parseRequestResolvePlugin = require('./parseRequestResolvePlugin');
const path = require('path');

var basename = path.basename;
var inNodeModulesRE = /\/node_modules\/|\\node_modules\\/;

function DirectoryDefaultFilePlugin() {
  return {
    apply(resolver) {
      // I don't know why 'module' or 'resolve' are those values.
      // Something to do with the the way they are used in this file:
      // https://github.com/webpack/enhanced-resolve/blob/master/lib/ResolverFactory.js
      // So they can be other values as seen in that file.
      resolver.plugin('directory', function (req, done) {
        // printProgress(`${request.request}`);
        // console.log('request.request',request.request)
        // const newRequestStr = parseRequest(req.request);
        // if (newRequestStr && newRequestStr !== req.request) {
        //   const obj = Object.assign({}, req, {
        //     request: newRequestStr,
        //   });
        //   this.doResolve('resolve', obj, 'blah blah', done);
        // } else {
        //   // process.stdout.write(`\n`);
        //   done();
        // }
        

        var directory = resolver.join(req.path, req.request);
        if (directory.match(inNodeModulesRE)) {
          return done();
        }


        resolver.fileSystem.stat(directory, function (err, stat) {
          if (err || !stat || !stat.isDirectory()) {
            return done();
          }

          var index = resolver.join(directory, 'index.js');          

          resolver.fileSystem.stat(index, function (err, stat) {
            // console.log('index',index);
            
            if (!err && stat && stat.isFile()) {
              // ignore directories containing index.js files
              return done();
            }
            // console.log(req)
            // done();
            // console.log('new request',resolver.join(directory, basename(directory)));
            const obj = Object.assign({}, req, {
              request: resolver.join(directory, basename(directory)),
            });
            resolver.doResolve('resolve', obj, 'blah blah', done);

            // resolver.doResolve('file', {
            //   path: req.path,
            //   query: req.query,
            //   request: resolver.join(directory, basename(directory))
            // }, function (err, result) {
            //   return done(undefined, result || undefined);
            // });
          });
        });
      });
    },
  };
}

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
      '.css',

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
          return split.join('/');
          return requestStr.split('/')[1];
        }
        return false;
      }),
      new DirectoryDefaultFilePlugin(),
      // new DirectoryNamedWebpackPlugin(true),
    ],
  },
};
