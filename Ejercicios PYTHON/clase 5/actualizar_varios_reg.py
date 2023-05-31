import psycopg2

conexion = psycopg2.connect(
    user='postgres',
    password='contraseña',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Juan', 'Perez', 'jperez@gmail.com', 4),
                ('Romina', 'Ayala', 'ayalar@gmail.com', 5)
            ) #es una tupla
            cursor.executemany(sentencia, valores) #de esta manera ejecutamos la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')
            
except Exception as e:
    print(f'ocurrio un error: {e}')
finally:
    conexion.close()