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