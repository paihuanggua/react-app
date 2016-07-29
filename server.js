var express = require('express')
var path = require('path')
var compression = require('compression')
var open=require('open');


var app = express()

app.use(compression())


app.use(express.static(path.join(__dirname, 'public')))


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = 8080
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
  open('http://localhost:'+PORT)
})
