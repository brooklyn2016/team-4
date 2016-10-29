var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index.hbs');
});

var correct;
var showLink;
var header;

app.get('/start', function (req, res) {
    var link;
    if (header !== undefined){
        if (header.split('')[0] === 'C'){
            link = 'img/right.gif';
        }else{
            link = 'img/wrong.jpg';
        }
    }

    res.render('newtonsLawsPartA.hbs', {'header':header, 'link':link, 'showLink':showLink});
});

app.post('/start', function (req, res) {
    var count = 0;

    for (var i = 1; i <= 5; i++){
        if (req.body['a'+ i].length > 0){
            count++;
        }
    }

    if (count > 0){
        header = "Congrats! You got " + count + " points!";
    }else{
        header = "Oops! Try again!";
    }
    showLink = true;
    res.render('newtonsLawsPartA.hbs', {'header': header, 'showLink': showLink});
    res.redirect('/start');
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
    var feedback;
    var link;
    if (correct){
        feedback = "Correct!";
        link = 'img/right.gif';
    }else if (correct === undefined){
    }else {
        feedback = "Try again!";
        link = 'img/wrong.jpg';
    }
    res.render('dailychallenge.hbs', {'feedback':feedback, 'link':link});
});

app.post('/daily-challenge', function (req, res) {
    var correct_answer = 40 / req.body.time;
    if (+req.body.speed === correct_answer){
        //console.log("Correct!");
        correct = true;
    }else{
        //console.log('Wrong!');
        correct = false;
    }
    res.redirect('/daily-challenge');
});

app.listen(3000);

