package test;

import domain.*;

public class TestInstanceOf {

    public static void main(String[] args) {

        Empleado empleado1 = new Empleado("Juan", 10000);
        //determinarTipo(empleado1);

        empleado1 = new Gerente("JosÃ©", 5000, "Sistemas");
        determinarTipo(empleado1);

    }

    public static void determinarTipo(Empleado empleado) {
        if (empleado instanceof Gerente) {
            System.out.println("Es de tipo Gerente");
            //((Gerente) empleado).getDepartamento(); // 1er forma de hacer la convercion
            //System.out.println("gerente = "+empleado);
            
            Gerente gerente = (Gerente) empleado; // 2da forma de hacer la convercion
            gerente.getDepatamento();
            System.out.println("Gerente = " + gerente.getDepartamento());

        } else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");
        } else if (empleado instanceof O    bject) {
            System.out.println("Es de tipo Object");
        }
    }

}
