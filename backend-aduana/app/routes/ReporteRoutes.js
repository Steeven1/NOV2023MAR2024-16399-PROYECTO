const express = require('express');
const ReporteController = require('../controller/ReporteController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', ReporteController.obtenerTodos);
//crear nuevo
router.post('/', ReporteController.crear);
//obtener por ID
router.get('/:id', ReporteController.obtenerId);
//actualizar por ID
router.put('/:id', ReporteController.actualizarId);
//eliminar por ID
router.delete('/:id', ReporteController.eliminarId);
//obtner los realacionadas
router.get('/relacion/:id', ReporteController.obtenerTodasRelacion);

module.exports = router;
