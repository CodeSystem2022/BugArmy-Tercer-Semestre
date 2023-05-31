archivo = open('prueba.txt', 'r', encoding='utf8')
#print(archivo.read())
#print(archivo.read(15))
#print(archivo.read(10)) continuamos desde la linea anterior
#print(archivo.readline())
#print(archivo.readline())

#for linea in archivo:
    #print(linea): iteramos todos los elementos del archivo
#print(archivo.readline()[11]) #accedemos al archivo como si fuera una lista
# anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo

print('Se ha terminado el preceso de leer y copiar archivos.')