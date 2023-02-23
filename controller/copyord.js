const connection = require("../models/connection");
const userreg = require("../models/user");
const followexp = require("../models/followexperts");
const helper1 = require("../helper/fetchandcopyorder");
const helper2 = require("../helper/orderplace");
const orders = require("../models/order");
const { resolve } = require("path");

module.exports.showcopyorder = async (req, res) => {
        try {
           
            const experts = await userreg.find({isExpert:true});
            experts.forEach(async(expert) => {
                // console.log("expert");
                const exp = await connection.findOne({userid:expert._id})
                const followers = await followexp.find({User:expert._id});
                helper1.fetchorder(exp.last,exp.Apikey,exp.Secretkey,exp).then(async(response) => {
                    const timestamp = Date.now();
                    const data = await connection.findOneAndUpdate({userid:exp.userid},{last:timestamp},{new:true});
                }).catch((error)=>
                {
                    console.log(error);
                    resolve(false)
                })
                 
            });
            // console.log("hii");
            
        }catch(error) {
           console.log(error);
        }
    }
