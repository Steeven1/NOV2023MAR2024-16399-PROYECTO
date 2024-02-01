const { productos } = require("./Modelo");

/*
obtener datos del productos
*/
module.exports.obtenerTodos = function (req, res) {
  productos
    .find()
    .then((resultados) => {
      res.json(resultados);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*
crear nuevo productos 
*/

module.exports.crear = (req, res) => {
  const producto = new productos(req.body);
  producto
    .save()
    .then((productos) => {
      res.status(201).json(productos);
    })
    .catch((error) => {
      res.status(500).json({ error: "Ocurrió un error al crear el productos" });
      console.log(error);
    });
};

// Obetener un productos por ID
module.exports.obtenerId = (req, res) => {
  productos.findOne({ partidaId: req.params.id })
    .then((dato) => {
      if (dato) {
        res.json(dato);
      } else {
        res.status(404).json({
          message: "No se encontró ningún productos con ese ID",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "Ocurrió un error al obtener el productos",
      });
    });
};

//Actualizar un productos por ID
module.exports.actualizarId = (req, res) => {
  productos.updateOne({partidaId: req.params.id}, req.body, { new: true })
    .then(resultado => {
      res.send(resultado);
    })
    .catch(error => {
      res.status(500).json({ 
        error: "Ocurrió un error al actualizar el productos",
        error: error
        });
    })
};

//Eliminar un productos
module.exports.eliminarId = (req, res) => {
  productos.deleteOne({partidaId: req.params.id})
  .then(resultado => {
    res.send(resultado);
  })
  .catch(error => {
    res.status(500).json({ 
      error: "Ocurrió un error al eliminar el productos",
      error: error
      });
  })
};
