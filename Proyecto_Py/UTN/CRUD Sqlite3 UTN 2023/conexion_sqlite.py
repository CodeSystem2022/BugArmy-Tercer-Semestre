import sqlite3
from tkinter import *
from tkinter import ttk, messagebox
from time import strftime
import csv
from openpyxl import Workbook


class Comunicacion:
    def __init__(self):
        self.conexion = sqlite3.connect('database.db')
        self.cursor = self.conexion.cursor()
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS registros
                            (fecha TEXT, nombre TEXT, edad INTEGER, correo TEXT, telefono TEXT)''')
        self.conexion.commit()

    def agregar_registro(self, nombre, edad, correo, telefono, fecha):
        self.cursor.execute("INSERT INTO registros VALUES (?, ?, ?, ?, ?)",
                            (fecha, nombre, edad, correo, telefono))
        self.conexion.commit()

    def actualizar_registro(self, fecha, nombre, edad, correo, telefono):
        self.cursor.execute("UPDATE registros SET nombre=?, edad=?, correo=?, telefono=? WHERE fecha=?",
                            (nombre, edad, correo, telefono, fecha))
        self.conexion.commit()

    def eliminar_registro(self, fecha):
        self.cursor.execute("DELETE FROM registros WHERE fecha=?", (fecha,))
        self.conexion.commit()

    def obtener_registros(self):
        self.cursor.execute("SELECT * FROM registros")
        registros = self.cursor.fetchall()
        return registros
