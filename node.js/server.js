var express = require('express');
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var Cliente = require('./api/models/ClienteModel');
var bodyParser = require('body-parser');
var OAuthServer = require('express-oauth-server');


var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/obsidiandb'); 

app.oauth = new OAuthServer({
    model: {}, // See https://github.com/oauthjs/node-oauth2-server for specification
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var clienteRoutes = require('./api/routes/ClienteRoutes');
clienteRoutes(app);

app.listen(port);

console.log('API server started on: ' + port);
