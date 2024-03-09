//Importing nessasary dependancy
const express = require('express');
const env = require('dotenv');
const path = require('path');
const router = require('./routes/router');
const connectDB = require('./config/connectionDB');
const errorHandler = require('./middleware/errorHandler');

env.config(); //configuring hostname and port from dotenv file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

connectDB(); //connecting to mongoDB
const app = express();

//settingup middleware and routed
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/score', router);
app.use(errorHandler);

//starting server
app.listen(port, ()=>{
    console.log(`server listening on http://${hostname}:${port}`);
});