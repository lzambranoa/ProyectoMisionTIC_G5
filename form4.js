
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

function validar_contrasenas() {

}


module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;