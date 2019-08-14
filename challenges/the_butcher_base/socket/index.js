const net = require('net');
const chalk = require('chalk');

const challenge = net.createServer((socket) => {
	socket.write(`${chalk.blue.bold('Welcome to The Butcher\'s secret service.')}\r\n`);
	socket.write(`${chalk.yellow.bold('What is the password?: ')}`);
	socket.on('data', (data) => {
		const string = data.toString('utf8');
		if (string.replace(/\n$/, '') === "ilovebeef") {
			socket.write(`${chalk.green.bold('Correct. V20xNGFGb3pkRlZoUjFaRFpGaFNhbUZIVm5sVWJWWXlXbGhLUldGWFZucG1VVzg5Q2c9PQo=')}\r\n`);
		} else {
			socket.write(`${chalk.red.bold('Incorrect. Goodbye.')}\r\n`)
		}
		socket.destroy();
	})
})

challenge.listen(1337, '0.0.0.0');