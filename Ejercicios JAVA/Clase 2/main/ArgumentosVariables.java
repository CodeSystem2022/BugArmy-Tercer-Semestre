package main;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3,4,5);
        imprimirNumeros(7,7,5,4,22,4);
        variosParametros("Pedro","uwu", 1,2,3,4);
    }
    private static void variosParametros(String nombre,String apellido, int ...numeros){
        System.out.println("Nombre: "+nombre+", Apellido: " + apellido);
        imprimirNumeros(numeros);
    }
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: "+numeros[i]);
        }
    }
}