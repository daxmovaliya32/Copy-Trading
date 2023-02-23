require('dotenv').config()

let con={
    database:process.env.db,
    port:process.env.url,
    sk:process.env.secret_key,
    data_url:process.env.data_url,
    user_id:process.env.userid,
    user_pass:process.env.pass
}

module.exports=con;