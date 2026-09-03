const  { pool } = require ("./utils/dbConnection")
async function obtenerUsers  (){
 const result = await pool.query("SELECT * FROM users")
 return result.rows
}

module.exports= {obtenerUsers}