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

  // CLICKS
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("click", () => {
      console.log("touched");
      grid.style.backgroundColor = gridColor;
    });
  });

  // DRAGS
  let isDragging = false;
  gridContainer.addEventListener("mousedown", () => {
    isDragging = true;
  });
  gridContainer.addEventListener("mousemove", (event) => {
    if (isDragging) {
      event.target.style.backgroundColor = gridColor;
    }
  });
  gridContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });
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
    console.log(activeColor);
  }
  colorInput.value = gridColor; // update the colorInput value
});

setInterval(function () {
  var colors = ["#0f0f7d", "#0f7d7d", "#7d0f7d"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}, 5000); // change color every 5 seconds
