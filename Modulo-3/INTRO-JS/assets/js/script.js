// Esto es un comentario!! 

// tipos de datos que existen
let cadenaTexto = "Esto es un string"
let numeros = 6565
let decimales = 5450.656687
let booleanos = true // o puede ser false
let arreglos = ["a", 2, "c"]
let objetos = { nombre: "Ivan", edad: 27, programador: true }
let nulos = null
let indefinidos = undefined

//let num1 = prompt("Ingresa el primer numero")
//let num2 = prompt("Ingresa el segundo numero")
// SI QUEREMOS PASAR UN STRING A UN NUMERO, usamos el constructor Number()
//alert("La suma de los numeros es= " + (Number(num1) + Number(num2)))

//console.log(document)
let parrafo = document.querySelector("#parrafo_javascript")

// camelCase = cuando una variable tiene mas de dos palabras, la primera comienza con minusculas y las siguientes palabras las vamos empezando con mayusculas
parrafo.textContent = 'Esto es un texto escrito desde javascript <img src="https://images.pexels.com/photos/31458644/pexels-photo-31458644.jpeg" alt="">'

let segundoParrafo = document.querySelector("#segundoParrafo")
// SI insertamos datos con innerHTML nos arriesgamos que nuestros usuarios puedan injectar etiquetas maliciosas
segundoParrafo.innerHTML = 'Esto también es un texto desde js, pero con innerHTML <img width="200" src="https://images.pexels.com/photos/31458644/pexels-photo-31458644.jpeg" alt="">'



