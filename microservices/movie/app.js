'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

const mongoose = require('mongoose');
const dbconfig = require('./config/database');
const cache = require('./config/cache');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const connectWithRetry = () => {
    mongoose.connect(dbconfig.url).then(() => {
      console.log('Connected movie service to DB');
    }).catch((err) => {
      setTimeout(connectWithRetry, 5000);
    });
  }
  
  connectWithRetry();

  cache.connectToRedis();

  var port = process.env.PORT || 10020;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
