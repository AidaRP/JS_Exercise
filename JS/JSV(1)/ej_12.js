// Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).

appPassword = () => {

    let contra = 'Password';
    let password = prompt('Introduce una contraseña');
    
    if (password === contra) {
        console.log('Enhorabuena');
    }else if (password !== contra){
        console.log('Mal');
        for (let i = 0; i <= 3; i++) {
          prompt('Vuelve a intentarlo te quedan '+  i + ' intentos');
        
        }
    }
}
appPassword();
