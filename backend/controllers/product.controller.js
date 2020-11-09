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
	await Product.create(data)
	res.status(200);
}

module.exports.updateProduct = async function(req, res) {
	var id = req.params.id;
	
	if (req.body.deleteImgId) {
		const product = await Product.findById(id)
		const deletedProduct = [...product.productImg]
		deletedProduct.splice(0, 1)
		const deletedData = {
			productName: product.productName,
			productSale: product.productSale,
			productPrice: product.productPrice,
			productCate: product.productCate,
			productSize: product.productSize,
			productSex: product.productSex,
			productDate: product.productDate,
			productImg: deletedProduct,
			productDes: product.productDes,
			productSold: 0,
		}
		await Product.findByIdAndUpdate(id, deletedData)
	}

	const imgArr = [];
	if (req.files) {
		req.files.map((item)=>{
			imgArr.push(`http://localhost:4000/${item.path.split("/").slice(1).join("/")}`)
		})
	}
	const img = {
		productImg: imgArr
	}
	const data = {
		productName: req.body.productName,
		productSale: req.body.productSale,
		productPrice: req.body.productPrice,
		productCate: req.body.productCate,
		productSize: req.body.productSize.split(","),
		productSex: req.body.productSex,
		productDes: req.body.productDes
	}

	Product.findByIdAndUpdate(
		{_id: id},
		{$push: img},
		function (error) {
		}
	)
	Product.findByIdAndUpdate(id, data, function(error) {
		if (error) {
			console.log(error);
		}
	})
	res.status(200);
}

module.exports.reviewProduct = async function(req, res) {
	var id = req.params.id;

	Product.findByIdAndUpdate(
		{_id: id},
		{$push: {productVote: req.body}},
		function (error) {
		}
	)
	res.status(200);
}

module.exports.deleteProduct = async function(req, res) {
	await Product.findByIdAndRemove({_id: req.body.productId})
	res.status(200);
}