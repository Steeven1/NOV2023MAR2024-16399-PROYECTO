const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del viajes
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .viaje
  .obtenerTodos(req, res)
};

/*
crear nuevo viajes 
*/

module.exports.crear = (req, res) => {
  mongo
  .viaje
  .crear(req, res)
};

// Obetener un viajes por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .viaje
  .obtenerId(req, res)
};

//Actualizar un viajes por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .viaje
  .actualizarId(req, res)
};

//Eliminar un viajes
module.exports.eliminarId = (req, res) => {
  mongo
  .viaje
  .eliminarId(req, res)
};
