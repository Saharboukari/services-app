var mongoose = require('mongoose');
const db = require('./index.js');
// mongoose.Promise = global.Promise;

var serviceSchima = mongoose.Schema({
    service_id: Number,
    title: String,
    type:String,
    imageUrl:String,
    price:Number
  
  });
  
  var Services = mongoose.model('Service', serviceSchima);

  module.exports = Services;