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

// create multiple box for nxn
// if n = 2, the div will divide total width by 4
// if n = 3, the div will divide total width by 9 and so on
function createMultipleDiv(size) {
    let boxContainerSize = 400;
    let boxSize = boxContainerSize / (size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            boxGroup.appendChild(createDiv(boxSize));
            mainContainer.appendChild(boxGroup);
        }
    }
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
createMultipleDiv(32);
addBackgroundWhenHover();
clearcanvas();