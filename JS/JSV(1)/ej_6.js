// Lee un número por teclado que pida el precio de un producto (puede tener
//     decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
//     del 21%

let calculaIva = parseInt(prompt('Introduce un número del cual quieras saber su IVA'));
const iva = (21) / 100;
const calculo = () =>{
    if (typeof calculaIva === 'number') {
    console.log(calculaIva * iva.toFixed(2) + calculaIva);
    }
    
}
calculo('');
