var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('newtonsLawsPartA.hbs');
});


app.get('/start', function (req, res) {
    res.render('newtonsLawsPartA.hbs');
});

app.get('/instructor-login', function (req, res) {
    res.render('ilogin.hbs');
});

app.get('/instructor', function (req, res) {
	res.render('instructor.hbs')
});


app.get('/student-login', function (req, res) {
	res.render('slogin.hbs')
});


app.get('/student', function (req, res) {

});


app.post('/dailychallenge', function (req, res) {

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

app.get('/daily-challenge', function (req, res) {
    res.render('dailychallenge.hbs');
});

app.post('/daily-challenge', function (req, res) {
    var correct_answer = 40 / req.body.time;
    if (+req.body.speed === correct_answer){
        console.log("Correct!");
    }else{
        console.log('Wrong!');
    }
    res.redirect('/daily-challenge');
});


app.listen(3000);
