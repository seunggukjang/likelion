const form = document.querySelector(".hs-form"),
    input = form.querySelector("input"),
    todoList = document.querySelector(".todoText"),
    button = document.querySelector("button");

const LOCAL_DATA = "WHAT";

function Submit(text) {
    button.addEventListener("click", onClick);
    todoList.innerText = `${text}`;
}

function onClick() {
    localStorage.removeItem(LOCAL_DATA);
    loaded();
}

function onSubmit(e) {

    //e.preventDefault();

}

function askForTODO() {
    localStorage.setItem(LOCAL_DATA, input.value);
    Submit(input.value);
    input.value = "";
}

function loaded() {
    const data = localStorage.getItem(LOCAL_DATA);
    if (data === null) {
        askForTODO();
    } else {
        Submit(data);
    }
}

function init() {
    loaded();
}

init();