-- Active: 1782948120895@@127.0.0.1@5432@g108
-- ==========================================
-- CREACIÓN DE TABLAS
-- ==========================================

DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS bitcoins;

CREATE TABLE bitcoins (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    bitcoinAdress VARCHAR(50) NOT NULL,
    monto DECIMAL(10,2) NOT NULL
);

CREATE TABLE ventas (
    id SERIAL PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    monto INTEGER NOT NULL
);

-- ==========================================
-- DATOS TABLA BITCOINS
-- ==========================================


-- SELECCIONAR EL EMAIL DEL USUARIO Y LA SUMA DE LOS MONTOS (SUM(monto)) DE ELLA (AL USAR EL GROUP BY JUNTA LOS EMAIL QUE SE REPITEN)

SELECT email, SUM(monto) AS cantidad_movida FROM bitcoins GROUP BY email;

INSERT INTO bitcoins (email, bitcoinAdress, monto) VALUES
('jaime@email.com', '1HB8RTKNzFAQZ5LtLFRL3R7rbaLGuJt5Un', 0.32),
('diego@email.com', '15z6eAp7GGforurLkgntSLocJvTafMPThp', 0.08),
('francisca@email.com', '1NumuVDAuyYGy7b5G19X47dpvYRzRCCc4a', 0.04),
('francisca@email.com', '1NQpZnNzJL2ntadzXj2PbN9nGgEj8zeHVP', 0.28),
('jaime@email.com', '1NtsgLEjo3wXNH8ZSfQrF6CY3WRau3ic5Y', 0.53),
('camila@email.com', '1HbvwhvxXqSUB5FZGZjjrJzi7Y9SpUy4LW', 0.65),
('francisca@email.com', '14uX7dNXuU657AbNz3fh5K17UZYfmETidb', 0.38),
('diego@email.com', '18RfzSJsJJej9mzwFNoRs8hpg5tR8bmKim', 0.73),
('camila@email.com', '115A5LUmNVsjREzCHKbpuec2XueBViJG86', 0.19),
('jaime@email.com', '1DVP9ATi1H3QUcp7PQcSsTEJdMab1ZM78Q', 0.93),
('jaime@email.com', '1LcB8bsqyqRmJV8BSFdXMxFwnCWmKj3P7B', 0.83),
('diego@email.com', '1CNXt7BL8Cm5o8zd7jriC2bUoHmyVUENF7', 0.89),
('francisca@email.com', '17o3MhRdGL2e5uBUTCiH5mLbVxQ7JHbuck', 0.82),
('francisca@email.com', '1HtutwGyd573w1a8MB99yU3qZY2uUmvb5V', 0.18),
('camila@email.com', '12ZDMxk73Ej6zJZJ2XwnfmGUr4jBUDHmk9', 0.96),
('jaime@email.com', '13L3hqtQbAzVWbu5zhnMM7v6y7kEM4wW3K', 0.20),
('jaime@email.com', '14obJfGmgqFeVeqBtpCWc7YE1r138djQt', 0.55),
('camila@email.com', '1MggBaGyQGDgSUcb63g4Pqb3FTUg3VQawy', 0.21),
('camila@email.com', '1L3281ktysdWfdkfGhq5SrmLkrwvTMdozS', 0.07),
('francisca@email.com', '19CLwEhWsVW2oHUC6Dy66abetBbqB4qTiQ', 0.53),
('jaime@email.com', '1A5oc25Q2Kj36aVT5JN3FBkXaHHrcKAR81', 0.43),
('francisca@email.com', '14qXaaDbKMiTbovAd8772uZ6YDy2bWeGZm', 0.04),
('jaime@email.com', '1M3dMYYngXbfbbjympmZAP57CaVDcx8Ffx', 0.95),
('diego@email.com', '16WDsrHZ375PKBCdYLhhxrGFtguDQtJDSq', 0.61),
('jaime@email.com', '1Jq2d8qk6a5p35Y3eqnrsgzDMdzTTCWUXv', 0.41),
('diego@email.com', '15CBFjbUw46xH2md5eEeFpzaLHRZgATuT7', 0.72),
('jaime@email.com', '1AFXgLKNCwPVTxVuHedTQrQY65yrAmyst5', 0.98),
('camila@email.com', '19iMdr6JK6HgarHsebHmMMVjdxnNbybG6L', 0.80),
('jaime@email.com', '1EL98fxNT1LyS6C8ckFBqocTho9NsEQATS', 0.96),
('camila@email.com', '1B8xZAcBbU3mTfb6bNJvGtLdPanyAK9kN6', 0.79);



