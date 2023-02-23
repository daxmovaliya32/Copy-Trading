const jwt = require("jsonwebtoken");
const user = require("../models/user");
const {sk} = require("../config/config")

module.exports.verifyjwttoken = (req,res,next)=>{
    let usertoken = req.headers.token;
  try {
    if(!usertoken){
        return res.status(500).json({status:false,massage:"invalid token or expired",data:null})
    }
    jwt.verify(usertoken,sk,(err,result)=>{
    if(err){ return res.status(500).json({status:false,massage:"invalid token or expired",data:null})}
    req.body.userdata=result;
    return next();
    });
  } catch (error) {
    res.status(404).send("token is not valid");
  }
  
}