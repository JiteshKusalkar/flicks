const redis = require('redis');
const redisClient = redis.createClient('6379','redis');

function connectToRedis () {
	redisClient.on('connect', function () {
		console.log('Connected movie services to Redis');
	});
}

module.exports = {
	connectToRedis: connectToRedis,
	redisClient: redisClient
};