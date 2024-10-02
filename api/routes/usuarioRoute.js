const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');

const router = Router();

router
  .get('/usuarios', UsuarioController.buscarTodosUsuarios)
  .get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
  .post('/usuarios', UsuarioController.cadastrar)
  .put('/usuarios/id/:id', UsuarioController.editarUsuario)
  .delete('/usuarios/id/:id', UsuarioController.deletarUsuario);

module.exports = router;
