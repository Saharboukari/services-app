var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var services = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/services', function (req, res) {
  services.find().then((data)=>{
    res.send(data)
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

