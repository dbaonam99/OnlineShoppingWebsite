var Order = require("../models/order.model");

module.exports.index = async function(req, res) {
	var order = await Order.find();
	res.json(order);
}
module.exports.orderInfo = function(req, res) {
	var id = req.params.id;
	Order.findById({ _id: id }).then(function(news) {
		res.json(news);
	});
};

module.exports.postOrder = async function(req, res) { 
	const currentLenght = await Order.countDocuments();
	if (currentLenght > 0) {
		Order.findOne().sort('-orderId').exec(async function(err, item) {
			const data = {
				orderId: item.orderId + 1,
				orderAvatar: req.body.orderAvatar || "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=ni-Cr2_KyP0AX-BfQkv&_nc_ht=scontent-sin6-1.xx&oh=9cbda6699093e8dbb061a92c5bb58c7e&oe=5FCB1CFC",
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
		});
	} else {
		const data = {
			orderId: 1,
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
}

module.exports.deleteOrder = async function(req, res) {
	await Order.findByIdAndRemove({_id: req.body.id})
	res.status(200);
}


module.exports.updateOrder = function(req, res) {
	var id = req.params.id;

	Order.findByIdAndUpdate(id, req.body, function(error) {
		if (error) {
			console.log(error);
		}
	})
};