const mongodb = require('./mongodb/management.repository');

module.exports.getDBMS = ({ dbms }) => {
  try{  

    const DBMSs = {
      "mongodb": mongodb
    }

   return DBMSs[dbms];
  
    
  }catch(error){
    return console.error(error)
  }
  
  

}