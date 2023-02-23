const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({

    Exchange:{
        type:String,
        unique:true,
        require:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
 {timestamps:true}
)

module.exports = new mongoose.model('exchange',exchangeSchema)