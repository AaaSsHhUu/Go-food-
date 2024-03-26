const express = require("express");
const router = express.Router();
const {createUser, loginUser, userQuery} = require("../controller/user");
const { body } = require("express-validator");
const asyncHandler = require("express-async-handler")


router.post("/signup",[
    body("email","Invalid email").isEmail(),
    body("name","Invalid username").isLength({min : 2}),
    body("password","Invalid password").isLength({min : 5})
], asyncHandler(createUser))

router.post("/login", asyncHandler(loginUser));

router.post("/query", asyncHandler(userQuery));



module.exports = router;