const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	userName: String,
	userEmail: String,
	userPassword: String,
	userPhone: String,
	userAddress: String,
	userAvt: String,
	userTinh: String,
	userHuyen: String,
	userRole: String,
	},
    {
    	versionKey: false
    }
)

var User = mongoose.model('User', userSchema, 'user');

module.exports = User;