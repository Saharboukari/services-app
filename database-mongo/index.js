var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/serviceApp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

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
