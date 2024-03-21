const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const orderRoute = require('../controller/order');

router.post('/order', asyncHandler(orderRoute))

module.exports = router;