const { operaciones } = require("./Modelo");

/*
obtener datos del operaciones
*/
module.exports.obtenerTodos = function (req, res) {
  operaciones
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo operaciones 
*/

module.exports.crear = (req, res) => {
  const operacion = new operaciones(req.body);
  operacion
    .save()
    .then((operaciones) => {
      res.status(201).json(operaciones);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Ocurrió un error al crear el operaciones" });
      console.log(error);
    });
};

// Obetener un operaciones por ID
module.exports.obtenerId = (req, res) => {
  operaciones
    .findOne({ codigoOperacion: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún operaciones con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el operaciones",
      });
    });
};

//Actualizar un operaciones por ID
module.exports.actualizarId = (req, res) => {
  operaciones
    .updateOne({ codigoOperacion: req.params.id }, req.body, { new: true })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al actualizar el operaciones",
        error: error,
      });
    });
};

//Eliminar un operaciones
module.exports.eliminarId = (req, res) => {
  operaciones
    .deleteOne({ codigoOperacion: req.params.id })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al eliminar el operaciones",
        error: error,
      });
    });
};

//traer los datos relacionadas de traslado, viajes, producto, aduanero
module.exports.obtenerTodasRelacion = (req, res) => {
  operaciones
    .aggregate([
      { $match: { codigoOperacion: req.params.id } }, //filtro para encontrar el dato en especifico
      {
        $lookup: {
          from: "aduaneros", //la coleccion de donde se requiere la consulta 
          localField: "nitAgenteAduana", // id de la coleccion aduaneros
          foreignField: "nitAgenteAduana", // id de la coleccion de operaciones
          as: "aduana", // alias para el nombre de la coleccion nueva
        },
      },
      {
        $lookup: {
          from: "traslados",
          localField: "codigoTraslado",
          foreignField: "codigoTraslado",
          as: "Traslado",
        },
      },
      {
        $lookup: {
          from: "productos",
          localField: "partidaId",
          foreignField: "partidaId",
          as: "Producto",
        },
      },
      {
        $lookup: {
          from: "viajes",
          localField: "codigoTraslado", 
          foreignField: "codigoRuta",
          as: "Ruta",
        },
      },
    ])
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al traer los datos",
        error: error,
      });
    });
};
