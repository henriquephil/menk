'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Cliente', new Schema({
    ativo: {
        type: Boolean,
        default: true
    },
    nome: String,
    tipo: String,
    fisica: {
        cpf: String,
        dataNascimento: Date,
        sexo: String
    },
    juridica: {
        cnpj: String,
        inscricaoEstadual: String
    },
    endereco: {
        pais: String,
        estado: String,
        cidade: String,
        cep: String,
        bairro: String,
        endereco: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}));