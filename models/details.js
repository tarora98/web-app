var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;

// details Schema
var detailSchema = mongoose.Schema({
	firstname: {
		type: String,
		index: true
	},
	lastname: {
		type: String
	},
	age: {
		type: Number
	},
	dob: {
		type: Date()
    },
    Gender:{
        type:String
    }
    
});

var Details = module.exports = mongoose.model('deatils', detailSchema);

module.exports.getUserById = function(id, callback)
{
	Details.findById(id, callback);
}

module.exports.getUserByUsername = function(firstname, callback){
	var query = {firstname: firstname};
	Details.findOne(query, callback);
}

