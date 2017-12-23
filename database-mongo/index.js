











var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restro');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var restroSchema = mongoose.Schema({
  name: String,
  number: Number,
  wishList: Boolean,
  address: String,
  phone: {type: String, unique: true}
});

var Restro = mongoose.model('Restro', restroSchema);

var save = (restroSchema)=>{
    Restro.create(restroSchema, function(err, data){
    if(err){
      console.log('Already Exists')
    }else{
      console.log('Sucess!!!')
    }
  })
}


// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
module.exports.save = save;