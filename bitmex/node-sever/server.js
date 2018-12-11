//引入模块
const http =require("http");
var URL = require('url');
var request = require('request');
var crypto = require('crypto');

//创建服务器
const server = http.createServer(function(req,res){

	if(req.url == "/bitmex"){
			if (req.method === 'POST') {
				var body = '';
				req.on('data', chunk => {
					body += chunk.toString(); // convert Buffer to string
				});
				req.on('end', () => {
					console.log(body);				
					bitmex(body);
					res.end('ok');
				});
			}
			//var data = {symbol:"XBTUSD",orderQty:2,ordType:"Market"};
			res.end("open success");
	}

}).listen(80)
console.log("wait for mt5 the data on port 80");


function bitmex(postBody)
{
var apiKey = "Ol8zB3C1KtB7IGeMp1i6Y1si";
var apiSecret = "aKMNONbyhZavg8xwSsB9DzO3_3b1oruJdQrcSh9N9nNI3T97";

var verb = 'POST',
  path = '/api/v1/order',
  expires = new Date().getTime() + (60 * 1000); // 1 min in the future
  //data = {symbol:"XBTUSD",orderQty:1,price:590,ordType:"Limit"};


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
  body: postBody,
  proxy:'http://127.0.0.1:1080'
};

 request(requestOptions, function(error, response, body) {
   if (error) { console.log(error); }
   console.log(body);
 });

}