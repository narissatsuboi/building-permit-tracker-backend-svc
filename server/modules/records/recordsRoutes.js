const express = require('express');
const { Router } = require('express');
const recordRouter = express.Router();
const fs = require('fs');

const DATA_PATH = './records.json';

recordRouter.get('/records', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    // fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //     }
    //     res.send(JSON.parse(data));
    // });
    res.end('GET action was requested');
});


module.exports = recordRouter;

