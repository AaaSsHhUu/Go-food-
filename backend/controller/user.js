const User = require("../models/User");
const { validationResult } = require("express-validator")

const createUser = async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array() })
    }

    try{
        const newUser = req.body;
        const user = await User.create(newUser);
        res.json({success : true, msg : "User added successfully"});
    }
    catch(err){
        res.json({success : false , msg : err})
    }
}

module.exports = {createUser}