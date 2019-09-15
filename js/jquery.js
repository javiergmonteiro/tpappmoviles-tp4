function submitForm(){
    var nombre = $("#fname").val();
    var apellido = $("#lname").val();
    var f_nacimiento = $("#bdate").val();
    var genero = $("#gen").val();
    var valoracion = $("#valoracion").val();
    var form = $("#myForm")

    if (nombre == "") {
        $("<div title='Alerta'>El campo Nombre no puede estar vacio</div>").dialog({
          height: 160,
          width: 400,
        });
        return false;
      }
      if (!(/^[a-zA-Z]+$/.test(nombre))){
        $("<div title='Alerta'>El campo Nombre no puede contener numeros o caracteres especiales</div>").dialog();
        return false;
      }
      if (apellido == "") {
          $("<div title='Alerta'>El campo Apellido no puede estar vacio</div>").dialog();
          return false;
        }
      if (!(/^[a-zA-Z]+$/.test(apellido))) {
          $("<div title='Alerta'>El campo Apellido no puede contener numeros o caracteres especiales</div>").dialog();
          return false;
      }
      if (f_nacimiento == "") {
          $("<div title='Alerta'>El campo Fecha de nacimiento no puede estar vacio</div>").dialog();
          return false;
      }
      if (genero == "") {
          $("<div title='Alerta'>'El campo Genero no puede estar vacio'</div>").dialog();
          return false;
      }

      $("<div id=exito title='Exito!'><b>Gracias por realizar la encuesta</b></div>").dialog({
        width: 400,
        height: 160,
        modal: true,
        dialogClass: 'my-dialog',
        open: function(){
          //form.submit();
          var foo = $(this);
          setTimeout(function(){
            foo.dialog('close');
          }, 5000);
        }
      });
}

function cancelForm(){
  if (confirm("¿Desea salir de la pagina de encuesta?")){
      document.location.href="../index.html";
  }
}

function animate_message(){
  $("#mano>img").animate({
    height: '30px',
    width: '30px'
  });
  $("#mano>img").animate({
    height: '45px',
    width: '45px'
  });
}
$(document).ready(function(){
  var interval = self.setInterval(function(){animate_message()},1000);
});



