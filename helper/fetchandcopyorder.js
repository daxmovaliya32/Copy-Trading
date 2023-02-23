const ccxt = require('ccxt');
const connection = require('../models/connection');
const followers = require("../models/followexperts");
const helper = require("../helper/orderplace")
const orders = require("../models/order");

module.exports.fetchorder = async (timestamp,ak,sk,exp) => {
    return new Promise(async(resolve)=>{
        try {
            const Binance = new ccxt.binance({
                apiKey: ak,
                secret: sk,
                options: {
                    defaultType:'future',
                    adjustForTimeDifference: true,
                    verbos:true,
                    recvwindow:60000, 
                }, 
            }); 
            Binance.set_sandbox_mode(true);  
            let order;
            let n = exp.coinpair.length;
            for (let i = 0; i < n; i++) {
                order= await Binance.fetchOrders(exp.coinpair[i].coin,timestamp); 
                if(order.length > 0)
                {
                    const follow = await followers.find({User:exp.userid});
                    follow.forEach(async(user) => {
                      order.forEach(element => {
                        helper.Placeorder(element.symbol,element.type,element.side,element.price,user.Amount,user.Fromuser).then(async (order) => {
                            
                            let price1;
                            let isopen = false;
                            if (order.status == 'open') {
                                isopen = true;
                            }
                            if (element.type == 'market') {
                                price1=order.price
                            }else{
                                price1=price;
                            }
                
                            orderdata = new orders({
                                coin: element.symbol,
                                type: element.type,
                                side: element.side,
                                price: price1,
                                quantity: user.Amount,
                                orderId: order.info.orderId,
                                status: order.status,
                                isOpen: isopen
                            })
                            const orderdetails = await orderdata.save();
                      });
                         
                    });
                })
    
                }
            }
            resolve(true);
        } catch (error) {
            resolve(false);
        }
       
        
    })

}
  
