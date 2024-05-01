const express = require('express');

//rest object
const app = express();

//route
//test1
app.use('/api/v1/test',require("./routes/testRoutes"));      

//port
const PORT = 8091;

//liaten
app.listen(PORT , () => {
    console.log("Node Server Running");
});