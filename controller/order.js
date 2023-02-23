const orders = require("../models/order");
const user = require("../models/user");
const helper = require("../helper/orderplace")

module.exports.placeorder = async (req, res) => {
    const coin = req.body.coin;
    const type = req.body.type;
    const side = req.body.side;
    const price = req.body.price;
    const amount = req.body.quantity;
    const userdetails = req.body.userdata;
    const uid = userdetails._id;

    try {

        helper.Placeorder(coin, type, side, price, amount, uid).then(async (order) => {
            let price1;
            let isopen = false;
            if (order.status == 'open') {
                isopen = true;
            }
            if (type == 'market') {
                price1=order.price
            }else{
                price1=price;
            }

            orderdata = new orders({
                coin: coin,
                type: type,
                side: side,
                price: price1,
                quantity: amount,
                orderId: order.info.orderId,
                status: order.status,
                isOpen: isopen
            })
            const orderdetails = await orderdata.save();

            res.status(200).send(orderdetails);
        })
    } catch (error) {
        res.status(404).send(error);
    }

}

