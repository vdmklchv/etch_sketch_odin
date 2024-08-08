containerDiv = document.querySelector(".container");

const constants = {
    CONTAINER_SIDE_DIMENSIONS: 960,
    GAP_SIZE: 1,
}

let elementsPerSide = 16;

function createGrid(sideSize) {
    console.log("here");
    if (sideSize > 100 || sideSize < 2) return;

    const pixelsPerSideWithoutGaps = constants.CONTAINER_SIDE_DIMENSIONS - constants.GAP_SIZE * sideSize;
    const elementSizeDimensions = pixelsPerSideWithoutGaps / sideSize;

    for (let i = 0; i < sideSize ** 2; i++) {
        const div = document.createElement("div");
        div.className = "grid-element";  
        containerDiv.appendChild(div);
        div.style.width = `${elementSizeDimensions}px`;
    }
}

createGrid(elementsPerSide);



