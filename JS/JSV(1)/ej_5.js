// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.
let readNumber = parseInt(prompt('Dime un número que te digo si es divisible por 2'));

divisibles = () =>{
    if (typeof readNumber === 'number') {
        if((readNumber % 2) === 0) {
            return console.log('Es divisible entre 2');
        }else{
            console.log('El número que estás introduciendo no es divisible entre 2 o no estás introduciendo un número');
        }
    }
}
divisibles();