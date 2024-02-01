const { traslados, viajes } = require("./Modelo");


/*
obtener datos del traslados
*/
module.exports.obtenerTodos = function (req, res) {
  traslados
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo traslados 
*/

module.exports.crear = (req, res) => {
  const traslado = new traslados(req.body);
  traslado
    .save()
    .then((traslados) => {
      res.status(201).json(traslados);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el traslados" });
      console.log(error);
    });
};

// Obetener un traslados por ID
module.exports.obtenerId = (req, res) => {
  traslados
    .findOne({ codigoTraslado: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún traslados con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el traslados",
      });
    });
};

//Actualizar un traslados por ID
module.exports.actualizarId = (req, res) => {
  traslados
    .updateOne({ codigoTraslado: req.params.id }, req.body, { new: true })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al actualizar el traslados",
        error: error,
      });
    });
};

//Eliminar un traslados
module.exports.eliminarId = (req, res) => {
  traslados
    .deleteOne({ codigoTraslado: req.params.id })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al eliminar el traslados",
        error: error,
      });
    });
};

//traer los datos relacionadas de traslado y viajes
module.exports.obtenerTodasRelacion = (req, res) => {
 traslados
 .aggregate([
  { $match: { codigoRuta: req.params.id } },
  {
    $lookup: {
      from: "traslados",
      localField: "codigoRuta",
      foreignField: "codigoRuta",
      as: "viajes",
       },
    },
  ]).then(resultado =>{
    res.send(resultado);
  }).catch(error => {
    res.status(500).json({
      error: "Ocurrió un error al traer los datos",
      error: error,
      });
  })
};
