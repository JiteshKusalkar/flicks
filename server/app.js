const port = process.env.port || 3051;
const express = require('express');

const mongoose = require('mongoose');

const dbconfig = require('./config/database');

const bodyParser = require('body-parser');

const passport = require('passport');

const app = express();

require('./config/passport.js')(passport);

const connectWithRetry = () => {
  mongoose.connect(dbconfig.url).then(() => {
    console.log('Connected to DB');
  }).catch((err) => {
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

require('./routes/routes.js')(app, passport);

app.get('/flicks', (req, res) => {
  res.send('Book your flicks here');
});

app.listen(port);
