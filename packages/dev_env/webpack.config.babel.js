/*
  This files return a function that when called generates a webpack config json.
  `argv` is passed into this function.

  when `argv.env === falsey`
    This compiles for a dev server via webpack-dev-middleware.  No files are created to disk,
    only created in memory.

  when `argv.env === 'build'`
    This compiles files to disk in a /dist folder and a /demo folder.

  when `argv.dirroot === some path`
    This is used when dev_env itself is compiled.
    This very file is compiled according the config set by this file.
    This is needed to make dev_env portable via npm.
    babel-node needs to compile this dev_env to work,
    but this does not play well when dev_env is in a node_modules folder.
    So we need to compile dev_env before publishing to npm.
    Directory paths need to be tweaked to accomplish this,
    and that's what `argv.dirroot` helps with.


  This function is also affected by package.json.

  when package.json.bundleForNode === true
    in conjunction with `argv.env === 'build'`, the bundle will
    have special consideration for a node platform.
    Only application files will be bundled.
    node_modules and node built-in requires will not be bundled.
*/
import path from 'path';
import { argv } from 'yargs';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import globby from 'globby';
import fs from 'fs-extra';
import webpackConfigResolve from './webpack-config-resolve';


const devHtmlPath = './index.html';

// console.log(process.cwd());
// // console.log(argv);
// console.log({
//   entry: path.resolve(process.cwd(), argv.entry),
//   output: path.resolve(process.cwd(), argv.output),
// });

function generateConfigJson() {
  const env = argv.env;

  const isCommandLine = argv.entry;

  const dirRoot = argv.dirroot || process.cwd();

  const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);

  const bundleForNode = packageJson.bundleForNode || argv.entry;
  const isBuild = env === 'build' || env === 'bundleForNode';

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
  if (isBuild) {
    outputFiles.library = `dist/${libraryNameReduced}`;
    outputFiles.libraryMin = `dist/${libraryNameReduced}.min`;
    outputFiles.demo = 'dist/demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = `${libraryNameReduced}`;
  }
  const entryFiles = {
    MainApp: globby.sync([`${dirRoot}/packages/MainApp/MainApp.js`]),
    [outputFiles.library]: globby.sync([
      `${dirRoot}/${libraryNameReduced}.js`,
      `${dirRoot}/src/library/index.js`,
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
  let entry = Object.keys(entryFiles).reduce((accum, entryName) => {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});
  

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

  if (!isCommandLine) {
    if (isBuild) {
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

      const templatePath = 'src/demo/index.ejs';
      const htmlTemplateExists = fs.existsSync(templatePath);
      const indexHtmlSettings = {
        chunks: [outputFiles.demo],
        ...(
          htmlTemplateExists ? { template: templatePath } : {}
        ),
        title: 'afasdfasdfasd',
        username,
        libraryName,
      };
      registerPlugin('demoIndex-HtmlWebpackPlugin', new HtmlWebpackPlugin({
        filename: './dist/demo/index.html',
        ...indexHtmlSettings,
      }));
    } else {
      registerPlugin('demoDevIndex-HtmlWebpackPlugin', new HtmlWebpackPlugin({
        chunks: [outputFiles.demo],
        filename: devHtmlPath,
      }));
    }
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

  let output = {
    path: `${dirRoot}`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/',
    // publicPath: '/assets/',
  };

  if (isCommandLine) {
    entry = {
      main: path.resolve(process.cwd(), argv.entry),
    };
    output = path.resolve(process.cwd(), argv.output);
    output = output.split('/');
    output = {
      filename: output.pop(),
      path: output.join('/'),
    };
  }

  const config = {
    entry,
    output,
    devtool: isBuild ? 'source-map' : 'cheap-module-eval-source-map',
    module: {
      rules: [
        // Why is this here: https://github.com/Reactive-Extensions/RxJS/issues/1117
        // Issue only appeard when webpack run on command line for Node bundle
        { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },

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
        {
          test: /\.css$/,
          ...conditionalExtractTextLoaderCss(isBuild, {
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
        },
        {
          test: /\.scss$/,
          ...conditionalExtractTextLoaderCss(isBuild, {
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
    resolve: webpackConfigResolve.resolve,
    plugins,
    ...(
      bundleForNode ? {
        target: 'node',
        node: {
          __dirname: false,
          __filename: false,
        },
        externals: [
          nodeExternals({ modulesFromFile: true })
          // ...(argv.entry ? {
          //   'yargs': 'commonjs yargs',
          //   'socket.io': 'commonjs socket.io',
          //   'webpack': 'commonjs webpack',
          //   'html-webpack-plugin': 'commonjs html-webpack-plugin',
          //   'any-promise': 'commonjs any-promise',
          //   'natives': 'commonjs natives',
          //    'chokidar': 'commonjs chokidar'
          // }: )
        ],
      } : {}
    ),
  };

  fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

export default generateConfigJson();
