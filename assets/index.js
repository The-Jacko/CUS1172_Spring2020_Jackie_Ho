document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#user_form").onsubmit = () => {
        display_name();
        display_quiz();
        return false;
    }
});

function display_name() {
    let name = document.querySelector("#name_input").value;

    document.querySelector("#name").textContent = name;
    document.querySelector("#score").textContent = "Score: 0/0";
}

function display_quiz() {
    let quiz_type = document.querySelector("#quiz_type").value;
    let question = document.querySelector("#question");
    if (quiz_type == "1") {
        question.textContent = "Quiz 1";
    } else {
        question.textContent = "Quiz 2";
    }
}