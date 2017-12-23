











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
  user: String,
  number: Number,
  wishList: Boolean,
  address: String,
  uniq: {type: String, unique: true}
});

var Restro = mongoose.model('Restro', restroSchema);

var save = (restroSchema)=>{
    Restro.create(restroSchema, function(err, data){
    if(err){
      console.log(err)
    }else{
      console.log('Success!!!')
      console.log(data.uniq)
    }
  })
}
var getDb = (cb) => {
  Restro.find({name: 'one'}, (err, results)=>{
  if(results.length > 0){
    console.log('get')
    cb(results);
  }else{
    return console.log(err)}
  })}

// var been = 
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
module.exports.getDb = getDb;