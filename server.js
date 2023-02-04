const dotenv = require('dotenv');
dotenv.config({path: require('find-config')('.env')});
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsConfig = require('./configuration/corsConfig');
const cookieParser = require('cookie-parser');
const errorHandler = require(path.join(__dirname, 'presentation', 'middleware', 'errorHandler'));
const { logger, requestLogger, errorLogger } = require(path.join(__dirname, 'common', 'logging', 'index.js'))

// db
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = require(path.join(__dirname, 'configuration', 'dbConn'));

// connect to db 
connectDB();

// register middleware
app.use(requestLogger);
app.use(errorLogger);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/', require(path.join(__dirname, 'presentation', 'routes', 'root')));
app.use('/register', require(path.join(__dirname, 'presentation','routes','register')));
app.use('/records', require(path.join(__dirname, 'presentation','routes','records')));

// custom error handler middleware 
app.use(errorHandler);

// if db connected, listen on server
mongoose.connection.once('open', () => {
    logger.info(`MongoDB running`);
    app.listen(PORT, () => logger.info(`Server is running on port: ${PORT}`))
});
