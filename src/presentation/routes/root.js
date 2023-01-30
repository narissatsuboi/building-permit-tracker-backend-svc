const express = require('express');
const router = express.Router();
const path = require('path');
const logger = require(path.join(__dirname, '..', '..', 'common', 'logging', 'index.js'))

router.get('^/$|/index(.html)?', (req, res) => {
    res.send('<h3>WELCOME TO TRACKI</h3>');
    logger.info('GET /');
});

router.get('/about', (req, res) => {
    res.send('<h3>ABOUT THE CREATORS</h3>');
    logger.info('GET /about');
});

module.exports = router;