const express = require('express');
const routes = express.Router();
const verifyuser = require("../jwtverify/userverify");
const userorder = require("../controller/order");
const copyorder = require("../controller/copyord");

routes.post("/placeorder",verifyuser.verifyjwttoken,userorder.placeorder);

module.exports=routes;