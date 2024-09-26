const mongoose=require("mongoose")
require("dotenv").config()
const connectBb=async()=>{
    try {
        await mongoose.connect(process.env.uri)
        console.log("connecting to ur database")
    } catch (error) {
        console.error(error);
        
    }
}
module.exports=connectBb