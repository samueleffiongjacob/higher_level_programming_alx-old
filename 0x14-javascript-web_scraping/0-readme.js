#!/usr/bin/node
const fs = require('fs');


fs.readFile("cisfun",'utf8',function(error,content){
	console.log(error || content);

});
