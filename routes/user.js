const express = require('express');
const routes = express.Router();
const registeruser = require("../controller/user");
const validator = require("../validator/user");

routes.post("/signup",validator.validateuserrules,registeruser.addregisterdetails);

routes.post("/signup/verifyotp",registeruser.verifyuserotp);

routes.get("/login",validator.validateuserloginrules,registeruser.userlogin);

module.exports=routes;