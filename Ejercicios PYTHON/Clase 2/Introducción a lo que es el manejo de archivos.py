try:
    archivo = open('prueba.txt','w') #la w es de write que significa escribir
    archivo.write('Programamamos con diferentes tipos de archivos, ahora en txt. \n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:# siempre se ejecuta
    archivo.close()# Con esto se debe cerrar el archivo