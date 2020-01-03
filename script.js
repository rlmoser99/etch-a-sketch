// Page Set-Up 
const container = document.querySelector('.container');
// let gridItems = document.querySelectorAll('.grid');
const sizeButton = document.querySelector('.size');
const clearButton = document.querySelector('.clear');
const gridColor = document.querySelector('.grid-color')

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
    // Need to figure out which color to use
    this.classList.add('grid-black')
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
    gridItems.forEach(gridItem => gridItem.classList.remove('grid-color'));
}

// Color Choices
colorButtons = document.querySelectorAll('.color-choice');

function updateColor(e) {
    // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(e.target.dataset.color);
    switch (e.target.dataset.color) {
        case 'black':
            console.log('black was chosen');
            // gridColor.setAttribute('style', `backgroundColor = #000000`);
            // gridColor.style.backgroundColor = '#000000';
            break;
        case 'rainbow':
            console.log('rainbow was chosen');
            // gridColor.setAttribute('style', `backgroundColor = hsl(${Math.random() * 360}, 100%, 50%)`);
            // gridColor.style.backgroundColor = '#010101';
            break;
        case 'gray':
            console.log('grey was chosen');
            // this.classList.add('grid-grey')
            // gridColor.setAttribute('style', `backgroundColor = #d2d2d2`);
            // gridColor.style.backgroundColor = '#050505';
            break;
        case 'eraser':
            console.log('eraser was chosen');
            // gridColor.setAttribute('style', `backgroundColor = #ffffff`);
            // gridColor.style.backgroundColor = '#565656';
            break;
        default:
            console.log('default was given');
            // gridColor.setAttribute('style', `backgroundColor = #d5d5d5`);
            // gridColor.style.backgroundColor = '#000000';
            break;
    }    
}

// Event Listeners
colorButtons.forEach(colorButton => colorButton.addEventListener('click', updateColor))
sizeButton.addEventListener('click', sizePrompt);
clearButton.addEventListener('click', eraseColor);
