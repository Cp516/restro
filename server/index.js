










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

app.post('/wish', function(req, res){
  console.log(req.body)
  controller.save(
    {
      user: req.body.restro.name,
      wishList: true

  })
  res.send()
})

app.post('/search', function (req, res) {
  // items.save({user: "hello"})
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

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

