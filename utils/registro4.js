let items = [];

function recibirEdad() {
    let edad;
    // edad = prompt("Ingrese su edad");
    // console.log(edad);
    return edad;
}


function ordenarEdad(edad) {
    
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncontrasena': document.getElementById('campoconfirmarContrasena').value,
        'telefono': document.getElementById('campoTelefono').value,
        'edad': edad
    }

    if (items.length < 20) {
        items.push(objeto);
    }

    items.sort((a, b) => b.edad - a.edad);
    //console.log(items);
    return items;
}

function promedioEdad(args) {
    let contador = 0;
    for (var keys in args) {
        contador += args[keys]['edad']
    }

    let promedio = contador / args.length;

    return promedio;
}

module.exports.recibirEdad = recibirEdad;
module.exports.ordenarEdad = ordenarEdad;
module.exports.promedioEdad = promedioEdad;