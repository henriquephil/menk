'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
  nome: {
    type: String,
    required: 'Nome não informado'
  },
  data_nascimento: {
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
});

module.exports = mongoose.model('Cliente', ClienteSchema);