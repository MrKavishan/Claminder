const mongoose =require('mongoose');
require('dotenv').config();

const connection =mongoose.createConnection(process.env.DBURL).on('open',()=>{
    console.log("mondoDB Connected");
    
}).on('error',()=>{
    console.log("connection error");
})


module.exports= connection;