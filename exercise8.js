const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], 'utf-8', function (error, response) {
    if (error) throw error
    res.send(JSON.parse(response))
  })
})

app.listen(process.argv[2] || 3000)
