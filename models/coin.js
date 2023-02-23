const mongoose = require('mongoose');

const coinpairSchema = new mongoose.Schema({

    coin:{
        type:String,
        require:true,
        unique:true,
    },
},
 {timestamps:true}
)

module.exports = new mongoose.model('coinpair',coinpairSchema)