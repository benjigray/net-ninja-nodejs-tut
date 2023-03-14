const fs = require('fs');


// Read files
// fs.readFile('./docs/blog12.txt', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

// console.log('last line');



// Write files
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
// 	console.log('file was written');
// });



// Make directory
// if (!fs.existsSync('./assets')) {
// 	fs.mkdir('./assets', (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log('folder created');
// 	});
// } else {
// 	fs.rmdir('./assets', (err) => {
// 		console.log('folder deleted');
// 	});
// }



// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) { 
		fs.unlink('./docs/deleteme.txt', (err) => {
			if (err) {
				console.log(err)
			}
			console.log('file deleted');
		});
}





