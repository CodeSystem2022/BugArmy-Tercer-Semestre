package paquete1;

import paquete2.Clase4;

public class TestDefault {

	public static void main(String[] args) {
		
		ClaseHija2 claseHija2 = new ClaseHija2();
		claseHija2.atributoDefault = "Cambio desde la prueba";
		System.out.println("ClaseHija2 atributo default: " + claseHija2.atributoDefault);
		
		Clase4 clase4 = new Clase4("Público");
		System.out.println("Clase4: " + clase4.getAtributoPrivate());
		clase4.setAtributoPrivate("Cambio");
		System.out.println("Clase4: " + clase4.getAtributoPrivate());
		

	}

}
