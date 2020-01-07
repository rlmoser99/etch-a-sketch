const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelector('.size');
var color = 'black';

function createGrid (gridNumber) { 
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;  
        case 'gray':
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                }
            } else if (this.classList == 'gray') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
            }
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            break;
        default:
            this.style.backgroundColor = '#000000';
            break;
    } 
}

function eraseAllColor() {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

// Updates "pixel" size
function sizePrompt (gridNumber) {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    gridNumber = prompt('How many squares would you like on each side?');
    gridArea = gridNumber * gridNumber;
    createGrid(gridNumber);
}
// Updates color variable when a color button is clicked
function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'gray':
            color = 'gray';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    } 
}

// On Page Load - default size
createGrid(10);

// Event Listeners
clearButton.addEventListener('click', eraseAllColor);
sizeButton.addEventListener('click', sizePrompt);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
