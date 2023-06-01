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
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s'
            id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) #de esta manera ejecutamos la sentencia
            registros = cursor.fetchone() #recuperar todos los registros que seran una lista
            print(registros)
except Exception as e:
    print(f'ocurrio un error: {e}')
finally:
    conexion.close()