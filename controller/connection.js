const connection = require("../models/connection");
const user = require("../models/user");

module.exports.connectuser = async (req,res) => {
    
    try {
        let id=req.body.userid;
        const userdata = await user.findOne({userid:id});
        const timestemp = Date.now();
            const connuser = new connection({
            userid:userdata._id,
            Apikey:req.body.Apikey,
            Secretkey:req.body.Secretkey,
            Exchange:req.body.Exchange,
            last:timestemp
        })
        
        const connectiondetails = await connuser.save();
        // console.log(connectiondetails);
        res.status(200).send(connectiondetails);

        } catch (error) {
            res.status(404).send(error);
        }
   
}
