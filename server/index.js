










var express = require('express');
var bodyParser = require('body-parser');
var yelp = require('../yelp/caller.js')
var controller = require('./../database-mongo/index.js');
var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
                          // ============================
                          // /Wish
                          // ============================
app.post('/wish', function(req, res){
  console.log(req.body)
  controller.save(
    {
      name: req.body.restro.name,
      user: req.body.name,
      wishList: true,
      address: req.body.restro.location.address1 + ', ' + req.body.restro.location.city + ' ' + req.body.restro.location.state,
      number: req.body.restro.phone,
      uniq: req.body.name + req.body.restro.name,
  })
  res.send()
})
                          // ============================
                          // /BEEN
                          // ============================
app.post('/been', function(req, res){
  console.log(req.body)
  controller.save(
    {
      name: req.body.name,
      user: req.body.restro.name,
      wishList: true,
      address: req.body.restro.location.address1 + ', ' + req.body.restro.location.city + ' ' + req.body.restro.location.state,
      number: req.body.restro.phone
  })
  res.send()
})
                          // ============================
                          // QUERY
                          // ============================
app.post('/search', function (req, res) {
  // items.save({user: "hello"})
  console.log(req.body)
  var miles = req.body.miles * 1609;
  var data = {
    location:  req.body.location,
    category: '&categories=' + req.body.category.toLowerCase(),
    radius: miles
  }
  yelp.call(data, (body)=>{
    console.log('inside serve callback')
    res.send(body)})
});

                          // ============================
                          // LANDING
                          // ============================

app.post('/', function(req, res){
  console.log('In Query')
  controller.getUsers((results)=>{res.send(results)})
})
                       // ============================
                      // USERS
                      // ============================
app.get('/user', function(req, res){
  console.log('====%^&$%^&>',req.query.name)
  controller.getUserData(req.query.name, (data)=>{res.send(data)})
  
  // controller.userData()
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

