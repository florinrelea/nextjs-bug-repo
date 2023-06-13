const express = require('express')
const next = require('next')
const { parse } = require('url')

const port = '80'

const app = express()

async function main() {
  const nextApp = next({
    dev: false,
    hostname: 'localhost',
    port: port
  })

  const handleNextApp = nextApp.getRequestHandler()

  await nextApp.prepare()

  app.use(async (req, res, _next) => handleNextApp(req, res, parse(req.url, true)))

  app.listen(port, () => {
    console.log('Server started on port', port)
  }).on('error', error => {
    console.error(error)
    process.exit(1)
  })
}

main()