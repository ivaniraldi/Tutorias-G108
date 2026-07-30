SELECT * FROM usuarios;

ALTER TABLE usuarios ADD COLUMN preferencias JSONB DEFAULT '{"notificaciones": true, "tema": "oscuro", "premium": false}';

UPDATE usuarios SET preferencias = '{"notificaciones": false, "tema": "claro", "premium": true}' WHERE id = 1;

SELECT * FROM usuarios WHERE preferencias @> '{"notificaciones": true}';

SELECT * FROM usuarios WHERE preferencias @> '{"premium": true}';
