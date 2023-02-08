const mongoose = require('mongoose');
const CLUSTER = 'cluster0';
const DB_NAME = 'tracki';

let MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${CLUSTER}.j7kdj7e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        throw(err);
    }
};
module.exports = {
    connectDB,
    MONGO_URL
};