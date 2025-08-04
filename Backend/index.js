const app =require('./app');
const db = require('./config/db');
const User =require('./model/user.js');

const port= 3000;

app.listen(port,()=>{
    console.log(`Server run on port ${port}`);

});