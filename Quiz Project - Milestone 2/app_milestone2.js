const express = require("express");
const app = express();

// data
const quiz_list = require("./data/quiz-list.js");
const quiz_1_questions = require("./data/quiz-1-questions.js");
const quiz_1_answers = require("./data/quiz-1-answers.js");
const quiz_2_questions = require("./data/quiz-2-questions.js");
const quiz_2_answers = require("./data/quiz-2-answers.js");

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
    res.json(quiz_list);
});

// quiz with id
app.get("/api/quiz/:quizid", function (req, res) {
    quiz_id = req.params.quizid;
    res.json(quiz_list[req.params.quizid]);
});

// get specific question within a quiz
app.get("/api/quiz/:quizid/:questionid", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;
    if (quiz_id == "1") {
        res.json(quiz_1_questions[question_id]);
    } else if (quiz_id == "2") {
        res.json(quiz_2_questions[question_id]);
    }
});

// check answer of quiz question
app.get("/api/check_answer/:quizid/:questionid/:answer", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;
    user_answer = req.params.answer;

    if (quiz_id == "1") {
        quiz_answer = quiz_1_answers[question_id];
    } else if (quiz_id == "2") {
        quiz_answer = quiz_2_answers[question_id];
    } else {
        res.send(`<h1>Quiz with id=${quiz_id} does not exist!</h1>`)
    }

    let response = {
        question_id: question_id,
        user_answer: user_answer,
        correct: null,
        feedback: null
    };

    if (user_answer == quiz_answer.answer) {
        response.correct = true;
        response.feedback = "Correct!"
    } else {
        response.correct = false;
        response.feedback = quiz_answer.reason;
    }
    res.json(response);

});

// listen for server
app.listen(5500, function (req, res) {
    console.log("Server running...")
});