package test;

public class TestAutoboningUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*  
            Clases envolventes de tipo primitivo
            
            int = la clase envolvente es Integer
            long = la clase envolvente es LOng
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            char = la clase envolvente es Character
            short = la clase envolvente es Short    
        */ 
        // los tipos primitivos en gral se usan para calculos
        // Si nos vamos a hacer calculos nos conviene usar la clase integer
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim); // 10 es un numero de tipo entero
        Integer entero = 10; //Tipo object con la clase integer.
        System.out.println("entero = " + entero.doubleValue()); // Esta conversion se conocen como Autoboxing 
        // 10 es un numero de tipo object .String
        // A traves del metodo . podemos ver los diferentes metoso y conversiones.
        int entero2 = entero; //Unboxing
        // Se extrae la leteral del objeto integer y se asigna a nuestra variable
        // para transformarlo a tipo primitivo.
        System.out.println("entero2 = " + entero2); 
    }

}
