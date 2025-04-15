console.log("application started");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  console.log
  res.send('Acknowledge!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})