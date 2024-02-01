const { Client } = require('pg');
 
const clientpg = new Client({
  host: 'localhost',
  port: 5432,
  database: 'aduanafinal',
  user: 'postgres',
  password: 'admin',
})


clientpg
    .connect()
    .then(()=>{
    console.log('conexión éxitosa a Postgres')
    })
    .catch(error=>{
      console.log(error)
    });


module.exports = clientpg;




