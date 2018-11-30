'use strict';
var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');

exports.insert = (req, res) => {
    (new Cliente(req.body)).save((err, produto) => {
        if (err)
            res.status(400).send(err);
        res.json(produto);
    });
};

exports.findAll = (req, res) => {
    Produto.find({}, (err, produto) => {
        if (err)
            res.status(400).send(err);
        res.json(produto);
    });
};

exports.findById = (req, res) => {
    Produto.findById(req.params.id, (err, produto) => {
        if (err)
            res.status(400).send(err);
        res.json(produto);
    });
};

exports.update = (req, res) => {
    Produto.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, (err, produto) => {
        if (err)
            res.status(400).send(err);
        res.json(produto);
    });
};

exports.delete = (req, res) => {
    Produto.findOneAndUpdate({
        _id: req.params.id
    }, {
        ativo: false
    }, {
        new: true
    }, (err, produto) => {
        if (err)
            res.status(400).send(err);
        res.json({
            message: 'Produto inativado'
        });
    });
};
