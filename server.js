var express = require('express'),
app = express(),
port = process.env.PORT || 3002;

var routes = require('./api/route/vsoftAssistantRoute');
routes(app);

app.listen(port);

console.log('Vsoft Assistant RESTful API server started on: ' + port);
