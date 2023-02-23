const addallcoins = require("../models/coin");
const fetch = require("node-fetch");
const { data_url } = require('../config/config');

module.exports.allcoin = async (req,res) => {
    
    try {  
           var coins;
           const data = await fetch(data_url)
           .then(response => response.json())
           const dataofcoin=data.symbols;
           const len = Object.keys(dataofcoin).length;
            for (let i = 0; i < len; i++) {
              const coind = dataofcoin[i].symbol;
              const addcoin = new addallcoins({
                coin:coind,
              })
              coins = await addcoin.save();
            }
        res.status(200).send("coin is successfully added");

        } catch (error) {
           res.status(400).send(error);
        }
   
}