let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 255, 0, 0, 0],
                 [255, 255, 255, 0, 0]];
let isSquarePattern = false; // Control the pattern type

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizeGrid(); // Randomize the starting grid
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  checkWinCondition(); // Check for win condition every frame
}

function mousePressed() {
  if (keyIsDown(SHIFT)) {
    flip(currentCol, currentRow); // Only flip the square under the cursor
  } else {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
}

}
