const express = require('express');

//rest object
const app = express();

//route
//test1
app.get('/' ,(req,res) => { //('/') means local host
    res.status(200).json({   ///typw does it working eg 200 oky request
    message: "Welcome to Blood Fuel"
    });    
});        

//port
const PORT = 8091;

//liaten
app.listen(PORT , () => {
    console.log("Node Server Running")
});