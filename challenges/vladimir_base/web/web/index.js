//Requires
const express = require('express');
const mysql = require('mysql');
const hbs = require('express-handlebars');

//Express init
const app = express();
app.disable('x-powered-by');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
app.set('etag', false);
app.disable('etag');

const connection = mysql.createConnection({
	host     : process.env.MYSQL_HOST,
	user     : 'cr4ck3d',
	password : 'cr4ck3d',
	database : 'cr4ck3d'
  });
   
connection.connect();

// view engine setup
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
	extname: 'hbs',
	defaultView: 'default',
	layoutsDir: __dirname + '/views/',
	partialsDir: __dirname + '/views/'
}));


app.get('/super_secret/forum/', (req, res) => {
	if (req.query.searchTerm) {
		connection.query("SELECT * FROM posts WHERE title LIKE '%" + req.query.searchTerm + "%' OR body LIKE '%" + req.query.searchTerm + "%'", function (error, results, fields) {
			if (error) {
				res.render('search', {layout: 'default', error, title: "CR4CK3D - Under Construction"});
			} else {
				res.render('search', {layout: 'default', result: results, title: "CR4CK3D - Under Construction"});
			}
			});
	} else {
		connection.query("SELECT * FROM posts", function (error, results, fields) {
			if (error) {
				res.render('search', {layout: 'default', error, title: "CR4CK3D - Under Construction"});
			} else {
				res.render('search', {layout: 'default', result: results, title: "CR4CK3D - Under Construction"});
			}
			});
	}
});

app.use((req, res) => {
	res.sendStatus(404);
});

app.listen(8000, '0.0.0.0', () => {
	console.log('Server succesfully started')
});