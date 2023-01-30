require('dotenv').config({path: require('find-config')('.env')});
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

// cross origin resource sharing
app.use(cors());

// built in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// routes
app.use('/', require('./presentation/routes/root'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).then.send('Something broke!');
});

const server = app.listen(PORT, () =>  console.log(`Server is running on port: ${PORT}`));
