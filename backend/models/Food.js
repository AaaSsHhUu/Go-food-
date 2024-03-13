const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    CategoryName : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true 
    },
    options : [
        {
            half : {type : String},
            full : {type : String},
            regular : {type : String},
            medium : {type : String},
            large : {type : String}
        }
    ],
    description : {
        type : String,
        required : true
    }
})

const Food = mongoose.model("Food",foodSchema);

module.exports = Food;