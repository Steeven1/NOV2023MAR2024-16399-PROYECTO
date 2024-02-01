const express = require('express');
const viajeRoutes = require('../controller/ViajeController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', viajeRoutes.obtenerTodos);
//crear nuevo
router.post('/', viajeRoutes.crear);
//obtener por ID
router.get('/:id', viajeRoutes.obtenerId);
//actualizar por ID
router.put('/:id', viajeRoutes.actualizarId);
//eliminar por ID
router.delete('/:id', viajeRoutes.eliminarId);

module.exports = router;
