const express = require('express');
const trasladoController = require('../controller/TrasladoController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', trasladoController.obtenerTodos);
//crear nuevo
router.post('/', trasladoController.crear);
//obtener por ID
router.get('/:id', trasladoController.obtenerId);
//actualizar por ID
router.put('/:id', trasladoController.actualizarId);
//eliminar por ID
router.delete('/:id', trasladoController.eliminarId);
//obtner los realacionadas
router.get('/relacion/:id', trasladoController.obtenerTodasRelacion);
module.exports = router;
