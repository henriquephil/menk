'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Produto', new Schema({
    ativo: Boolean,
    descricao: String,
    precoVenda: Number,
    custos: [{
        valor: Number,
        data: Date
    }],
    ncm: String,
    created_at: {
        type: Date,
        default: Date.now
    }
}));