const { boolean } = require('joi');
const mongoose = require('mongoose');
const validator = require("validator");

const registerSchema = new mongoose.Schema({

    userid:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    isExpert:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    },
    otp:{
        type:Number,
        require:true
    }
},
 {timestamps:true}
)

module.exports = new mongoose.model('userregister',registerSchema)