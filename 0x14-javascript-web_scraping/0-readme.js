#!/usr/bin/node
const fs = require('fs');

/***
fs.readFile("cisfun",'utf8',function(error,content){
	console.log(error || content);

});**/


// function readData(err, data){
// 	console.log(data);
// }

// fs.readFile('alx-higher_level_programming/0x14-javascript-web_scraping/cisfun' ,'utf8', readData )



// function readFiles(dirname, onFileContent, onError) {
// 	fs.readdir(dirname, function(err, filename) {
// 		if (err) {
// 			onError(err);
// 			return;
// 		}
// 		filename.forEach(function(filename) {
// 			fs.readFile(dirname + filename, 'utf8', function(err, content) {
// 				if (err) {
// 					onError(err);
// 					return;
// 				}

// 				onFileContent(filename, content);
// 			});
// 		});
// 	});
// }


// readFiles()


fs.readFile('cisfun', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return
	}
	console.log(data)
})
