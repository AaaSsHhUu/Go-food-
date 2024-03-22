const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const orderRoute = require('../controller/order');

router.post('/', asyncHandler(orderRoute))

module.exports = router;