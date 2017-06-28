import webpack from 'webpack';
import fs from 'fs-extra';
import { argv } from 'yargs';
import webpackEnhanceBaseConfig from './webpackEnhanceBaseConfig';
import webpackEnhanceConfigNode from './webpackEnhanceConfigNode';

console.log('MMMMOOOOCCCHHAAA');

function enhance() {
  let config = webpackEnhanceBaseConfig();
  
  config = {
    ...config,
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
      }

      setModuleConstant('__filename', (module) => {
        return module.resource;
      });

      setModuleConstant('__dirname', (module) => {
        return module.context;
      });
    },
  });
  config.plugins.push(new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/, /website-scraper/));
  fs.writeFileSync('./_webpack-config-preview-commandline.json', JSON.stringify(config, null, 2));
  return config;
}

export default enhance();
