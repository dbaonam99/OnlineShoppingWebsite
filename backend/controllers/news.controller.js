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
		imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
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
	res.status(200).send("ok");
}
module.exports.deleteNews = async function(req, res) {
	await News.findByIdAndRemove({_id: req.body.productId})
	res.status(200).send("ok");
}
module.exports.updateNews = async function(req, res) {
	var id = req.params.id;

	if (req.body.countId) {
		News.findByIdAndUpdate(req.body.countId, { $inc: {newView: 1 }},
			function (error) {
			}
		)
	} else {
		if (req.body.deleteImgId) {
			const deletedData = {
				newImg: "",
			}
			await News.findByIdAndUpdate(id, deletedData)
		}

		const data = {
			newCate: req.body.newCate,
			newTitle: req.body.newTitle,
			newContent: req.body.newContent
		}
		
		News.findByIdAndUpdate(id, data, function(error) {
			if (error) {
				console.log(error);
			}
		})

		const imgArr = [];
		if (req.files) {
			req.files.map((item)=>{
				imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
			})
		}
		const img = {
			newImg: imgArr[0]
		}
		News.findByIdAndUpdate(
			{_id: id},
			{$set: img},
			function (error) {
			}
		)
	}
	res.status(200).send("ok");
} 