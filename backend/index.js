const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000;
const dotenv = require("dotenv").config();

// Connecting to Database
const mongoURI = process.env.MONGODB_URL;
connectDB(mongoURI)
.then(() => console.log("Connected Successfully"))
.catch(err => console.log(err));


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173"); // localhost of react
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.send("Root");
})

app.use("/user", require("./routes/user"));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})