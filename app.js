// Env
require('dotenv').config({ path: '.env' });
const path = require('path');

// errors
const errorHandler = require("./handlers/errorHandlers");

// https
const https = require("https");
const { request } = require("http");

// Framework
const express = require("express");
const app = express();

// Middle ware
const bodyParser = require("body-parser");

// ejs
const ejs = require("ejs");
app.set('view engine', 'ejs');

// Handle sending static files
app.use(express.static("public"));

// Routes
const rootRouter = require('./routes/root.js');
const demoRouter = require('./routes/demo.js');
app.use('/', rootRouter);
app.use('/demo', demoRouter);


// Mongo DB database
const database = require("./db");

// start Server
app.listen(process.env.PORT || process.env.MYPORT, function() {
    
    console.log("Starting...");
    console.log('Port:', process.env.MYPORT);
    console.log('Mode:', process.env.MYMODE);
    database.connect();

});


// /////////////////////////// put at END ///////////////////////////////

// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.status(404).send("<h1>404 Not Found</h1>");
});