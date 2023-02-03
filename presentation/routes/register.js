const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.send('<h3>REGISTER</h3>');
});


module.exports = router;