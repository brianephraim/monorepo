import fs from 'fs-extra';
import { argv } from 'yargs';
import webpackEnhanceBaseConfig from './webpackEnhanceBaseConfig';
import webpackEnhanceConfigNode from './webpackEnhanceConfigNode';

function enhance() {
  let config = webpackEnhanceBaseConfig();
  const entry = {
    main: argv.entry,
  };
  let output = argv.output;
  output = output.split('/');

  output = {
    filename: output.pop(),
    path: output.join('/'),
  };
  config = {
    ...config,
    entry,
    output,
  };
  config = webpackEnhanceConfigNode(config);
  config.plugins = config.plugins || [];

  // I needed __dirname hardcoded as the original dirname
  // https://github.com/webpack/webpack/issues/1599#issuecomment-266588898
  config.plugins.push({
    apply(compiler) {
      function setModuleConstant(expressionName, fn) {
        compiler.plugin("compilation", function(compilation, data) {
          data.normalModuleFactory.plugin("parser", function(parser, options) {
            parser.plugin(`expression ${expressionName}`, function compilerParserPlugin() {
              this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
              return true;
            });
          });
        });
        // compiler.parser.plugin(`expression ${expressionName}`, function compilerParserPlugin() {
        //   this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
        //   return true;
        // });
      }

      setModuleConstant('__filename', (module) => {
        return module.resource;
      });

      setModuleConstant('__dirname', (module) => {
        return module.context;
      });
    },
  });
  fs.writeFileSync('./_webpack-config-preview-commandline.json', JSON.stringify(config, null, 2));
  return config;
}

export default enhance;
