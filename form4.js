
function validar_nombre(nombre) {
    let nombreValido = nombre.replace(/ /g, "");
    let validator = /\d|\W/;
    let resultado = validator.test(nombreValido);
    let msm = document.getElementById('error');

    if (nombre.length > 4 && nombre.length <= 30 && !resultado) {
        let elemento = document.getElementById('campoNombre');
        elemento.className = 'controls'
        msm.innerText = "";
    } else {
        let elemento = document.getElementById('campoNombre');
        elemento.className = 'error'
        msm.innerText = "El nombre debe contener entre 4 y 30 caracteres, solo se aceptan letras";
    }


}

function validar_contrasenas(p1,p2) {
    
    var p1 = document.getElementById("campoPassword").value;
    var p2 = document.getElementById("campoConfirmarPassword").value;
    var espacios = false;
    var cont = 0;
  
    while (!espacios && (cont < p1.length)) {
            if (p1.charAt(cont) == " ")
                espacios = true;
                cont++;            
        }
   
    if (espacios) {
    /*alert ("La contraseña no puede contener espacios en blanco");*/
    return false;
    }
    
    if (p1.length == 0 && p2.length == 0) {
    /*alert("Los campos de la password no pueden quedar vacios");*/
    return false;
    }
    
    if (p1 != p2) {
    /*alert("Las passwords deben de coincidir");*/
    return false;
    } else {
    /*alert("Todo esta correcto");*/
    return true; 
    }
}


module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;