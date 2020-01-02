const container = document.querySelector('.container');

function addGridItem (j) {
    for (let i = 1; i <= j; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        container.insertAdjacentElement('beforeend', gridItem);
    }
}

addGridItem(16);