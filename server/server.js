var express = require('express');
var app = express();
var scraperController = require('./scraper');

// first sample route
app.get('/', scraperController.getData )
app.get('/stream', scraperController.getData )
app.listen(3000);

//console.log('Magic happens on port 3000');

module.exports = app;


