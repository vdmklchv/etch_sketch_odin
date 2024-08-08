containerDiv = document.querySelector(".container");

const constants = {
    CONTAINER_SIDE_DIMENSIONS: 960,
    GAP_SIZE: 1,
    MAX_SIDE_SIZE: 100,
    MIN_SIDE_SIZE: 2,
}

let elementsPerSide = 16;

function createGrid(sideSize) {
    if (sideSize > constants.MAX_SIDE_SIZE || sideSize < constants.MIN_SIDE_SIZE) return;

    const pixelsPerSideWithoutGaps = constants.CONTAINER_SIDE_DIMENSIONS - constants.GAP_SIZE * sideSize;
    const elementSizeDimensions = pixelsPerSideWithoutGaps / sideSize;

    for (let i = 0; i < sideSize ** 2; i++) {
        const div = document.createElement("div");
        div.className = "grid-element";  
        containerDiv.appendChild(div);
        div.style.width = `${elementSizeDimensions}px`;
        const color = getRandomColor();
        div.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    }
}

function getRandomColor() {
    return {
        red: Math.floor(Math.random() * 257),
        green: Math.floor(Math.random() * 257),
        blue: Math.floor(Math.random() * 257),
    }
}

createGrid(elementsPerSide);



