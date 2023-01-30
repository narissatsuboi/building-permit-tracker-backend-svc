const express = require('express');
const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
    res.send('<h3>Landing Page</h3>');
});

router.get('/about', (req, res) => {
    res.send('<h3>About Page</h3>');
});

module.exports = router;