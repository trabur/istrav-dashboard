// service
import express from "express"
const app = express()
const port = process.env.PORT || 3000

// get dirname working in repl
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// dashboard navigation
app.get([
  '/event-sources',
  '/fleet-vehicles',
  '/account-users'
], function(req, res) {
  res.sendFile('./index.html', { root: __dirname });
})

// dashboard default
app.get('/*', express.static('.'))

// run
app.listen(port, () => {
  console.log("Running server on port:", port)
  console.log("--------------------------")
});