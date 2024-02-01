const express = require('express');
const OperacionController = require('../controller/OperacionController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', OperacionController.obtenerTodos);
//crear nuevo
router.post('/', OperacionController.crear);
//obtener por ID
router.get('/:id', OperacionController.obtenerId);
//actualizar por ID
router.put('/:id', OperacionController.actualizarId);
//eliminar por ID
router.delete('/:id', OperacionController.eliminarId);
//obtner los realacionadas
router.get('/relacion/:id', OperacionController.obtenerTodasRelacion);
module.exports = router;
