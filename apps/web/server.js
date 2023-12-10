const { resolve } = require('node:path')
const express = require('express')
const next = require('next')

const app = next({ dev: true, dir: resolve(__dirname, '.') })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, () => {
    console.log('Ready on http://localhost:3000')
  })
})
