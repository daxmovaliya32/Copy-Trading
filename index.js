const express = require("express");
const { port } = require("../copy treding/config/config");
const app = express();
const mon =require("./config/dbconnect")
require("./config/config");

// routes
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const reg = require("./routes/user");
app.use("/user",reg); //for user register and login
const conn = require("./routes/connection");
app.use("/user",conn); //for connect to exchange
const exchange = require("./routes/exchange");
app.use("/admin",exchange); //for add to exchange(only admin can add)
const order = require("./routes/order");
app.use("/user",order); //for place order
const expertfollow = require("./routes/followexperts");
app.use("/user",expertfollow); //for follows experts
const addcp = require("./routes/coinpair");
app.use("/user",addcp); //for adding coin-pair


// for copy orders 
const boat = require("./boat");
boat.copyorder();
// database connection
mon.mongodb();
// server connection 
app.listen(port,()=>{
    console.log(`server running on port number ${port}`);
})


   