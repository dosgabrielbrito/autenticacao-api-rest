const bodyParser = require('body-parser');

const auth = require('./authRoute.js');
const usuario = require('./usuarioRoute.js');
const produto = require('./produtoRoute.js');

module.exports = (app) => {
  app.use(bodyParser.json(), auth, usuario, produto);
};
