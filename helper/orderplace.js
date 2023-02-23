const ccxt = require('ccxt');
const connection = require('../models/connection');

module.exports.Placeorder = async (coin,type,side,price,amount,uid) => {
    return new Promise(async(resolve,reject)=>{
        const dataofexchange = await connection.findOne({userid:uid});
        console.log(uid);
        const Binance = new ccxt.binance({
            apiKey: dataofexchange.Apikey,
            secret: dataofexchange.Secretkey,
            options: {
                defaultType:'future',
                adjustForTimeDifference: true,
                verbos:true,
                recvwindow:60000, 
            }, 
        });
        Binance.set_sandbox_mode(true);  
         let order;
         
         if(type=='limit')
         {
              order = await Binance.createOrder(coin,type,side,amount,price);
         }else{
              order = await Binance.createOrder(coin,type,side,amount);
         }
         console.log(order);
         if(order)
         {
             resolve(order)  
         }else{
             reject("fail")
         }
    })
}