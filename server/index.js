const express = require('express')
const SERVER_PORT = 3100
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/../dist` ))

// Endpoint
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(SERVER_PORT, function () {
  console.log('Server is UP and listening on port:', SERVER_PORT)
})