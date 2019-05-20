var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var voteList = new Schema({

	REF:{type:String, default : "Ref"},
	TDP:{type:Number, default : 0},
	YCP:{type:Number, default : 0},
	BJP:{type:Number, default : 0},
	CON:{type:Number, default : 0}
	
});



module.exports.votemodels = mongoose.model('votemodels',voteList);

