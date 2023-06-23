package org.example.conexion;

import com.sun.jdi.connect.Connector;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLOutput;

public class Conexion {
    public static Connection getConnection() {
        Connection conexion = null;
        //Variable para conectarnos a la base de datos
        var badeDatos = "estudiantes2023";
        var url = "jdbc:mysql://localhost:3306/" + badeDatos;
        var usuario = "root";
        var password = "root";

        //Cargamos la clase del driver de mysql en memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Ocurrió un eror en la conexión: " + e.getMessage());
        }//Fin catch
        return conexion;
    } //Fin método Connection
}
