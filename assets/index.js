let correct = 0;
let answered = [];
let name, time;


document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#user_form").onsubmit = start_quiz;

    document.querySelector("#quiz_choice").addEventListener("change", () => {
        document.querySelector("#quiz_type_submit").value = "Start";
    });
});

function start_quiz() {
    // resets the answered questions everytime a new quiz is generated
    answered = [];
    correct = 0;

    timer();
    remove_end_quiz_text();
    display_name();
    display_quiz();
    return false;
}

function timer() {
    clearInterval(time);
    let seconds = 0;

    time = setInterval(() => {
        seconds++;
        hours = Math.floor(seconds / 3600);
        minutes = Math.floor(seconds / 60);
        document.querySelector("#timer").textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${(seconds%60).toString().padStart(2, "0")}`;
    }, 1000)
}

function remove_end_quiz_text() {
    try {
        document.querySelector("#end").remove();
    } catch {

    }
}


let get_api_data = async (url) => {
    let response = await fetch(url);
    quiz_data = await response.json();
    generate_question(quiz_data);
}


function display_name() {
    name = document.querySelector("#name_input").value;

    document.querySelector("#name").textContent = name;
    document.querySelector("#score").textContent = "Score: 0/0";
    document.querySelector("#quiz_type_submit").value = "Restart"
}


function display_quiz() {
    let quiz_choice = document.querySelector("#quiz_choice").value;
    let question = document.querySelector("#quiz_type");
    let url = "https://my-json-server.typicode.com/jho2016/Quiz_Question_Database/";

    if (quiz_choice == "1") {
        question.textContent = "Quiz 1";
        url = url + "quiz1"
    } else {
        question.textContent = "Quiz 2";
        url = url + "quiz2"
    }

    get_api_data(url);
}


function generate_question(data) {
    // re-enables submit button for quiz type once the new quiz is generated
    // fixes the problem of getting an answer right and then pressing submit, if you click it before the 3 seconds is up,
    // a new question will get generated even though you already generated a new question
    document.querySelector("#quiz_type_submit").disabled = false;
    remove_current_quiz();

    if (answered.length < data.length) {
        let random = random_num(data.length);
        while (answered.includes(random)) {
            random = random_num(data.length);
        }
        let question = data[random];
        answered.push(random);

        display_question(question);
    } else {
        end_of_quiz();
    }
}


function random_num(length) {
    return Math.floor(Math.random() * length);
}


function remove_current_quiz() {
    try {
        document.querySelector(".quiz").remove();
    } catch (err) {

    }
}


function display_question(data) {
    create_element("body", "div", "class", "quiz container", "");
    create_element(".quiz", "h3", "id", "question", data.question);

    create_element(".quiz", "div", "id", "choices", "");
    let type = data.type;
    if (type == "multiple choice") {
        create_choices(data.choices);
    } else if (type == "true false") {
        create_choices(data.choices);
    } else if (type == "pictures") {
        create_pictures(data.choices);
    } else if (type == "short answer") {
        create_short_answer();
    } else if (type == "fill in") {
        create_fill_in(data.choices);
    }

    check_answer(data);
}


function check_answer(data) {
    if (data.type == "short answer") {
        let short_answer_form = document.querySelector("#short_answer");
        short_answer_form.onsubmit = function () {
            document.querySelector(".text_answer_submit").disabled = true;
            let user_answer = document.querySelector(".text_answer").value;
            const answer = data.answer;

            if (user_answer.trim() == answer) {
                correct_answer();
            } else {
                wrong_answer(data.reason);
            }
            return false;
        };
    } else if (data.type == "fill in") {
        let fill_in_form = document.querySelector("#fill_in");
        fill_in_form.onsubmit = function () {
            document.querySelector(".fill_in_submit").disabled = true;
            let answers = document.querySelectorAll(".fill_in_textbox");

            let incorrect = []
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].value.toLowerCase().trim() != data.answer[i].toLowerCase().trim()) {
                    incorrect.push(i);
                }
            }

            if (incorrect.length > 0) {
                let reason = ""
                for (i of incorrect) {
                    reason += `${data.reason[i]}. `;
                }
                wrong_answer(reason);
            } else {
                correct_answer();
            }

            return false;
        }
    } else {
        let buttons = document.querySelectorAll(".choice")
        for (button of buttons) {
            button.addEventListener("click", function () {
                disable_buttons(buttons)
                this.classList.add("selected-choice")

                if (this.value == data.answer) {
                    correct_answer();
                } else {
                    wrong_answer(data.reason);
                }
            });
        }
    }
}


function disable_buttons(buttons) {
    for (button of buttons) {
        button.classList.add("disabled-button");
    }
    document.querySelector("#quiz_type_submit").disabled = true;
}


function create_element(parent, element, attribute, attribute_value, content) {
    let node = document.createElement(element);
    let text = document.createTextNode(content);
    node.appendChild(text);
    node.setAttribute(attribute, attribute_value);

    const parent_element = document.querySelector(parent);
    parent_element.appendChild(node);
    return node;
}


function create_choices(choices) {
    for (choice of choices) {
        let button = create_element("#choices", "input", "type", "button", "");
        button.setAttribute("value", choice);
        button.setAttribute("class", "choice btn btn-info");
    }
}


function create_pictures(choices) {
    for (choice of choices) {
        let image = create_element("#choices", "input", "type", "image", "");
        image.setAttribute("src", choice);
        image.setAttribute("value", choice);
        image.setAttribute("class", "choice");
    }
}


function create_short_answer() {
    create_element("#choices", "form", "id", "short_answer", "");
    let textbox = create_element("#short_answer", "input", "type", "text", "");
    textbox.setAttribute("class", "text_answer form-control");
    textbox.setAttribute("placeholder", "Enter Answer Here");
    create_element("#short_answer", "button", "class", "text_answer_submit btn btn-info", "Submit");
}


function create_fill_in(choices) {
    create_element("#choices", "form", "id", "fill_in", "");
    for (choice of choices) {
        create_element("#fill_in", "span", "class", "fill_in_question", choice)
        create_element("#fill_in", "input", "class", "fill_in_textbox", "");
    }
    create_element("#fill_in", "button", "class", "fill_in_submit btn btn-info", "Submit");
}


function correct_answer() {
    let feedback_arr = ["Great Job", "Excellent", "Awesome", "You're A Superstar", "Keep Going, You're Doing Amazing", "Amazing", "Fantastic", "Good Job", "Brilliant", "Genius"]
    let random = random_num(feedback_arr.length);
    let feedback = `${feedback_arr[random]} ${name}!`;
    create_element(".quiz", "h1", "id", "correct_feedback", feedback);
    update_score(true);
    setTimeout(() => {
        generate_question(quiz_data);
    }, 1000);
}


function wrong_answer(reason) {
    create_element(".quiz", "form", "id", "incorrect_form", "");
    create_element("#incorrect_form", "h1", "id", "incorrect_feedback", reason);
    create_element("#incorrect_form", "button", "class", "incorrect_feedback_button btn btn-info", "I Understand");
    update_score(false);
    document.querySelector("#incorrect_form").onsubmit = () => {
        generate_question(quiz_data);
        return false;
    }
}


function update_score(bool) {
    let score = document.querySelector("#score");
    let grade = document.querySelector("#grade");

    if (bool == true) {
        correct++;
    }
    score.textContent = `Score: ${correct}/${answered.length}`;
    grade.textContent = `${((correct/answered.length)*100).toFixed(2)}%`;

}


function end_of_quiz() {
    create_element("body", "div", "id", "end", "");

    if (correct / answered.length >= .80) {
        create_element("#end", "h2", "id", "passed_quiz", `Congraduations ${name}, you passed the quiz!`);
    } else {
        create_element("#end", "h2", "id", "failed_quiz", `Sorry ${name}, you failed the quiz.`);
        create_element("#end", "button", "class", "retry btn btn-info", "Retry");
        create_element("#end", "button", "class", "exit btn btn-info", "Exit");
        document.querySelector(".retry").addEventListener("click", start_quiz);
        document.querySelector(".exit").addEventListener("click", function () {
            location.reload();
        })
    }
}