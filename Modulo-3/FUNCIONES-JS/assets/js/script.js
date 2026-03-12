console.log("Estoy desde el archivo script.js")

// 3 formas de escribir una función

// 1 funcion declarativa usamos let const o var para definir la variable y le asignamos una función
let saludar = function (nombre){
    console.log("Hola " + nombre)
}

//2 función de expresión vamos a usar SOLO la palabra clave function ESTA ES LA UNICA MANERA EN LA QUE PODEMOS USAR LA FUNCIÓN ANTES DE DECLARARLA 
function saludar2(nombre){
    console.log("Hola " + nombre)
}

//3 función flecha
let saludar3 = (nombre) => {console.log("Hola " + nombre)}


let pintar = (color)=>{
    const parrafo = document.getElementById('texto-color')
    parrafo.style.color = color
}

let suma = (a, b) => {
    console.log( a + b);
    return a + b;
}

let resultadoDeSuma = suma("ivan","iraldi");

console.log("La variable que guarde en resultadoDeSuma tiene el valor: " + resultadoDeSuma)

function resta(num1 = 0, num2 = 0, num3 = 0){
    return num1-num2-num3;
};

console.log(resta(10, 7))

let greet = (nombre = "Usuario") => {
    console.log("Hola " + nombre)
};

let test = (t) =>{
 if(t == 3){
    return "Algo"
 }else if(t == 4){
    return "Otro algo"
 }else{
    return "Otro algo diferente"
 }
}



///ADDEVENTLISTENER
const boton = document.querySelector('#btn')


const prueba = () => {
    alert("Tocaste el boton")
}
// La función addEventListener recibe 2 parametros.
// parametro 1= EVENTO QUE QUEREMOS ESCUCHAR
// parametro 2= función que se va a ejecutar cuando se escuche ese evento
boton.addEventListener('click', prueba)

//EVENTO KEYDOWN 
// SOLO EN ESTE CASO vamos a usar el eventListener sobre el documento entero
// con la tecla "a" vamos a cambiar el color de Texto a rojo
// con la tecla "b" vamos a subrayar el texto 
// con la tecla "f" vamos a borrar el texto
document.addEventListener('keydown', function(pepe) {
    console.log(pepe)

    const texto = document.getElementById('texto')
    if(pepe.key == 'a'){
        //cambio a rojo
        texto.style.color = 'red'
    }
    if(pepe.key =='b'){
        //subrayo
        texto.style.textDecoration = 'underline'
    }
    if(pepe.key == 'f'){
        //borro
        texto.textContent = ''
    }
})