const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del aduanero
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .aduanero.obtenerTodos(req, res)
  
  
};

/*
crear nuevo aduanero 
*/

module.exports.crear = (req, res) => {
  mongo
  .aduanero
  .crear(req, res)
};

// Obetener un aduanero por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .aduanero
  .obtenerId(req, res)
};

//Actualizar un documento por ID
module.exports.actualizarId = (req, res) => {

  mongo
  .aduanero
  .actualizarId(req, res)
};

//Eliminar un aduanero
module.exports.eliminarId = (req, res) => {
  mongo
  .aduanero
  .eliminarId(req, res)
};
