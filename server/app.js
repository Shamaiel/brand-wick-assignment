require("dotenv").config();
const express = require("express");
const { connection } = require("./db/connection");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")

const app = express();

const port = 8000
app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


// app.get("/", (req, res)=>{
//     res.status(201).json("sever running")
// })






app.listen(port, async () => {
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log("error while connecting to DB")
        console.log(err)
    }
    console.log(`listening on port ${port}`)
})

