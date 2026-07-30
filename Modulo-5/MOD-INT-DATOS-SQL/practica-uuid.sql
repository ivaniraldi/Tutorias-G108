SELECT * FROM usuarios;

--Un SERIAL es un contador numérico correlativo (1, 2, 3...) administrado por la base de datos, mientras que un UUID es un código alfanumérico aleatorio y único en el mundo (a0eebc99...) que pademos generar en cualquier lugar sin exponer el número total de nuestros registros.

--Usaríamos UUID en lugar de SERIAL para proteger nuestras URLs contra adivinaciones, permitir que nuestro backend o app móvil genere identificadores antes de tocar la base de datos y evitar conflictos de IDs al unir servidores o trabajar sin conexión.

--En PostgreSQL (versión 13 o superior), la función gen_random_uuid() viene integrada sin necesidad de instalar extensiones:

ALTER TABLE usuarios DROP COLUMN id;
ALTER TABLE usuarios ADD COLUMN id UUID PRIMARY KEY DEFAULT gen_random_uuid();
SELECT * FROM usuarios;