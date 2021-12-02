var mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var adminSchima = mongoose.Schema({
  admin_id: Number,
  fullName:String,
  adminCode:Number,
  Mission:String
});

var Admin = mongoose.model('admin', adminSchima);

module.exports =  Admin;