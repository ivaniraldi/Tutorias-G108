const { getUsuarios, mostrarIAS } = require("./consultas.js")
const { registrarUsuario, leerUsuarios } = require("./controladorUsuarios.js")

const comandos = process.argv.slice(2)

if(comandos[0] != "registrar" || comandos[0] != "leer" || comandos[0] != "ias"){
    console.error("Debes ingresar un comando válido, no existe el comando: " + comandos[0] + " prueba con 'leer', 'registrar' o 'ias'")
}

if(comandos[0] == "registrar"){
    console.log("Registrando usuario...")
    registrarUsuario(comandos[1], comandos[2], comandos[3])
}

if(comandos[0] == "leer"){
    console.log("Leyendo usuarios...")
    leerUsuarios()
}

if(comandos[0] == "ias"){
    mostrarIAS()
}