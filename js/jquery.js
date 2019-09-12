function submitForm(){
    var nombre = $("#fname").val();
    var apellido = $("#lname").val();
    var f_nacimiento = $("#bdate").val();
    var genero = $("#gen").val();
    var valoracion = $("#valoracion").val();

    if (nombre == "") {
        $("<div title='Alerta'>El campo Nombre no puede estar vacio</div>").dialog({
          height: 200,
          width: 200,
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

      $("<div title='Exito!'>Gracias por realizar la encuesta</div>").dialog();

}
/*
$(function(){
  $( "#dialog1").dialog({
    autoOpen: false,
  });
  $( "#submit").click(function(){
    $("#dialog1").dialog("open");
  });
});
*/

