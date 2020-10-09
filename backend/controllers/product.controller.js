var Product = require("../models/product.model.js");

module.exports.index = async function(req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.product = function(req, res) {
	var id = req.params.id;
	Product.findById({ _id: id }).then(function(products) {
		res.json(products);
	});
};
