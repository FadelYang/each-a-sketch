let mainContainer = document.querySelector(".container");

// create div for box
let boxGroup = document.createElement("div");
boxGroup.classList.add('box-group');

// create singleDiv as a box
function createDiv(size) {
    let newDiv = document.createElement("div");

    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.boxSizing = `border-box`;

    newDiv.classList.add('box');

    return newDiv
}

// create multiple box for 16x16
function createMultipleDiv() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            boxGroup.appendChild(createDiv(30));
        }
    }
    mainContainer.appendChild(boxGroup);
}

// add background color when hovering the box
function addBackgroundWhenHover() {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = "black";
        })
    });
}

// clear canvas
function clearcanvas() {
    let clearButton = document.querySelector('#clearButton');

    clearButton.addEventListener('click', () => {
        let boxes = document.querySelectorAll('.box');

        boxes.forEach(element => {
            element.style.backgroundColor = "white";
        });
    })
}

// call all function needed
createMultipleDiv();
addBackgroundWhenHover();
clearcanvas();