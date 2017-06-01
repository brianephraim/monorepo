module.exports = {
  entry: __dirname + '/webpack.start.js',
  output: {
    filename: 'webpack.start.bundle.js'
  },
  target: 'node',
  resolve: {
    modules: [
      '/Users/brianephraim/Sites/monorepo/node_modules'
    ]
  }
};