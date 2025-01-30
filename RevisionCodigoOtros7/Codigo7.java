package RevisionCodigoOtros7;
/*El codigo crea un mapa (HashMap) donde se almacenan paises y sus respectivas capitales. 
Utiliza un Scanner para leer el pais ingresado por el usuario, y si el pais existe en el mapa,
imprime su capital. Si el pais no se encuentra, pide al usuario que ingrese la capital y 
la guarda en el mapa. El proceso se repite hasta que el usuario ingrese "salir", 
momento en el cual el programa termina.*/

// Importamos las clases necesarias
import java.util.HashMap;
import java.util.Scanner;

public class Codigo7 {
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in); //Scanner debe recibir System.in

        
        HashMap<String, String> capitales = new HashMap<>();//El HashMap debe ser de <String, String>, no <Byte, Double>

        //El método put() debe recibir (clave, valor)
        capitales.put("Canadá", "Ottawa");
        capitales.put("Estados Unidos", "Washington DC");
        capitales.put("México", "Ciudad de México");
        capitales.put("Belice", "Belmopán");
        capitales.put("Costa Rica", "San José");
        capitales.put("El Salvador", "San Salvador"); //solo tenia una clave sin valor
        capitales.put("Guatemala", "Ciudad de Guatemala");
        capitales.put("Honduras", "Tegucigalpa");
        capitales.put("Nicaragua", "Managua");
        capitales.put("Panamá", "Panamá");

       
        String c = "";// "Sting" estaba mal escrito, debe ser "String"

        do {
            //System.out.print(), no System.in.print()
            System.out.print("\nEscribe el nombre de un país y te diré su capital (o escribe 'salir' para terminar): ");
            
            //Usamos nextLine() en lugar de nextDouble(), porque es texto
            c = s.nextLine();

            //Uso de equalsIgnoreCase() para evitar problemas con mayúsculas y minúsculas
            if (!c.equalsIgnoreCase("salir")) { 
                
                //Se usa containsKey() en lugar de containsValue(), porque buscamos por clave (país)
                if (capitales.containsKey(c)) {
                    //Se usa get() en lugar de put() para obtener la capital
                    System.out.println("La capital de " + c + " es " + capitales.get(c));
                } else {
                    System.out.print("No conozco la respuesta. ¿Cuál es la capital de " + c + "?: ");
                    
                    //Se cambió el nombre de la variable para evitar conflicto con el HashMap
                    String nuevaCapital = s.nextLine();

                    //Se usa capitales.put() correctamente para almacenar la nueva capital
                    capitales.put(c, nuevaCapital);
                    
                    System.out.println("Gracias por enseñarme nuevas capitales.");
                }
            }
        } 
        //debe ser "while"
        while (!c.equalsIgnoreCase("salir"));

        //Corrección: Se cierra el Scanner para evitar fugas de memoria
        s.close(); 
    }
}