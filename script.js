// Page Set-Up 
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const gridColor = document.querySelector('.grid-color')
const userColorPicker = document.querySelector('#input-color')
colorButtons = document.querySelectorAll('.color-choice');
var slider = document.querySelector('#sizeRange')
let gridNumber;
let gridArea;
var userPixel;
var color = 'black';

function createGrid (gridNumber, gridArea, color) { 
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid(color)));
}

// Create default grid on page load
createGrid(slider.value, (slider.value * slider.value), color);

function colorGrid(color) {
    var gridPixels = container.querySelectorAll('div');
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
    } else if (color === 'eraser'){
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', erasePixels))  
    } else if (color === userPixel){
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', userPixels)) 
    } else {
        removeListeners();
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', blackPixels))
    }
}

function blackPixels() {
    this.style.backgroundColor = '#000000';
}

function rainbowPixels() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function userPixels() {
    this.style.backgroundColor = userPixel;
}

function grayPixels() {
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
            this.classList.add('gray-pixel');
            break;
        case 'rgb(0, 0, 0)':
            if (this.classList.value !== 'gray-pixel') {
                this.style.backgroundColor = `rgb(225, 225, 225)`;
            }
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
    gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', userPixels)) 
    gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', erasePixels)) 
}

function eraseAllColor() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

// Color Choices
function updateColor(event) {
    switch (event.target.dataset.color) {
        case 'rainbow':
            colorGrid('rainbow');
            break;  
        case 'gray':
            colorGrid('gray');
            break;
        case 'eraser':
            colorGrid('eraser');
            break;
        default:
            colorGrid('black');
            break;
    }    
}

function userColorSelection(event) {
    userPixel = event.target.value;
    createGrid(gridNumber, gridArea, userPixel);
}

function pixelSize(color) {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    console.log(slider.value);
    createGrid(slider.value, (slider.value * slider.value), color);
}

function sliderColor() {
    var sliderNumber = ((slider.value - 10) / 40) * 100;
    var sliderColor = `linear-gradient(90deg, #aaaaaa 0 ${sliderNumber}%, #ff0000 ${sliderNumber}% 100%)`
    slider.style.background = sliderColor;
}

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', updateColor))
clearButton.addEventListener('click', eraseAllColor);
userColorPicker.addEventListener('change', userColorSelection, false)
slider.addEventListener('mouseup', pixelSize);
slider.addEventListener('mousemove', sliderColor);

// To Do List
// re-sizing breaks hover colors and clear button -super slow?
// Would using var help with re-declaring variables
// refactor grayscale to use data-set number * 10 for gradient.
// Mobile touch screens name change to "Touch-O-Sketch"
