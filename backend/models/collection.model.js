const mongoose = require('mongoose')

var collectionSchema = new mongoose.Schema({
    collectionName: String,
    collectionImg: String,
    collectionItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
    // collectionItems: Array,
	},
    {
    	versionKey: false
    }
)

var Collection = mongoose.model('Collection', collectionSchema, 'collection');

module.exports = Collection;
