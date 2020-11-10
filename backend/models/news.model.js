const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	newImg: String,
	newTime: String,
	newCate: String,
	newTitle: String,
	newContent: String,
	newView: Number,
	},
    {
    	versionKey: false
    }
)

var News = mongoose.model('News', newsSchema, 'news');

module.exports = News;