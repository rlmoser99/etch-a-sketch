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
    // maybe add a class name to detect if process has started
    // remove class name from other all color functions - or parent function?
    switch (this.style.backgroundColor) {
        case 'rgb(225, 225, 225)':
            this.style.backgroundColor = `rgb(200, 200, 200)`;
            break;
        case 'rgb(200, 200, 200)':
            this.style.backgroundColor = `rgb(175, 175, 175)`;
            break;
        case 'rgb(175, 175, 175)':
            this.style.backgroundColor = `rgb(150, 150, 150)`;
            break;
        case 'rgb(150, 150, 150)':
            this.style.backgroundColor = `rgb(125, 125, 125)`;
            break;
        case 'rgb(125, 125, 125)':
            this.style.backgroundColor = `rgb(100, 100, 100)`;
            break;
        case 'rgb(100, 100, 100)':
            this.style.backgroundColor = `rgb(75, 75, 75)`;
            break;
        case 'rgb(75, 75, 75)':
            this.style.backgroundColor = `rgb(50, 50, 50)`;
            break;
        case 'rgb(50, 50, 50)':
            this.style.backgroundColor = `rgb(25, 25, 25)`;
            break;
        case 'rgb(25, 25, 25)':
            this.style.backgroundColor = `rgb(0, 0, 0)`;
            break;
        default:
            this.style.backgroundColor = `rgb(225, 225, 225)`;
            break;
    }
    
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