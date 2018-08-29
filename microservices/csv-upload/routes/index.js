const multer = require('multer');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');
const basePath = '/api/v1/csv';

const movieController = require('../models/db');

function getShowTimings(movie) {
	let showTimings = [];
	for (let attr in movie) {
		if (attr.indexOf('showTimings') > -1) {
			showTimings.push(movie[attr]);
		}
	}
	return showTimings;
}

function getCast(movie, prevMovie) {
	if (!prevMovie) {
		movie.cast = [];
		movie.cast.push({
			role: movie.cast__role,
			name: movie.cast__name,
			photourl: movie.cast__photourl
		});
		return movie.cast;
	} else {
		prevMovie.cast.push({
			role: movie.cast__role,
			name: movie.cast__name,
			photourl: movie.cast__photourl
		});
		return prevMovie.cast;
	}
}

function transformObject(movie) {
	return {
		name: movie.name,
		status: movie.status,
		rating: movie.rating,
		description: movie.description,
		releaseDate: movie.releaseDate,
		showEndDate: movie.showEndDate,
		trailerUrl: movie.trailerUrl,
		posterUrl: movie.posterUrl,
		budget: movie.budget,
		genre: movie.genre,
		censorCertificate: movie.censorCertificate,
		showTimings: getShowTimings(movie),
		cast: getCast(movie)
	}
}

function transformResponse(movies) {
	let result = [];
	movies.forEach(function (movie) {
		if (movie.name !== '') {
			result.push(transformObject(movie));
		} else {
			result[result.length - 1].cast = getCast(movie, result[result.length - 1]);
		}
	});
	return result;
}

module.exports = (app) => {
	var fileData = [];
	const storage = multer.diskStorage({
		destination: './uploads'
	});

	const upload = multer({
		storage: storage
	}).single('file');

	app.post(basePath + '/upload', (req, res) => {
		upload(req, res, (err) => {
			if (err) {
				res.json({
					message: err
				})
			} else {
				csv()
					.fromFile(req.file.path)
					.then((movies) => {
						let transformedResult = transformResponse(movies);
						movieController.saveMovie(transformedResult, (err) => {
							if (err) {
								throw err;
							}

							res.send({ message: 'Database updated successfully' });
						});
					});
			}
		});
	});
}