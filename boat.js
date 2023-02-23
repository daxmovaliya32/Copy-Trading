const fetchandcopyord = require("./controller/copyord");

const copyorder = async() =>{
    return new Promise(async(resolve, reject) => {
         await fetchandcopyord.showcopyorder();
         resolve(await copyorder());
    })
}

module.exports = {copyorder};