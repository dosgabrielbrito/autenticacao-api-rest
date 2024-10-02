const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticado = require('../middleware/autenticado.js');

const router = Router();

router.use(autenticado);

router
  .get('/usuarios', UsuarioController.buscarTodosUsuarios)
  .get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
  .post('/usuarios', UsuarioController.cadastrar)
  .put('/usuarios/id/:id', UsuarioController.editarUsuario)
  .delete('/usuarios/id/:id', UsuarioController.deletarUsuario);

module.exports = router;
