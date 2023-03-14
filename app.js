const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Express app
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://arrowspace00:41mbj4REsADl0Jji@nodeninjatuts.tq6boso.mongodb.net/nodeninjatuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
	.then((result) => app.listen(3000))
	.catch((err) => {console.log(err)});

//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'my-views') //to change the deafult view location


// middleware & static files
// ->allows access to static files in the directory specified;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// ->console logger
app.use(morgan('dev'));


// routes

app.use('/blogs', blogRoutes);

app.get('/', (req, res) => {
	//res.send('<p>home page</p>');
	//res.sendFile('./views/index.html', { root: __dirname });
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	// res.send('<p>home page</p>');
	//res.sendFile('./views/about.html', { root: __dirname });
	res.render('about', { title: 'About' });
});



// 404
app.use((req, res) => {
	//res.status(404).sendFile('./views/404.html', { root: __dirname });
	res.status(404).render('404', { title: '404' });
});

// app.use((req, res, next) => {
// 	console.log('new request made');
// 	console.log('host:', req.hostname);
// 	console.log('path:', req.path);
// 	console.log('method:', req.method);
// 	next();
// });

// app.use((req, res, next) => {
// 	console.log('in the next middleware');
// 	next();
// });


// mongoose and mongodb sandbox routes
// app.get('/add-blog', (req, res) => {
// 	const blog = new Blog({
// 		title: 'new blog 2',
// 		snippet: 'about my new blog',
// 		body: 'more about my new blog'
// 	});

// 	blog.save()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });



// app.get('/all-blogs', (req, res) => {
// 	Blog.find()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });


// app.get('/single-blog', (req, res) => {
// 	Blog.findById('640dda0cb71490576121dd39')
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });


//redirects
// app.get('/about-us', (req, res) => {
// 	res.render('/about');
// });

