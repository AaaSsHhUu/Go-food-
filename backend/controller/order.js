const Order = require("../models/Order");

module.exports.orderRoute = async (req,res) => {
    let {email,data} = req.body;
    await data.splice(0,0,{Order_date : req.body.order_date})

    // if it's the first order of a user
    let isUser = await Order.findOne({email})
    console.log(isUser);
    if(!isUser){
        let newOrder = await Order.create({email, order_data : data})
        console.log(newOrder);
        res.json({success : true})
    }
    else{ // user has ordered in past
        let updatedOrder = await Order.findOneAndUpdate({email},{$push : {order_data : data}})
        console.log(updatedOrder);
        res.json({success : true})
    }
}