var Chat = require("../models/chat.model.js");

module.exports.index = async function(req, res) {
	var chat = await Chat.find();
	res.json(chat);
};

module.exports.newChat = async function(req, res) {

	var sessionId = req.body.sessionId;
	var name = req.body.chatName;
	var email = req.body.chatEmail;
	var content = req.body.chatContent;

	const data = {
		sessionId: sessionId,
		chatName: name,
		chatEmail: email,
		chatContent: content
	}
	await Chat.create(data);
	res.status(200).send("ok");
};

module.exports.chatData = function(req, res) {
	var sessionId = req.params.sessionId;
	Chat.find({ sessionId: sessionId }).then(function(chat) {
		res.json(chat);
	});
};