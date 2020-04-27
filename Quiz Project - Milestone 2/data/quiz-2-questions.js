var quiz_questions = {
    1: {
        id: "1",
        "question": "Which language utilizes object oriented programming the most.",
        "type": "multiple choice",
        "choices": ["Javascript", "Java", "Python", "HTML"],
        meta: {
            next_question: "2"
        }
    },
    2: {
        id: "2",
        "question": "Which character denotes the end of a line in Java?",
        "type": "multiple choice",
        "choices": [">", "}", "]", ";"],
        meta: {
            next_question: "-1"
        }
    }
}

module.exports = quiz_questions;