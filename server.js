const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  console.log(`HITTING: ${req.url} - ${req.method}`)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', (req, res, next) => {
  db.readJSON('products.json')
    .then(products => res.send(products))
    .catch(next)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
