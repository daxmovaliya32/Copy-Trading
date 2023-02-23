const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    coin:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    side:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    isOpen:{
        type:Boolean,
        default:false
    }  
},
{timestamps:true}
)
module.exports = new mongoose.model("order",orderSchema);