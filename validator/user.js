const joi = require('joi');

module.exports.validateuserrules = (req,res,next)=>{
    const val = new joi.object({
        userid:joi.string().required(),
        email:joi.string().required().email(),
        password: joi.string().min(8).max(15).required(),
        conpassword: joi.string().min(8).max(15).required()
    })
    let result = val.validate(req.body)
    if(result.error)
    {
        return res.status(400).send(result.error.details[0].message);
       
    }
    next();
}

module.exports.validateuserloginrules = (req,res,next)=>{
    const val = new joi.object({
        email:joi.string().required().email(),
        password: joi.string().min(8).max(15).required(),
    })
    let result = val.validate(req.body)
    if(result.error)
    {
        return res.status(400).send(result.error.details[0].message);
       
    }
    next();
}


