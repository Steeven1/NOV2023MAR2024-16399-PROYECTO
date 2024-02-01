const express = require('express');
const AduaneroController = require('../controller/AduaneroController');
const router = express.Router();

//Rutas para el CRUD
//optener Todos
router.get('/', AduaneroController.obtenerTodos);
//crear nuevo
router.post('/', AduaneroController.crear);
//obtener por ID
router.get('/:id', AduaneroController.obtenerId);
//actualizar por ID
router.put('/:id', AduaneroController.actualizarId);
//eliminar por ID
router.delete('/:id', AduaneroController.eliminarId);

module.exports = router;
