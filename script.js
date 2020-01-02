// Container & Grid Set-Up
const container = document.querySelector('.container');

function addGridItem (j) {
    for (let i = 1; i <= j; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        container.insertAdjacentElement('beforeend', gridItem);
    }
}

addGridItem(16);

// Modifying Grid Item Color

const gridItems = document.querySelectorAll('.grid');

function blackColor(    ) {
    this.style.backgroundColor = '#000000';
}

gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', blackColor))

// Clear Button
clearButton = document.querySelector('.refresh');

function refreshPage() {
    window.location.reload(true);
}

clearButton.addEventListener('click', refreshPage);