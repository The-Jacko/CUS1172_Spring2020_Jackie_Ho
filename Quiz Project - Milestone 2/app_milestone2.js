const express = require("express");
const app = express();

// variables
let quiz_id;
let question_id;
let user_answer;

// homepage
app.get("/", function (req, res) {
    res.send("Homepage");
});

// list of quizzes
app.get("/api/quiz/list", function (req, res) {

});

// quiz with id
app.get("/api/quiz/:quizid", function (req, res) {
    quiz_id = req.params.quizid;

});

// get specific question within a quiz
app.get("/api/quiz/:quizid/:questionid", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;

});

// check answer of quiz question
app.get("/api/check_answer/:quizid/:questionid/:answer", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;
    user_answer = req.params.answer;
});

// listen for server
app.listen(5500, function (req, res) {
    console.log("Server running...")
});