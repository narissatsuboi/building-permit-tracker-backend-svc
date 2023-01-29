require('dotenv').config({path: require('find-config')('.env')});

// import middleware modules
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// import routes
const allRoutesRouter = require('./routes')

// create express app
const express = require('express');
const app = express();

// register middleware w/ express
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());

// register routes 
app.use('/', allRoutesRouter);

const PORT = process.env.PORT || 5000;

// Global error handling
app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// start the Express server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
