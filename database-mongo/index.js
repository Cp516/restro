











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
  user: String,
  // visited: Boolean,
  wishList: Boolean
  // favs: Boolean,
  // comments: String
});

var Restro = mongoose.model('Restro', restroSchema);

var save = (restroSchema)=>{
    Restro.create(restroSchema, function(err, data){
    if(err){
      console.log(err)
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