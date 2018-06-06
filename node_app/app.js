var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var calendar = require('calendar-month-array');
var sprintf = require("sprintf-js").sprintf;
var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('../public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}));

app.get('/api/getDates', function(req, res, next){
	res.send(weeks); 
})

app.post('/api/sendMail', function(req, res, next){
	console.log(req.body) 
	// transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '******@gmail.com',
    pass: '*****'
  }
});


var mailOptions = {
  from: '*******@gmail.com',
  to: 'berndt.zayne@gmail.com',
  subject: 'Sending Email using Node.js',
  text: "You have sent a succesful email"
}






app.listen(8080, function() {
    console.log("Running Express")
});