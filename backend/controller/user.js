const User = require("../models/User");
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Sign up 
const createUser = async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array() })
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password,salt)
        const user = await User.create(newUser);
        res.send(user);
    }
    catch(err){
        res.json({success : false , msg : err})
    }
}

// Log in 
const loginUser = async (req, res) => {
    try{

        const {email,password} = req.body;
        const isUser = await User.findOne({email});
        console.log(isUser);
        if(!isUser){
            res.json({error : "User not found"});
        }


        const isPassword = await bcrypt.compare(password,isUser.password);
        console.log(isPassword)
        if(!isPassword){
            res.json({error : "Wrong Email or Password"});
        }
        
        const data = {
            user : {
                id : isUser.id
            }
        }

        const authToken = jwt.sign(data,process.env.SECRET_KEY,)
        return res.json({success : "Logged in successfully", auth_token : authToken});
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {createUser, loginUser}