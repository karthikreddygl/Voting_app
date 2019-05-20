var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var shell = require('shelljs');
var path = require('path');

var voterouter = require('./routes/vote.route.js');
shell.exec('./db_initial.sh');



var url = 'mongodb://localhost/votedb'; 
var app = express();

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'./views/index.html'));
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  mongoose.connect(url,{useNewUrlParser: true}).then(()=>{
  console.log(`connected to db=> ${url}`)
  //console.log(client.connections[0])
}).catch((err)=>{
  console.log(`unable to connect to db...${err}`)
})

 

app.use('/',voterouter);

app.listen('3000',()=>{
	console.log('listening to port 3000');
})