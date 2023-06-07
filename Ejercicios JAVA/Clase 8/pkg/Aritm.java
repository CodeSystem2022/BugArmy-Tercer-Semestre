package pkg;

// Clase 8.4

public class Aritm {
	
	public static int div(int num, int den)/*throws ETestC*/{
			if(den==0) {
				throw new ETestC("uwun't");
			}	
		return num/den;
	}
}
