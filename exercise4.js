const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.post('/form', (req, res) => res.send(req.body.str.split('').reverse().join('')))

app.listen(process.argv[2])
