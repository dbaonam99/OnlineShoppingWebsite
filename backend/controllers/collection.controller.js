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
	res.status(200);
}
module.exports.postCollection = async function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push(`http://localhost:4000/${item.path.split("/").slice(1).join("/")}`)
    })
    console.log(req.body.collectionItems.split(','))
	const data = {
		collectionBanner: imgArr[0],
        collectionName: req.body.collectionName,
        collectionTime: new Date(),
        collectionItems: req.body.collectionItems.split(',')
    }
    console.log(data)
	await Collection.create(data)
	res.status(200);
}