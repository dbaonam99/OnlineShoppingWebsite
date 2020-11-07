const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	userName: String,
	userEmail: String,
	userPassword: String,
	userAvt: String,
	userTinh: String,
	userHuyen: String,
	},
    {
    	versionKey: false
    }
)

var User = mongoose.model('User', userSchema, 'user');

module.exports = User;