containerDiv = document.querySelector(".container");

for (let i = 0; i < 196; i++) {
    const div = document.createElement("div");
    div.className = "grid-element";
    containerDiv.appendChild(div);
}