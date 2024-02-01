const madb  = require("../repositories/controller.repository");
const mongo = madb.getDBMS({dbms : "mongodb"});

/*
obtener datos del reportes
*/
module.exports.obtenerTodos = function (req, res) {
  mongo
  .reporte
  .obtenerTodos(req, res)
};

/*
crear nuevo reportes 
*/

module.exports.crear = (req, res) => {
  mongo
  .reporte
  .crear(req, res)
};

// Obetener un reportes por ID
module.exports.obtenerId = (req, res) => {
  mongo
  .reporte
  .obtenerId(req, res)
};

//Actualizar un reportes por ID
module.exports.actualizarId = (req, res) => {
  mongo
  .reporte
  .actualizarId(req, res)
};

//Eliminar un reportes
module.exports.eliminarId = (req, res) => {
  mongo
  .reporte
  .eliminarId(req, res)
};


//traer los datos relacionadas de traslado, viajes, producto, aduanero
module.exports.obtenerTodasRelacion = (req, res) => {
  mongo
  .reporte
  .obtenerTodasRelacion(req, res)
};
