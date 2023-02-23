const connection = require("../models/connection");
const user = require("../models/user");
const coin = require("../models/coin");

module.exports. coinpairofexpert = async (req,res) => {
    
    try {
            const uid=req.body.userdata;
            const coinname = await coin.findOne({_id:req.body.coin});
            const connect = await connection.findOne({userid:uid});
            const id = connect._id;
        
        const coinpairdetails = await connection.findByIdAndUpdate({_id:id},{$push:{coinpair:{"coin":coinname.coin,"AvgPrice":0,"Quantity":0}}},{
            new:true
        });
        res.status(200).send(coinpairdetails);

        } catch (error) {
            // res.status(404).send(error);
            console.log(error);
        }
   
}
