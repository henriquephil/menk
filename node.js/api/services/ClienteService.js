'use strict';
var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');

exports.findAll = function(req, res) {
    Cliente.find({}, function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.insert = function(req, res) {
  var novoCliente = new Cliente(req.body);
  novoCliente.save(function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.findById = function(req, res) {
    Cliente.findById(req.params.id, function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.update = function(req, res) {
    Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.delete = function(req, res) {
    Cliente.remove({_id: req.params.id}, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Cliente deletado' });
  });
};
