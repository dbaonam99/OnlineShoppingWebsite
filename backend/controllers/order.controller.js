var Order = require("../models/order.model");

module.exports.index = async function(req, res) {
	var order = await Order.find();
	res.json(order);
}

module.exports.postOrder = async function(req, res) { 
	const currentLenght = await Order.countDocuments();
	const data = {
		orderId: currentLenght + 1,
		orderName: req.body.orderName,
		orderEmail: req.body.orderEmail,
		orderPhone: req.body.orderPhone,
		orderAddress: req.body.orderAddress,
		orderTinh: req.body.orderTinh,
		orderHuyen: req.body.orderHuyen,
		orderList: req.body.orderList,
		orderTotal: req.body.orderTotal,
		orderPaymentMethod: req.body.orderPaymentMethod,
		orderDate: req.body.orderDate
	}
	await Order.create(data);
	res.status(200);
}

module.exports.deleteOrder = async function(req, res) {
	await Order.findByIdAndRemove({_id: req.body.id})
	res.status(200);
}