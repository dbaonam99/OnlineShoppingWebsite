const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	subscriberEmail: String,
	sendedEmail: Array,
	sendedEmail: [{
		emailId: mongoose.Schema.ObjectId,
        isSeen: Boolean
    }]
	},
    {
    	versionKey: false
    }
)

var Email = mongoose.model('Email', emailSchema);

module.exports = Email;