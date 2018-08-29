const path = require('path');
const basePath = '/api/v1/flicks';

module.exports = (app) => {
	app.get(basePath + '/:name/poster', (req, res) => {
		const filedir = '../uploads/posters/' + req.params.name.toLowerCase() + '.jpg';
		res.sendFile(path.join(__dirname, filedir));
	});
}