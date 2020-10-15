var Chat = require("../models/chat.model.js");

module.exports.index = async function(req, res) {
	var chat = await Chat.find();
	res.json(chat);
};

module.exports.newChat = async function(req, res) {
	console.log(req.body)

	var name = req.body.chatName;
	var email = req.body.chatEmail;
	var content = req.body.chatContent;

	const data = {
		chatName: name,
		chatEmail: email,
		chatContent: content
	}
	console.log(data)
	await Chat.create(data);
};