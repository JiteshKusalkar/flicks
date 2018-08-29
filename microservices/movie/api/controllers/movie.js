const Movie = require('../models/db/schema');
const db = require('../models/db/controller');
const cache = require('../../config/cache');

module.exports = {
  getAll(req, res, next) {
    db.getAllMovieDetails((err, movies) => {
      if (err) {
        console.log('inside err if');
        res.status(500).send(err);
      }

      res.json(movies);
    });
  },

  getByName(req, res, next) {
    const query = req.swagger.params.query.value;
    cache.redisClient.get(query, function (err, reply) {
      if (err) {
        throw err;
      } else if (!reply) {
        db.searchMovie(query, (err, movies) => {
          if (err) {
            throw err;
          }

          if (!movies.length) {
            res.send({ message: 'Search matched no movie(s)' });
          } else {
            cache.redisClient.setex(query, 300, JSON.stringify(movies));
            res.json(movies);
          }
        });
      } else {
        res.json(JSON.parse(reply));
      }
    });
  },

  deleteAll(req, res, next) {
    db.deleteMovie('', (err, movies) => {
      if (err) {
        throw err;
      }

      res.send({ message: 'All movies deleted' });
    })
  }
};
