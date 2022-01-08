// Modifica la aplicación anterior, para que nos pida el nombre que queremos
// introducir (recuerda usar prompt).

var user = prompt('Para acceder debes adivinar mi nombre');
const name = 'Aída';

if (user === name) {
    console.log('¡🤩Bienvenida al mundo de JS😻!');
} else{
    console.log('¡Te has equivocado de sitio Impostor/a😾!' );
}

// if (String(user) === 'string'){
    
//     if (user === Number(user) || Boolean(user)) {
//     console.log('¡Te has equivocado de sitio 😾!' );
//     } else {
//         console.log('¡🤩Bienvenida, bienvenido y bienvenide al mundo de JS😻!');
//     }
    
// }
