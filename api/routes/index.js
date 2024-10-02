const bodyParser = require('body-parser');

const auth = require('./authRoute.js');
const usuario = require('./usuarioRoute.js');
const produto = require('./produtoRoute.js');
const role = require('./roleRoute.js');
const permissao = require('./permissaoRoute.js');
const seguranca = require('./segurancaRoute.js');

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  );
};
