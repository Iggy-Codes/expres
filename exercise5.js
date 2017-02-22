const express = require('express')
const stylus = require('stylus')

const app = express()

app.use(stylus.middleware(process.argv[3] || 'public'))

app.use(express.static(process.argv[3] || 'public'))

app.listen(process.argv[2] || 3000)
