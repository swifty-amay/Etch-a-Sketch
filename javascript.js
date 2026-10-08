
function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const squareGridContainer = document.createElement("div");
        squareGridContainer.classList.add("inner-container");

        for (let j = 0; j < number; j++) {
            const squareGrid = document.createElement("div");
            squareGrid.classList.add("square");

            squareGrid.style.width = `${640 / number}px`;
            squareGrid.style.height = `${640 / number}px`;

            squareGridContainer.appendChild(squareGrid);

            squareGrid.addEventListener("mouseenter", () => {
                squareGrid.style.backgroundColor = "darkgreen";
            });

            squareGrid.addEventListener("click", () => {
                squareGrid.style.backgroundColor = "rgb(5, 161, 5)";
            });
        }

        container.appendChild(squareGridContainer);
    }
}

let number = 16;
const container = document.querySelector(".container");
const button = document.querySelector("#btn");

createGrid(number);

button.addEventListener("click", () => {
    number = +prompt("Enter the number of squares on each side:", "64");

    container.innerHTML = "";

    createGrid(number);
});
