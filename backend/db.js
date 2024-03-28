const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const mongoURI = process.env.MONGODB_URL 

async function connectDB() {
  try{
    await mongoose.connect(mongoURI).then(() => console.log("Connected successfully"))
     // Fetching data directly from mongodb Atlas
     try {
      const food_items = mongoose.connection.db.collection("foods");
      const food_data = await food_items.find().toArray();
    
      global.food_data = food_data;
      
      const food_category = mongoose.connection.db.collection("categories");
      const category_data = await food_category.find().toArray();
      
      global.foodCategory = category_data;
    } catch (err) {
      console.log(err);
    }    
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;