var valor = 0;

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function submitForm() {
    var nombre = document.forms["myForm"]["fname"].value;
    var apellido = document.forms["myForm"]["lastname"].value;
    var nacimiento = document.forms["myForm"]["birthdate"].value;
    var sexo = document.forms["myForm"]["sex"].value;

    if (nombre == "") {
      alert("El campo Nombre no puede estar vacio");
      return false;
    }
    if (!(/^[a-zA-Z]+$/.test(nombre))){
      alert("El campo Nombre no puede contener numeros o caracteres especiales");
      return false;
    }
    if (apellido == "") {
        alert("El campo Apellido no puede estar vacio");
        return false;
      }
    if (!(/^[a-zA-Z]+$/.test(apellido))) {
        alert("El campo Apellido no puede contener numeros o caracteres especiales");
        return false;
    }
    if (nacimiento == "") {
        alert("El campo Fecha de nacimiento no puede estar vacio");
        return false;
    }
    if (sexo == "") {
        alert("El campo Sexo no puede estar vacio");
        return false;
    }

    alert("Se ingresaron los siguientes valores: \n Nombre: " + nombre + "\n Apellido: " + apellido + "\n Fecha de nacimiento: " + String(nacimiento) + "\n Sexo: " + sexo)
  }

function cancelForm(){
    if (confirm("¿Desea salir de la pagina de encuesta?")){
        document.location.href="../index.html";
    }
}

function getImageData(){
    var imagenes = document.getElementsByClassName("imagenes");
    var i;
    for (i =0;i < imagenes.length; i++){
      imagenes[i].addEventListener('click', function(){
        myfunction(this);
      }, false);
    }
}
function myfunction(img){
    if (img.style.opacity == "0.5"){
      img.style.opacity = "1";
      valor = valor - 100;
    }
    else{
      img.style.opacity = "0.5";
      valor = valor + 100;
    }
    document.getElementById("total").innerHTML = "Total: " + valor;
}

