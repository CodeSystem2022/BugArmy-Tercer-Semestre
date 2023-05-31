from NumerosIgualesException import NumerosIgualesException

resultado = None

try:
    a = int(input("Digite el primer número: "))
    b = int(input("Digite el segundo número: "))
    if a == b:
        raise NumerosIgualesException("Son números iguales")
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print("No se arrojo ninguna excepción")
finally:
    print("No se arrojo ninguna excepción")
    
print (f'El resultado es: {resultado}')
print ('Seguimos...')