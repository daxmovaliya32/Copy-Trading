const jwt = require("jsonwebtoken");
const { sk } = require("../config/config");
const admin = require("../models/user");

module.exports.verifyjwtadmintoken = async (req,res,next)=>{
    let admintoken = req.headers.token;
  
  try {
    if(!admintoken){
        return res.status(500).json({status:false,massage:"invalid token or expired",data:null})
       }

    jwt.verify(admintoken,sk,async(err,result)=>{

      const id = result._id;
       const check =await admin.findById(id);
       if(check.isadmin == false ){
        return  res.status(500).send("only admin can do this job")
        }
        return next();
    });
    
  } catch (error)
   {
    res.status(404).send(error);
  }
  }
  