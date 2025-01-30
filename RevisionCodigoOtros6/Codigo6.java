package RevisionCodigoOtros6;
/*El programa genera un arreglo de 20 números aleatorios entre 20 y 400, 
los muestra en pantalla y luego solicita elegir si quiere resaltar 
los múltiplos de 5 o de 7. Según la opcion, recorre el arreglo e imprime los números,
destacando entre corchetes aquellos que cumplen con la condición.*/


public class Codigo6 {
	public static void main (String[] args) {  //Agregamos el main 
	  
    int[] n =  new int[20]; //Agregamos new para declara que es un nuevo array 

    for (int i = 0; i < 20; i++) { //Agregamos otro + para indicar que va incrementando 
      n[i] = (int)(Math.random() * 381) + 20;
      System.out.println(n[i] + " ");  //Agegamos out  a sysout
    }
    
    System.out.println("\n¿Qué números quiere resaltar? ");
    System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
    int opcion = Integer.parseInt(System.console().readLine()); //Agregamos un parentesis para cerrar readLine()

    int multiplo = (opcion == 1) ? 5 : 7; //Se operador ternario y el roden correcto es ? :

    for(int e : n) { //sintaxis: for-each y n es un int asi que e debe der int y no un char
      if (e % multiplo == 0) {
        System.out.print("[" + e + "] ");
      }else {  //Agregamos llave para cerrar el if 
        System.out.print(e + " ");  //Agregamos out para el sysout 
      }
    }
 
	}
}