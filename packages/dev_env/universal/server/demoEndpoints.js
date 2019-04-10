import 'babel-polyfill'
import express from 'express'
import cookieParser from 'cookie-parser'
import { findVideos, findVideo } from './api'
// import startUniversalExpress from '../../startUniversalExpress';

export default function demoExpress({app = express()}) {
  // JWTOKEN COOKIE - in a real app obviously you set this after signup/login:

  app.use(cookieParser())

  app.use((req, res, next) => {
    const cookie = req.cookies.jwToken
    const jwToken = 'fake' // TRY: set to 'real' to authenticate ADMIN route

    if (cookie !== jwToken) {
      res.cookie('jwToken', jwToken, { maxAge: 900000 })
      req.cookies.jwToken = jwToken
    }

    next()
  })

  // API

  app.get('/api/videos/:category', async (req, res) => {
    const jwToken = req.headers.authorization.split(' ')[1]
    const data = await findVideos(req.params.category, jwToken)
    res.json(data)
  })

  app.get('/api/video/:slug', async (req, res) => {
    const jwToken = req.headers.authorization.split(' ')[1]
    const data = await findVideo(req.params.slug, jwToken)
    res.json(data)
  })
}



