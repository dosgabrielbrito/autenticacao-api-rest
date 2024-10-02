const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticado = require('../middleware/autenticado.js');

const router = Router();

router.use(autenticado);

router
  .get('/usuarios', UsuarioController.buscarTodosUsuarios)
  .get('/usuarios/:id', UsuarioController.buscarUsuarioPorId)
  .post('/usuarios', UsuarioController.cadastrar)
  .put('/usuarios/:id', UsuarioController.editarUsuario)
  .delete('/usuarios/:id', UsuarioController.deletarUsuario);

module.exports = router;
