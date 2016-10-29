var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index.hbs');
});


app.get('/start', function (req, res) {

});

app.get('/instructor', function (req, res) {

});

app.post('/instructor', function (req, res) {

});

app.get('/student', function (req, res) {

});

app.post('/student', function (req, res) {

});

app.get('/newtonslawsparta', function (req, res) {

});

app.get('/newtonslawspartb', function (req, res) {

});

app.get('/kinesiology', function (req, res) {

});

app.get('/soundwaves', function (req, res) {

});

app.get('/materialsscience', function (req, res) {

});

app.get('/bodysystems', function (req, res) {

});



app.listen(3000);