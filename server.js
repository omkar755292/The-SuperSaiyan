const express = require('express');
const env = require('dotenv');
const path = require('path');
const router = require('./routes/router');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

env.config(); //Configuring Hostname and Port from dotenv file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;

//Creating express app and hosting static file in public folder and connecting mongoDB
connectDB();
const app = express(); 
app.use(express.static(path.join(__dirname, 'public')));

//Setting up middleware and routes
app.use(express.json());
app.use('/api/score', router);
app.use(errorHandler);

//Starting a server on port
app.listen(port, (req, res)=>{
    console.log(`server listening on http://${hostname}:${port}`);
});