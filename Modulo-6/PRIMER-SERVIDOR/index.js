const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor conectado y funcionando en http://localhost:3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//RUTAS DE PRODUCTOS

app.get("/products", (req, res) => {
  const productsJSON = fs.readFileSync("products.json", "utf-8");
  const productsJS = JSON.parse(productsJSON);
  res.json(productsJS);
});

app.post("/products", (req, res) => {
  const producto = req.body; // Extraigo el producto que me envia el usuario en JSON y lo transformo a JS

  const productListJSON = fs.readFileSync("products.json", "utf-8"); // Leo el archivo products.json y lo guardo en la variable

  const productList = JSON.parse(productListJSON); // transformo la lista de productos a JS

  productList.push(producto); // a la lista de productos le sumo el producto que me envia el usuario

  fs.writeFileSync("products.json", JSON.stringify(productList)); // sobreescribo el archivo JSON con la lista actualizada

  res.send("Producto añadido correctamente");
});

app.put("/products/:id", (req, res) => {
  const modificacion = req.body;
  const { id } = req.params;

  console.log(modificacion, id);

  const productListJSON = fs.readFileSync("products.json", "utf-8"); // Leo el archivo
  const productList = JSON.parse(productListJSON); // transformo la lista de productos a JS

  const posicionDelProductoAModificar = productList.findIndex(
    (p) => p.id == id,
  );

  productList[posicionDelProductoAModificar] = modificacion;

  fs.writeFileSync("products.json", JSON.stringify(productList)); // sobreescribo el archivo JSON con la lista actualizada

  res.send("Producto actualizado correctamente");
});

app.delete("/products", (req, res) => {
  const { id } = req.query;
  console.log(id);

  const productListJSON = fs.readFileSync("products.json", "utf-8"); // Leo el archivo
  const productList = JSON.parse(productListJSON); // transformo la lista de productos a JS

  const listaActualizada = productList.filter((p) => p.id != id);

  fs.writeFileSync("products.json", JSON.stringify(listaActualizada)); // sobreescribo el archivo JSON con la lista actualizada y sin ese producto que filtramos

  res.send("Producto eliminado con éxito");
});
