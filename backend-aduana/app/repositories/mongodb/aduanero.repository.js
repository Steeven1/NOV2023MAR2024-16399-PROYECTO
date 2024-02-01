const { aduaneros } = require("./Modelo");
/*
obtener datos del aduanero
*/
module.exports.obtenerTodos = function (req, res) {
  aduaneros
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo aduanero 
*/

module.exports.crear = (req, res) => {
  const aduanero = new aduaneros(req.body);
  aduanero
    .save()
    .then((aduanero) => {
      res.status(201).json(aduanero);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el aduanero" });
      console.log(error);
    });
};

// Obetener un aduanero por ID
module.exports.obtenerId = (req, res) => {
  aduaneros.findOne({ nitAgenteAduana: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún aduanero con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el aduanero",
      });
    });
};

//Actualizar un documento por ID
module.exports.actualizarId = (req, res) => {
  aduaneros.updateOne({nitAgenteAduana: req.params.id}, req.body, { new: true })
    .then(resultado => {
      res.send(resultado);
    })
    .catch(error => {
      res.status(500).json({ 
        error: "Ocurrió un error al actualizar el aduanero",
        error: error
        });
    })
};

//Eliminar un aduanero
module.exports.eliminarId = (req, res) => {
  aduaneros.deleteOne({nitAgenteAduana: req.params.id})
  .then(resultado => {
    res.send(resultado);
  })
  .catch(error => {
    res.status(500).json({ 
      error: "Ocurrió un error al eliminar el aduanero",
      error: error
      });
  })
};