const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	productTitle: String,
	productPrice: String,
	productImg: Array,
	productDate: Date,
	productName: String,
    productSale: Number,
	productPrice: Number,
	productFinalPrice: Number,
    productCate: String,
    productGroupCate: String,
    productColor: String,
    productSize: Array,
    productSex: String,
    productSold: Number,
	productDes: String,
	productVote: Array,
	// name: String,
	// ratingTitle: String,
	// ratingText: String,
	// ratingDate: Date,
	// ratingStar: Number,
	// ratingImg: Array
	},
    {
    	versionKey: false
    }
)

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
