const express = require("express");
var router = express.Router();

// data
const quiz_list = require("../data/quiz-list.js");
const quiz_1_questions = require("../data/quiz-1-questions.js");
const quiz_1_answers = require("../data/quiz-1-answers.js");
const quiz_2_questions = require("../data/quiz-2-questions.js");
const quiz_2_answers = require("../data/quiz-2-answers.js");

// variables
let quiz_id;
let question_id;
let user_answer;

// list of quizzes
router.get("/quiz/list", function (req, res) {
    res.json(quiz_list);
});

// quiz with id
router.get("/quiz/:quizid", function (req, res) {
    quiz_id = req.params.quizid;
    res.json(quiz_list[req.params.quizid]);
});

// get specific question within a quiz
router.get("/quiz/:quizid/:questionid", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;
    if (quiz_id == "1") {
        res.json(quiz_1_questions[question_id]);
    } else if (quiz_id == "2") {
        res.json(quiz_2_questions[question_id]);
    }
});

// check answer of quiz question
router.get("/check_answer/:quizid/:questionid/:answer", function (req, res) {
    quiz_id = req.params.quizid;
    question_id = req.params.questionid;
    user_answer = req.params.answer;


    if (quiz_id == "1") {
        quiz_answer = quiz_1_answers[question_id];
    } else if (quiz_id == "2") {
        quiz_answer = quiz_2_answers[question_id];
    }

    let response = {
        question_id: question_id,
        user_answer: user_answer,
        correct: null,
        feedback: null
    };

    // check if the answer is an array because then we have to check that each answer matches up
    if (typeof (quiz_answer.answer) == "object") {
        let user_answers = user_answer.split("|");
        let incorrect = [];
        for (var i = 0; i < quiz_answer.answer.length; i++) {
            if (quiz_answer.answer[i].toLowerCase().trim() != user_answers[i]) {
                incorrect.push(i);
            }
        }

        if (incorrect.length > 0) {
            let explanations;
            for (i of incorrect) {
                explanations += quiz_answer.reason[i];
            }

            response.correct = false;
            response.feedback = explanations;
        } else {
            response.correct = true;
            response.feedback = encouraging_message();
        }
    } else { // for all other question types
        if (user_answer.toLowerCase().trim() == quiz_answer.answer.toLowerCase().trim()) {
            response.correct = true;
            response.feedback = encouraging_message();
        } else {
            response.correct = false;
            response.feedback = quiz_answer.reason;
        }
    }

    res.json(response);

});

function encouraging_message() {
    let feedback_arr = ["Great Job", "Excellent", "Awesome", "You're A Superstar", "Keep Going, You're Doing Amazing", "Amazing", "Fantastic", "Good Job", "Brilliant", "Genius"]
    let random = random_num(feedback_arr.length);
    return feedback_arr[random];
}

function random_num(length) {
    return Math.floor(Math.random() * length);
}

module.exports = router;