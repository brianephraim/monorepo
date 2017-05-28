import fs from 'fs-extra';
import path from 'path';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
// import webpack from 'webpack';

const makeConfig = () => {
  return {
    entry: {
      MainApp: 'MainApp',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/assets/',
    },
    module: {
      rules: [
        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          // exclude: /node_modules/,
          // include: __dirname,
          options: {
            presets: [

              [
                'es2015',
                // needed for tree shaking
                { modules: false },
              ],
              'react',
            ],
            plugins: [
              'transform-es2015-spread',
              'transform-object-rest-spread',
            ],
            // mocha needs .babelrc,
            // and .babelrc cannot use the above config
            // so ignore .babelrc here
            babelrc: false,
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
            'sass-loader?sourceMap',
          ],
        },
      ],
    },
    // devServer: {
    //   contentBase: path.join(__dirname, 'dist'),
    //   compress: true,
    //   port: 9000,
    //   publicPath: '',
    // },
    plugins: [
      // // needed for tree shaking
      // new webpack.optimize.UglifyJsPlugin({
      //   exclude: [/.*\.css$/]
      // }),

    ],

    resolve: {
      modules: [path.resolve(__dirname, 'packages'), 'node_modules'],
      extensions: ['.js'],
      plugins: [
        new DirectoryNamedWebpackPlugin(true),
      ],
      // extensions: ['.js','/index.js','.module-or-something.js'],
    },
  };
};



const config = makeConfig();
fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
export default config;
