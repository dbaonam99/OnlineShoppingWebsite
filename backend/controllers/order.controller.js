var Order = require("../models/order.model");

module.exports.index = async function(req, res) {
	var order = await Order.find();
	res.json(order);
}

module.exports.postOrder = async function(req, res) {
	await Order.create(req.body);
	res.status(200);
}