
function validar_nombre(nombre) {

    let validador = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let resultado = validador.test(nombre);
    let msm = document.getElementById('error');

    if (nombre.length > 4 && nombre.length <= 30 && resultado) {
        let elemento = document.getElementById('campoNombre');
        elemento.className = 'controls'
        msm.innerText = "Aprobado";
        //return true;
    } else {
        let elemento = document.getElementById('campoNombre');
        elemento.className = 'error'
        msm.innerText = "El nombre debe contener entre 4 y 30 caracteres, solo se aceptan letras";
        //return false;
    }


}


function validar_contrasenas(contrasena, confirmarContrasena) {
    // var p1 = document.getElementById("campoPassword").value;
    //var p2 = document.getElementById("campoConfirmarPassword").value;
    var espacios = false;
    var cont = 0;
    
    while (!espacios && (cont < contrasena.length)) {
            if (contrasena.charAt(cont) == " ")
                espacios = true;
                cont++;            
        }

    if (espacios) {
    /*alert ("La contraseña no puede contener espacios en blanco");*/
    return false;
    }
    

    if (contrasena.length == 0 && confirmarContrasena.length == 0) {
    alert("Los campos de la password no pueden quedar vacios");
    return false;
    }
    
    if (contrasena != confirmarContrasena) {
    alert("Las passwords deben de coincidir");

    if (contrasena.length == 0 && confirmarContrasena.length == 0) {
    /*alert("Los campos de la password no pueden quedar vacios");*/
    return false;
    }
    
    if (contrasena != confirmarContrasena) {
    /*alert("Las passwords deben de coincidir");*/

    return false;
    } else {
    /*alert("Todo esta correcto");*/
    return true; 
    }
}
}


module.exports.validar_nombre = validar_nombre
module.exports.validar_contrasenas = validar_contrasenas