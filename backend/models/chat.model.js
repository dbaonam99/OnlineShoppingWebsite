const mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
	chatName: String,
	chatEmail: String,
	chatContent: Array,
	time: Date,
	text: String,
	},
    {
    	versionKey: false
    }
)

var Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = Chat;