var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var services = require('../database-mongo/services.js');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/services', function (req, res) {
  services.find().then((data)=>{
    res.send(data)
  })
});
app.post("/service", (req, res) => {
  console.log(req.body)
  services.create(req.body)
  
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});
app.delete("/delete/:id",(req,res)=>{
  const id=req.body._id;
  services.deleteOne({id},(err,data)=>{
    if(err){
     console.log(err)
    }else {
      console.log("the data is deleted succesfully")
    }
  })  
})
// app.post("/client", (req, res) => {
//   services.create(req.body)
//   services.find()
//     .then((result) => res.send(result))
//     .catch((error) => res.send(error));
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

