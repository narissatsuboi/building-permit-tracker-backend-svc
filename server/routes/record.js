const { Router } = require('express');
const express = require('express');
const recordRouter = express.Router();

recordRouter.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('GET action was requested');
});

module.exports = recordRouter;

