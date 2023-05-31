import psycopg2

conexion = psycopg2.connect(user='postgres', password='contraseña', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el numero de registro a eliminar: ')
            valores = (tuple(entrada.split(',')),) # tupla de tuplas
            cursor.execute(sentencia, valores) #de esta manera ejecutemos la sentencia
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')
            
except Exception as e:
    print(f'ocurrio un error: {e}')
finally:
    conexion.close()