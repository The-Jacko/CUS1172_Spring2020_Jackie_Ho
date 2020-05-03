var quiz_questions = {
    1: {
        id: "1",
        "question": "Which language utilizes object oriented programming the most.",
        "type": "multiple choice",
        "choices": ["Javascript", "Java", "Python", "HTML"],
        "answer": "Java",
        "reason": "Java is primarily an object oriented programming language.",
        meta: {
            next_question: "2"
        }
    },
    2: {
        id: "2",
        "question": "Which character denotes the end of a line in Java?",
        "type": "multiple choice",
        "choices": [">", "}", "]", ";"],
        "answer": ";",
        "reason": "You must end every line of Java code with ';'",
        meta: {
            next_question: "3"
        }
    },
    3: {
        id: "3",
        "question": "Java and Javascript are the same.",
        "type": "true false",
        "choices": ["True", "False"],
        "answer": "False",
        "reason": "Although there are similarities, they are both different. Java is more for client side applications whereas Javascript is primarily for web development.",
        meta: {
            next_question: "4"
        }
    },
    4: {
        id: "4",
        "question": "You declare a variable in Java using var.",
        "type": "true false",
        "choices": ["True", "False"],
        "answer": "False",
        "reason": "To declare variables in Java, you must declare the variable's type. Which includes, int, double, String, etc.",
        meta: {
            next_question: "5"
        }
    },
    5: {
        id: "5",
        "question": "What is the class that allows for user input in Java?",
        "type": "short answer",
        "choices": "",
        "answer": "Scanner",
        "reason": "The Scanner package allows for the retrieval of user input.",
        meta: {
            next_question: "6"
        }
    },
    6: {
        id: "6",
        "question": "Which function prints to the console in Java?",
        "type": "multiple choice",
        "choices": ["console.log()", "print()", "System.out.print()"],
        "answer": "System.out.print()",
        "reason": "System.out.print() is used to print to the console in Java.",
        meta: {
            next_question: "7"
        }
    },
    7: {
        id: "7",
        "question": "Which function prints to the console in Python?",
        "type": "multiple choice",
        "choices": ["console.log()", "System.out.print()", "print()"],
        "answer": "print()",
        "reason": "print() in Python prints to the console.",
        meta: {
            next_question: "8"
        }
    },
    8: {
        id: "8",
        "question": "Which of the following adds 1 to the variable in Java?",
        "type": "multiple choice",
        "choices": ["x++", "x add 1", "1 + x", "x =+ 1"],
        "answer": "x++",
        "reason": "x++ is shorter syntax for x+1 that is frequently used when you need to increment a variable by 1.",
        meta: {
            next_question: "9"
        }
    },
    9: {
        id: "9",
        "question": "Java is better than Python.",
        "type": "true false",
        "choices": ["True", "False"],
        "answer": "False",
        "reason": "Java and Python are neither better nor worse than each other. Both languages have their own unique strengths and weaknesses.",
        meta: {
            next_question: "10"
        }
    },
    10: {
        id: "10",
        "question": "You don't have to declare variables in Python",
        "type": "true false",
        "choices": ["True", "False"],
        "answer": "True",
        "reason": "In Python, it is unnecessary to delcare a variable. There is actually no way to declare a variable in Python.",
        meta: {
            next_question: "11"
        }
    },
    11: {
        id: "11",
        "question": "Which one of the following outputs the sum?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/division.png", "./assets/pictures/cs/addition.png", "./assets/pictures/cs/multiplication.png", "./assets/pictures/cs/subtraction.png"],
        "answer": "addition.png",
        "reason": "To get the sum, you must keep adding the values of the array into the variable total.",
        meta: {
            next_question: "12"
        }
    },
    12: {
        id: "12",
        "question": "Which keyword declares a function in Python?",
        "type": "short answer",
        "choices": "",
        "answer": "def",
        "reason": "To declare a function in Python, you must use def myFunc():",
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
        "answer": ["object", "class"],
        "reason": ["You create an object of a class", "A class is a blueprint for an object"],
        meta: {
            next_question: "14"
        }
    },
    14: {
        id: "14",
        "question": "Which method gets user input in Python? (Use func() syntax)",
        "type": "short answer",
        "choices": "",
        "answer": "input()",
        "reason": "In Python, the function method input() retrieves user input.",
        meta: {
            next_question: "15"
        }
    },
    15: {
        id: "15",
        "question": "Which of the following is proper Python syntax?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/python syntax 2.png", "./assets/pictures/cs/python syntax 1.png", "./assets/pictures/cs/python syntax 3.png", "./assets/pictures/cs/python syntax 3.png"],
        "answer": "python syntax 1.png",
        "reason": "In Python, if statements use a capitalized 't' in True and Python also uses ':' instead of '{}'.",
        meta: {
            next_question: "16"
        }
    },
    16: {
        id: "16",
        "question": "Which of the following is proper Java syntax?",
        "type": "pictures",
        "choices": ["./assets/pictures/cs/python syntax 2.png", "./assets/pictures/cs/python syntax 1.png", "./assets/pictures/cs/java syntax.png", "./assets/pictures/cs/python syntax 3.png"],
        "answer": "java syntax.png",
        "reason": "Unlike Python, Java uses if(condition) {body}. So, you need to remember the parenthesis around the condition and the curly braces around the body of the if statement.",
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
        "answer": ["==", "and", "==", ":", "else"],
        "reason": ["To make the first condition True, x=2 so if x==2, then it would be true", "To concatenate two conditions you need to use the key word and to make sure both conditions are True", "To make the second condition True, since y=5, then you need to test if y==5", "You need a colon ':' at the end of an if statment", "To handle any False conditions, you need to use an else statement"],
        meta: {
            next_question: "18"
        }
    },
    18: {
        id: "18",
        "question": "What does the following Python code compute?",
        "type": "short answer",
        "choices": "./assets/pictures/cs/python snippet.png",
        "answer": "0",
        "reason": "The for loop runs 10 times and continously subtracts 10 each from from 100, which makes total = 0.",
        meta: {
            next_question: "19"
        }
    },
    19: {
        id: "19",
        "question": "What value of x would print 'Same'",
        "type": "short answer",
        "choices": "./assets/pictures/cs/gsl.png",
        "answer": "5",
        "reason": "In order for the if statement to print out 'same' you would need x to equal 5, so 5 is the answer.",
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
        "answer": ["for", "in", "range", "2"],
        "reason": ["You need to declare a for loop using the keyword for", "In a for loop, you need to use the keyword in to declare which value is the iterator", "Range, declares an interator of length 5", "Multiplying the variable answer by the number 2 is the same as doing 2*2*2*2*2"],
        meta: {
            next_question: "-1"
        }
    }
}

module.exports = quiz_questions;