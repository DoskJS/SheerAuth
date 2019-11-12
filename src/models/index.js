const mongoose = require('mongoose');

const LicenseModel = require('./License.model');

mongoose.connect(process.env.MONGO_CONNECTION_URL);

module.exports = exports = {
    License: 
};