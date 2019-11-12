const mongoose = require('mongoose');

const UserModel = require('./User.model');

mongoose.connect(process.env.MONGO_CONNECTION_URL);

module.exports = exports = {
    UserModel
};