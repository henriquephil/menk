'use strict';
module.exports = app => {
    var ProdutoService = require('../services/ProdutoService');

    app.route('/produto')
        .get(ProdutoService.findAll)
        .post(ProdutoService.insert);

    app.route('/produto/:id')
        .get(ProdutoService.findById)
        .put(ProdutoService.update)
        .delete(ProdutoService.delete);
};