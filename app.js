const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Node server started on port : ${port}`)
})
