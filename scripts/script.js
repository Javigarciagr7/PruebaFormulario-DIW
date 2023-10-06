// Javier García Rodríguez
// https://github.com/Javigarciagr7/PruebaFormulario-DIW.git

document.getElementById("Registro").addEventListener("click",function(event){

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    if (nombre != "" && apellidos != "" && correo != "" && contrasena != "") {
        alert("Formulario enviado");
    } 
});