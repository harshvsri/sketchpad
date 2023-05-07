const gridContainer = document.querySelector(".grid-container");

let gridSize = 16;
let gridDimension = (409600 / gridSize ** 2) ** 0.5;
let gridColor = "#000000";

const renderGrid = (gridSize, gridDimension) => {
  gridContainer.innerHTML = "";

  for (let i = 0; i < gridSize ** 2; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.style.width = gridDimension.toString() + "px";
    grid.style.height = gridDimension.toString() + "px";

    gridContainer.appendChild(grid);
  }
};
renderGrid(gridSize, gridDimension);

const gridSizeInput = document.querySelector("#gridSize");
const selectedValueSpan = document.querySelector("#selectedValue");
gridSizeInput.addEventListener("input", () => {
  const selectedValue = gridSizeInput.value;
  selectedValueSpan.textContent = selectedValue;

  gridSize = selectedValue;
  gridDimension = (409600 / gridSize ** 2) ** 0.5;
  renderGrid(gridSize, gridDimension);
});

const colorInput = document.querySelector("#color");
colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  gridColor = selectedColor.toString();
});

const eraser = document.querySelector("#eraser");
let activeColor = gridColor;
eraser.addEventListener("click", () => {
  eraser.classList.toggle("eraser-active");
  if (eraser.classList.contains("eraser-active")) {
    gridColor = "#ffffff";
  } else {
    gridColor = activeColor;
  }
});

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
  grid.addEventListener("click", () => {
    console.log("touched");
    grid.style.backgroundColor = gridColor;
  });
});
