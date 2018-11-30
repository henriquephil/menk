'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Cliente', new Schema({
    ativo: {
        type: Boolean,
        default: true
    },
    nome: {
        type: String,
        required: 'Nome não informado'
    },
    dataNascimento: {
        type: Date,
        required: 'Data de nascimento não informado'
    },
    sexo: {
        type: String,
        required: 'Sexo não informado'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}));