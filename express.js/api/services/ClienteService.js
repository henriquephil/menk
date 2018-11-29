'use strict';
var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');

exports.findAll = (req, res) => {
    Cliente.find({}, (err, cliente) => {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.insert = (req, res) => {
  var novoCliente = new Cliente(req.body);
  novoCliente.save((err, cliente) => {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.findById = (req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.update = (req, res) => {
    Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, cliente) => {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.delete = (req, res) => {
    Cliente.findOneAndUpdate({_id: req.params.id}, {ativo: false}, {new: true}, (err, cliente) => {
    if (err)
      res.send(err);
    res.json({ message: 'Cliente inativado' });
  });
};
