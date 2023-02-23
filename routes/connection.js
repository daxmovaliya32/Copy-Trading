const express = require('express');
const routes = express.Router();
const verifyuser = require("../jwtverify/userverify");
const connection = require("../controller/connection");

routes.post("/connect",verifyuser.verifyjwttoken,connection.connectuser);

module.exports=routes;