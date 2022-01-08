// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

calculadoraInversa = () => {
    let valorA = parseInt(prompt('Introduce el primer valor que deseas calcular'));
    let valorB = parseInt(prompt('Introduce el segundo valor que deseas calcular'));
    let signo = prompt('Introduce el signo para calcular los valores introducidos');
    let resultado;

    if (typeof valorA && typeof valorB !== 'number' ) {
        console.log('No has introducido un número');
    }

    if (typeof signo !== 'string') {
        console.log('Debes introducir un signo aritmético');
    }

    switch (resultado) {
        case valorA + valorB:
            console.log(valorA + valorB);
            break;
        
        case valorA - valorB:
            
            break;
        
        case valorA * valorB:
            
            break;
        
        case valorA / valorB:
            
            break;
        
        case valorA % valorB:
            
            break;
        
        case valorA ^ valorB:
            
            break;
        default:
            break;
    }

}
calculadoraInversa();