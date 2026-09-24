const express = require("express");
const cors = require("cors");
const fs = require("fs")
const { checkConnection } = require("./utils/dbConnection");
const {
  obtenerUsers,
  modifyUser,
  deleteUser,
  obtenerUser,
  createUser,
} = require("./controllers/user.controller.js");

const {
  getProducts,
  getFilteredProducts,
  postProduct,
  getProductByID,
  prepararHATEOAS,
} = require("./controllers/product.controller.js");

const app = express();

app.use(express.json());
app.use(cors());

function consoleRoute (req, res, next){
  const route = req.route.path
  let archivoPrevio = fs.readFileSync("routes.log", "utf-8")
  let nuevoArchivo = archivoPrevio += ` RUTA CONSULTADA A LAS ${Date.now()} - ${route}`
  fs.writeFileSync("routes.log", nuevoArchivo)
  next()
}

app.listen(3000, async () => {
  console.log(
    "🟢 Servidor inciado con éxito en ---> http://localhost:3000 <---",
  );
  try {
    const hora = await checkConnection();
    console.log("💾 Base de datos conectada y funcionando a las " + hora);
  } catch (error) {
    console.log("🔴 Error en la conexión a la BD: ", error.message);
  }
});

// RUTAS DE USUARIOS

app.get("/users",consoleRoute,  async (req, res) => {
  try {
    const users = await obtenerUsers();
    res.json(users);
  } catch (error) {
    res.send("Error obteniendo los usuarios: " + error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await obtenerUser(id);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await createUser(name, email, password);
    res.send(result);
  } catch (error) {
    res.send("Error creando al usuario: " + error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const response = await modifyUser(name, email, password, id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteUser(id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// RUTAS DE PRODUCTOS

app.get("/products", consoleRoute, async (req, res) => {
  const params = req.query
  try {
    const result = await getProducts(params);



    const HATEOAS = await prepararHATEOAS(result, params.limit, params.page)


    res.json(HATEOAS);
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:id", consoleRoute, async(req,res)=>{
  const {id} = req.params
  try {
    const product = await getProductByID(id)
    res.json(product)
  } catch (error) {
    res.send(error.message)
  }
})

app.post("/products", async(req, res)=>{
  const { title, price, description, stock, imageURL, category } = req.body
  try {
    let result = await postProduct(title, price, description, stock, imageURL, category)
    res.send(result)
  } catch (error) {
    res.send(error)
  }
})

app.get("/products/filter", async(req,res)=>{
  const params = req.query
  const result = await getFilteredProducts(params)
  res.json(result)
})