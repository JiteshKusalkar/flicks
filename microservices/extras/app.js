const port = process.env.port || 10022;
const express = require('express');
const app = express();

require('./routes/poster')(app);
require('./routes/trailer')(app);

app.listen(port);