const express = require('express');
const router = express.Router();
const UserController = require('./userController');

router.get('/', UserController.getAllUsersHandler);
router.post('/', UserController.createUserHandler);
router.patch('/', UserController.updateUserHandler);
router.delete('/', UserController.deleteUserHandler);

module.exports = router;
