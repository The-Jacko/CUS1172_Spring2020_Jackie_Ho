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
            next_question: "3"
        }
    },
    3: {
        id: "3",
        "question": "Java and Javascript are the same.",
        "type": "true false",
        "choices": ["True", "False"],
        meta: {
            next_question: "4"
        }
    },
    4: {
        id: "4",
        "question": "You declare a variable in Java using var.",
        "type": "true false",
        "choices": ["True", "False"],
        meta: {
            next_question: "5"
        }
    },
    5: {
        id: "5",
        "question": "What is the class that allows for user input in Java?",
        "type": "short answer",
        "choices": "",
        meta: {
            next_question: "6"
        }
    },
    6: {
        id: "6",
        "question": "Which function prints to the console in Java?",
        "type": "multiple choice",
        "choices": ["console.log()", "print()", "System.out.print()"],
        meta: {
            next_question: "7"
        }
    },
    7: {
        id: "7",
        "question": "Which function prints to the console in Python?",
        "type": "multiple choice",
        "choices": ["console.log()", "System.out.print()", "print()"],
        meta: {
            next_question: "8"
        }
    },
    8: {
        id: "8",
        "question": "Which of the following adds 1 to the variable in Java?",
        "type": "multiple choice",
        "choices": ["x++", "x add 1", "1 + x", "x =+ 1"],
        meta: {
            next_question: "9"
        }
    },
    9: {
        id: "9",
        "question": "Java is better than Python.",
        "type": "true false",
        "choices": ["True", "False"],
        meta: {
            next_question: "10"
        }
    },
    10: {
        id: "10",
        "question": "You don't have to declare variables in Python",
        "type": "true false",
        "choices": ["True", "False"],
        meta: {
            next_question: "11"
        }
    },
    11: {
        id: "11",
        "question": "Which one of the following outputs the sum?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/division.png", "./assets/pictures/cs/addition.png", "./assets/pictures/cs/multiplication.png", "./assets/pictures/cs/subtraction.png"],
        meta: {
            next_question: "12"
        }
    },
    12: {
        id: "12",
        "question": "Which keyword declares a function in Python?",
        "type": "short answer",
        "choices": "",
        meta: {
            next_question: "13"
        }
    },
    13: {
        id: "13",
        "question": "Fill in the blank.",
        "type": "fill in",
        "choices": [
            ["A(n)", "", "is an instantiation of a", ""]
        ],
        meta: {
            next_question: "14"
        }
    },
    14: {
        id: "14",
        "question": "Which method gets user input in Python? (Use func() syntax)",
        "type": "short answer",
        "choices": "",
        meta: {
            next_question: "15"
        }
    },
    15: {
        id: "15",
        "question": "Which of the following is proper Python syntax?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/python syntax 2.png", "./assets/pictures/cs/python syntax 1.png", "./assets/pictures/cs/python syntax 3.png", "./assets/pictures/cs/python syntax 3.png"],
        meta: {
            next_question: "16"
        }
    },
    16: {
        id: "16",
        "question": "Which of the following is proper Java syntax?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/python syntax 2.png", "./assets/pictures/cs/python syntax 1.png", "./assets/pictures/cs/java syntax.png", "./assets/pictures/cs/python syntax 3.png"],
        meta: {
            next_question: "17"
        }
    },
    17: {
        id: "17",
        "question": "Fill in the blank to make the if statement condition True.",
        "type": "fill in",
        "choices": [
            ["x = 2"],
            ["y = 5"],
            ["if x", "", "2", "", "y", "", "5", ""],
            ["   print('True')"],
            ["", ":"],
            ["   print('False')"]
        ],
        meta: {
            next_question: "18"
        }
    },
    18: {
        id: "18",
        "question": "What does the following Python code compute?",
        "type": "short answer",
        "choices": "./assets/pictures/cs/python snippet.png",
        meta: {
            next_question: "19"
        }
    },
    19: {
        id: "19",
        "question": "What value of x would print 'Same'",
        "type": "short answer",
        "choices": "./assets/pictures/cs/gsl.png",
        meta: {
            next_question: "20"
        }
    },
    20: {
        id: "20",
        "question": "Fill in the blank to make the loop compute 2^5.",
        "type": "fill in",
        "choices": [
            ["answer = 1"],
            ["", "x", "", "", "(5):"],
            ["   answer *=", ""]
        ],
        meta: {
            next_question: "-1"
        }
    }
}

module.exports = quiz_questions;