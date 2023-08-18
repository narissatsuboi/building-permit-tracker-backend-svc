const dotenv = require("dotenv");
dotenv.config({ path: require("find-config")(".env") });

const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const logger = require('./utils/logger');
const port = process.env.PORT || 5000;
const morganMiddleware = require('./middleware/morgan.mw');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morganMiddleware);

app.use('/', require('./Root/rootRoutes'));
app.use('/records', require('./Record/recordRoutes'));
app.use('/users', require('./User/userRoutes'));

const connectdb = (uri) => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const startServer = (port=5000) => {
  mongoose.connection.once('open', () => {
    logger.info(`Connected to MongoDB on default conn`);
    app.listen(port, () => logger.info(`Server is running on port: ${port}`));
    mongoose.connection.on('disconnect', (err) => logger.error(err));
  });
};

const run = async (port=5000) => {
  try {
    connectdb(process.env.MONGO_URI);
  } catch (err) {
    logger.error('could not connect to db');
  }
  try {
    startServer(port);
  } catch (err) {
    logger.error('could not run server');
    mongoose.connection.close();
  }
};

run(port);
