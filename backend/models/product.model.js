const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	productTitle: String,
	productPrice: String,
	productImg: Array,
	productDate: Date,
	},
    {
    	versionKey: false
    }
)

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
