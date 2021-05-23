/*
    Database connection
*/
const mongoose = require("mongoose");
const database = mongoose.connection;
const errorHandler = require("./handlers/errorHandlers");

// events
database.on("error", () => console.log("Error connecting to DB"));
database.once("connected", () => console.log("Connection open to DB"));
database.on("close", () => console.log("Connection closed to DB" ));


// connect to cloud database
module.exports.connect = connect;
function connect(){

    console.log("Connecting to DB");

    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if(err) {
            console.log("Error connecting to db: " + err.stack);
        }
    });

    // DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
    // Help: https://github.com/Automattic/mongoose/issues/6890
    mongoose.set('useCreateIndex', true);

}

// Dissconnect
module.exports.disconnect = disconnect;
function disconnect() {

    database.close();

}

// Delete entire database
module.exports.doDropDatabase = (res, databaseName) => {

    database.dropDatabase( () => {

        if(err) {
            console.log(err);
            errorHandler.internalServerError(res,err)
        }
        else {
            console.log(databaseName + " dropped"); 
            res.status(200).send("OK");
        }
    });

}

// Delete collection in current database
module.exports.doDropCollection = (res, collectionName) => {
    
    database.dropCollection(collectionName, (err) => {
        if(err) {
            console.log(err);
            errorHandler.internalServerError(res,err)
        }
        else {
            console.log(collectionName + " dropped"); 
            res.status(200).send("OK");
        }

    });

}