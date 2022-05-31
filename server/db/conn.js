const mongoose = require('mongoose');

//  "Database base, but we don't define database here."
const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology : true
}).then(()=> {
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
})