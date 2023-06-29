from tkinter import Tk, Button, Entry, Label
from tkinter import ttk, PhotoImage, StringVar, Scrollbar, Frame, messagebox
from conexion_sqlite import Comunicacion
from time import strftime
import pandas as pd
import os
from PIL import ImageTk, Image
import csv

class Ventana(Frame):
    def __init__(self, master):
        super().__init__(master)

        self.nombre = StringVar()
        self.edad = StringVar()
        self.correo = StringVar()
        self.telefono = StringVar()

        self.master.columnconfigure(0, weight=1)
        self.master.rowconfigure(0, weight=1)
        self.master.rowconfigure(1, weight=5)
        self.base_datos = Comunicacion()
        self.master = master
        self.widgets()

    def widgets(self):
        self.frame_uno = Frame(self, bg="white", height=200, width=800)
        self.frame_uno.grid(column=0, row=0, sticky='nsew')
        self.frame_dos = Frame(self, bg='white', height=300, width=800)
        self.frame_dos.grid(column=0, row=1, sticky='nsew')

        self.frame_uno.grid_columnconfigure([0, 1, 2], weight=1)
        self.frame_uno.rowconfigure([0, 1, 2, 3, 4], weight=1)
        self.frame_dos.columnconfigure(0, weight=1)
        self.frame_dos.rowconfigure(0, weight=1)

    

        Label(self.frame_uno, text='Opciones', bg='white', fg='black',
              font=('Kaufmann BT', 13, 'bold')).grid(column=2, row=0)

        Button(self.frame_uno, text='Actualizar Tabla', font=('Arial', 9, 'bold'),
       command=self.actualizar_tabla2, fg='black', bg='#80069c', width=20, bd=3).grid( column=2, row=3, pady=5)

        Button(self.frame_uno, text='Eliminar', font=('Arial', 9, 'bold'),
               command=self.eliminar_datos, fg='black', bg='red', width=20, bd=3).grid(column=2, row=2,pady=5 )
        Button(self.frame_uno, text='Exportar a Excel', font=('Arial', 9, 'bold'),
       command=self.exportar_excel, fg='black', bg='#80069c', width=20, bd=3).grid(column=2, row=4, pady=5)

        Label(self.frame_uno, text='Agregar y Actualizar datos', fg='black', bg='white',
              font=('Kaufman BT', 13, 'bold')).grid(columnspan=2, column=0, row=0, pady=5)
        Label(self.frame_uno, text='Nombre', fg='black', bg='white',
              font=('Rockwell', 13, 'bold')).grid(column=0, row=1, pady=5)
        Label(self.frame_uno, text='Edad', fg='black', bg='white',
              font=('Rockwell', 13, 'bold')).grid(column=0, row=2, pady=5)
        Label(self.frame_uno, text='Correo', fg='black', bg='white',
              font=('Rockwell', 13, 'bold')).grid(column=0, row=3, pady=5)
        Label(self.frame_uno, text='Telefono', fg='black', bg='white',
              font=('Rockwell', 13, 'bold')).grid(column=0, row=4, pady=5)

        Entry(self.frame_uno, textvariable=self.nombre, font=('Arial', 12),
              highlightbackground="#80069c", highlightthickness=2).grid(column=1, row=1)
        Entry(self.frame_uno, textvariable=self.edad, font=('Arial', 12),
              highlightbackground="#80069c", highlightthickness=2).grid(column=1, row=2)
        Entry(self.frame_uno, textvariable=self.correo, font=('Arial', 12),
              highlightbackground="#80069c", highlightthickness=2).grid(column=1, row=3)
        Entry(self.frame_uno, textvariable=self.telefono, font=('Arial', 12),
              highlightbackground="#80069c", highlightthickness=2).grid(column=1, row=4)

        Button(self.frame_uno, text='Agregar', font=('Arial', 9, 'bold'),
               command=self.agregar_datos, fg='black', bg='green', width=20, bd=3).grid(column=2, row=1, pady=5)

        self.tree = ttk.Treeview(self.frame_dos)
        self.tree.grid(column=0, row=0, sticky='nsew')

        scrollbar_y = Scrollbar(self.frame_dos, orient='vertical', command=self.tree.yview)
        scrollbar_y.grid(column=1, row=0, sticky='ns')
        scrollbar_x = Scrollbar(self.frame_dos, orient='horizontal', command=self.tree.xview)
        scrollbar_x.grid(column=0, row=1, sticky='ew')

        self.tree.configure(yscroll=scrollbar_y.set, xscroll=scrollbar_x.set)

        self.tree['columns'] = ("Nombre", "Edad", "Correo", "Telefono")
        self.tree.heading('#0', text='Fecha', anchor='w')
        self.tree.column("#0", anchor="w", width=120)
        self.tree.heading('Nombre', text='Nombre')
        self.tree.column("Nombre", anchor="w", width=100)
        self.tree.heading('Edad', text='Edad')
        self.tree.column("Edad", anchor="center", width=100)
        self.tree.heading('Correo', text='Correo')
        self.tree.column("Correo", anchor="center", width=150)
        self.tree.heading('Telefono', text='Telefono')
        self.tree.column("Telefono", anchor="center", width=100)

        self.actualizar_tabla()

    def agregar_datos(self):
        nombre = self.nombre.get()
        edad = self.edad.get()
        correo = self.correo.get()
        telefono = self.telefono.get()
        fecha = strftime("%Y-%m-%d %H:%M:%S")

        if nombre and edad and correo and telefono:
            self.base_datos.agregar_registro(nombre, edad, correo, telefono, fecha)
            self.nombre.set('')
            self.edad.set('')
            self.correo.set('')
            self.telefono.set('')
            self.actualizar_tabla()
            messagebox.showinfo('Éxito', 'Datos agregados correctamente.')
        else:
            messagebox.showerror('Error', 'Por favor, complete todos los campos.')

    def actualizar_datos(self):
        item = self.tree.selection()
        if item:
            nombre = self.nombre.get()
            edad = self.edad.get()
            correo = self.correo.get()
            telefono = self.telefono.get()
            fecha = strftime("%Y-%m-%d %H:%M:%S")

            if nombre and edad and correo and telefono:
                self.base_datos.actualizar_registro(item[0], nombre, edad, correo, telefono)
                self.nombre.set('')
                self.edad.set('')
                self.correo.set('')
                self.telefono.set('')
                self.actualizar_tabla()
                messagebox.showinfo('Éxito', 'Datos actualizados correctamente.')
            else:
                messagebox.showerror('Error', 'Por favor, complete todos los campos.')
        else:
            messagebox.showerror('Error', 'Seleccione un registro para actualizar.')
    
    def actualizar_registro(self, id_registro, nombre, edad, correo, telefono):
        try:
            self.base_datos.actualizar_registro(id_registro, nombre, edad, correo, telefono)
            print("Registro actualizado correctamente.")
        except Exception as e:
            print("Error al actualizar el registro:", e)


    def eliminar_datos(self):
        item_seleccionado = self.tree.selection()
        if item_seleccionado:
            fecha = self.tree.item(item_seleccionado)['text']  # Obtener la fecha del registro seleccionado
            self.base_datos.eliminar_registro(fecha)
            self.actualizar_tabla()
            messagebox.showinfo("Información", "El registro se eliminó correctamente.")
        else:
            messagebox.showwarning("Advertencia", "Selecciona un registro para eliminar.")
    


    def exportar_excel(self):
        registros = self.base_datos.obtener_registros()

        if registros:
            df = pd.DataFrame(registros, columns=["Fecha", "Nombre", "Edad", "Correo", "Telefono"])
            filename = "registros.csv"
            df.to_csv(filename, index=False)
            messagebox.showinfo('Éxito', f'Datos exportados a {filename} correctamente.')
        else:
            messagebox.showerror('Error', 'No hay datos para exportar.')

    def actualizar_tabla(self):
        registros = self.base_datos.obtener_registros()
        self.tree.delete(*self.tree.get_children())

        for registro in registros:
            fecha = registro[0]
            nombre = registro[1]
            edad = registro[2]
            correo = registro[3]
            telefono = registro[4]
            self.tree.insert("", "end", text=fecha, values=(nombre, edad, correo, telefono))
    
    def actualizar_tabla2(self):
        messagebox.showinfo('Éxito', 'Se actualizó la tabla correctamente.')
        

if __name__ == "__main__":
    root = Tk()
    root.title("Sistema de Gestión BugArmy")
    root.update()
    width = root.winfo_reqwidth()
    height = root.winfo_reqheight()


    scale_factor = 3  
    new_width = int(width * scale_factor)
    new_height = 430

    root.geometry(f"{new_width}x{new_height}")


    root.resizable(False, False)
    ventana = Ventana(root)
    ventana.pack(expand=True, fill='both')

    root.mainloop()
