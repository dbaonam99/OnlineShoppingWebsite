const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	orderId: Number,
	orderAvatar: String,
	orderName: String,
	orderEmail: String,
	orderPhone: String,
	orderAddress: String,
	orderTinh: String,
	orderHuyen: String,
	orderList: Array,
	orderTotal: Number,
	orderPaymentMethod: String,
	orderDate: String
	},
    {
    	versionKey: false
    }
)

var Order = mongoose.model('Order', orderSchema, 'order');

module.exports = Order;