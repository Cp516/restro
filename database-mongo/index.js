











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
    }
  })
}

//==================================
//      GET ALL
//===================================
var getUsers = (cb) => {
  Restro.find({}, (err, results)=>{
  if(results.length > 0){
    console.log('get')
    cb(results);
  }else{
    console.log('in getDB')
    return console.log(err)}
  })}


//==================================
//      GET SPECIFIC USER DATA
//===================================
var getUserData = (name, cb)=>{
  Restro.find({'user': name}, (err, results)=>{

  if(results){
    console.log('in getDB')
    console.log('get')
    cb(results);
  }else{
    console.log('err')}
  })
}

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
module.exports.getUsers = getUsers;
module.exports.getUserData = getUserData;