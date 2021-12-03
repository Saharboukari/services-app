var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var services = require('../database-mongo/services.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/services', function (req, res) {
  services.find().then((data)=>{
    res.send(data)
  })
});
app.post("/service", (req, res) => {
  services.create(req.body)
  services.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});
// app.post("/client", (req, res) => {
//   services.create(req.body)
//   services.find()
//     .then((result) => res.send(result))
//     .catch((error) => res.send(error));
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

