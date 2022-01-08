// Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// laboral o no. Usa un switch para ello.



let diasLaborales = prompt('Escribe un día de la semana para saber si es laborable');

diasSemana = () => {
   
    switch (diasLaborales.toLowerCase()) {
    case 'lunes':
        console.log('Sí es un día laborable');
        break;
    
    case 'martes':
        console.log('Sí es un día laborable');
        break;
    
    case 'miércoles':
        console.log('Sí es un día laborable');
        break;
    
    case 'jueves':
        console.log('Sí es un día laborable');
        break;
        
    case 'viernes':
        console.log('Sí es un día laborable');
        break;
    
    case 'sábado':
        console.log('Sí es un día laborable');
        break;
    
    case 'domingo':
        console.log('No es un día laborable');
        break;

    default:
        console.log('No has introducido un día de la semana por favor vuelve a intentarlo');
}
}

diasSemana();
