const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    key: String,
    activated: Boolean,
    identifier: String,
    instanceLimited: Boolean
});

const UserModel = mongoose.model('users', LicenseSchema);

module.exports = exports = UserModel;