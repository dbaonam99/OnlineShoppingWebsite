const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	subscriberEmail: String
	},
    {
    	versionKey: false
    }
)

var Email = mongoose.model('Email', emailSchema, 'emails');

module.exports = Email;