const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController.js');

const router = Router();

router
  .get('/permissoes', PermissaoController.buscarTodasPermissoes)
  .get('/permissoes/:id', PermissaoController.buscarPermissaoPorId)
  .post('/permissoes', PermissaoController.cadastrar)
  .put('/permissoes/:id', PermissaoController.editarPermissao)
  .delete('/permissoes/:id', PermissaoController.deletarPermissaoPorId);

module.exports = router;
