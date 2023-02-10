const dotenv = require("dotenv");
dotenv.config({ path: require("find-config")(".env") });
const mongoose = require("mongoose");

/**
 * Create default connection to MongoDB. For use in server only.
 * Access default connection with 'mongoose.connection'.
 * @param {*} url
 */
const startDefaultConn = (url) => {
  try {
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log("Default connection error");
  }
};
module.exports = startDefaultConn;
