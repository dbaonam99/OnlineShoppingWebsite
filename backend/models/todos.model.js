const mongoose = require('mongoose');

var todosSchema = new mongoose.Schema({
	todoContent: String,
	todoDate: Date,
	isDone: Boolean
	},
    {
    	versionKey: false
    }
)

var Todos = mongoose.model('Todos', todosSchema, 'todos');

module.exports = Todos;