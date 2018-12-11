#property copyright "Wechat:13818571403"
#property link      "691622093@qq.com"
#property version   "1.00"
#property strict
#include <hiiboy/bitcoin.mqh>
#include <hiiboy/JAson.mqh>

int OnInit()
  {

      return(INIT_SUCCEEDED);
  }

void OnStart()
  {
   CJAVal jv;
   jv["symbol"] = "XBTUSD";
   jv["orderQty"] = -1;
   jv["ordType"] = "Market";
   BitCoin p;
   p.SendTicket(&jv);
   Print(p.GetUrl());


  }

void OnDeinit()
  {

  }
