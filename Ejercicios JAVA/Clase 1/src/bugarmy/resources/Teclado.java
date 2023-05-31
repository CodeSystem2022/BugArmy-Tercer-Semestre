package bugarmy.resources;

public class Teclado extends DispositivoEntrada{

	private final int idTeclado;
	public static int contadorTeclados;

	public Teclado(String tipoEntrada, String marca) {
		super(tipoEntrada, marca);
		this.idTeclado = ++Teclado.contadorTeclados;
	}
	@Override
	public String toString() {
		return "Teclado{" + "idTeclado=" + idTeclado + ", " + super.toString()+"}";
	}
}
