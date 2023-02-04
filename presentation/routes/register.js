const express = require('express');
const router = express.Router();
const path = require('path');
// const register = require(path.join('..', '..', 'domain', 'users', 'register'));
const register = require('../../domain/users/register');


router.post('/', register.handleNewUser);


module.exports = router;