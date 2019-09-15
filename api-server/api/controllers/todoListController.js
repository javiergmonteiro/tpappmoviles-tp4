'use strict';

exports.get_products_category = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var category = (req.params.categoryName);
    if (category == "mi-phones"){
        res.json({productos: [{ id: "001", idCategoria: "mi-phones", nombre: "Xiaomi Mi 9SE", descripcion: "Descripción del producto xiaomi mi 9se", srcimagen: "../img/phones/mi9se.jpg" },{ id : "002", idCategoria: "mi-phones", nombre: "Xiaomi Mi 9T", descripcion: "Descripción del producto xiaomi mi 9t", srcimagen: "../img/phones/mi9t.jpg"},{ id: "003", idCategoria: "mi-phones", nombre: "Xiaomi Mi MiA3", descripcion: "Descripción del producto xiaomi mi MiA3", srcimagen: "../img/phones/mia3.png"}]});
    }
    else{
        res.json({response: "the category " + String(category) + " cannot be found"});
    }
    
}

exports.get_test_message = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.json({response: "This is a message from the NodeJS server!"});
}

exports.get_test_form = function(req, res){
    data = req.body;
    res.json({response: "The form has been recieved successfuly!"});
}