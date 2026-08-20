const fs = require("fs");
const { listaIA } = require("./data.js")

function consultarDB() {
  console.log("Consultando DB...");
}

function mostrarIAS(){
    const ias = JSON.stringify(listaIA)
    fs.writeFileSync("ias.json", ias)
    console.log(fs.readFileSync("ias.json", "utf-8"))
}

function getUsuarios() {
  const usuarios = [
    {
      id: 1,
      name: "Ivan",
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: "Juan",
      age: 20,
      isActive: false,
    },
  ];

  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));

  console.log("Obteniendo usuarios...");


  let usuariosLeidos = fs.readFileSync("usuarios.json", "utf8")

  console.log(usuariosLeidos)

}

module.exports = { consultarDB, getUsuarios, mostrarIAS };
