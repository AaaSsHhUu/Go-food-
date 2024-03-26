const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    email : {
        type : String,
        required : true
    },
    query : {
        type : String,
        required : true
    }
})

const Queries = mongoose.model("Queries",querySchema);
module.exports = Queries;