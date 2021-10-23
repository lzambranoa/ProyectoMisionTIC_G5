let arreglo = []

function ordenarEdad(edad) {
    
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncontrasena': document.getElementById('campoconfirmarContrasena').value,
        'telefono': document.getElementById('campoTelefono').value,
        'edad': edad
    }

    if (arreglo.length < 20) {
        arreglo.push(objeto);
    }

    arreglo.sort((a, b) => b.edad - a.edad);
    return arreglo;
}

function verificarInicioSesion4(correo, contraseña, arreglo){
    for(var i = 0; i < arreglo.length; i++){
        if(arreglo[i].correo === correo && arreglo[i].contraseña === contraseña){
            //let respuesta = prompt('¿En qué año se dio la batalla de Boyaca?')
            return respuesta
        }
    }
    return false
}


function verificarCaptcha4(respuesta){
    if(respuesta.toLowerCase() === '1819'){
        return true;
    } else {
        return false;
    }
}



module.exports.verificarInicioSesion4 = verificarInicioSesion4;
module.exports.verificarCaptcha4 = verificarCaptcha4;
module.exports.ordenarEdad = ordenarEdad;