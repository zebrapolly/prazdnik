var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/sendmail', bodyParser.urlencoded({
    extended: true
}));

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'zebrapolly@gmail.com',
        pass: '19smirnov88'
    }
}));

require('./routes')(app, transporter);
