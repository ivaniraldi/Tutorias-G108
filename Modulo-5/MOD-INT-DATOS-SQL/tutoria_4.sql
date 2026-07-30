-- CONSTRAINTS / RESTRICCIONES 
-- NOT NULL --> no puede ser nulo
-- UNIQUE --> solo puede haber UN dato en la db con ese valor
-- CHECK --> condiciones especificas
-- PRIMARY KEY --> no ser nulo y ser unico en la tabla SOLO PUEDE HABER UN PK POR TABLA
-- DEFAULT --> da un dato por defecto

DROP TABLE usuarios;

CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL CHECK(length(password) BETWEEN 8 AND 32),
    nombre VARCHAR NOT NULL
);
INSERT INTO usuarios (id, email, password, nombre) VALUES (2, 'maria@email.com', '12546a3123ab', 'Maria Fernandez');

SELECT * FROM usuarios;

DROP TABLE productos;

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    price INT NOT NULL CHECK(price > 0),
    description TEXT NOT NULL,
    stock INT NOT NULL CHECK(price >= 0)
)

INSERT INTO productos (title, price, description, stock) VALUES ('Notebook LG', 150000, '32gb de RAM SSD de 2tb, Incluye Windows 11 pre-instalado', 5);

SELECT * FROM productos;

CREATE TABLE pagos (
    id SERIAL PRIMARY KEY,
    monto INT NOT NULL CHECK(monto > 0),
    usuario_id UUID,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    ON DELETE CASCADE
);

DROP TABLE pagos;

INSERT INTO pagos (monto, usuario_id) VALUES (465000, '1');

SELECT * FROM pagos;

DELETE FROM usuarios WHERE id = '509ccdf0-effc-4205-b4a5-b978ff83f378';

DELETE FROM pagos WHERE id = '2b0d4b14-520d-4256-9aca-49575d9a1bdd';


CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL UNIQUE
)

INSERT INTO materias (nombre) VALUES ('Historia')

SELECT * FROM materias;
SELECT * FROM usuarios;
CREATE TABLE inscripciones (
    id_usuario INT,
    id_materia INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    FOREIGN KEY (id_materia) REFERENCES materias (id)
)

INSERT INTO inscripciones (id_usuario, id_materia) VALUES (2, 1)

SELECT * FROM inscripciones;