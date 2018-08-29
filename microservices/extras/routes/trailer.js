const path = require('path');
const fs = require('fs');
const basePath = '/api/v1/flicks';

const APP_UPLOADS = process.env.APP_UPLOADS || '../uploads/trailers/';

function getHeader(contentLength, totalFileSize, start, end) {
  let head = {
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  if (start !== undefined) {
    head = {
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${totalFileSize}`,
      'Accept-Ranges': 'bytes',
    };
  }

  return head;
}

module.exports = (app) => {
	app.get(basePath + '/:name/trailer', (req, res) => {
		const filePath = path.join(__dirname, APP_UPLOADS, `${req.params.name.toLowerCase()}.mp4`);
		const fileStats = fs.statSync(filePath);
		const fileSize = fileStats.size;
		const byteRange = req.headers.range;

		if (byteRange) {
			const chunk = byteRange.replace(/bytes=/, '').split('-');
			const startByte = parseInt(chunk[0], 10);
			const endByte = chunk[1] ? parseInt(chunk[1], 10) : (fileSize - 1);

			const chunkSize = (endByte - startByte) + 1;
			const file = fs.createReadStream(filePath, { start: startByte, end: endByte });

			res.writeHead(206, getHeader(chunkSize, fileSize, startByte, endByte));
			file.pipe(res);
		} else {
			res.writeHead(206, getHeader(fileSize));
			fs.createReadStream(filePath).pipe(res);
		}
	});
}