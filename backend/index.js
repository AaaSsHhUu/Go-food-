const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000;
const dotenv = require("dotenv").config();
const path = require("path")

// Connecting to Database
connectDB()

// app.use(cors);

app.use(express.static(path.join(__dirname,"/dist")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.send("Root");
})

app.use("/api/user", require("./routes/user"));
app.use("/api/data", require("./routes/data"));
app.use("/api/order", require("./routes/order"))

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})