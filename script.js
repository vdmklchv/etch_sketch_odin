function createGrid(sideSize) {
    if (sideSize > constants.MAX_SIDE_SIZE || sideSize < constants.MIN_SIDE_SIZE) return;

    const pixelsPerSideWithoutGaps = constants.CONTAINER_SIDE_DIMENSIONS - constants.GAP_SIZE * sideSize;
    const elementSizeDimensions = pixelsPerSideWithoutGaps / sideSize;

    for (let i = 0; i < sideSize ** 2; i++) {
        const div = document.createElement("div");
        div.className = "grid-element";  
        containerDiv.appendChild(div);
        div.style.width = `${elementSizeDimensions}px`;
    }
}

function getRandomColor() {
    return {
        red: Math.floor(Math.random() * 257),
        green: Math.floor(Math.random() * 257),
        blue: Math.floor(Math.random() * 257),
    }
}

function constructRGBColorString(colorObj) {
    return `rgb(${colorObj.red}, ${colorObj.green}, ${colorObj.blue})`;
}

function changeElementColor(e) {
    if (e.target.className !== "container") {
        const color = getRandomColor();
        e.target.style.backgroundColor = constructRGBColorString(color);
    }
}

function resetGrid() {
    let sideSize = 0;

    while (sideSize < 2 || sideSize > 100 || isNaN(sideSize)) {
        sideSize = Number(prompt("Enter the side size of the canvas (2 -100): "));
    }

    containerDiv.textContent = "";
    createGrid(sideSize);

}

containerDiv = document.querySelector(".container");
generateButton = document.querySelector(".generate-button");

const constants = {
    CONTAINER_SIDE_DIMENSIONS: 960,
    GAP_SIZE: 1,
    MAX_SIDE_SIZE: 100,
    MIN_SIDE_SIZE: 2,
}

containerDiv.addEventListener("mouseout", changeElementColor);
generateButton.addEventListener("click", resetGrid);



