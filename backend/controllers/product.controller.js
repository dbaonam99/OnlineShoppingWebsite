var Product = require("../models/product.model.js");
var Email = require("../models/email.model");

var nodemailer = require('nodemailer');

// Login with admin email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '18521118@gm.uit.edu.vn',
        pass: 'Dbnbl08081999'
    }
})
transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else { 
        // console.log('Kết nối thành công!');
    }
});

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
		imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
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

	var emailList = await Email.find()

	for (let i in emailList) {
		var mailOptions = {
		    from: '18521118@gm.uit.edu.vn',
		    to: emailList[i].subscriberEmail,
		    subject: 'Sản phẩm mới tại SOBER SHOP',
			html: '<p>Sản phẩm mới nè</p>' +
			'<img src="http://pe.heromc.net:4000/email/12.png" alt=""></img>'
		}

		
		Email.findByIdAndUpdate(
			{_id: emailList[i]._id},
			{$push: {
				_id: new ObjectId("56955ca46063c5600627f393"),
				isSeen: false
			}},
			function (error) {
			}
		)
	
		transporter.sendMail(mailOptions, function(error, info){
		    if (error) {
		      console.log(error);
		    } else {
		      console.log('Email sent: ' + info.response);
		    }
		})
	}

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
			imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
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