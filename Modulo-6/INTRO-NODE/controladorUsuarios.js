const fs = require("fs");

function registrarUsuario(nombre, edad, isActive) {
  let nuevoUsuario = {
    nombre: nombre,
    edad: Number(edad),
    isActive: isActive,
  };

  let listaUsuarios = fs.readFileSync("usuarios.json", "utf-8");

  let arregloUsuarios = JSON.parse(listaUsuarios);

  arregloUsuarios.push(nuevoUsuario);

  fs.writeFileSync("usuarios.json", JSON.stringify(arregloUsuarios));
}

function leerUsuarios(){
    console.log(JSON.parse(fs.readFileSync("usuarios.json", "utf8")))
}

module.exports= { registrarUsuario, leerUsuarios }