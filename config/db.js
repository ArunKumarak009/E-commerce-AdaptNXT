require("dotenv").config()
const mongoose = require('mongoose'); 

const connectDB = async () =>{
    try{
    await mongoose.connect(process.env.URI , {})
    console.log('MongoDB connected');
    }catch(err){
        console.log("Error connecting to MongoDb" , err)
        process.exit(1)
    }
   
}

module.exports = connectDB