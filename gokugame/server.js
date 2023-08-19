const express = require('express');
const env = require('dotenv');
const path = require('path');

env.config(); //Configuring Hostname and Port from dotenv file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

const app = express(); //Creating express app
app.use(express.static(path.join(__dirname, 'public')));

//Starting a server on port
app.listen(port, (req, res)=>{
    console.log(`server listening on http://${hostname}:${port}`);
});