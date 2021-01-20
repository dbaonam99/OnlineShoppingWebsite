var Order = require("../models/order.model");
var Notice = require("../models/notice.model");
var Product = require("../models/product.model");

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
				orderAvatar: req.body.orderAvatar || "http://pe.heromc.net:4000/images/16f9bbf512b66a228f7978e34d8fb163",
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
			const orderList = req.body.orderList;
			for (let i in orderList) {
				await Product.findByIdAndUpdate(orderList[i].id, 
				{
					$inc: { productSold: orderList[i].amount/2 }
				}, function(error) {
					if (error) {
						console.log(error);
					}
				})
			}
			await Order.create(data);
			const notice = {
				noticeContent: `You have new order from ${req.body.orderName}`,
				isRead: false,
				noticeTime: new Date()
			}
			await Notice.create(notice)
			res.status(200).send("ok");
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
		const orderList = req.body.orderList;
		for (let i in orderList) {
			await Product.findByIdAndUpdate(orderList[i].id, 
			{
				$inc: { productSold: orderList[i].amount/2 }
			}, function(error) {
				if (error) {
					console.log(error);
				}
			})
		}
		await Order.create(data);
		res.status(200).send("ok");
	}
}

module.exports.deleteOrder = async function(req, res) {
	await Order.findByIdAndRemove({_id: req.body.id})
	res.status(200).send("ok");
}

module.exports.updateOrder = function(req, res) {
	var id = req.params.id;
	Order.findByIdAndUpdate(id, req.body, function(error) {
		if (error) {
			console.log(error);
		}
	})
	res.status(200).send("ok");
};