const express = require('express');
const routes = express.Router();
const verifyuser = require("../jwtverify/userverify");
const coinpair = require("../controller/addcoinpair");
const addcoin = require("../controller/addcoin");

routes.post("/add_coin-pair",verifyuser.verifyjwttoken,coinpair.coinpairofexpert);
routes.post("/add_coin",verifyuser.verifyjwttoken,addcoin.allcoin);

module.exports=routes;