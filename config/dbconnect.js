const mongoose = require('mongoose');
const { database } = require('./config');

const mongodb = async () => {
    try {
        mongoose.connect(database,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(console.log("connection successfully"))
    }catch (error) {
        console.log(error);
    }
};
module.exports={mongodb};
