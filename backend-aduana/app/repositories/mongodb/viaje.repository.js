const { viajes } = require("./Modelo");

/*
obtener datos del viajes
*/
module.exports.obtenerTodos = function (req, res) {
  viajes
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo viajes 
*/

module.exports.crear = (req, res) => {
  const viaje = new viajes(req.body);
  viaje
    .save()
    .then((viajes) => {
      res.status(201).json(viajes);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el viajes" });
      console.log(error);
    });
};

// Obetener un viajes por ID
module.exports.obtenerId = (req, res) => {
  viajes.findOne({ codigoRuta: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún viajes con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el viajes",
      });
    });
};

//Actualizar un viajes por ID
module.exports.actualizarId = (req, res) => {
  viajes.updateOne({codigoRuta: req.params.id}, req.body, { new: true })
    .then(resultado => {
      res.send(resultado);
    })
    .catch(error => {
      res.status(500).json({ 
        error: "Ocurrió un error al actualizar el viajes",
        error: error
        });
    })
};

//Eliminar un viajes
module.exports.eliminarId = (req, res) => {
  viajes.deleteOne({codigoRuta: req.params.id})
  .then(resultado => {
    res.send(resultado);
  })
  .catch(error => {
    res.status(500).json({ 
      error: "Ocurrió un error al eliminar el viajes",
      error: error
      });
  })
};
