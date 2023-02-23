const registeruser = require("../models/user");
const bcrypt = require('bcryptjs');
const otp = require('otp-generator');
const nodemailer = require('nodemailer');
const reguser = require("../models/user");
const jwt = require("jsonwebtoken");
const { sk, user_id, user_pass } =require("../config/config");

module.exports.addregisterdetails = async (req,res) => {
    
    try {
        const abc = otp.generate(6, { upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets: false});
        let password=req.body.password;
        let conpassword=req.body.conpassword;
        if(password==conpassword)
        {
            const bpass = await bcrypt.hash(password,10);
            const reguser = new registeruser({
            userid:req.body.userid,
            email:req.body.email,
            password:bpass,
            otp:abc
        })
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: user_id,
              pass: user_pass
            }
          });
          
          var mailOptions = {
            'from': user_id,
            'to': req.body.email,
            'subject': 'Sending Email using Node.js',
            text: abc
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
      

        const userdetails = await reguser.save();
        console.log(userdetails);
        res.status(200).send(userdetails);

        }else{
           res.status(400).send("password does not match");
        }
    
        
        } catch (error) {
            res.status(404).send(error);
        }
   
}

module.exports.verifyuserotp = async (req,res)=>{
  const email = req.body.email;
  const dataofuser = await reguser.findOne({email:email});
  if(req.body.otp==dataofuser.otp)
  {
    res.status(200).send("your account has been successfully created")
  }
}

module.exports.userlogin = async (req,res) =>{
 try {
  const email = req.body.email;
  const pass = req.body.password;
  const dataofuser = await reguser.findOne({email:email});
  const isMatch = await bcrypt.compare(pass,dataofuser.password);
        const token = jwt.sign({_id:dataofuser._id.toString()},sk,{expiresIn:"3d"});
        
        const { password , ...Others} = dataofuser._doc;
        if(isMatch==true && dataofuser.isAdmin==true){
            res.json({...Others,token})
        }else if(isMatch){
            res.json({...Others,token})
        }else{
            res.json("error")
        }
 } catch (error) {
      res.status(400).send(error);
 }
}