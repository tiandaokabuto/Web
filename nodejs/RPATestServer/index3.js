var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extende:true}));
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/task', function (req, res) {
  res.send('ok')
  console.log(req.body)
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))