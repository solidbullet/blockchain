var request = require('request');
var crypto = require('crypto');

var apiKey = "your_id";
var apiSecret = "your_secret";

var verb = 'POST',
  path = '/api/v1/order',
  expires = new Date().getTime() + (60 * 1000), // 1 min in the future
  //data = {symbol:"XBTUSD",orderQty:1,price:3700,ordType:"Limit"};
  data = {symbol:"XBTUSD",orderQty:1,ordType:"Market"};
// Pre-compute the postBody so we can be sure that we're using *exactly* the same body in the request
// and in the signature. If you don't do this, you might get differently-sorted keys and blow the signature.
var postBody = JSON.stringify(data);

var signature = crypto.createHmac('sha256', apiSecret).update(verb + path + expires + postBody).digest('hex');

var headers = {
  'content-type' : 'application/json',
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  // This example uses the 'expires' scheme. You can also use the 'nonce' scheme. See
  // https://www.bitmex.com/app/apiKeysUsage for more details.
  'api-expires': expires,
  'api-key': apiKey,
  'api-signature': signature
};

const requestOptions = {
  headers: headers,
  url:'https://testnet.bitmex.com'+path,
  method: verb,
  body: postBody
};

request(requestOptions, function(error, response, body) {
  if (error) { console.log(error); }
  console.log(body);
});