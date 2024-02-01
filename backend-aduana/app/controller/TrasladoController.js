const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del traslados
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .traslado
  .obtenerTodos(req, res)
};

/*
crear nuevo traslados 
*/

module.exports.crear = (req, res) => {
  mongo
  .traslado
  .crear(req, res)
};

// Obetener un traslados por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .traslado
  .obtenerId(req, res)
};

//Actualizar un traslados por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .traslado
  .actualizarId(req, res)
};

//Eliminar un traslados
module.exports.eliminarId = (req, res) => {
  mongo
  .traslado
  .eliminarId(req, res)
};

//traer los datos relacionadas de traslado y viajes
module.exports.obtenerTodasRelacion = (req, res) => {
  mongo
  .traslado
  .obtenerTodasRelacion(req, res)
};
