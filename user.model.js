const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;