#include <hiiboy/SHA256.mqh>
#include <hiiboy/JAson.mqh>


void OnStart()
  {
   CJAVal jv;
   string apiSecret = "BUv-Qf1yz3OTZJhBJNSeadj5AjLBqhl9jt6wROPkmKWB4QDk";
   
	string verb = "POST";
	string path = "/api/v1/order";
	//ticket := Ticket{Symbol: "XBTUSD", OrderQty: 1, OrdType: "Market"}
	jv["symbol"] = "XBTUSD";
   jv["orderQty"] = 1;
   jv["ordType"] = "Market";
   string ticket = jv.Serialize();
   string data;
   StringConcatenate(data,verb,path,ticket);
   Print(data);
   SHA256 hash256;
   Print("SHA256:",hash256.hmac(data,apiSecret));  
  }