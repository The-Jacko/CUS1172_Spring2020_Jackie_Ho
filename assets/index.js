let correct = 0;
let answered = [];
let quiz_data;
let name;


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#user_form").onsubmit = () => {
        // resets the answered questions everytime a new quiz is generated
        answered = []
        correct = 0;

        display_name();
        display_quiz();
        return false;
    }

    document.querySelector("#quiz_choice").addEventListener('change', () => {
        document.querySelector("#quiz_type_submit").value = "Start"
    })
})


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
    if (answered.length < data.length) {
        let random = random_num(data.length);
        while (answered.includes(random)) {
            random = random_num(data.length);
        }
        let question = data[random];
        answered.push(random);

        remove_current_quiz();
        display_question(question);
    } else {
        console.log("End of quiz");
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
    for (choice of data.choices) {
        create_choices(choice);
    }

    check_answer(data);
}

function check_answer(data) {
    let buttons = document.querySelectorAll(".choice")
    for (button of buttons) {
        button.addEventListener('click', function () {
            disable_buttons(buttons)
            this.classList.add("selected-choice")
            if (this.value == data.answer) {
                correct_answer();
            } else {
                wrong_answer(data.reason);
            }
            return false;
        })
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


function create_choices(choice) {
    let button = create_element("#choices", "input", "type", "button", "");
    button.setAttribute("value", choice);
    button.setAttribute("class", "choice btn btn-info")
}


function correct_answer() {
    let feedback_arr = ["Great Job", "Excellent", "Awesome", "You're A Superstar", "Keep Going, You're Doing Amazing", "Amazing", "Fantastic", "Good Job", "Brilliant", "Genius"]
    let random = random_num(feedback_arr.length);
    let feedback = `${feedback_arr[random]} ${name}!`;
    create_element(".quiz", "h1", "id", "correct_feedback", feedback);
    update_score(true);
    setTimeout(() => {
        generate_question(quiz_data);
    }, 3000);
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
    if (bool == true) {
        correct++;
    }
    score.textContent = `Score: ${correct}/${answered.length}`;
}