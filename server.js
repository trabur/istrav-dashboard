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

// headless navigation
app.get([
  '/event-sources',
  '/event-backup',
  '/event-logging',
  '/tenant-members',
  '/tenant-apps',
  '/app-menus',
  '/app-pages',
  '/app-faq',
  '/store-collections',
  '/store-categories',
  '/store-products',
  '/fleet-vehicles',
  '/account-users',
  '/account-carts',
  '/account-orders',
  '/subscription-licenses',
  '/subscription-plans',
  '/channel-videos',
  '/channel-guides',
  '/channel-playlists',
], function(req, res) {
  res.sendFile('./index.html', { root: __dirname });
})

// directory listing
import serveIndex from 'serve-index'
app.use('/scripts', serveIndex('scripts'))
app.use('/templates', serveIndex('templates'))

// headless default
app.get('/*', express.static('.'))

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