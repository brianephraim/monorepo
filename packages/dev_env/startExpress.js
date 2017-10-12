import express from 'express';
/* eslint-disable import/no-extraneous-dependencies */
import serverCollection from 'virtual-module-server-collection';
/* eslint-enable import/no-extraneous-dependencies */
import demoEndpoints from './universal/server/demoEndpoints';


export default function startServer(renderAndUse) {
  const app = express();
  serverCollection.forEach((serverScript) => {
    serverScript({ app });
  });
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
