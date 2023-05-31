package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("UwU","Bugax",7,8,9);    // el argumento variable va al final.
    }
    private static void variosParametros(String nombre, String apellido, int ...numeros){  //cuando hay diferentes parametros el parametro o argumento variable va al final.
        System.out.println("Nombre: "+ nombre +"Apellido: " + apellido);
        imprimirNumeros(numeros);
    }    
    private static void imprimirNumeros(int ...numeros){  // ARGUMENTO VARIABLE no se la cantidad de argumentos que le voy a pasar al metodo
         for (int i = 0; i < numeros.length; i++) {           // ... indica que sera un argumento variable
             System.out.println("Elementos: " + numeros[i]);   // numeros -- es el arreglo ,el cual no sabemos la cantidad de elementos que tendra.
             
         }    
    }                                                        
}
