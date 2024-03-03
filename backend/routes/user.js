const express = require("express");
const router = express.Router();
const {createUser} = require("../controller/user");
const { body, validationResult } = require("express-validator")


router.post("/new",[
    body("email","Invalid email").isEmail(),
    body("name","Invalid username").isLength({min : 2}),
    body("password","Invalid password").isLength({min : 5})
], createUser)

module.exports = router;