const User = require("../models/User");
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ExpressError = require("../middleware/ExpressError");

// Sign up 
const createUser = async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array() })
    }

    const salt = await bcrypt.genSalt(10);
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password,salt)
    const user = await User.create(newUser);
    res.send(user);    
}

// Log in 
const loginUser = async (req, res) => {

        const {email,password} = req.body;

        if(!email || !password){
            res.status(400);
            throw new ExpressError(400,"All fields are mandatory");
        }

        const isUser = await User.findOne({email});
        // console.log(isUser);
        
        if(isUser && await bcrypt.compare(password,isUser.password)){
            const accessToken = jwt.sign({
                user : {
                    name : isUser.name,
                    email : isUser.email,
                    id : isUser._id
                }
            },process.env.SECRET_KEY,{
                expiresIn : "30m"
            })
            res.status(200).json({accessToken});
            localStorage.setItem("accessToken",accessToken);
        }
        else{
            res.status(401);
            throw new ExpressError(401,"Email or Password is not valid");
        }
        
    
}

module.exports = {createUser, loginUser}