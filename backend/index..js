const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000;

connectDB()
.then(() => console.log("Connected Successfully"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Root");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})