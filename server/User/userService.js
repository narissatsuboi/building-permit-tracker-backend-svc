const path = require('path');
const {UserModel, conn} = require('./UserSchema');
const bcrypt = require('bcrypt');

const allUsers = async () => {
  return await UserModel.find().select('-password').lean();
};

const userExists = async (username) => {
  const duplicate = await UserModel.findOne({username})
      .collation({locale: 'en', strength: 2})
      .lean()
      .exec();
  if (duplicate) {
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

module.exports = {
  allUsers,
  userExists,
  createUser,
};
