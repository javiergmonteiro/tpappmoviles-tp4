'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes

    app.route('/get_products/:categoryName')
        .get(todoList.get_products_category);
    
    app.route('/test_message')
        .get(todoList.get_test_message);

    app.route('/test_form')
        .get(todoList.get_test_form)
        .post(todoList.post_test_form);
};