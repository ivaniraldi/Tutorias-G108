--
ALTER TABLE notas ADD COLUMN id_usuario INTEGER;



SELECT * FROM notas;
SELECT * FROM usuarios;





-- FULL JOIN: TRAE TODOS LOS DATOS DE LA TABLA "A" Y TODOS DE LA TABLA "B", TENGAN RELACION O NO.
-- LOS DATOS QUE NO COINCIDEN DE LAS TABLAS SE RELLENAN CON "NULL"
SELECT * FROM usuarios
FULL JOIN notas
ON usuarios.id = notas.id_usuario;


-- LEFT JOIN: TRAE TODOS LOS DATOS DE LA TABLA "A" Y SOLO LOS DATOS DE LA TABLA "B" QUE TENGAN RELACION. (Todos los usuarios ind. si tienen nota o no, y solo las notas que tengan un usuario)
-- LOS DATOS QUE NO COINCIDEN DE LA TABLA "B" SE RELLENAN CON "NULL"
SELECT * FROM usuarios
LEFT JOIN notas
ON usuarios.id = notas.id_usuario;


-- INNER JOIN: TRAE LOS DATOS SI COINCIDEN EN LAS DOS TABLAS. (Todos los usuarios que tengan nota, y todas las notas que tengan usuario)
SELECT * FROM usuarios
INNER JOIN notas
ON usuarios.id = notas.id_usuario
WHERE notas.nota > 8
ORDER BY notas.nota ASC;

SELECT * FROM countries;
SELECT * FROM states;

--. ¿Cuál es el país con el estado que está más al norte? Muestra el país y el estado con la latitud correspondiente. - (La latitud debe ser del estado, no la del país).

SELECT * FROM countries
INNER JOIN states
ON countries.id = states.country_id
ORDER BY countries.name ASC
LIMIT 10;

--. ¿Cuál es el país con el estado que está más al norte? Muestra el país y el estado con la latitud correspondiente. (La latitud debe ser del estado, no la del país).

SELECT countries.name, states.name, states.latitude FROM countries
INNER JOIN states
ON countries.id = states.country_id
WHERE states.latitude IS NOT NULL
ORDER BY states.latitude DESC
LIMIT 1;

--Cuenta la cantidad de estados que tiene cada país, limitando los resultados a 10
SELECT countries.name, COUNT(states.id) FROM countries
INNER JOIN states
ON countries.id = states.country_id
GROUP BY countries.name
LIMIT 10;

--¿Cuáles son los 3 países con más estados? Muestra el país junto con la cantidad de estados.
SELECT countries.name, COUNT(states.id) AS cantidad_estados FROM countries
INNER JOIN states
ON countries.id = states.country_id
GROUP BY countries.name
ORDER BY cantidad_estados DESC 
LIMIT 3;

--Selecciona todos los países con sus estados y ciudades.  Limita los resultados a 50.
SELECT countries.name AS pais, states.name AS estado, cities.name AS ciudad FROM countries
INNER JOIN states 
ON countries.id = states.country_id
INNER JOIN cities
ON states.id = cities.state_id
WHERE countries.name = 'Chile'
LIMIT 50;


-- Muestra cada país junto con la cantidad de ciudades que tiene.
SELECT countries.name AS pais, COUNT(cities.name) AS cantidad_ciudades FROM countries
INNER JOIN states 
ON countries.id = states.country_id
INNER JOIN cities
ON states.id = cities.state_id
GROUP BY countries.name
ORDER BY cantidad_ciudades DESC
LIMIT 3;