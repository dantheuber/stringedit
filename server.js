

// required modules
global.lib = __dirname + '/lib';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80);
