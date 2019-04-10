
function enhance(originalConfig) {
  const config = { ...originalConfig };
  config.plugins = config.plugins || [];

  // I needed __dirname hardcoded as the original dirname
  // https://github.com/webpack/webpack/issues/1599#issuecomment-266588898
  config.plugins.push({
    apply(compiler) {
      function setModuleConstant(expressionName, fn) {
        compiler.plugin('compilation', (compilation, data) => {
          data.normalModuleFactory.plugin('parser', (parser) => {
            parser.plugin(`expression ${expressionName}`, function compilerParserPlugin() {
              this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
              return true;
            });
          });
        });
      }

      setModuleConstant('__filename', (module) => {
        return module.resource;
      });

      setModuleConstant('__dirname', (module) => {
        return module.context;
      });
    },
  });
  return config;
}

export default enhance;
