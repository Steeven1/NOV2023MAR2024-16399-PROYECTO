const mongoose = require("mongoose");

const DB_URL = 'mongodb://127.0.0.1:27017/bdAduana';

module.exports.connect =  () => {
      return  mongoose.createConnection(
            DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })/* .then(() => {
                console.log('Conexión exitosa a MongoDB');
            })
            .catch(error => {
                console.error('Error al conectar a MongoDB:', error);
            })    */
}



