var Vietnam = require("../models/vietnam.model");

module.exports.index = async function(req, res) {
	var vietnam = await Vietnam.find();
	res.json(vietnam);
};