SELECT DISTINCT(email) AS usuarios_distintos FROM bitcoins;

SELECT COUNT(*) AS cantidad_transacciones FROM bitcoins;

SELECT * FROM bitcoins;

SELECT COUNT(DISTINCT(email)) AS cuenta_usuarios FROM bitcoins;

SELECT COUNT(*) FROM bitcoins WHERE email= 'jaime@email.com' OR email = 'camila@email.com';


-- ==========================================
-- DATOS TABLA VENTAS
-- ==========================================

INSERT INTO ventas (categoria, monto) VALUES
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);


SELECT categoria, SUM(monto)
FROM ventas
GROUP BY categoria
HAVING SUM(monto) > (SELECT MAX(monto) FROM ventas);


SELECT * from ventas order by monto desc limit 1;

SELECT categoria, MAX(monto) AS mayor_venta from ventas GROUP BY categoria;
SELECT categoria, MIN(monto) AS menor_venta from ventas GROUP BY categoria;

--TRAER EL MONTO PROMEDIO DE VENTAS TOTALES

SELECT AVG(monto) FROM ventas;


--SUBCONSULTA PARA TRAER TODAS LAS VENTAS CON EL MONTO SUPERIOR AL PROMEDIO ANTERIOR
SELECT * FROM VENTAS
WHERE monto > (SELECT AVG(monto) FROM ventas);

-- SUMAR TODOS LO MONTOS DE LA TABLA VENTAS
SELECT SUM(monto) AS total_ventas FROM ventas;

-- SELECCIONAR EL NOMBRE DE LA CATEGORIA Y LA SUMA DE LOS MONTOS (SUM(monto)) DE ELLA (AL USAR EL GROUP BY JUNTA LAS CATEGORIAS QUE SE REPITEN)
SELECT categoria, SUM(monto) 
FROM ventas 
GROUP BY categoria;

-- SELECCIONAR EL NOMBRE DE LA CATEGORIA, LA SUMA DE LOS MONTOS (SUM(monto)) DE ELLA, Y EL PROMEDIO DE VENTAS (AVG(monto)) (AL USAR EL GROUP BY JUNTA LAS CATEGORIAS QUE SE REPITEN)
SELECT categoria AS nombre_categoria, SUM(monto) AS total_ventas, AVG(monto) AS promedio_ventas FROM ventas GROUP BY categoria;

-- SELECCIONAR LAS VENTAS DE LAS CATEGORIAS AGRUPADAS QUE AL SUMAR EL MONTO SEA MAYOR A 900

--EJEMPLO MALO CON WHERE
SELECT categoria, sum(monto) 
FROM ventas
WHERE monto > 900
GROUP BY categoria;

--EJEMPLO BUENO CON HAVING
SELECT categoria, sum(monto)
FROM ventas
GROUP BY categoria
HAVING sum(monto) > 900;

-- CUANDO USAR WHERE? CUANDO QUEREMOS FILTRAR Y NO TENEMOS FUNCIONES DE AGRUPADO (NI SUM NI AVG NI MAX NI MIN NI COUNT)
-- CUANDO USAR HAVING? CUANDO QUEREMOS FILTRAR DATOS AGRUPADOS (CON SUM CON AVG CON MAX CON MIN CON COUNT)
-- CUANDO QUIERO PRIMERO AGRUPAR Y LUEGO SUMAR U OTRA OP DE AGREGADO, USO HAVING

--CONTAR CUANTAS VENTAS HAY EN TOTAL (FILAS)
SELECT COUNT(*) AS cantidad_ventas FROM ventas;

-- CONTAR TODAS LAS VENTAS DE LA CAT X 
SELECT COUNT(*) AS ventas_herramientas FROM ventas WHERE categoria = 'Outdoors' OR categoria = 'Tools' OR categoria = 'Toys';

-- SELECCIONAR Y TRAER TODAS LAS CATEGORIAS DISTINTAS (no repetidas)
SELECT DISTINCT(categoria) AS categorias_distintas FROM ventas;


