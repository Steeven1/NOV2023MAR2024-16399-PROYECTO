const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});


/*
obtener datos del empresas
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .empresa
  .obtenerTodos(req, res);
};

/*
crear nuevo empresas 
*/

module.exports.crear = (req, res) => {
  mongo
  .empresa
  .crear(req, res)
};

// Obetener un empresas por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .empresa
  .obtenerId(req, res)
};

//Actualizar un empresas por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .empresa
  .actualizarId(req, res)
};

//Eliminar un empresas
module.exports.eliminarId = (req, res) => {
  mongo
  .empresa
  .eliminarId(req, res)
};
