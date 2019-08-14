//Express init
const fs = require('fs');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
app.disable('x-powered-by');
app.set('etag', false);
app.disable('etag');

// view engine setup
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
	extname: 'hbs',
	defaultView: 'default',
	layoutsDir: __dirname + '/views/',
	partialsDir: __dirname + '/views/'
}));

app.get('/archive', (req, res) => {
	if (req.query.page) {
		fs.readFile(req.query.page, 'utf8', (err, file) => {
			if (err) {
				res.render('default', {layout: false, body: "Error accessing file."});
			} else {
				res.render('default', {layout: false, body: file.toString()});
			}
		});
	} else {
		res.redirect('/archive?page=home.txt');
	}
});

app.use((req, res) => {
	res.sendStatus(404);
});

app.listen(8000, '0.0.0.0', () => {
	console.log('Server succesfully started')
});