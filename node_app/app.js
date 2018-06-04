var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var calendar = require('calendar-month-array');
var sprintf = require("sprintf-js").sprintf;
var express = require('express');
var app = express();

var weeks = calendar(new Date(2018, 9), { 
	
})


app.get('/api/getDates', function(req, res, next){
	res.send(weeks); 
})

app.use(express.static('../public'))

app.listen(8080, function() {
    console.log("Running Express")
});