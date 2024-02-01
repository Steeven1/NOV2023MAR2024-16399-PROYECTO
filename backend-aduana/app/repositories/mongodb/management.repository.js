const aduanero  = require("./aduanero.repository");
const empresa  = require("./empresa.repository");
const operacion  = require("./operacion.repository");
const producto  = require("./producto.repository");
const reporte  = require("./reporte.repository");
const traslado  = require("./traslado.repository");
const viaje  = require("./viaje.repository");



module.exports = {
  aduanero,
  empresa,
  operacion,
  producto,
  reporte,
  traslado,
  viaje
}