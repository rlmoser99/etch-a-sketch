// Page Set-Up 
const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const clearButton = document.querySelector('.clear');
const gridColor = document.querySelector('.grid-color')
const classColors = ['grid-color', 'pixel-black', 'pixel-rainbow', 'pixel-gray'];
let gridNumber = 4
let gridArea = 16;

function createGrid (gridNumber, gridArea, color) { 
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid(color)))
}

// Create default grid on page load
createGrid(gridNumber, gridArea, 'default');

// Coloring the Grid - Make a function & css class for each color
// function colorGrid() {
    //     console.log(this);
    //     this.classList.add('pixel-black');
    // }
    
function colorGrid(color) {
    // console.log(color)
    let gridPixels = container.querySelectorAll('div');
    if (color === 'default') {
        console.log('default is the color')
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', blackPixels))
    } else if (color === 'black'){
        console.log('black is the color BUTTON')
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', rainbowPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', grayPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', blackPixels)) 
    } else if (color === 'rainbow'){
        // console.log('not black');
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', blackPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', grayPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', rainbowPixels)) 
    } else {
        // console.log('not black');
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', blackPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', grayPixels)) 
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', grayPixels)) 
    }
    // this.classList.add(`pixel-${color}`);
}

// function colorGrid(color) {
    // gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', colorGrid))
    // Need do remove classes from grid Item gridItem.classList.remove(...cls);
    // this.classList.add('grid-color');
    // console.log('new color needed')
    // if (color = 'black') {
        // console.log('default is needed')
        // this.classList.add('pixel-black');
    // } else {
        // this.classList.add('pixel-rainbow')
    // }
// }

function blackPixels() {
    this.classList.remove(...classColors);
    this.classList.add('pixel-black');
}

function rainbowPixels() {
    this.classList.remove(...classColors);
    this.classList.add('pixel-rainbow');
}

function grayPixels() {
    this.classList.remove(...classColors);
    this.classList.add('pixel-gray');
}

function sizePrompt () {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    gridNumber = prompt('How many squares would you like on each side?')
    gridArea = gridNumber * gridNumber;
    createGrid(gridNumber, gridArea,)
}

function eraseColor() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.classList.remove(...classColors));
}

// Color Choices
colorButtons = document.querySelectorAll('.color-choice');

function updateColor(event) {
    // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    // console.log(e.target.dataset.color);
    switch (event.target.dataset.color) {
    // switch (event) {
        case 'black':
            // console.log('black was chosen');
            createGrid(gridNumber, gridArea, 'black')
            break;
        case 'rainbow':
            // console.log('rainbow was chosen');
            createGrid(gridNumber, gridArea, 'rainbow')
            break;
        case 'gray':
            console.log('gray was chosen');
            createGrid(gridNumber, gridArea, 'gray')
            break;
        case 'eraser':
            console.log('eraser was chosen');
            break;
        default:
            console.log('default was given');
            break;
    }    
}

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', updateColor))
sizeButton.addEventListener('click', sizePrompt);
clearButton.addEventListener('click', eraseColor);

// To Do List
// random RGB button
// grayscale button: 10% of black to it so that only after 10 passes is the square completely black
// Add color picker, so user can choose any color
// Make container square and responsive
// Add keyboard functionality