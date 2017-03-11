var express = require('express');
	app = express(),
	server = app.listen(3000,listening),
	fs = require('file-system'),
	d = fs.readFileSync('./src/data.json'),
	users = JSON.parse(d);



//call back response of server listening on port 3000
	function listening(){console.log("listening. . .");}
//define the main root directory
	app.use(express.static('./src'));
//get all data from data.json
app.get('/all',function(req, res){res.send(users);});
//add users in the data.json
app.get('/add/:userName',function(req,res){

	var data =  req.params,
			userName = data.userName;
			users['users'][userName] = {
				"name" : userName
			}

			var sd = JSON.stringify(users);
			fs.writeFile('./src/data.json',sd,function(){
				console.log("you have send a data in json file by writeFile method");
			});

			res.send("you have succesfully add a new user.");



});
