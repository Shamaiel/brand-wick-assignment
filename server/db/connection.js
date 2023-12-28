const mongoose = require("mongoose")
require("dotenv").config()
const DB = process.env.DB_URL

mongoose.connect(DB,{
    
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(()=> console.log("DataBase got Connected"))

  .catch((errr)=>{
  
    console.log(errr);

})


