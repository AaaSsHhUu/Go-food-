const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {orderRoute, userOrder} = require('../controller/order');

router.post('/', asyncHandler(orderRoute))
router.post("/user_orders", asyncHandler(userOrder))

module.exports = router;