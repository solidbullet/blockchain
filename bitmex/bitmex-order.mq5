#include <hiiboy/JAson.mqh>


void OnStart()
  {

   CJAVal jv;

	jv["symbol"] = "XBTUSD";
   jv["orderQty"] = 1;
   jv["ordType"] = "Market";
   string postbody = jv.Serialize();

   string url = "http://hiiboy.com:8888/bitmex";
   string cookie=NULL,headers,res_headers; 
   headers += "content-type:application/json\r\n";
   char  result[]; 
   char data[]; 
   ArrayResize(data, StringToCharArray(jv.Serialize(), data, 0, WHOLE_ARRAY)-1);
   string result_str;
   int res=WebRequest("POST",url,headers,500,data,result,res_headers); 
   if(res==-1) 
     { 
      Print("Error in WebRequest. Error code  =",GetLastError()); 
      MessageBox("Add the address '"+url+"' to the list of allowed URLs on tab 'Expert Advisors'","Error",MB_ICONINFORMATION); 
     } 
   else 
     { 
      if(res==200) 
        { 
            result_str = CharArrayToString(result,0,WHOLE_ARRAY,CP_ACP);
            Print(result_str);
        } 
      else 
         PrintFormat("Downloading '%s' failed, error code %d",url,res); 
     }
  }
  
