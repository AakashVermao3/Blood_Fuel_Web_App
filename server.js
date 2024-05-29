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
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


//port
const PORT  = process.env.PORT || 3090;

//liaten
app.listen(PORT , () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode  on Port ${process.env.PORT}`
    .bgBlue.white
);
});