-- TRAER LA CUENTA DE LA CANTIDAD DE CATEGORIAS DISTINTAS
SELECT COUNT(DISTINCT(categoria)) AS cant_categorias_distintas FROM ventas;









CREATE TABLE notas(nota INT, fecha DATE);
insert into notas(nota, fecha) values
(10, '2023-01-01'),
(7, '2023-10-01'),
(4, '2023-12-01'),
(9, '2023-11-01');


SELECT MAX(fecha) FROM notas;

SELECT MAX(nota)
FROM notas;

-- EJERCICIO 1
SELECT AVG(nota) FROM notas;



SELECT AVG(nota) FROM notas WHERE fecha >= '2023-10-01';













-- ==========================================
-- ACTIVIDAD 1 - FUNCIONES DE AGREGADO
-- ==========================================

-- Cantidad de registros
SELECT COUNT(*) AS cantidad_registros
FROM bitcoins;

-- Monto más alto
SELECT MAX(monto) AS monto_maximo
FROM bitcoins;

-- Monto más bajo
SELECT MIN(monto) AS monto_minimo
FROM bitcoins;

-- Promedio de transacciones
SELECT AVG(monto) AS promedio_transacciones
FROM bitcoins;

-- Suma total de transacciones
SELECT SUM(monto) AS total_transacciones
FROM bitcoins;


-- ==========================================
-- ACTIVIDAD 2 - DISTINCT
-- ==========================================

-- Cantidad de emails únicos
SELECT COUNT(DISTINCT email) AS emails_unicos
FROM bitcoins;

-- Cantidad de montos únicos
SELECT COUNT(DISTINCT monto) AS montos_unicos
FROM bitcoins;


-- ==========================================
-- ACTIVIDAD 4 - GROUP BY
-- TABLA VENTAS
-- ==========================================

-- Monto total vendido por categoría
SELECT categoria, SUM(monto) AS total_vendido
FROM ventas
GROUP BY categoria;

-- Cantidad de ventas por categoría
SELECT categoria, COUNT(*) AS cantidad_transacciones
FROM ventas
GROUP BY categoria;

-- Promedio de venta por categoría
SELECT categoria, AVG(monto) AS promedio_ventas
FROM ventas
GROUP BY categoria;

-- Venta mínima por categoría
SELECT categoria, MIN(monto) AS venta_minima
FROM ventas
GROUP BY categoria;

-- Venta máxima por categoría
SELECT categoria, MAX(monto) AS venta_maxima
FROM ventas
GROUP BY categoria;


-- ==========================================
-- ACTIVIDAD 4 - GROUP BY
-- TABLA BITCOINS
-- ==========================================

-- Cantidad de depósitos por usuario
SELECT email, COUNT(*) AS cantidad_depositos
FROM bitcoins
GROUP BY email;

-- Total de bitcoins por usuario
SELECT email, SUM(monto) AS total_bitcoins
FROM bitcoins
GROUP BY email;

-- Menor depósito por usuario
SELECT email, MIN(monto) AS menor_deposito
FROM bitcoins
GROUP BY email;

-- Mayor depósito por usuario
SELECT email, MAX(monto) AS mayor_deposito
FROM bitcoins
GROUP BY email;


-- ==========================================
-- ACTIVIDAD 5 - HAVING
-- ==========================================

-- Usuarios con un solo depósito
SELECT email
FROM bitcoins
GROUP BY email
HAVING COUNT(*) = 1;

-- Usuarios con más de 1.5 BTC en depósitos
SELECT email
FROM bitcoins
GROUP BY email
HAVING SUM(monto) > 1.5;


-- ==========================================
-- ACTIVIDAD 6 - WHERE
-- ==========================================

-- Transacciones mayores o iguales a 0.9 BTC
SELECT *
FROM bitcoins
WHERE monto >= 0.9;

-- Transacciones menores o iguales a 0.5 BTC
SELECT *
FROM bitcoins
WHERE monto <= 0.5;


-- ==========================================
-- ACTIVIDAD 7 - SUBCONSULTAS
-- ==========================================

-- Transacciones mayores al promedio
SELECT *
FROM bitcoins
WHERE monto > (
    SELECT AVG(monto)
    FROM bitcoins
);

-- Transacciones mayores al monto de la primera transacción
SELECT *
FROM bitcoins
WHERE monto > (
    SELECT monto
    FROM bitcoins
    ORDER BY id
    LIMIT 1
);