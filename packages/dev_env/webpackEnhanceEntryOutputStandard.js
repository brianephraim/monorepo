import globby from 'globby';

function enhance(originalConfig, dirRoot, libraryName, libraryNameReduced, outputFiles, testdevenv) {
  let entryFiles = {
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
  if (testdevenv) {
    entryFiles = {
      [outputFiles.demo]: [`${dirRoot}/packages/testdevenv-main/testdevenv-main.js`,]
    };
  }
  const entry = Object.keys(entryFiles).reduce((accum, entryName) => {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  const output = {
    path: `${dirRoot}`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/',
    // publicPath: '/assets/',
  };

  return {
    ...originalConfig,
    entry,
    output,
  };
}
export default enhance;
