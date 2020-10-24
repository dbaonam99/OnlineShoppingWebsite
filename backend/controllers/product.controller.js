var Product = require("../models/product.model.js");

module.exports.index = async function(req, res) {
	var products = await Product.find();
	res.json(products);
}

module.exports.product = function(req, res) {
	var id = req.params.id;
	Product.findById({ _id: id }).then(function(products) {
		res.json(products);
	});
}

module.exports.postProduct = async function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push(`http://localhost:4000/${item.path.split("/").slice(1).join("/")}`)
	})
	const data = {
		productName: req.body.productName,
		productSale: req.body.productSale,
		productPrice: req.body.productPrice,
		productCate: req.body.productCate,
		productSize: req.body.productSize.split(","),
		productSex: req.body.productSex,
		productDate: req.body.productDate,
		productImg: imgArr,
		productDes: req.body.productDes,
		productSold: 0,
	}
	console.log(data)
	// await Product.create(data);
	res.status(200);
}