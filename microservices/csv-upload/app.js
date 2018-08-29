const port = process.env.port || 10021;
const express = require('express');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
const dbconfig = require('./config/database');

const app = express();

const connectWithRetry = () => {
	mongoose.connect(dbconfig.url).then(() => {
		console.log('Connected CSV upload service to DB');
	}).catch((err) => {
		setTimeout(connectWithRetry, 5000);
	});
}

connectWithRetry();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port);