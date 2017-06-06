var nodeExternals = require('webpack-node-externals');

module.exports = {
  // entry: __dirname + '/webpack.start.js',
  entry: __dirname + '/webpack.start.js',
  output: {
    filename: 'webpack.start.bundle.js',
    path: __dirname,
  },
  target: 'node',
  externals: [nodeExternals()],
  "module": {
    "rules": [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        // // include: `${dirRoot}`,
        // options: {
        //   presets: [

        //     [
        //       'es2015',
        //       // needed for tree shaking
        //       { modules: false },
        //     ],
        //     'react',
        //     // 'react',
        //   ],
        //   plugins: [
        //     'transform-es2015-spread',
        //     'transform-object-rest-spread',
        //   ],
        //   // mocha needs .babelrc,
        //   // and .babelrc cannot use the above config
        //   // so ignore .babelrc here
        //   babelrc: false,
        // },
      },
    ]
  },
  // resolve: {
  //   modules: [
  //     '/Users/brianephraim/Sites/monorepo/node_modules'
  //   ]
  // }
};