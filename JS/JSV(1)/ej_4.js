// Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa la
// constante PI.

const PI = Math.PI;
var radio = parseFloat(prompt('Ingresa el radio del circulo: '));
var area = PI * Math.pow(radio,2);
alert('El valor del area es: '+ area.toFixed(2));

