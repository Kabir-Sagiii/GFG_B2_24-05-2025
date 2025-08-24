const mongoose = require("mongoose");

function createConnection() {
  //Connect with Database Server and Database
  mongoose
    .connect("mongodb://localhost:27017/gfgb3db")
    .then(() => {
      console.log("Successfully Connected with Database and its Server");
    })
    .catch((error) => {
      console.log("Failed to Connect with Server and Database");
      console.log(error);
    });
}

module.exports = createConnection;
