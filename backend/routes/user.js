const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/new",async (req,res)=>{
    try{
        const newUser = req.body;
        const user = await User.create(newUser);
        res.json({success : true, msg : "User added successfully"});
    }
    catch(err){
        res.json({success : false , msg : err})
    }
})

module.exports = router;