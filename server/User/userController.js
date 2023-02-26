const UserService = require('./userService');

const getAllUsersHandler = async (req, res) => {
  const users = await UserService.allUsers();
  if (!users) {
    return res.status(400).json({'message': 'No users!'});
  }
  return res.status(200).send(users);
};

const createUserHandler = async (req, res) => {
  const { username, password } = req.body
    if (!username || !password) {
    return res.status(400).json({"message": "Username and password required"})
  }

  const isDuplicate = await UserService.userExists(req.username);
  if (isDuplicate) {
    return res.status(400).json({'message': 'User already exists'});
  }

  const isCreated = await UserService.createUser(req);
  if (isCreated) {
    return res.status(200).json({'message': `User ${username} created`});
  }

  return res.status(400).json({'message': 'Error creating user'});
};

const updateUserHandler = async (req, res) => {
  return res.status(400);
};
const deleteUserHandler = async (req, res) => {
  const { username } = req.body; 

  const userExists = await UserService.userExists(username); 
  if (!userExists) {
    return res.status(400).json({ message: 'User not found' });
  }
  
  const wasDeleted = await UserService.deleteUser(username);
  if (!wasDeleted) {
    return res.status(400).json({ message: 'Error deleting user' });
  }
  return res.status(200).json({ message: 'User successfully deleted'});
};

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
