'use strict';
module.exports = function(app) {
  var clienteService = require('../services/ClienteService');

  app.route('/cliente')
     .get(clienteService.findAll)
     .post(clienteService.insert);

  app.route('/cliente/:id')
     .get(clienteService.findById)
     .put(clienteService.update)
     .delete(clienteService.delete);
};
