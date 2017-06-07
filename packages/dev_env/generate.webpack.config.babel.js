// import glob from 'glob';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import globby from 'globby';
import fs from 'fs-extra';
import path from 'path';
console.log('__filename',__filename)
const devHtmlPath = './index.html';

export default (argv) => {
  console.log('argv',argv)
  const env = argv.env;

  const dirRoot = argv.dirroot || process.cwd();

  const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);

  let username = null;
  if (packageJson.repository && packageJson.repository.url) {
    username = packageJson.repository.url.replace('://').split('/')[1];
  }

  const libraryName = packageJson.name;
  const libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];

  const plugins = [];
  const pluginRegistry = {};
  function registerPlugin(name, plugin) {
    if (!pluginRegistry[name]) {
      plugins.push(plugin);
      pluginRegistry[name] = true;
      return true;
    }
    return false;
  }

  function conditionalExtractTextLoaderCss(usePlugin, moreLoaderParams) {
    if (usePlugin) {
      registerPlugin('ExtractTextPlugin', new ExtractTextPlugin('[name].css'));
      return { use: ExtractTextPlugin.extract(moreLoaderParams) };
    }
    return {
      use: [moreLoaderParams.fallback, ...moreLoaderParams.use],
    };
  }

  const outputFiles = {};
  if (env === 'node') {
    console.log('NOOOOOOODE');
    outputFiles.library = `dist/${libraryNameReduced}`;
  } else if (env === 'build') {
    outputFiles.library = `dist/${libraryNameReduced}`;
    outputFiles.libraryMin = `dist/${libraryNameReduced}.min`;
    outputFiles.demo = 'demo/index';
  } else {
    console.log('not NOOOOOOODE');
    outputFiles.demo = 'boot';
    outputFiles.library = `${libraryNameReduced}`;
  }
  console.log('outputFiles.library',outputFiles.library)
  const entryFiles = {
    MainApp: globby.sync([`${dirRoot}/packages/MainApp/MainApp.js`]),
    [outputFiles.library]: globby.sync([
      `${dirRoot}/${libraryNameReduced}.js`,
      `${dirRoot}/src/library/index.js`
    ]),
    ...(
      outputFiles.libraryMin ? {
        [outputFiles.libraryMin]: globby.sync([`${dirRoot}/src/library/index.js`]),
      } : {}
    ),
    [outputFiles.demo]: globby.sync([
      `${dirRoot}/*.demo.js`,
      `${dirRoot}/demo.js`,
      `${dirRoot}/**/*/*.demo.js`,
      `${dirRoot}/**/*/demo.js`,
      `!${dirRoot}/packages/**/*`,
      `${dirRoot}/packages/MainApp/MainApp.js`,
    ]),
  };
  const entry = Object.keys(entryFiles).reduce((accum, entryName) => {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  // entry[outputFiles.library] = entryFiles.library;
  // if (outputFiles.libraryMin) {
  //   entry[outputFiles.libraryMin] = entryFiles.library;
  // }
  // entry[outputFiles.demo] = entryFiles.demo;

  // if (isLerna) {
  //   // /Users/brianephraim/Sites/todos-tacos/packages/MainApp/MainApp.js
  //   entry = {
  //     MainApp: './packages/MainApp/MainApp.js',
  //   };
  // }

  function moveModify(source, modifyPath, modifyContent) {
    let sources = [];
    if (typeof source === 'object') {
      sources = source;
    } else {
      sources.push(source);
    }
    let toCopy = [];
    sources.forEach((pattern) => {
      toCopy = [
        ...toCopy,
        ...globby.sync(pattern),
      ];
    });
    toCopy.forEach((filePath) => {
      let filePathOut = filePath;
      if (modifyPath) {
        filePathOut = modifyPath(filePath);
      }
      let content = fs.readFileSync(filePath, 'utf8');
      if (modifyContent) {
        content = modifyContent(content, filePath, filePathOut);
      }
      fs.outputFileSync(filePathOut, content);
    });
  }

  if (env === 'build' || env === 'node') {
    moveModify(['src/import-examples/**/!(webpack.config).*', 'src/tonicExample.js'], (filePath) => {
      return filePath.replace('src/', './');
    },
    (content) => {
        return content.replace(/LIBRARYNAME/g, libraryName);
    });

    registerPlugin('UglifyJsPlugin', new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }));
    const indexHtmlSettings = {
      chunks: [outputFiles.demo],
      template: 'src/demo/index.ejs',
      title: 'afasdfasdfasd',
      username,
      libraryName,
    };
    registerPlugin('demoIndex-HtmlWebpackPlugin', new HtmlWebpackPlugin({
      filename: './demo/index.html',
      ...indexHtmlSettings,
    }));
    registerPlugin('rootIndex-HtmlWebpackPlugin', new HtmlWebpackPlugin({
      filename: './index.html',
      ...indexHtmlSettings,
    }));
  } else {
    registerPlugin('demoDevIndex-HtmlWebpackPlugin', new HtmlWebpackPlugin({
      chunks: [outputFiles.demo],
      filename: devHtmlPath,
    }));
  }
  registerPlugin('StringReplacePlugin', new StringReplacePlugin());

  registerPlugin('LoaderOptionsPlugin', new webpack.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: jsonImporter,
      },
      context: dirRoot,
    },
  }));

  const config = {
    entry,
    devtool: env === 'build' || env === 'node' ? 'source-map' : 'eval',
    output: {
      path: `${dirRoot}`,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/',
      // publicPath: '/assets/',
    },
    module: {
      rules: [
        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          // include: `${dirRoot}`,
          options: {
            presets: [

              [
                'es2015',
                // needed for tree shaking
                { modules: false },
              ],
              'react',
              // 'react',
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
          test: /\.css$/,
          ...conditionalExtractTextLoaderCss(env === 'build' || env === 'node', {
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        },
        {
          test: /\.scss$/,
          ...conditionalExtractTextLoaderCss(env === 'build' ||  env === 'node', {
            fallback: 'style-loader',
            use: [
              'css-loader?sourceMap',
              {
                loader: 'sass-loader?sourceMap',
                // Apply the JSON importer via sass-loader's options.
                options: {
                  importer: jsonImporter,
                },
              },
            ],
          }),
        },
        {
          test: /\.json$/,
          loaders: ['json-loader'],
        },
        {
          test: /\.ejs$/,
          loader: 'ejs-compiled-loader',
        },
        {
          test: /\.md/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.js|\.html|\.ejs$/,
          exclude: [__filename],
          loader: StringReplacePlugin.replace({
            replacements: [{
              pattern: /LIBRARYNAME/g,
              replacement(/* match, p1, offset, string */) {
                return libraryName;
              },
            }],
          }),
        },
      ],
    },
    resolve: {
      modules: [
        path.resolve('./src/library'),
        path.resolve(process.cwd(), 'packages'),
        // path.resolve('./packages'),
        'node_modules',
      ],
      extensions: ['.js'],
      plugins: [
        new DirectoryNamedWebpackPlugin(true),
      ],
    },
    plugins,
    ...(
      env === 'node' ? {
        target: 'node',
        node: {
          __dirname: false,
          __filename: false,
        },
        externals: [nodeExternals({modulesFromFile: true})],
      } : {}
    ),
  };

  fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
};

