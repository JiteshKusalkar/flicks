let Movie = require('./schema');

module.exports = {
    getAllMovieDetails: function (callback, limit) {
        Movie.find(callback).limit(limit);
    },

    searchMovie: function (query, callback) {
        Movie.find({ 'name': { $regex: query.toString(), $options: 'i' } }, callback);
    },

    deleteMovie: function (query, callback) {
        Movie.deleteMany({}, callback);
    }
};