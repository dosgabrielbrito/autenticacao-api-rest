const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');
const roles = require('../middleware/roles.js');
const permissoes = require('../middleware/permissoes.js');

const router = Router();

router
  .get(
    '/produtos',
    permissoes(['Leitura']),
    ProdutoController.buscarTodosProdutos
  )
  .get('/produtos/:id', ProdutoController.buscarProdutoPorId)
  .post('/produtos', ProdutoController.cadastrarProduto)
  .delete('/produtos/:id', ProdutoController.deletarProdutoPorId)
  .put('/produtos/:id', ProdutoController.editarProduto);

module.exports = router;
