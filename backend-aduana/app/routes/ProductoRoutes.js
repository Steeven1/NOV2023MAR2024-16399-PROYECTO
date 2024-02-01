const express = require('express');
const ProductoController = require('../controller/ProductoController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', ProductoController.obtenerTodos);
//crear nuevo
router.post('/', ProductoController.crear);
//obtener por ID
router.get('/:id', ProductoController.obtenerId);
//actualizar por ID
router.put('/:id', ProductoController.actualizarId);
//eliminar por ID
router.delete('/:id', ProductoController.eliminarId);

module.exports = router;
