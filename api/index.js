const express = require('express');
const routes = require('./routes');
require('dotenv/config.js');

const app = express();
const port = process.env.PORT;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));

module.exports = app;
