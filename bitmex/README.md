# blockchain

# EA 通过include中的bitcoin类把单子发送到 node服务器，代码见node-server; EA 开单见test.mq5  
## 如果用的ssr代理一点要注意加上proxy:'http://127.0.0.1:1080'  
  const requestOptions = {  
	  headers: headers,  
	  url:'https://testnet.bitmex.com'+path,  
	  method: verb,  
	  body: postBody,  
	  proxy:'http://127.0.0.1:1080'  
	};  
# https://blockchain.info   https://blockexplorer.com https://btc.com   https://etherchain.org  https://bitnodes.earn.com/

# btc 场外交易   
https://localbitcoins.com   https://otcbtc.com  https://www.coincola.com/?lang=zh-CN     
https://www.okex.com/   https://www.binance.co/cn/   


#main.go
打开浏览器，访问 http://127.0.0.1  
postman: post模式，req.body 中输入 {"BMP":55} 点击post  

#bitmex API 见request.js ,golang的apikey hash算法见hash.go  

