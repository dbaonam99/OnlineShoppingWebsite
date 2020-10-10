var News = require("../models/news.model.js");

module.exports.index = async function(req, res) {
	var news = await News.find();
	res.json(news);
};

module.exports.news = function(req, res) {
	var id = req.params.id;
	console.log(id)
	News.findById({ _id: id }).then(function(news) {
		res.json(news);
	});
};

module.exports.cate = function(req, res) {
	var cate = req.params.cate;
	News.find({ newCate: cate }).then(function(news) {
		res.json(news);
	});
};