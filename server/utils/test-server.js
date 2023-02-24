const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

function createTestServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use("/", require('../Root/rootRoutes'));
  app.use("/records", require('../Record/recordRoutes'));

  return app; 
};

module.exports = { createTestServer };