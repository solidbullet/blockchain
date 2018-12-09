var request = require('request');
var crypto = require('crypto');


var apiSecret = "BUv-Qf1yz3OTZJhBJNSeadj5AjLBqhl9jt6wROPkmKWB4QDk";

var verb = 'POST',
  path = '/api/v1/order',
  expires = new Date().getTime() + (60 * 1000), // 1 min in the future
  //data = {symbol:"XBTUSD",orderQty:1,price:3700,ordType:"Limit"};
  data = {symbol:"XBTUSD",orderQty:1,ordType:"Market"};
// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBody = JSON.stringify(data);
console.log(verb + path + postBody);

var signature = crypto.createHmac('sha256', apiSecret).update(verb + path + postBody).digest('hex');

console.log(signature);