package RevisionCodigoOtros4;

import java.util.Scanner; // Se importa Scanner
/*El codigo funiona a traves del escaner donde con este se reciben los datos ingresados por el usuario que son las 
opciones que puede escoger para poder jugar en el juego, despues compara estas opciones a traves de funciones encadenadas que son if switch
y dependiendo las opciones se decide que jugador gana*/

public class Codigo4 {
    public static void main(String[] args) { // Ponemos el metodo el Main 
        
        Scanner s = new Scanner(System.in); // Ponemos el System.in en Scanner
        
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();
        
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); //Cambiamos por "jugador 2"
        String j2 = s.nextLine();
        
        if (j1.equals(j2)) { // La comparación de cadenas debe hacerse con equals()
            System.out.println("Empate");
        } else {
            int g = 2;
            switch(j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break; // Ponemos el Break
                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break; // Faltaba el break
                case "tijeras": // Escribimos Tijeras
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;
                default:
                    System.out.println("Entrada no válida"); // Manejo de error en caso de entrada incorrecta
                    return ; // Salir del programa si la entrada no es válida
            }
            System.out.println("Gana el jugador " + g);
        }
        
        s.close(); // Cerrarmos el Scanner 
    }
}
