/* eslint-disable no-mixed-operators */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import jsonImporter from 'node-sass-json-importer';
import fs from 'fs-extra';
import globby from 'globby';
import plugins, { register as registerPlugin } from './pluginRegistry';


function generateLoaderParamOfUse(usePlugin, moreLoaderParams) {
  if (usePlugin) {
    return { use: ExtractTextPlugin.extract(moreLoaderParams) };
  }
  return {
    use: [moreLoaderParams.fallback, ...moreLoaderParams.use],
  };
}

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

function enhance(originalConfig, libraryName, isBuild, dirRoot, username, outputFiles) {
  const devHtmlPath = './index.html';
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

  registerPlugin('StringReplacePlugin', new StringReplacePlugin());

  registerPlugin('LoaderOptionsPlugin', new webpack.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: jsonImporter,
      },
      context: dirRoot,
    },
  }));


  const module = { ...(originalConfig && originalConfig.module) };
  let usingExtractTextPlugin = false;
  if (isBuild) {
    registerPlugin('ExtractTextPlugin', new ExtractTextPlugin('[name].css'));
    usingExtractTextPlugin = true;
  }
  module.rules = [
    ...(module.rules || []),
    {
      test: /\.css$/,
      ...generateLoaderParamOfUse(usingExtractTextPlugin, {
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    },
    {
      test: /\.scss$/,
      ...generateLoaderParamOfUse(usingExtractTextPlugin, {
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
  ];

  const config = {
    ...originalConfig,
    // devtool: isBuild ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: 'source-map',
    module,
    plugins,
  };
  return config;
}
export default enhance;
