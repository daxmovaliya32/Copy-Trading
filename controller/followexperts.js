const cron = require('node-cron');
const fe = require("../models/followexperts");
const connection = require("../models/connection");

    module.exports.followexpert = async (req,res) => {
        try {
              const followuser = req.body.userdata;
              const userexchange = await connection.findOne({userid:followuser._id})
             const experts = new fe({
                User:req.body.user,
                Fromuser:followuser,
                Exchange:userexchange.Exchange,
                Amount:req.body.Amount
             })

            const expertdetails = await experts.save();
            res.status(200).send(expertdetails);
    
            } catch (error) {
                res.status(404).send(error);
            }
       
    }

