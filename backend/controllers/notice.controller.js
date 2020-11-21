var Notice = require("../models/notice.model");

module.exports.index = async function(req, res) {
	var notice = await Notice.find();
	res.json(notice);
};
module.exports.updateNotice = function(req, res) {
	if (req.body.readAll) {
		Notice.updateMany({isRead: false}, {isRead: true}, function(error) {
			if (error) {
				console.log(error);
			}
		})
	}
};