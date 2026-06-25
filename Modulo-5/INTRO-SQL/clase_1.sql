--ESTO ES UN COMENTARIO (NO SE EJECUTA)
-- TODOS LOS COMANDOS QUE EMPIEZAN CON "\" NO ES NECESARIO QUE TERMINEN EN ; los demás si.
-- PARA LISTAR LAS BASES DE DATOS USAMOS \l

--CREAR BASE DE DATOS
CREATE DATABASE g108;

--ELIMINAR UNA BASE DE DATOS
-- DROP DATABASE g108;

-- CREAR TABLAS
CREATE TABLE usuarios (id SERIAL, email VARCHAR(50), password VARCHAR(16));
CREATE TABLE productos (id SERIAL, nombre VARCHAR, precio INT);
CREATE TABLE productoss (id SERIAL, nombre VARCHAR, precio INT);

--LISTAR TABLAS \dt

--ELIMINAR UNA TABLA
DROP TABLE productoss;

--INSERTAR DATOS EN UNA TABLA
-- LAS COMILLAS DOBLES NO FUNCIONAN EN SQL
INSERT INTO usuarios (email, password) VALUES ('ivan@email.com', '123123');
INSERT INTO usuarios (email, password) VALUES ('juan@email.com', '456456');
INSERT INTO usuarios (email, password) VALUES ('raul@email.com', '789789');

INSERT INTO productos (nombre, precio) VALUES ('Monitor', 10000);
INSERT INTO productos (nombre, precio) VALUES ('Teclado', 5000);
INSERT INTO productos (nombre, precio) VALUES ('Monitor', 7000);
INSERT INTO productos (nombre, precio) VALUES ('Auriculares', 4500);
INSERT INTO productos (nombre, precio) VALUES ('Webcam', 6000);
INSERT INTO productos (nombre, precio) VALUES ('Impresora', 25000);
INSERT INTO productos (nombre, precio) VALUES ('Notebook', 120000);
INSERT INTO productos (nombre, precio) VALUES ('Tablet', 45000);
INSERT INTO productos (nombre, precio) VALUES ('Parlantes', 8000);
INSERT INTO productos (nombre, precio) VALUES ('Disco SSD 500GB', 18000);
INSERT INTO productos (nombre, precio) VALUES ('Disco HDD 1TB', 12000);
INSERT INTO productos (nombre, precio) VALUES ('Memoria RAM 16GB', 22000);
INSERT INTO productos (nombre, precio) VALUES ('Placa de Video', 150000);
INSERT INTO productos (nombre, precio) VALUES ('Procesador', 95000);
INSERT INTO productos (nombre, precio) VALUES ('Motherboard', 70000);
INSERT INTO productos (nombre, precio) VALUES ('Fuente 650W', 28000);
INSERT INTO productos (nombre, precio) VALUES ('Gabinete', 35000);
INSERT INTO productos (nombre, precio) VALUES ('Router WiFi', 15000);
INSERT INTO productos (nombre, precio) VALUES ('Cable HDMI', 2500);
INSERT INTO productos (nombre, precio) VALUES ('Micrófono USB', 9000);

-- LISTAR O CONSULTAR DATOS DE UNA TABLA 
-- SELECT columna1, columna2 FROM tabla;
-- SELECT * FROM tabla;
SELECT * FROM usuarios;
SELECT * FROM productos;
SELECT precio, nombre FROM productos;

-- ELIMINAR UN REGISTRO
DELETE FROM productos WHERE id = 4;
-- OJO!!!!!!!!!!! SIEMPRE QUE USAMOS DELETE NOOOOO OLVIDAR EL WHERE <-------- MUY IMPORTANTE SI NO, ELIMINAREMOS TODOS LOS PRODUCTOS

-- ACTUALIZAR UN REGISTRO
UPDATE productos SET nombre = 'Mouse' WHERE id = 7;
-- OJO!!!!!!!!!!! SIEMPRE QUE USAMOS UPDATE NOOOOO OLVIDAR EL WHERE <-------- MUY IMPORTANTE SI NO, ACTUALIZAREMOS TODOS LOS PRODUCTOS

--MODIFICAR UNA TABLA
                    --ADD COLUMN = AGREGAR COLUMNA
                    --DROP COLUMN = ELIMINAR COLUMNA
ALTER TABLE usuarios ADD COLUMN nombre VARCHAR(30);


UPDATE usuarios SET nombre = 'Ivan Iraldi' WHERE id = 1;

--SELECCIONAR FILTRANDO
-- SELECCIONAR TODOS LOS PRODUCTOS CON UN PRECIO MAYOR A 5500

SELECT * FROM productos WHERE precio > 5500;
SELECT * FROM productos WHERE precio < 7000;
SELECT * FROM productos WHERE precio <= 7600;

SELECT * FROM usuarios WHERE nombre = 'Ivan Iraldi';

-- SELECCIONAR ORDENANDO
-- SELECCIONAR PRODUCTOS ORDENANDO POR PRECIO DE MENOR A MAYOR
-- SELECT * FROM tabla ORDER BY columna ASC/DESC
SELECT * FROM productos ORDER BY precio ASC;
SELECT * FROM productos ORDER BY precio DESC;

--SELECCIONAR Y FILTRAR

SELECT * FROM productos WHERE precio < 9000 ORDER BY precio DESC;

-- LIMITAR CANTIDAD DE RESULTADOS 
-- LIMIT LO PUEDO COLOCAR AL FINAL DE CADA CONSULTA
SELECT * FROM productos LIMIT 1;

-- TRAERME MI PRODUCTO MAS CARO
SELECT * FROM productos ORDER BY precio DESC LIMIT 1;