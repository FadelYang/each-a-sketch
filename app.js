const container = document.querySelector('.container');

// create new div for grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add("grid-container");

let gridSize = 16;

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j < 4; j++) {
        const gridItem = document.createElement('div');
        gridItem.textContent = ` `
        gridItem.classList.add("grid-item");

        gridItem.style.padding = `${500 / 32}px`

        gridContainer.appendChild(gridItem);

    }
    const gridItem = document.createElement('div');
    gridItem.textContent = ` `
    gridItem.classList.add("grid-item");

    gridItem.style.padding = `${500 / 32}px`

    gridContainer.appendChild(gridItem);
}

container.appendChild(gridContainer);

