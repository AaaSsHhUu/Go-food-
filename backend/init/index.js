const mongoose = require("mongoose");
const Food = require("../models/Food");
const food_items = require('./food_item');
const Category = require("../models/Category");
const foodCategory = require("./foodCategory");
require("dotenv").config();


const mongoURI = process.env.MONGODB_URL; // giving undefined
// console.log(mongoURI);

async function main() {
  await mongoose.connect(mongoURI);
}

main()
.then(res => console.log("Connected to DB"))
.catch(err => console.log(err));

const initFoodData = async () => {
    await Food.deleteMany({});

    await Food.insertMany(food_items);
    console.log("Data initialized")
    
}

const initCategoryData = async ()=>{
    await Category.deleteMany({});

    await Category.insertMany(foodCategory);
    console.log("Data initialized");
}
// initFoodData();
// initCategoryData();