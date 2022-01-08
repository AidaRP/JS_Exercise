// Crearemos una superclase llamada Electrodoméstico con las siguientes
// características:

// • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// peso. Indica que se podrán heredar.

// • Por defecto, el color será blanco, el consumo energético será F, el precio Base es
// de 100 € y el peso de 5 kg. Usa constantes para ello.

// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el
// nombre esta en mayúsculas o en minúsculas.
// Los métodos que implementara serán:

// • Métodos get de todos los atributos.

// • comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta,
// sino es correcta usara la letra por defecto. Se invocara al crear el objeto y no será
// visible.

// • comprobarColor(String color): comprueba que el color es correcto, sino lo es
// usa el color por defecto. Se invocara al crear el objeto y no será visible.

// • precioFinal(): según el consumo energético, aumentara su precio, y según su
// tamaño, también.
// Crearemos una subclase llamada Lavadora con las siguientes características: 

// • Su atributo es carga, además de los atributos heredados.

// • Por defecto, la carga es de 5 kg. Usa una constante para ello.

// Recuerda que debes llamar al constructor de la clase padre.

// Los métodos que se implementara serán:

// • Método get de carga.

// • precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino
// es así no se incrementara el precio. Llama al método padre y añade el código
// necesario. Recuerda que las condiciones que hemos visto en la clase
// Electrodomestico también deben afectar al precio.
// Crearemos una subclase llamada Televisión con las siguientes características:

// • Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// heredados.

// • Por defecto, la resolución será de 20 pulgadas y el 4k será false.

// Recuerda que debes llamar al constructor de la clase padre.

// Los métodos que se implementara serán:

// • Método get de resolución y atributo de 4K.

// • precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementara el
// precio un 30% y si tiene 4k incorporado, aumentara 50 €. Recuerda que las
// condiciones que hemos visto en la clase Electrodoméstico también deben afectar al
// precio.
// Ahora crea una clase mainApp que realice lo siguiente:

// • Crea un array de Electrodomésticos de 10 posiciones.

// • Asigna a cada posición un objeto de las clases anteriores con los valores que desees.

// • Ahora, recorre este array y ejecuta el método precioFinal().

// • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones
// por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes
// crear objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final
// de 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.