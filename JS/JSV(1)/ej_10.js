// Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.


 appVentas = () => {
      
     let numero = parseInt(prompt('Introduce el número de productos'))
     let numeroProductos = [numero];
     let precios =[];


     for (let i = 0; i < numeroProductos.length; i++) {
         
        precios[i] = prompt('Pon un precio al producto'); 
        
     }
      
}

appVentas();

// for de 0 al numero que me pongan, meto un prompt cojo el dato que me hayan metido en el prompt y lo sumo 

