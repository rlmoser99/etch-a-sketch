// Page Set-Up 
const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const clearButton = document.querySelector('.clear');
const gridColor = document.querySelector('.grid-color')
let gridNumber;
let gridArea;

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
createGrid(4, 16, 'default');
    
function colorGrid(color) {
    let gridPixels = container.querySelectorAll('div');
    if (!color) {
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', blackPixels))
    } else if (color === 'black' || color === 'default'){
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', blackPixels)) 
    } else if (color === 'rainbow'){
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', rainbowPixels)) 
    } else if (color === 'gray'){
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', grayPixels)) 
    } else {
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', erasePixels)) 
    }
}

function blackPixels() {
    this.style.backgroundColor = '#000000';
}

function rainbowPixels() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function grayPixels() {
    // NOTE = = = = = Need to reduce by 25 for each time it re-passes
    this.style.backgroundColor = `rgb(230, 230, 230)`;

}

function erasePixels() {
    this.style.backgroundColor = '#ffffff';
}
function removeListeners() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', blackPixels)) 
    gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', rainbowPixels)) 
    gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', grayPixels))
}

function sizePrompt (gridNumber, gridArea, color) {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    gridNumber = prompt('How many squares would you like on each side?')
    gridArea = gridNumber * gridNumber;
    createGrid(gridNumber, gridArea, color)
}

function eraseColor() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.classList.remove(...classColors));
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

// Color Choices
colorButtons = document.querySelectorAll('.color-choice');

function updateColor(event) {
    switch (event.target.dataset.color) {
        case 'black':
            createGrid(gridNumber, gridArea, 'black')
            break;
        case 'rainbow':
            createGrid(gridNumber, gridArea, 'rainbow')
            break;
        case 'gray':
            createGrid(gridNumber, gridArea, 'gray')
            break;
        case 'eraser':
            createGrid(gridNumber, gridArea, 'eraser')
            break;
        default:
            createGrid(gridNumber, gridArea, 'black')
            break;
    }    
}

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', updateColor))
sizeButton.addEventListener('click', sizePrompt);
clearButton.addEventListener('click', eraseColor);

// To Do List
// grayscale button: 10% of black to it so that only after 10 passes is the square completely black
// Add color picker, so user can choose any color
// A slide bar for pixel size