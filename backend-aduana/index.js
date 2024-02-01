const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')

//Importar la conexión


// Importar las Rutas
const aduaneroRoutes = require('./app/routes/AduaneroRoutes');
const empresaRoutes = require('./app/routes/EmpresaRoutes');
const operacionRoutes = require('./app/routes/OperacionRoutes');
const productoRoutes = require('./app/routes/ProductoRoutes');
const reporteRoutes = require('./app/routes/ReporteRoutes');
const trasladoRoutes = require('./app/routes/TrasladoRoutes');
const viajeRoutes = require('./app/routes/ViajeRoutes');


//importar rutas de postgres
/* const climaRoutespg = require('./app/routes/postgres/ClimaRoutes'); */
/* const aduaneroRoutespg = require('./app/routes/postgres/AduaneroRoutes');
const productoRoutespg = require('./app/routes/postgres/ProductoRoutes');
const operacionRoutespg = require('./app/routes/postgres/OperacionRoutes');
const paisRoutespg = require('./app/routes/postgres/PaisRoutes');
const relatioshipRoutesPg = require('./app/routes/postgres/RelationshipsRoutes'); */



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT || 3000; 

//Registro de Rutas - MongoDB
app.use('/api/aduana', aduaneroRoutes);
app.use('/api/empresa', empresaRoutes);
app.use('/api/operacion', operacionRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/reporte', reporteRoutes);
app.use('/api/traslado', trasladoRoutes);
app.use('/api/viaje', viajeRoutes);

//Registro de Rutas - PostgreSQL
/* app.use('/api/postgres/clima', climaRoutespg);
app.use('/api/postgres/producto',productoRoutespg);
app.use('/api/postgres/pais', paisRoutespg);
app.use('/api/postgres/aduana', aduaneroRoutespg);
app.use('/api/postgres/operacion', operacionRoutespg);
app.use('/api/postgres/relationship', relatioshipRoutesPg); */



//Iniciar el servidor
app
.listen(port,
  () => {
    console.clear();
  console.log('servidor esta escuchado por el puerto ', port
)});

