// CORS middleware
const cors = ((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173"); // localhost of react
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

module.exports = cors