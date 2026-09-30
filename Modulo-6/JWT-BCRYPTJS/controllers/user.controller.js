const { pool } = require("../utils/dbConnection");
const bcrypt = require("bcryptjs")

async function verificarCredenciales(email, password) {

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])

  if(!result.rowCount) throw {code: 404, message: "No existe un usuario con ese email."}

  const user = result.rows[0]
  console.log(user)
  
  
  const hashedPassword = await bcrypt.compareSync(password, user.password)

  if(!hashedPassword){
    throw {code: 401, message: "Error, contraseña incorrecta."}
  }
}

async function obtenerUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

async function modifyUser(name, email, password, id) {
  const values = [name, email, password, id];
  let consulta = "UPDATE users SET name=$1, email=$2, password =$3 WHERE id=$4";

  try {
    const result = await pool.query(consulta, values);
    console.log(result);
    return "Usuario actualizado con éxito!";
  } catch (error) {
    return "Error: " + error.detail;
  }
}

async function createUser(name, email, password) {
  try {

    const hashedPassword = await bcrypt.hashSync(password)
    console.log("Contraseña: ", password, "Constraseña encriptada: ", hashedPassword)

    const result = await pool.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      [name, email, hashedPassword],
    );
    return "Usuario creado con éxito!";
  } catch (error) {
    return "Error creando al usuario: " + error.message;
  }
}

async function deleteUser(id) {
  const values = [id];
  let consulta = "DELETE FROM users WHERE id = $1";
  try {
    const result = await pool.query(consulta, values);
    console.log(result);

    if (result.rowCount == 0) {
      throw new Error("Usuario no encontrado");
    }

    return "Usuario eliminado con éxito!";
  } catch (error) {
    return "Error: " + error.detail != undefined ? error.message : error.detail;
  }
}

async function obtenerUser(id) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rowCount == 0) {
      throw new Error("Usuario no encontrado");
    }
    return result.rows[0];
  } catch (error) {
    return "Error: " + error.detail != undefined ? error.message : error.detail;
  }
}

module.exports = {
  obtenerUsers,
  modifyUser,
  deleteUser,
  obtenerUser,
  createUser,
  verificarCredenciales,
};
