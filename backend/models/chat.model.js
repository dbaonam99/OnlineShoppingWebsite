const mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
	chatContent: Array,
	chatTime: Date,
	},
    {
    	versionKey: false
    }
)

var Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = Chat;