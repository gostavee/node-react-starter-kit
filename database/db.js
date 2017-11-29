/**
* Required Modules
*/
const config = require("./config.json");
const mongoose = require("mongoose");
/**
* connecting
*/
mongoose.connect(config.conString,config.options);
/**
* connection events
*/
mongoose.connection.on('connected', () => {
  console.log("connected to: ",config.conString);
});
mongoose.connection.on('error', (err) => {
  console.log('error connecting to db is: ', err);
});
mongoose.connection.on("disconnected",() => {
  console.log("disconnected from: ",config.conString);
});
/**
* close connection if process died
*/
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("connection to db is closed");
    process.exit(0);
  });
});
/**
* exporting
*/
module.exports = mongoose;
