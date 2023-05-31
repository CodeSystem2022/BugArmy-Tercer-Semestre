import psycopg2

conexion = psycopg2.connect(user='postgres', password='contraseña', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los numero de registros a eliminar (separados por coma): ')
            valores = (entrada,) # es una tupla de valores
            cursor.execute(sentencia, valores)
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')
            
except Exception as e:
    print(f'ocurrio un error: {e}')
finally:
    conexion.close()