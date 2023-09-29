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
function addBackgroundWhenHover(color = null) {
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(element => {
        element.addEventListener('mouseover', () => {
            if (color == null) {
                const randomColor = getRandomColor();
                element.style.backgroundColor = randomColor;
            } else {
                element.style.backgroundColor = "black"
            }
        })
    });
}

// get random color
function getRandomColor() {
    const colors = ['#fd8800', '#fd008f', '#9700fd', '#003dfd', '#05c7e6', '#4bd58d'];
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
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

// choose button color
function chooseColor() {
    let blackButton = document.querySelector("#blackButton");
    let colorfulButton = document.querySelector("#colorfulButton");

    blackButton.addEventListener('click', () => {
        blackButton.classList.add("button-active");
        colorfulButton.classList.remove("colorful-button-active");

        return addBackgroundWhenHover("black");
    })

    colorfulButton.addEventListener('click', () => {
        blackButton.classList.remove("button-active");
        colorfulButton.classList.add("colorful-button-active")

        const randomengdomColor = getRandomColor();
        // element.style.backgroundColor = randomColor;

        return addBackgroundWhenHover();
    })

    blackButton.classList.add("button-active");
    return addBackgroundWhenHover("black");
}

// call all function needed
createMultipleDiv(32);
chooseColor();
clearcanvas();