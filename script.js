// Container & Grid Set-Up 
const container = document.querySelector('.container');
const defaultNumber = 4;
let gridArea = defaultNumber * defaultNumber;
container.style.gridTemplateColumns = `repeat(${defaultNumber}, 1fr)`;
container.style.gridTemplateRows = `repeat(${defaultNumber}, 1fr)`;

function addGridItem (j) { 
    for (let i = 1; i <= j; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        // gridItem.classList.add(`${i}`);
        container.insertAdjacentElement('beforeend', gridItem);
    }
}

addGridItem(gridArea);

// Modifying Grid Item Color

let gridItems = document.querySelectorAll('.grid');

function blackColor() {
    this.style.backgroundColor = '#000000';
}

gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', blackColor))

// Size Button

sizeButton = document.querySelector('.size');

function sizePrompt () {
    gridItems.forEach(gridItem => gridItem.remove());
    userNumber = prompt('How many squares would you like on each side?')
    addGridItem(userNumber * userNumber);
    container.style.gridTemplateColumns = `repeat(${userNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userNumber}, 1fr)`;
    gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', blackColor))
}

sizeButton.addEventListener('click', sizePrompt);

// Clear Button
clearButton = document.querySelector('.refresh');

function refreshPage() {
    window.location.reload(true);
}

clearButton.addEventListener('click', refreshPage);

// Rainbow
colorButtons = document.querySelectorAll('.color-choice');

function whatColor(e) {
    // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(e.target.dataset.color);
}

colorButtons.forEach(colorButton => colorButton.addEventListener('click', whatColor))
