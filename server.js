var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



var app = express();

mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
	    if (err) console.log('Error Connected to Database' + err);
	    else console.log('Connected to Database' + err);
});

app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', function(req, res){
	res.send('Hola');
});

app.listen(3000);
console.log('express server listening on port' + app.get('port'));