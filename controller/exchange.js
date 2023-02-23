const exchange = require("../models/exchange");

module.exports.addexchange = async (req,res) => {
    
    try {
            const addexch = new exchange({
            Exchange:req.body.Exchange
        })

        const exchangedetails = await addexch.save();
        res.status(200).send(exchangedetails);

        } catch (error) {
            res.status(404).send(error);
        }
   
}