# Reduce para calcular el total de un carrito

`reduce` sirve para recorrer un array y acumular un resultado.

## Ejemplo

```js
const carrito = [
  { nombre: "Mouse", precio: 50, cantidad: 2 },
  { nombre: "Teclado", precio: 100, cantidad: 1 },
  { nombre: "Monitor", precio: 300, cantidad: 1 },
];

const total = carrito.reduce((acumulador, producto) => {
  return acumulador + producto.precio * producto.cantidad;
}, 0);

console.log(total); // 500
````

## Cómo funciona

### Primera vuelta

```js
0 + 50 * 2 = 100
```

### Segunda vuelta

```js
100 + 100 * 1 = 200
```

### Tercera vuelta

```js
200 + 300 * 1 = 500
```

## Fórmula mental

```js
array.reduce((acumulador, item) => {
  return nuevoValor;
}, valorInicial);
```

## Versión corta

```js
const total = carrito.reduce(
  (total, p) => total + p.precio * p.cantidad,
  0
);
```

## Resumen

* `map` transforma
* `filter` filtra
* `reduce` acumula