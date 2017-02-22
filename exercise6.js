const express = require('express')

const app = express()

app.put('/message/:id', (req, res) => {
  var idMessage = req.params.id
  var myReponse = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + idMessage)
      .digest('hex')
  res.send(myReponse)
})

app.listen(process.argv[2] || 3000)
