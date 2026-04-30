console.log("Comenzando pruebas...");

const arreglo1 = [1, "a", true, null, undefined, { nombre: "Juan" }, [1, 2, 3]];

const arreglo2 = [1, 2, 3, 4, 5];

const arreglo3 = ["manzana", "banana", "cereza"];

const arreglo4 = [
  { id: 1, nombre: "Producto A", precio: 10 },
  { id: 2, nombre: "Producto B", precio: 20 },
  { id: 3, nombre: "Producto C", precio: 30 },
];

// ARREGLOS = LISTAN DATOS
// OBJETOS = MODELAN ENTIDADES CON PROPIEDADES Y MÉTODOS

const usuario = {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    password: "123456"
}

const usuarios = [
    { id: 1, nombre: "Juan Pérez"},
    { id: 2, nombre: "María Gómez"},
    { id: 3, nombre: "Carlos Rodríguez"}
]

const resultado = usuarios.map((elemento) => elemento.nombre )

console.log(resultado)