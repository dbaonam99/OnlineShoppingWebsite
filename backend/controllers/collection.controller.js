var Collection = require("../models/collection.model.js");
const mongoose = require('mongoose');

module.exports.index = async function(req, res) {
    var collection = await Collection.find().populate('collectionItems') 
	res.json(collection)
}
module.exports.info = async function(req, res) {
    var id = req.params.id;
    var collection = await Collection.findById({ _id: id }).populate('collectionItems')
    res.json(collection);
}
module.exports.deleteCollection = async function(req, res) {
	await Collection.findByIdAndRemove({_id: req.body.id})
	res.status(200).send("ok");
}
module.exports.postCollection = async function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
    })
	const data = {
		collectionBanner: imgArr[0],
        collectionName: req.body.collectionName,
        collectionTime: new Date(),
        collectionItems: req.body.collectionItems.split(',')
    }
	await Collection.create(data)
	res.status(200).send("ok");
}
module.exports.updateCollection = function(req, res) {
    var id = req.params.id;

    const imgArr = [];
	if (req.files.length > 0) {
		req.files.map((item)=>{
			imgArr.push(`http://pe.heromc.net:4000/${item.path.split("/").slice(1).join("/")}`)
		})
        const img = {
            collectionBanner: imgArr[0]
        }
        Collection.findByIdAndUpdate(
            {_id: id},
            {$set: img},
            function (error) {
            }
        )
	}

    const data = {
        collectionName: req.body.collectionName,
        collectionItems: JSON.parse(req.body.productList)
    }

	Collection.findByIdAndUpdate(id, data, function(error) {
		if (error) {
			console.log(error);
		}
    })
    res.status(200).send("ok");
};