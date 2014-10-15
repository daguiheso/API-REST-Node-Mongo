var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();


app.use(bodyParser());
app.use(methodOverride());
app.use(app.router);