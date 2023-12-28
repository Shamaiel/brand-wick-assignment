require("dotenv").config();
const express = require("express");
const app = express();

const port = 8080

app.get("/", (req, res)=>{
    res.status(201).json("sever running")
})


app.listen(port,()=>{
    console.log(`Server start at port no : ${port}`);
})