const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const mongoURI = process.env.MONGODB_URL 

async function connectDB() {
  try{
    await mongoose.connect(mongoURI);
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;