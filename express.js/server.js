var express = require('express');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var OAuthServer = require('express-oauth-server');

// Models
require('./api/models/ClienteModel');
require('./api/models/ProdutoModel');
// Models end

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/menkdb'); 

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.oauth = new OAuthServer({
    model: {}, // See https://github.com/oauthjs/node-oauth2-server for specification
});

// Routes 
var clienteRoutes = require('./api/routes/ClienteRoutes');
clienteRoutes(app);
var produtoRoutes = require('./api/routes/ProdutoRoutes');
produtoRoutes(app);
// Routes end

app.listen(port);

console.log('API server started on: ' + port);
