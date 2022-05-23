
public class ConversionDatos {
	public static void main(String[] args){
//		byte numeroByte = 127;
//		short numeroShort = numeroShort;
//		int numeroInt = numeroInt;
		long numeroLong = 500000;
		
//		casteo
		int otroInt = (int) numeroLong;
		short otroShort = (short) otroInt;
		byte otroByte = (byte) otroShort;
		
		System.out.println(otroByte);
	}
}
