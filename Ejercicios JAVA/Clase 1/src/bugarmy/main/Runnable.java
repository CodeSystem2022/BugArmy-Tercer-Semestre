package bugarmy.main;
import bugarmy.resources.*;

public class Runnable {
	public static void main(String[] args) {
		
		Monitor Monitor1 = new Monitor("LG", 27);
		Teclado Teclado1 = new Teclado("cable", "RedDragon");
		Raton Mouse1 = new Raton("fibra", "Razer");
		Computadora computadora1 = new Computadora("PC 1", Monitor1, Teclado1, Mouse1);
		
		Monitor Monitor2 = new Monitor("HP", 21);
		Teclado Teclado2 = new Teclado("Bluetooth", "HyperX");
		Raton Mouse2 = new Raton("Bluetooth", "Genius");
		Computadora computadora2 = new Computadora("PC 2", Monitor2, Teclado2, Mouse2);
		
		Monitor Monitor3 = new Monitor("Samsung", 26);
		Teclado Teclado3 = new Teclado("Bluetooth", "HyperX");
		Raton Mouse3 = new Raton("Bluetooth", "Razer");
		Computadora computadora3 = new Computadora("PC 3", Monitor3, Teclado3, Mouse3);
		
		Orden orden = new Orden();
		orden.agregarComputadora(computadora1);
		orden.agregarComputadora(computadora2);
		orden.agregarComputadora(computadora3);
		
		orden.mostrarOrden();
	}

}
