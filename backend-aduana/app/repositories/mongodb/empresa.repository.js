const { empresas } = require("./Modelo");

/*
obtener datos del empresas
*/
module.exports.obtenerTodos = function (req, res) {
  empresas
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo empresas 
*/

module.exports.crear = (req, res) => {
  const empresa = new empresas(req.body);
  empresa
    .save()
    .then((empresas) => {
      res.status(201).json(empresas);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el empresas" });
      console.log(error);
    });
};

// Obetener un empresas por ID
module.exports.obtenerId = (req, res) => {
  empresas.findOne({ rifEmpresa: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún empresas con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el empresas",
      });
    });
};

//Actualizar un empresas por ID
module.exports.actualizarId = (req, res) => {
  empresas.updateOne({rifEmpresa: req.params.id}, req.body, { new: true })
    .then(resultado => {
      res.send(resultado);
    })
    .catch(error => {
      res.status(500).json({ 
        error: "Ocurrió un error al actualizar el empresas",
        error: error
        });
    })
};

//Eliminar un empresas
module.exports.eliminarId = (req, res) => {
  empresas.deleteOne({rifEmpresa: req.params.id})
  .then(resultado => {
    res.send(resultado);
  })
  .catch(error => {
    res.status(500).json({ 
      error: "Ocurrió un error al eliminar el empresas",
      error: error
      });
  })
};
