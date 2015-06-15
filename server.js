

// required modules
global.lib = __dirname + '/lib';

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'))
   .use(bodyParser.urlencoded({ extended: false }))
   .use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;

app.get('/',function(req,res) {
  res.send();
});


app.listen(3030);
