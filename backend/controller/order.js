const Order = require("../models/Order");

const orderRoute = async (req,res) => {
    let {email,order_data : data} = req.body;
    // console.log(req.body);
    await data.splice(0,0,{Order_date : req.body.order_date}) // splice(start, delCount, items to add...)

    // if it's the first order of a user
    let isUser = await Order.findOne({email})
    console.log("isUser : ",isUser);
    if(!isUser){
        let newOrder = await Order.create({email, order_data : data})
        console.log("new order : ",newOrder);
        res.status(200).json({success : true})
    }
    else{ // user has ordered in past
        let updatedOrder = await Order.findOneAndUpdate({email},{$push : {order_data : data }})
        console.log("updatedOrder : ",updatedOrder);
        res.status(200).json({success : true})
    }
}

module.exports = orderRoute