const express = require('express');
const EmpresaController = require('../controller/EmpresaController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', EmpresaController.obtenerTodos);
//crear nuevo
router.post('/', EmpresaController.crear);
//obtener por ID
router.get('/:id', EmpresaController.obtenerId);
//actualizar por ID
router.put('/:id', EmpresaController.actualizarId);
//eliminar por ID
router.delete('/:id', EmpresaController.eliminarId);

module.exports = router;
