const { number } = require('joi');
const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({

    userid:{
        type:String,
        require:true,
        unique:true,
    },
    Apikey:{
        type:String,
        require:true,
        unique:true,
    },
    Secretkey:{
        type:String,
        require:true,
        unique:true
    },
    Exchange:{
        type:String,
        require:true
    },
        coinpair:[{
        coin:{type:String},
        AvgPrice:{type:Number},
        Quantity:{type:Number}
    }],
    last:{
        type:Number,
        require:true
    }
},
 {timestamps:true}
)

module.exports = new mongoose.model('connection',connectionSchema)