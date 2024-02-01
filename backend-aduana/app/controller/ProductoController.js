const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del productos
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .producto
  .obtenerTodos(req, res)
};

/*
crear nuevo productos 
*/

module.exports.crear = (req, res) => {
  mongo
  .producto
  .crear(req, res)
};

// Obetener un productos por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .producto
  .obtenerId(req, res)
};

//Actualizar un productos por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .producto
  .actualizarId(req, res)
};

//Eliminar un productos
module.exports.eliminarId = (req, res) => {
  mongo
  .producto
  .eliminarId(req, res)
};
