let answered = [];
let data;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#user_form").onsubmit = () => {
        display_name();
        display_quiz();
        return false;
    }
})

let get_api_data = async (url) => {
    let response = await fetch(url);
    data = await response.json();
    generate_question(data);
}

function display_name() {
    let name = document.querySelector("#name_input").value;

    document.querySelector("#name").textContent = name;
    document.querySelector("#score").textContent = "Score: 0/0";
}

function display_quiz() {
    let quiz_choice = document.querySelector("#quiz_choice").value;
    let question = document.querySelector("#quiz_type");
    let url = "https://my-json-server.typicode.com/jho2016/Webpage-Graphics-Quiz-Project/";

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
    if (answered.length < data.length) {
        let random = random_num(data.length);
        while (answered.includes(random)) {
            random = random_num(data.length);
        }
        let question = data[random];

        try {
            document.querySelector(".quiz").remove();
        } catch (err) {

        }
        display_question(question);
        answered.push(random);
    }
}

function random_num(length) {
    return Math.floor(Math.random() * length);
}

function display_question(data) {
    create_element("body", "div", "class", "quiz container", "");
    create_element(".quiz", "h3", "id", "question", data.question);

    create_element(".quiz", "form", "id", "choices", "");
    for (choice of data.choices) {
        create_choices(choice);
    }

    create_element("#choices", "button", "class", "submit btn btn-info",
        "Submit");

    document.querySelector("#choices").onsubmit = () => {
        let choices = document.querySelectorAll(".choice")
        for (choice of choices) {
            if (choice.checked) {
                if (choice.value == data.answer) {
                    // handle correct answer
                    console.log(true);
                } else {
                    // handle incorrect answer
                    console.log(false);
                }
            }
        }
        return false;
    }
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
    let radio_button = create_element("#choices", "input", "class", "choice", "");
    radio_button.setAttribute("type", "radio");
    radio_button.setAttribute("name", "choice");
    radio_button.setAttribute("value", choice);
    create_element("#choices", "label", "class", "choice_text", choice)
}