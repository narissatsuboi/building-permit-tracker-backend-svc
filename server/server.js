require('dotenv').config({path: require('find-config')('.env')});

// import middleware modules
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// create express app
const express = require('express');
const app = express();

// pass router into route files
const router = (global.router = express.Router());
app.use(require('./routes'));
app.use(require('./modules/records/recordsRoutes'));

// register middleware w/ express
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

// Global error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).then.send('Something broke!');
});

// start the Express server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;