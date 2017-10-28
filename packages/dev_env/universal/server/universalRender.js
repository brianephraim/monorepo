// univeral only deps
import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom/server'
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components'
import express from 'express';
import path from 'path';
import fs from 'fs-extra';
import App from '../src/components/App'
import startExpress from '../../startExpress';
import webpackConfig from '../../webpackConfig';
import makeRender from './makeRender';

const render = makeRender(({store,styles,addReducers,client}) => {
  const sheet = new ServerStyleSheet()

  const appString = ReactDOM.renderToString(
    sheet.collectStyles(<App store={store} addReducers={addReducers} client={client} />)
  );

  const styledComponentsRenderedTags = sheet.getStyleTags()

  const helmet = Helmet.renderStatic();
  
  const webpackStyles = styles;

  const helmetContent = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${webpackStyles}
    ${styledComponentsRenderedTags}
  `;

  const htmlContent = `
    <div id="root" class="universal">${appString}</div>
  `;

  return {
    head: helmetContent,
    body: htmlContent,
  };
});
export default render;

// When this script is called from within the production bundle...
if (process.env.NODE_ENV === 'production') {
  // We are launching an express server with `startExpress`.
  // `startExpress` includes all the app's endpoints and the localhost port listener.
  startExpress((app) => {
    // And we integrate the the `render` function assigned above with the express add.
    const clientStats = fs.readJsonSync(path.resolve(process.cwd(),'./packages/dev_env/universal/buildClient/stats.json'));
    const clientProdConfig = webpackConfig({isReact:true,isClient:true,isDev:false,isUniversal:true,'xxx':113});
    const publicPath = clientProdConfig.output.publicPath
    const outputPath = 'packages/dev_env/universal/buildClient';
    app.use(publicPath, express.static(outputPath))
    app.use(render({
      clientStats,
      outputPath,
    })) 
  });
}
