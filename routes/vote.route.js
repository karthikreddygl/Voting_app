var express = require('express');
var route = express.Router();


var list = require('../model/list').votemodels;

route.get('/results',(req,res)=>{

	list.find({}, (err,data)=> {

		if(err){
		 	res.json({
			confirmation : "Failed",
			message: err.message
		}) 
	}
		res.json({
			Confirmation : "Success",
			Votes : data
		})
	})
})


route.get('/home',(req,res)=>{
	res.send("Successful connection"); 
})


route.post('/vote', (req,res)=>{

	var vdata = req.body.votes;
	
	let update = {[vdata]:1}
	
	console.log(update);
    list.findOneAndUpdate({ REF: "Ref" }, { $inc: update  }, {new: true }).then((updated)=>{
    	console.log(updated)
    	    res.send('vote successfully registered.') 

    }).catch((err)=>{
    	console.log(err)
    });
})





module.exports = route; 



