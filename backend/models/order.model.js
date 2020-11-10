const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	orderName: String,
	orderEmail: String,
	orderPhone: String,
	orderAddress: String,
	orderTinh: String,
	orderHuyen: String,
	orderList: Array,
	orderTotal: Number,
	orderPaymenntMethod: String
	},
    {
    	versionKey: false
    }
)

var Order = mongoose.model('Order', orderSchema, 'order');

module.exports = Order;