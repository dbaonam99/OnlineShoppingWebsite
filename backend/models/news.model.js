const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	newImg: String,
	newTime: String,
	newCate: String,
	newTitle: String,
	newContent: String,
	},
    {
    	versionKey: false
    }
)

var News = mongoose.model('News', newsSchema, 'news');

module.exports = News;