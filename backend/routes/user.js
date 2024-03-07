const express = require("express");
const router = express.Router();
const {createUser, loginUser} = require("../controller/user");
const { body } = require("express-validator");


router.post("/signup",[
    body("email","Invalid email").isEmail(),
    body("name","Invalid username").isLength({min : 2}),
    body("password","Invalid password").isLength({min : 5})
], createUser)

router.post("/login", loginUser)

module.exports = router;