// const squareGrid = document.createElement("div")
// squareGrid.style.width = "80px"
// squareGrid.style.height = "80px"
// squareGrid.style.backgroundColor = "green"
const br = document.createElement("br");
const container = document.querySelector(".container");
// container.appendChild(squareGrid);
// container.appendChild(squareGrid);




for (let i = 0; i < 16; i++) {
    const squareGridContainer = document.createElement("div");
    squareGridContainer.classList.add(`inner-container`)
    for (let j = 0; j < 16; j++) {
        const squareGrid = document.createElement("div");
        squareGrid.style.width = "40px";
        squareGrid.style.height = "40px";
        squareGrid.style.backgroundColor = "green";
        squareGridContainer.appendChild(squareGrid);
    }
    
    squareGridContainer.appendChild(br);
    container.appendChild(squareGridContainer);
}
