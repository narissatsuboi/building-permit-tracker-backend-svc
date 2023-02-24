const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
);

const conn = mongoose.createConnection(process.env.MONGO_URI);
const UserModel = mongoose.model('User', userSchema);
module.exports = {UserModel, conn};
