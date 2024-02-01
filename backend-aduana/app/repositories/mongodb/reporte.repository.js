const { reportes } = require("./Modelo");

/*
obtener datos del reportes
*/
module.exports.obtenerTodos = function (req, res) {
  reportes
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo reportes 
*/

module.exports.crear = (req, res) => {
  const reporte = new reportes(req.body);
  reporte
    .save()
    .then((reportes) => {
      res.status(201).json(reportes);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el reportes" });
      console.log(error);
    });
};

// Obetener un reportes por ID
module.exports.obtenerId = (req, res) => {
  reportes.findOne({ nReportes: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún reportes con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el reportes",
      });
    });
};

//Actualizar un reportes por ID
module.exports.actualizarId = (req, res) => {
  reportes.updateOne({nReportes: req.params.id}, req.body, { new: true })
    .then(resultado => {
      res.send(resultado);
    })
    .catch(error => {
      res.status(500).json({ 
        error: "Ocurrió un error al actualizar el reportes",
        error: error
        });
    })
};

//Eliminar un reportes
module.exports.eliminarId = (req, res) => {
  reportes.deleteOne({nReportes: req.params.id})
  .then(resultado => {
    res.send(resultado);
  })
  .catch(error => {
    res.status(500).json({ 
      error: "Ocurrió un error al eliminar el reportes",
      error: error
      });
  })
};


//traer los datos relacionadas de traslado, viajes, producto, aduanero
module.exports.obtenerTodasRelacion = (req, res) => {
  reportes
    .aggregate([
      { $match: { nReportes: req.params.id } }, //filtro para encontrar el dato en especifico
      {
        $lookup: {
          from: "empresas", //la coleccion de donde se requiere la consulta 
          localField: "rifEmpresa", // id de la coleccion aduaneros
          foreignField: "rifEmpresa", // id de la coleccion de operaciones
          as: "Empresa", // alias para el nombre de la coleccion nueva
        },
      },
      {
        $lookup: {
          from: "operaciones",
          localField: "codigoOperacion",
          foreignField: "codigoOperacion",
          as: "Operacion",
        },
      },
      {
        $lookup: {
          from: "productos",
          localField: "codigoOperacion",
          foreignField: "partidaId",
          as: "Producto",
        },
      },
      {
        $lookup: {
          from: "aduaneros",
          localField: "codigoOperacion", 
          foreignField: "nitAgenteAduana",
          as: "Aduanero",
        },
      },
      {
        $lookup: {
          from: "traslados",
          localField: "codigoOperacion", 
          foreignField: "codigoTraslado",
          as: "Traslado",
        },
      },
      {
        $lookup: {
          from: "viajes",
          localField: "codigoOperacion", 
          foreignField: "codigoRuta",
          as: "Viajes",
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
