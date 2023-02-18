const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// dummy server for use in __tests__ 
function createTestServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use("/", require('../../routes/root'));
  app.use("/records", require('../../routes/records'));

  return app; 
};

module.exports = { createTestServer };