const mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
	userInfo: Object,
	chatName: String,
	chatEmail: String,
	chatContent: Array,
	time: Date,
	text: String,
	sessionId: String,
	},
    {
    	versionKey: false
    }
)

var Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = Chat;