from ManejoArchivos import ManejoArchivos
#Manejo de contexto WITH: sintaxis simplificada, abre y cierra el archivo
#with open('prueba.txt', 'r', encoding='utf8') as archivo: 
    #print(archivo.read())
#no hace falta ni el try, ni el finally
#en el contexto de with lo que se ejecuta de manera automatica
#utiliza diferentes metodos: __enter__ "este es el que abre"
#ahora el siguiente metodo es el que cierra: __exit__ "y este cierra"
with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())