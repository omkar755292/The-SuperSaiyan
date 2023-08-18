const express = require('express');
const env = require('dotenv');
const path = require('path');

env.config(); //Configuring Hostname and Port from dotenv file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

//Creating express app and hosting static file in public folder and connecting mongoDB
const app = express(); 
app.use(express.static(path.join(__dirname, 'public')));

//Starting a server on port
app.listen(port, (req, res)=>{
    console.log(`server listening on http://${hostname}:${port}`);
});