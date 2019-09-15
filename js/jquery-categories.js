//var json_mi_phones = '{"productos": [{ "id": "001", "idCategoria": "mi-phones", "nombre": "Xiaomi Mi 9SE", "descripcion": "Descripción del producto xiaomi mi 9se", "srcimagen": "../img/phones/mi9se.jpg" },{ "id" : "002", "idCategoria": "mi-phones", "nombre": "Xiaomi Mi 9T", "descripcion": "Descripción del producto xiaomi mi 9t", "srcimagen": "../img/phones/mi9t.jpg"},{ "id": "003", "idCategoria": "mi-phones", "nombre": "Xiaomi Mi MiA3", "descripcion": "Descripción del producto xiaomi mi MiA3", "srcimagen": "../img/phones/mia3.png"}]}';

async function HTTPGetAsync(){
    let result;
    try {
        result = await $.ajax({
            url: 'http://localhost:3000/test_message',
            type: 'GET',
            timeout: 5000,
            
            error: function(XMLHttpRequest, textStatus, errorThrown){
                if (textStatus=="timeout"){
                    alert("ha ocurrido un timeout");
                }
                else{
                    alert("ha ocurrido un error con la petición al servidor");
                }
            }
    });
    return alert(result.response);

    } catch (error){
        console.error(error);
    }
};

async function HTTPGetAsyncForm(){
    let result;
    const datos = {
        nombre: $("#fname"),
        apellido: $("#lname"),
        dni: $("#dni")
    }
    const formulario = Object.create(datos);
    
    try {
        result = await $.ajax({
            url: 'http://localhost:3000/test_form',
            type: 'GET',
            timeout: 5000,
            data: formulario,
            
            error: function(XMLHttpRequest, textStatus, errorThrown){
                if (textStatus=="timeout"){
                    alert("ha ocurrido un timeout");
                }
                else{
                    alert("ha ocurrido un error con la petición al servidor");
                }
            }
    });
    return alert(result.response);

    } catch (error){
        console.error(error);
    };
};



$(document).ready(function(){
    var product = $("#products p:first").text();
    //console.log(mi_phones.productos.length);

    if (product == "Mi Phones"){
        $.getJSON( "http://localhost:3000/get_products/mi-phones", function( data ){
        var i
        for (i = 0; i < data.productos.length; i++){
            articulo = "<div id = " + data.productos[i].id + "> <img src=" +  data.productos[i].srcimagen + " /><p>"+data.productos[i].nombre+"</p><div>"
            $("#products").append($(articulo));
        } 
        });
        
    }
});