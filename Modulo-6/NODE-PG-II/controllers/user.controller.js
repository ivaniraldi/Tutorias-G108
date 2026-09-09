const { pool } = require("../utils/dbConnection");

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
    const result = await pool.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      [name, email, password],
    );
    return("Usuario creado con éxito!");
  } catch (error) {
    return("Error creando al usuario: " + error.message);
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

module.exports = { obtenerUsers, modifyUser, deleteUser, obtenerUser, createUser };
