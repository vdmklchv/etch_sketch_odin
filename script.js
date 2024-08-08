containerDiv = document.querySelector(".container");

const CONTAINER_SIDE_DIMENSIONS = 960;
const GAP_SIZE = 1;

let elementsPerSide = 16;
const pixelsPerSideWithoutGaps = CONTAINER_SIDE_DIMENSIONS - GAP_SIZE * elementsPerSide;
const elementSizeDimensions = pixelsPerSideWithoutGaps / elementsPerSide;


for (let i = 0; i < elementsPerSide ** 2; i++) {
    const div = document.createElement("div");
    div.className = "grid-element";  
    containerDiv.appendChild(div);
    div.style.width = `${elementSizeDimensions}px`;
}

const divElements = document.querySelector(".grid-element");
