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

module.exports.cate = function(req, res) {
	var cate = req.params.cate;
	News.find({ newCate: cate }).then(function(news) {
		res.json(news);
	});
}
module.exports.postNews = async function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push(`http://localhost:4000/${item.path.split("/").slice(1).join("/")}`)
	})
	const data = {
		newImg: imgArr[0],
		newTime: req.body.newTime,
		newCate: req.body.newCate,
		newTitle: req.body.newTitle,
		newContent: req.body.newContent,
		newView: 0
	}
	await News.create(data)
	res.status(200);
}
module.exports.deleteNews = async function(req, res) {
	await News.findByIdAndRemove({_id: req.body.productId})
	res.status(200);
}
module.exports.updateNews = async function(req, res) {
	var id = req.body.id

	News.findByIdAndUpdate(id, { $inc: {newView: 1 }},
		function (error) {
		}
	)

	res.status(200);
} 