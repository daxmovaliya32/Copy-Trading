const mongoose = require('mongoose');

const followexpertsSchema = new mongoose.Schema({
    User:{
        type:String,
        required:true
    },
    Fromuser:{
        type:String,
        required:true
    },
    Exchange:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        // enum:['Flat','Percentage'],
        // default:"Flat"
        required:true
    },
},
{timestamps:true}
)
module.exports = new mongoose.model("followexperts",followexpertsSchema);