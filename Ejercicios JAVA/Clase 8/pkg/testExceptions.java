package pkg;

// Clase 8.3

public class testExceptions {

	public static void main(String[] args) {
		int t1 = 1;
		try{
			System.out.println(t1);
			t1 = Aritm.div(t1, 0);
		}catch (ETestC e) {
			System.out.println("ETest---pers");
			System.err.println(e.getMessage());
		}catch (Exception e){
			System.err.println("ETest---java");
			e.printStackTrace(System.out);
		}finally{
			System.out.println("Test Finally?");
		}
		System.out.println("Last "+t1);
	}

}
