const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000;
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");

// Connecting to Database
connectDB()

app.use(cors());

app.use(express.static(path.join(__dirname,"/dist")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.send("Root");
})

app.use("/user", require("./routes/user"));
app.use("/data", require("./routes/data"));
app.use("/order", require("./routes/order"))

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})