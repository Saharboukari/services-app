var mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var userSchima = mongoose.Schema({
    user_id: Number,
    firstName: String,
    lasttName: String,
    adress:String,
    phoneNember:Number
  });
  
  var User = mongoose.model('user', userSchima);
 
  module.exports = User;