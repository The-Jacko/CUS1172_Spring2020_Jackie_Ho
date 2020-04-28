var quiz_questions = {
    1: {
        id: "1",
        question: "What does HTML stand for?",
        type: "multiple choice",
        choices: ["Website", "Hypertext Markup Language", "Cascading Style Sheets", "How To Make Layouts"],
        meta: {
            next_question: "2"
        }
    },
    2: {
        id: "2",
        question: "What is HTML primarily used for?",
        type: "multiple choice",
        choices: ["Create websites", "Style elements", "Manipulate elements", "Update Elements"],
        meta: {
            next_question: "-1"
        }
    }
}

module.exports = quiz_questions;