const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String,
    gender: String,
    age: Number
});

var User = mongoose.model('User', userSchema);

module.exports = {User};
