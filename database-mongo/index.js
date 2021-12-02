var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/service_app');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var serviceSchima = mongoose.Schema({
  service_id: Number,
  title: String,
  type:String,
  price:Number

});

var Services = mongoose.model('Service', serviceSchima);

var userSchima = mongoose.Schema({
  user_id: Number,
  firstName: String,
  lasttName: String,
  adress:String,
  phoneNember:Number
});

var user = mongoose.model('user', userSchima);

var adminSchima = mongoose.Schema({
  admin_id: Number,
  fullName:String,
  adminCode:Number,
  Mission:String
});

var admin = mongoose.model('admin', adminSchima);

var selectAll = function(callback) {
  Service.find({}, function(err, Services) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, Services);
    }
  });
};

module.exports.selectAll = selectAll;