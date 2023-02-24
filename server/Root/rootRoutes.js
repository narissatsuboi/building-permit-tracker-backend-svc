const express = require('express');
const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
  res.send('<h3>WELCOME TO TRACKI</h3>');
});

router.get('/^/$|/about(.html)?', (req, res) => {
  res.send('<h3>ABOUT THE CREATORS</h3>');
});

module.exports = router;
