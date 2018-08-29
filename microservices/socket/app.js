const port = process.env.port || 10023;
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
	socket.on('disconnect', () => {
		console.log('User disconnected..');
	});

	socket.on('click', (msg) => {
		console.log('disabled...', msg);
		socket.broadcast.emit('selected', msg);
	});
});

app.listen(port);