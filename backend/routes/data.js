const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.post("/foodData",asyncHandler((req,res) => {
        res.send([global.food_data,global.foodCategory]);
}))

module.exports = router