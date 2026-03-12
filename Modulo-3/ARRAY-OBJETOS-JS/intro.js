/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                        ARREGLOS  
//Los arreglos (Array) son una lista para guardar valores, cada valor se separa por una coma ",".
let herramientas = ["Clavo", "Martillo", "Sierra"]

for(e of herramientas){
    console.log(`La herramienta actual es ${e}`)
}


//Pueden tener distintos tipos de datos dentro de ellos.
let arr = ["Texto", 123, false, {tipo: "objeto"}, ["Array", "dentro", "del array"]]

//Los valores que estan dentro tienen un "Indice" ese mismo indica en que posición de la lista se encuentra
//Los índices comienzan desde 0
let ejemplo = ["Primer elemento", 2, {numero: 3}]
//                    0           1        2      /// "Primer elemento" está en la posición 0 de la lista.

//Podemos extraer esos valores indicando el nombre del array y la posición donde está el valor
console.log(ejemplo[2]) // Este console.log daria "{numero: 3}"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                        OBJETOS  
//Los objetos es un tipo de dato que guarda una estructura de datos clave-valor.
//Puede tener infinitas claves y esas claves pueden tener cualquier tipo de dato como valor.
let usuario = { nombre: "Ivan", edad: 27, programador: true }
//            { clave:  valor  }

//Si queremos acceder al valor de alguna clave, podemos hacerlo con objeto.clave u objeto["clave"]
console.log(usuario.nombre) // Este console.log daria "Ivan"
console.log(usuario["edad"]) // Este console.log daria 27


//Si quisieramos ingresar al valor de la clave de un objeto dentro de un array podriamos hacerlo así:
let usuarios2 = [{ nombre: "Ivan", edad: 27, programador: true }, { nombre: "Jose", edad: 21, programador: true }]
console.log(usuarios[1].nombre) // Este console.log daria "Jose"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                        CICLOS  
// Los ciclos se usan para ejecutar código repetidamente mientras se cumpla una condición especifica. 
// El ciclo "for of" lo que hará es que por cada posición de un array, ejecutará el codigo, hasta que termine el array.
const numeros = [1, 2, 3]
for (let elemento of numeros){ //se traduce en "Por cada elemento del arreglo numeros..."
                            //Dentro de el bloque "{}" decimos que queremos que suceda
    console.log("El elemento actual es: " + elemento)  
}
// Esto lo que hará es que recorrerá los 3 elementos del array numeros y el console.log se ejecutará una vez por cada elemento


let nombre = "Ivan"
let edad = 27

// INTERPOLACIÓN
let string1 = "Hola " + nombre + " ¿cómo estas?"  + " Mi edad es " + edad
let string2 = 'Hola ' + nombre + " ¿cómo estas?"
let string3 = `Hola ${nombre} ¿cómo estas? Mi edad es ${edad}`



let auto = { 
    color: "Rojo",
    kilometraje: 120000,
    marca: "BMW",
    turbo: false,
    ruedas: ["Rueda 1", "Rueda 2", "Rueda 3", "Rueda 4"] 
}

console.log(auto.color) // "Rojo"

console.log(auto.kilometraje) // 120000

console.log(auto["turbo"]) // false

console.log(auto.ruedas[1]) // "Rueda 2"


let  obj = {clave: "valor"}
////////////////////////// ARREGLOS DE OBJETOS

let personas = [
    {id: 0, nombre: "Ivan", edad: 27},
    {id: 1, nombre: "Jose", edad: 25},
    {id: 2, nombre: "Raul", edad: 21}
]

console.log(personas[2].nombre) // "Raul"