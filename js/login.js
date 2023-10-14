function mostrarOpciones(valueFormulario) {
    
    var seccionRegistro = document.getElementById("seccionRegistro");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var numero = document.getElementById("numero");
    var contrasena = document.getElementById("contrasena");
    var correo = document.getElementById("correo");

    if (valueFormulario === "logiin") {

        seccionRegistro.classList.add("seccionRegistro");
        
        
    } else if (valueFormulario === "registro") {

        seccionRegistro.classList.remove("seccionRegistro");
    }
}