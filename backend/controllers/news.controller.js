var News = require("../models/news.model.js");

module.exports.index = async function(req, res) {
	var news = await News.find();
	res.json(news);
};

module.exports.news = function(req, res) {
	var id = req.params.id;
	News.findById({ _id: id }).then(function(news) {
		res.json(news);
	});
};