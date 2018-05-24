var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var express = require('express');

var app = express();

app.use(express.static('../public'))




app.listen(8080, function() {
	console.log("Running Express")
});