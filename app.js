var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/book');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var router = require('./routes')(app, Book);

var server = app.listen(port, function() {
	console.log('Express server has started on port ' + port);
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');
