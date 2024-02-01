const clientpg = require('../../models/dbpostgres')

module.exports.getClimas = async(req, res) => {
  try{  

    const climas = await clientpg.query("SELECT * FROM clima");
  
    return res
            .status(200)
            .send(climas.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }
  
  

}

module.exports.getProductos = async(req, res) => {
  try{  

    const productos = await clientpg.query("SELECT * FROM producto");
  
    return res
            .status(200)
            .send(productos.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }
  
  

}

module.exports.getAduaneros = async(req, res) => {
  try{  

    const aduaneros = await clientpg.query("SELECT * FROM aduanero");
  
    return res
            .status(200)
            .send(aduaneros.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }
  
  

}

module.exports.getPaises = async(req, res) => {
  try{  

    const paises = await clientpg.query("SELECT * FROM paises");
  
    return res
            .status(200)
            .send(paises.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }
  
  

}

module.exports.getOperaciones = async(req, res) => {
  try{  

    const operaciones = await clientpg.query("SELECT * FROM operacion");
  
    return res
            .status(200)
            .send(operaciones.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }

}

module.exports.getClimas = async(req, res) => {
  try{  

    const climas = await clientpg.query("SELECT * FROM clima");
  
    return res
            .status(200)
            .send(climas.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }

}

module.exports.getRelationships = async(req, res) => {
  try{  

    const relationships = await clientpg.query(`
    select *, a.nombre as nombreAduanero,
		prod.nombre  as nombreProducto
    from paises p 
		inner join aduanero a 
			on p.id_pais = a.id_pais 
		inner join operacion o 
			on a.nitaduanero = o.nitaduanero 
		inner join producto prod 
			on o.partidaid = prod.partidaid 
		inner join clima c 
			on o.id_clima = c.id_clima 
    `);
  
    return res
            .status(200)
            .send(relationships.rows);
  }catch(error){
    return res
            .status(500)
            .send(error);
  }

}








