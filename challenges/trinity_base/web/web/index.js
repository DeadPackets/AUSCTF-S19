const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));


// view engine setup
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/',
  partialsDir: __dirname + '/views/'
}));

app.get('/', (req, res) => {
	res.render('pingofdeath', {layout: 'default', title: '--PING OF DEATH--'});
});

app.post('/', (req, res) => {
	if (req.body) {
		if (req.body.address) {
			exec(`ping -c 4 -W 4 -v ${req.body.address}`, (err, stdout, stderr) => {
				if (err) {
					res.render('pingofdeath', {layout: 'default', title: '--PING OF DEATH--', result: stdout, error: stderr});
				} else {
					res.render('pingofdeath', {layout: 'default', title: '--PING OF DEATH--', result: stdout});
				}
			})
		} else {
			res.render('pingofdeath', {layout: 'default', title: '--PING OF DEATH--', result: 'Invalid target.'});
		}
	} else {
		res.render('pingofdeath', {layout: 'default', title: '--PING OF DEATH--', result: 'Invalid target.'});
	}
});

app.use((req, res) => {
	res.sendStatus(404);
});

app.listen(8080, '0.0.0.0', () => {
	console.log('Server started successfully.');
});