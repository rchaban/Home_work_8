var http = require('http');
var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

//Load Routes**************************************
require('./routes/index.js')(app);

app.listen(port, function(){
    console.log('Server start success', port);
});

