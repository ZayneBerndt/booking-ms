var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var express = require('express');

var app = express()

app.use(express.static('../view'))



app.listen(8080);