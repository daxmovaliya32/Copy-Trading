const express = require('express');
const routes = express.Router();
const verifyadmin = require("../jwtverify/adminverify");
const exchange = require("../controller/exchange");

routes.post("/addexchange",verifyadmin.verifyjwtadmintoken,exchange.addexchange);

module.exports=routes;