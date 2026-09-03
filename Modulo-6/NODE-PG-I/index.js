const express = require("express");
const cors = require("cors");
const { checkConnection, pool } = require("./utils/dbConnection");
const { obtenerUsers } = require("./consultas.js")

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, async () => {
  console.log(
    "🟢 Servidor inciado con éxito en ---> http://localhost:3000 <---",
  );
  try {
    const hora = await checkConnection();
    console.log("💾 Base de datos conectada y funcionando a las " + hora);
  } catch (error) {
    console.log("🔴 Error en la conexión a la BD: ", error.message)
  }
});

app.get("/users", async(req, res)=>{
    try {
        
        const users = await obtenerUsers()
        res.json(users )
    } catch (error) {
        res.send("Error obteniendo los usuarios: " + error.message)
    }
})

app.post("/users", async(req, res)=>{
    const { name, email, password } = req.body
    try {

        const result = await pool.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,[name, email, password])
        res.send("Usuario creado con éxito!")
    } catch (error) {
        res.send("Error creando al usuario: " + error.message)
    }
})