const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

//dot config
dotenv.config(); //it .env file was in some fole then we have to give the path on to bricaket


//mongodb config
connectDB();



//rest object
const app = express();


//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



//route
//test1
app.use("/api/v1/test",require("./routes/testRoutes"));      
app.use("/api/v1/auth",require("./routes/authRoutes"));

//port
const PORT = process.env.PORT || 8091;

//liaten
app.listen(PORT , () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode  on Port ${process.env.PORT}`
    .bgBlue.white
);
});