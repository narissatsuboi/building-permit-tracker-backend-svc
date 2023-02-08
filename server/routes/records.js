const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    res.send('<h3>RECORDS DASHBOARD</h3>');
});

module.exports = router;