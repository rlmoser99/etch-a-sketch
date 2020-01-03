// Page Set-Up 
const container = document.querySelector('.container');
// let gridItems = document.querySelectorAll('.grid');
const sizeButton = document.querySelector('.size');
const clearButton = document.querySelector('.clear');

function createGrid (width, area) { 
    for (let i = 1; i <= area; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        gridItem.classList.add(`${i}`);
        container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    let gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', colorGrid))
}

// Create default grid on page load
createGrid(4, 16);

// Coloring the Grid 
function colorGrid() {
    this.style.backgroundColor = '#000000';
}

function sizePrompt () {
    let gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(gridItem => gridItem.remove());
    userNumber = prompt('How many squares would you like on each side?')
    userArea = userNumber * userNumber;
    createGrid(userNumber, userArea)
}

function eraseColor() {
    let gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(gridItem => gridItem.style.backgroundColor = '#ffffff');
}

// Rainbow
// colorButtons = document.querySelectorAll('.color-choice');

// function whatColor(e) {
//     // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     console.log(e.target.dataset.color);
// }

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', whatColor))
sizeButton.addEventListener('click', sizePrompt);
clearButton.addEventListener('click', eraseColor);