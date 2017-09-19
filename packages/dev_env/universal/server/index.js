import 'babel-polyfill'
import express from 'express'
import universalWebpackConfig from '../webpack/universalWebpackConfig'
import demoEndpoints from '../server/demoEndpoints';

// import startUniversalExpress from '../../startUniversalExpress';


const DEV = process.env.NODE_ENV === 'development'
if (!DEV) {
  const clientConfig = universalWebpackConfig({isClient:true,isDev:true});
  const publicPath = clientConfig.output.publicPath
  const outputPath = clientConfig.output.path
  const app = express()

  demoEndpoints({app});

  const clientStats = require('../buildClient/stats.json') // eslint-disable-line import/no-unresolved
  const serverRender = require('../buildServer/main.js').default // eslint-disable-line import/no-unresolved

  app.use(publicPath, express.static(outputPath))
  app.use(serverRender({ clientStats, outputPath }))

  app.listen(3000, () => {
    console.log('Listening @ http://localhost:3000/')
  })
}




