const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const todoList = document.querySelector(".todoText");
const addButton = document.querySelector(".AddButton");
const deleteButton = document.querySelector(".DeleteButton");

let jsonArray = [];
let todoCount = 0;

const url = new URL(window.location.href);
const urlParams = url.searchParams;

// const LOCAL_DATA = "WHAT";

function AddTODO(text) {
    button.addEventListener("click", onClick);
    todoList.innerText = `${text}`;
}

// function onClick() {
//     localStorage.removeItem(LOCAL_DATA);
//     loaded();
// }

// function onSubmit(e) {

//     //e.preventDefault();

// }

// function askForTODO() {
//     localStorage.setItem(LOCAL_DATA, input.value);
//     Submit(input.value);
//     input.value = "";
// }

// function loaded() {
//     const data = localStorage.getItem(LOCAL_DATA);
//     if (data === null) {
//         askForTODO();
//     } else {
//         Submit(data);
//     }
// }

// function init() {
//     loaded();
// }

// init();

const body = document.querySelector('.container');

for (let i = 1; i < 32; i++) {
    MakeCol(i);

}

function MakeCol(number) {
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="col">
                    <div class="p-0 border bg-light">
                        <div class="theDay" style="text-align: center;">
                            ${number}
                        </div>
                        <form class="js-form">
                            <input class="form-control input-sm" type="text">
                        </form>
                    </div>
                </div>
        `;
    body.appendChild(div);
}

function MakeAndOpenLow(number) {
    const div = document.createElement('div');
    div.innerHTML = `
            <div class = "row g-0" >
                <div class="col">
                    <div class="p-0 border bg-light">
                        <div class="theDay" style="text-align: center;">
                            ${number}
                        </div>
                        <form class="hs-form">
                            <div class="form-text">
                                <input class="form-control input-sm" type="text">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    body.appendChild(div);
} {
    /* <div class="container">
    <div class="row g-0">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
            <div class="p-0 border bg-light">
                <div class="theDay" style="text-align: center;">
                    1
                </div>

                <form class="hs-form">
                    <div class="todoText">TODO : </div>
                    <input class="form-control input-sm" id="" type="text">
                </form>
            </div>
        </div>
        <div class="col">
            <div class="p-0 border bg-light">
                <div class="theDay" style="text-align: center;">
                    2
                </div>
                <form class="hs-form">
                    <div class="form-text">
                        <label for="day1"></label>
                        <input class="form-control input-sm" id="day2" type="text">
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div> */
}