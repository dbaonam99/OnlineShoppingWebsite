var Todos = require("../models/todos.model");

module.exports.index = async function(req, res) {
	var todos = await Todos.find();
	res.json(todos);
};

module.exports.postTodo = async function(req, res) {
	if (req.body.delete) {
		await Todos.findByIdAndRemove({_id: req.body.id})
		res.status(200).send("ok");
	} else {
		await Todos.create(req.body);
		res.status(200).send("ok");
	}
	res.status(200).send("ok");
};
module.exports.updateTodo = async function(req, res) {
	if (req.body.edit) {
		Todos.findByIdAndUpdate(
			{_id: req.body.id},
			{todoContent: req.body.todoContent},
			function (error) {
			}
		)
		res.status(200).send("ok");
	} else {
		Todos.findByIdAndUpdate(
			{_id: req.body.id},
			{$set: {isDone: req.body.isDone}},
			function (error) {
			}
		)
		res.status(200).send("ok");
	}
	res.status(200).send("ok");
};