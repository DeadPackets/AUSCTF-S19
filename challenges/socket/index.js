//Requires
const chalk = require('chalk');
const NetcatServer = require('netcat/server');
const net = require('net');

const base64 = new NetcatServer();
base64.port(6969).listen().k().serve(Buffer.from(Buffer.from('FLAG{EncodedDecoded}').toString('base64')));

const image = new NetcatServer();
image.port(4444).k().serve('./image.png').listen();

const nmap = new NetcatServer();
nmap.port(61337).listen().k().serve(Buffer.from('FLAG{scanning-in-the-90s}'));

//Announce that we're up
console.log(chalk.green('Socket challenges are up and running!'));