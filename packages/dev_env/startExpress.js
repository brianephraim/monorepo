import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import fs from 'fs-extra';
import { argv } from 'yargs';
/* eslint-disable import/no-extraneous-dependencies */
import serverCollection from 'virtual-module-server-collection';
/* eslint-enable import/no-extraneous-dependencies */
import demoEndpoints from './universal/server/demoEndpoints';

import apolloIntegration from './apolloIntegration';

export default function startServer(renderAndUse) {
  console.log('A BUNCH OF RELEVANT PATHS')
  console.log('__dirnameBeforeCompiled',__dirnameBeforeCompiled);
  console.log('__dirname',__dirname);
  let pwdTxt;
  if (fs.existsSync('/app/pwd.txt')) {
    pwdTxt = fs.readFileSync('/app/pwd.txt', 'utf8').trim();
    console.log('pwdTxt',pwdTxt);
  }
  if (pwdTxt && __dirnameBeforeCompiled) {
    console.log('process.cwd', process.cwd())
    console.log('__dirnameBeforeCompiled.replace(pwdTxt, process.cwd())',__dirnameBeforeCompiled.replace(pwdTxt, process.cwd()));
  }


  const app = express();
  serverCollection.forEach((serverScript) => {
    serverScript({ app });
  });
  apolloIntegration({app})
  const faviconsDir = argv.faviconsDir || 'packages/favicon';
  app.use('/favicon', express.static(faviconsDir));
  app.use(favicon(path.resolve(faviconsDir, './favicon.ico')));
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
