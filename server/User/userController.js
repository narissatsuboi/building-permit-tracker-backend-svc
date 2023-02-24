const UsersService = require('./userService');

const getAllUsersHandler = async (req, res) => {
  const users = await UsersService.allUsers();
  if (!users?.length) {
    return res.status(400).json({'message': 'No users!'});
  }
  return res.status(200).send(users);
};

const createUserHandler = async (req, res) => {
  const { username, password } = req.body
    if (!username || !password) {
    return res.status(400).json({"message": "Username and password required"})
  }

  const isDuplicate = await UsersService.userExists(req.username);
  if (isDuplicate) {
    return res.status(400).json({'message': 'User already exists'});
  }

  const isCreated = await UsersService.createUser(req);
  if (isCreated) {
    return res.status(200).json({'message': 'User saved'});
  }

  return res.status(400).json({'message': 'Error creating user'});
};

const updateUserHandler = async (req, res) => {
  return res.status(400);
};
const deleteUserHandler = async (req, res) => {
  return res.status(400);
};

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
