const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del operaciones
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .operacion
  .obtenerTodos(req, res);
};

/*
crear nuevo operaciones 
*/

module.exports.crear = (req, res) => {
  mongo
  .operacion
  .crear(req, res);
};

// Obetener un operaciones por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .operacion
  .obtenerId(req, res);
};

//Actualizar un operaciones por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .operacion
  .actualizarId(req, res);
};

//Eliminar un operaciones
module.exports.eliminarId = (req, res) => {
  mongo
  .operacion
  .eliminarId(req, res);
};

//traer los datos relacionadas de traslado, viajes, producto, aduanero
module.exports.obtenerTodasRelacion = (req, res) => {
  mongo
  .operacion
  .obtenerTodasRelacion(req, res);
};
