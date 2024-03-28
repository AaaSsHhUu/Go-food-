const User = require("../models/User");
const Queries = require("../models/query");
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ExpressError = require("../middleware/ExpressError");

// Sign up 
const createUser = async (req,res)=>{
    let {email,password} = req.body;
    // Data validation
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array(), success : false })
    }

    // If user already exist
    const isUser = await User.findOne({email})
    if(isUser){
       return res.status(400).json({success : false, msg : "User with given email already exist"})
    }
    const salt = await bcrypt.genSalt(10);
    let newUser = req.body;
    newUser.password = await bcrypt.hash(password,salt)
    const user = await User.create(newUser);
    if(user){
       return res.status(200).json({success : true});    
    }
    else{
        return res.status(500).json({success : false, msg : "internal server error"});
    }
}

// Log in 
const loginUser = async (req, res) => {

        const {email,password} = req.body;

        if(!email || !password){
           return res.status(400).json({success : false, msg : "All fields are mandatory"});
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
           return res.status(200).json({accessToken,email,success : true});
            
        }
        else{
            return res.status(401).json({success : false});
        }
        
    
}

const userQuery = async (req,res) => {
    let {email,query} = req.body;
    if(email && query){
        let newQuery = await Queries.create({email,query})
        res.json(newQuery)
    }
    else{
        res.status(400).json({msg : "Bad request"})
    }
}

module.exports = {createUser, loginUser, userQuery}