const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = Router();

router
  .get('/produtos', ProdutoController.buscarTodosProdutos)
  .get('/produtos/id/:id', ProdutoController.buscarProdutoPorId)
  .post('/produtos', ProdutoController.cadastrarProduto)
  .delete('/produtos/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/produtos/id/:id', ProdutoController.editarProduto);

module.exports = router;
