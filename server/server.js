const express = require('express')
const app = express()

app.use(express.static(`public`))
app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '35d730f83c0448ffbd940aad1d7b35aa',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.listen(4000, () => console.log(`server running on 4000`))