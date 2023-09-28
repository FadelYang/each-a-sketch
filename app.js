let mainContainer = document.querySelector(".container");

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
            mainContainer.appendChild(createDiv(30));
        }
    }
}

createMultipleDiv()