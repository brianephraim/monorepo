import webpackConfigResolve from './webpack-config-resolve';

function enhance(originalConfig) {
  const config = {
    module: {
      rules: [
        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          // include: `${dirRoot}`,
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
      ],
    },
    resolve: webpackConfigResolve.resolve,
  };
  return {
    ...originalConfig,
    ...config,
  };
}
export default enhance;
