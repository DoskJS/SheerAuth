const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    key: String,
    activated: Boolean,
    identifier: String,
    instanceLimited: Boolean
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = exports = UserModel;