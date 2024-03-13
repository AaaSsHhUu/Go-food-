const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000;
const cors = require("./middleware/cors");
const dotenv = require("dotenv").config();

// Connecting to Database
connectDB()

// app.use(cors);

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.send("Root");
})

app.use("/api/user", require("./routes/user"));
app.use("/api/data", require("./routes/data"));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})