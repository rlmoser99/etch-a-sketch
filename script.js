const container = document.querySelector('.container');

function addGridItem () {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid');
    container.insertAdjacentElement('beforeend', gridItem);
    console.log("addGridfunction is here")
}

addGridItem();