const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();
dotenv.config({ path: require("find-config")(".env") });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const logger = require(path.join(__dirname, "common", "logging", "index"));
const port = process.env.PORT || 5000;
const trackiRoutes = path.join(__dirname, "routes", "root");
const recordRoutes = path.join(__dirname, "routes", "records");

app.use("/", require(trackiRoutes));
app.use("/records", require(recordRoutes));

const connectdb = (uri) => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const startServer = (port=5000) => {
  mongoose.connection.once("open", () => {
    logger.info(`Connected to MongoDB on default conn`);
    app.listen(port, () => logger.info(`Server is running on port: ${port}`));
    mongoose.connection.on("disconnect", (err) => logger.error(err));
  });
};

// const shutdown = async () => {
//   process.on("SIGINT", async () => {
//     await mongoose.connection.close();
//     await app.close();
//     process.exit(0);
//   });
// };

const run = async (port=5000) => {
  try {
    connectdb(process.env.MONGO_URI);
  } catch (err) {
    logger.error("could not connect to db");
  }
  try {
    startServer(port);
  } catch (err) {
    logger.error("could not run server");
    mongoose.connection.close();
  }
};

run();

module.exports = app; 