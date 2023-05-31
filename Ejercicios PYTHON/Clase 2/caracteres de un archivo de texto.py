try:
    archivo = open('prueba.txt', 'w', encoding= 'utf8')
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecucuion y producción\n')
    archivo.write('Con esto terminamos.')
except Exception as e:  
    print(e)
finally:
    archivo.close()
#archivo.write('Todo quedo perfecto'): este es un error