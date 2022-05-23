const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('A simple express app running on Digital Ocean Droplet!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})