var express = require('express');
var allRoutesRouter = express.Router();

/* GET home page. */
allRoutesRouter.get('/', function(req, res, next) {
    res.send('welcome to tracki');
});

module.exports = allRoutesRouter;