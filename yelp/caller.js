



const request = require('request');
const config = require('../config.js');

let call = (data, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
  let options = {
    url: 'https://api.yelp.com/v3/businesses/search?location=' + data.location + data.category + '&radius=' + data.radius,
    headers: {
      'User-Agent': 'request',
      'Authorization': `Bearer ${config.TOKEN}`
    },
    // token: config.TOKEN,
    

  };
  request(options, function (error, res, body) {
    // res.statusCode(response.statusCode);
    // res.body(body);
    // res.end();
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    console.log('inside caller js')
    // console.log(res.body)
    var arr = JSON.parse(body);
    cb(arr);
  });


}

module.exports.call = call;