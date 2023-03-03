const express = require('express');
const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
  res.status(200).send({ message : 'Its a meeee the server!' })
});

router.get('/^/$|/about(.html)?', (req, res) => {
  res.status(200).send({ message : 'Its a meeee the about page!' })
});

module.exports = router;
