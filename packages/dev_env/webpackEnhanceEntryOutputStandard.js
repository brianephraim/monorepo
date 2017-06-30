import globby from 'globby';

function enhance(originalConfig, dirRoot, libraryName, entryFiles) {


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
