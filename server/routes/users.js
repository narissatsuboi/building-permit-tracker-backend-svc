const express = require('express');
const router = express.Router();
const path = require('path');
const UserController = require(path.join('..', 'controllers', 'users'));

router.get('/', UserController.getAllUsersHandler);
router.post('/', UserController.createUserHandler);
router.patch('/', UserController.updateUserHandler);
router.delete('/', UserController.deleteUserHandler);

module.exports = router;
