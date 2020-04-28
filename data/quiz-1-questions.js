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
            next_question: "3"
        }
    },
    3: {
        id: "3",
        question: "CSS stands for Cascading Style Sheets.",
        type: "true false",
        choices: ["True", "False"],
        meta: {
            next_question: "4"
        }
    },
    4: {
        id: "4",
        question: "CSS is used to create elements.",
        type: "true false",
        choices: ["True", "False"],
        meta: {
            next_question: "5"
        }
    },
    5: {
        id: "5",
        question: "What is the tag of the following HTML element: <h1 id='test' class='tag'>Hello World</h1>",
        type: "short answer",
        choices: "",
        meta: {
            next_question: "6"
        }
    },
    6: {
        id: "6",
        question: "What is the syntax for a function declaration?",
        type: "multiple choice",
        choices: ["const x = function(){}", "const y = () => {}", "function someName() {}"],
        meta: {
            next_question: "7"
        }
    },
    7: {
        id: "7",
        question: "What is the syntax for a function expression?",
        type: "multiple choice",
        choices: ["const x = function(){}", "const y = () => {}", "function someName() {}"],
        meta: {
            next_question: "8"
        }
    },
    8: {
        id: "8",
        question: "What is the syntax for an arrow function?",
        type: "multiple choice",
        choices: ["const x = function(){}", "const y = () => {}", "function someName() {}"],
        meta: {
            next_question: "9"
        }
    },
    9: {
        id: "9",
        question: "You can style elements in an HTML file.",
        type: "true false",
        choices: ["True", "False"],
        meta: {
            next_question: "10"
        }
    },
    10: {
        id: "10",
        question: "How do you apply a CSS file to an HTML file?",
        type: "multiple choice",
        choices: ["<link> tag", "<script> tag", "<a> tag", "<head> tag"],
        meta: {
            next_question: "11"
        }
    },
    11: {
        id: "11",
        question: "Which one of the following produces the largest text?",
        type: "pictures",
        choices: ["./assets/pictures/webDev/h2.png", "./assets/pictures/webDev/h1.png", "./assets/pictures/webDev/h4.png", "./assets/pictures/webDev/h5.png"],
        meta: {
            next_question: "12"
        }
    },
    12: {
        id: "12",
        question: "What is the delimiter between pairs in CSS?",
        type: "short answer",
        choices: "",
        meta: {
            next_question: "13"
        }
    },
    13: {
        id: "13",
        question: "Fill in the blank.",
        type: "fill in",
        choices: [
            ["CSS styles comprise of one or more", "", ":", "", "pairs."]
        ],
        meta: {
            next_question: "14"
        }
    },
    14: {
        id: "14",
        question: "What tag do you use to create CSS styles within your HTML file? (use <> notation)",
        type: "short answer",
        choices: "",
        meta: {
            next_question: "15"
        }
    },
    15: {
        id: "15",
        question: "Which one of the following creates a numbered list?",
        type: "pictures",
        choices: ["./assets/pictures/webDev/ul.png", "./assets/pictures/webDev/list.png", "./assets/pictures/webDev/tr.png", "./assets/pictures/webDev/ol.png"],
        meta: {
            next_question: "16"
        }
    },
    16: {
        id: "16",
        question: "Which one of the following creates a bulleted list?",
        type: "pictures",
        choices: ["./assets/pictures/webDev/tr.png", "./assets/pictures/webDev/list.png", "./assets/pictures/webDev/ul.png", "./assets/pictures/webDev/ol.png"],
        meta: {
            next_question: "17"
        }
    },
    17: {
        id: "17",
        question: "Fill in the blank to make this an asyncronous function.",
        type: "fill in",
        choices: [
            ["", "function get_data() {"],
            ["const response = ", "", "fetch(url)"],
            ["const data = ", "", "response.json()"],
            ["return data"],
            ["}"]
        ],
        meta: {
            next_question: "18"
        }
    },
    18: {
        id: "18",
        question: "What does the following javascript code compute?",
        type: "short answer",
        choices: "./assets/pictures/webDev/a*a+b.png",
        meta: {
            next_question: "19"
        }
    },
    19: {
        id: "19",
        question: "What should __someKeyword__ be replaced by to make the following code run only after the page is fully loaded?",
        type: "short answer",
        choices: "./assets/pictures/webDev/domcontentloaded.png",
        meta: {
            next_question: "20"
        }
    },
    20: {
        id: "20",
        question: "Fill in the blank to make the following input a textbox.",
        type: "fill in",
        choices: [
            ["<form>"],
            ["<input type=", "", "></input>"],
            ["</form>"]
        ],
        meta: {
            next_question: "-1"
        }
    }
}

module.exports = quiz_questions;