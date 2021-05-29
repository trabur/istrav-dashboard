// service
import express from "express"
const app = express()
const port = process.env.PORT || 9999

// cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

// load "process.env" params from a .env file
import dotenv from 'dotenv'
dotenv.config()

// get dirname working in repl
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// directory listing
import serveIndex from 'serve-index'
app.use('/scripts', serveIndex('scripts'))

// Powered By ISTRAV:
app.get('/poweredByISTRAV.png', function (req, res) {
  res.sendFile(__dirname + '/poweredByISTRAV.png')
})

// headless default
app.get('/*', express.static('storybook-static'))

// backend url
app.get('/environment', (req, res) => {
  res.json({
    IO_URI: process.env.IO_URI || 'http://localhost:3333',
    API_URI: process.env.API_URI || 'http://localhost:1337',
  })
})

// run
app.listen(port, () => {
  console.log("Running server on port:", port)
  console.log("--------------------------")
});