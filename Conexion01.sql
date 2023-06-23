-- Comenzamos con CRUD: create(insertar) , read(leer), update(actualizar), delete(eliminar)
-- Lista los estudiantes (read)
SELECT * FROM estudiantes2023;
-- Insertar estudiante
INSERT INTO estudiantes2023 (nombre, apellido, telefono, email) VALUES ("Juan","Perez","2614545456","juan@mail.com");
-- Update (modificar)
UPDATE	estudiantes2023 SET nombre="Juan Carlos", apellido="Garcia" WHERE idestudiantes2023= 1;
-- Delete(eliminar)
DELETE FROM estudiantes2023 WHERE idestudiantes2023=3;
-- Para modificar el idestudiantes2023 y comience en 1
ALTER TABLE estudiantes2023 auto_increment= 1;

