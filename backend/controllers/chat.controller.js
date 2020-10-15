var Chat = require("../models/chat.model.js");

module.exports.index = async function(req, res) {
	var chat = await Chat.find();
	res.json(chat);
};