const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { checkConnection } = require("./utils/dbConnection");
const {
  obtenerUsers,
  modifyUser,
  deleteUser,
  obtenerUser,
  createUser,
  verificarCredenciales,
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

// NO DISPONIBLE EN VERCEL / RENDER / NETLIFY
function consoleRoute(req, res, next) {
  const route = req.route.path;
  let archivoPrevio = fs.readFileSync("routes.log", "utf-8");
  let nuevoArchivo =
    (archivoPrevio += ` RUTA CONSULTADA A LAS ${Date.now()} - ${route}`);
  fs.writeFileSync("routes.log", nuevoArchivo);
  next();
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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    await verificarCredenciales(email, password);
    const token = jwt.sign(
      { email, fecha: Date.now(), nombreApp: "Tets g108" },
      "LLAVE_SUPERSECRETA",
    );
    res.send(token);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  // ["bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml2YW5AdHV0b3IuY29tIiwiZmVjaGEiOjE3OTA4MDkwNDE3NTEsIm5vbWJyZUFwcCI6IlRldHMgZzEwOCIsImlhdCI6MTc5MDgwOTA0MX0.DA8llHs7PrEIOcatnbuCG81w3KoX0bljppbQvYjo014"]

  try {
    const users = await obtenerUsers();
    res.json({ users, token });
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

app.post("/register", async (req, res) => {
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
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);

  try {
    jwt.verify(token, "LLAVE_SUPERSECRETA");

    const info = jwt.decode(token);

    console.log(info);

    const response = await deleteUser(id);
    res.send({ message: response, user: info.email, date: info.fecha });
  } catch (error) {
    res.send(error);
  }
});

// RUTAS DE PRODUCTOS

app.get("/products", async (req, res) => {
  const params = req.query;
  try {
    const result = await getProducts(params);

    const HATEOAS = await prepararHATEOAS(result, params.limit, params.page);

    res.json(HATEOAS);
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductByID(id);
    res.json(product);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/products", async (req, res) => {
  const { title, price, description, stock, imageURL, category } = req.body;
  try {
    let result = await postProduct(
      title,
      price,
      description,
      stock,
      imageURL,
      category,
    );
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/filter", async (req, res) => {
  const params = req.query;
  const result = await getFilteredProducts(params);
  res.json(result);
});
