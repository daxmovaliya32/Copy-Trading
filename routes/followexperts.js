const express = require('express');
const routes = express.Router();
const verifyuser = require("../jwtverify/userverify");
const experts = require("../controller/followexperts");

routes.post("/expert",verifyuser.verifyjwttoken,experts.followexpert);

module.exports=routes;