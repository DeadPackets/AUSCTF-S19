/* eslint-disable no-console */
/* eslint-disable require-jsdoc */

//Requires
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const hbs = require('express-handlebars');

//Express init
const app = express();
app.disable('x-powered-by');
app.use(helmet.frameguard());
app.use(morgan('common'));

// view engine setup
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/',
  partialsDir: __dirname + '/views/'
}));

//More requires
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const auth = require('basic-auth');
const useragent = require('useragent');

function randomString(length, chars) {
	let result = '';
	for (let i = length; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

app.use(bodyParser.json());
app.set('etag', false);
app.disable('etag');
app.disable('x-powered-by');

app.use((req, res, next) => {
	res.set('X-FLAG', 'FLAG{NiceHeadersBro}');
	console.log(`[${req.connection.remoteAddress}] ${req.method.toUpperCase()} ${req.url}`);
	next();
});

app.get('/', (req, res) => {
	res.send('Hmm...');
});

app.get('/jumbled-mess', (req, res) => {
	res.send(`<style>pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}</style><pre>${randomString(randomIntFromInterval(25000, 50000), '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')}<u>THE_FLAG_IS_FLAG{peek_a_boo}</u>${randomString(randomIntFromInterval(25000, 50000), '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')}</pre>`);
});

app.get('/stubborn-login', (req, res) => {
	res.sendFile(__dirname + '/web/stubborn.html'); //TODO:
});

app.post('/stubborn-login', (req, res) => {
	if (req.body) {
		if (req.body.user === 'user' && req.body.pass === '123456' && req.body.showFlag === 'true') {
			res.send('FLAG{HidingSomethingAreWe?}');
		} else {
			if (req.body.user === 'user' && req.body.pass === '123') {
				res.send('showFlag set as false. No flag for you!');
			} else {
				res.send('Incorrect credentials!');
			}
		}
	}
});

app.get('/weak-code', (req, res) => {
	res.sendFile(__dirname + '/web/weak.html');
});

app.get('/1001-requests', (req, res) => {
	const options = {
		maxAge: 1000 * 60 * 5, // would expire after 5 minutes
		httpOnly: true // The cookie only accessible by the web server
	};

	if (req.cookies.numRequests) {
		if (isNaN(parseInt(req.cookies.numRequests)) !== true) {
			if (parseInt(req.cookies.numRequests) > 1000) {
				res.send('<pre style=\"font-size: 36px;\">FLAG{i-hope-you-used-cookies}</pre>');
			} else {
				const num = parseInt(req.cookies.numRequests);
				const newnum = num + 1;
				res.cookie('numRequests', newnum.toString(), options);
				res.send(`You have sent ${newnum.toString()} requests. ${ 1001 - newnum} requests remaining.`);
			}
		} else {
			res.send('Invalid Cookie!');
		}
	} else {
		res.cookie('numRequests', '1', options);
		res.send('You have sent 1 request. 1000 requests remaining.');
	}
});

app.get('/hidden-info', (req, res) => {
	res.send('<!--FLAG{dirty-fake-404-pages}--><pre >404 - Not Found</pre>').status(404);
});

app.post('/getfreeflag', (req, res) => {
	res.send('FLAG{YummyPostRequests}');
});

app.get('/getfreeflag', (req, res) => {
	res.send('<h1>Sorry, but I only accept post messages.</h1>');
});

app.get('/robots.txt', (req, res) => {
	res.sendFile(__dirname + '/web/robots.txt');
});

app.get('/supersecretpage', (req, res) => {
	res.send('<pre style="font-size: 36px;">FLAG{NotSoSecret}</pre>');
});

app.get('/favicon.ico', (req, res) => {
	res.send('<pre style=\"font-size: 36px;\">FLAG{WhereIsMyIcon?}</pre>');
});

app.use((req, res) => {
	res.sendStatus(404);
});

app.listen(8080);