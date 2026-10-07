const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const squareGridContainer = document.createElement("div");
    squareGridContainer.classList.add(`inner-container`)
    for (let j = 0; j < 16; j++) {
        const squareGrid = document.createElement("div");
        squareGrid.classList.add("square");
        squareGridContainer.appendChild(squareGrid);
    }
    container.appendChild(squareGridContainer);
}
