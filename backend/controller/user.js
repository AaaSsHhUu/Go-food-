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

const loginUser = async (req, res) => {
    try{

        const {email, password} = req.body;
        const isUser = await User.findOne({email});
        if(!isUser){
            res.json({error : "User not found"});
        }
        if(isUser.password !== password){
            res.json({error : "Wrong Email or Password"});
        }
        
        return res.json({success : "Logged in successfully"});
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {createUser, loginUser}