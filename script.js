// Page Set-Up 
const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const clearButton = document.querySelector('.clear');
const gridColor = document.querySelector('.grid-color')
const cls = ['grid-color', 'black', 'rainbow'];

function createGrid (width, area) { 
    for (let i = 1; i <= area; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid))
}

// Create default grid on page load
createGrid(4, 16);

// Coloring the Grid - Make a function & css class for each color
function colorGrid() {
    // gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', colorGrid))
    // Need do remove classes from grid Item gridItem.classList.remove(...cls);
    this.classList.add('grid-color');
    // console.log('new color needed')
}

function sizePrompt () {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    userNumber = prompt('How many squares would you like on each side?')
    userArea = userNumber * userNumber;
    createGrid(userNumber, userArea)
}

function eraseColor() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.classList.remove(...cls));
}

// Color Choices
colorButtons = document.querySelectorAll('.color-choice');

function updateColor(e) {
    // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(e.target.dataset.color);
    switch (e.target.dataset.color) {
        case 'black':
            console.log('black was chosen');
            gridColor.style.backgroundColor = '#000000';
            break;
        case 'rainbow':
            console.log('rainbow was chosen');
            gridColor.style.backgroundColor = '#FF0000';
            break;
        case 'gray':
            console.log('grey was chosen');
            gridColor.style.backgroundColor = '#808080';
            break;
        case 'eraser':
            console.log('eraser was chosen');
            gridColor.style.backgroundColor = '#0000FF';
            break;
        default:
            console.log('default was given');
            gridColor.style.backgroundColor = '#000000';
            break;
    }    
}

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', updateColor))
sizeButton.addEventListener('click', sizePrompt);
clearButton.addEventListener('click', eraseColor);
