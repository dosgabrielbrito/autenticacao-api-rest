const { Router } = require('express');
const RoleController = require('../controllers/roleController.js');

const router = Router();

router
  .get('/roles', RoleController.buscarTodasRoles)
  .get('/roles/:id', RoleController.buscarRolePorId)
  .post('/roles', RoleController.cadastrar)
  .put('/roles/:id', RoleController.editarRole)
  .delete('/roles/:id', RoleController.deletarRolePorId);

module.exports = router;
