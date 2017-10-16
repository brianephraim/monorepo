import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
/* eslint-disable import/no-extraneous-dependencies */
import serverCollection from 'virtual-module-server-collection';
/* eslint-enable import/no-extraneous-dependencies */
import demoEndpoints from './universal/server/demoEndpoints';


export default function startServer(renderAndUse) {
  console.log('__dirnameBeforeCompiled',__dirnameBeforeCompiled);
  console.log('__dirname',__dirname);
  console.log("path.resolve(__dirnameBeforeCompiled,'../favicon/favicon.ico')",path.resolve(__dirnameBeforeCompiled,'../favicon/favicon.ico'))
  const app = express();
  serverCollection.forEach((serverScript) => {
    serverScript({ app });
  });
  app.use('/favicon', express.static('packages/favicon'));
  app.use(favicon('packages/favicon/favicon.ico'));
  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
  demoEndpoints({app}) 
  renderAndUse(app);
  const port = process.env.PORT || 3000;
  app.listen(port, (error) => {
    /* eslint-disable no-console */
    if (error) {
      console.error(error);
    } else {
      console.info(
        '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
        port,
        port,
      );
    }
    /* eslint-enable no-console */
  });
}
