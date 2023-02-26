const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const {UserModel, conn} = require('./UserSchema');
const bcrypt = require('bcrypt');

const allUsers = async () => {
  return await UserModel.find().select('-password').lean();
};

const userExists = async (username) => {
  const user = await UserModel.findOne({username})
      .collation({locale: 'en', strength: 2})
      .lean()
      .exec();
  if (user) {
    return true;
  }
  return false;
};

const createUser = async (req) => {
  const {username, password} = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  const userObj = {username, password: hashedPass};
  const user = await UserModel.create(userObj);

  if (user) {
    return true;
  }
  return false;
};

const deleteUser = async (usernameToDelete) => {
  const filter = { username: usernameToDelete }; 
  const promise = await UserModel.deleteOne(filter);
  if (promise.deletedCount != 1) {
    return false;
  }
  return true; 
} 

module.exports = {
  allUsers,
  userExists,
  createUser,
  deleteUser,
};
