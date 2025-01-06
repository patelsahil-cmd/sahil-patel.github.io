// Sahil patel
// The puzzle project
// For cheating funtion use shift key 


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
  randomizeGrid(); // Randomize grid
}


function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  checkWinCondition(); // Checking for win condition every frame
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


function flip(col, row) {
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      gridData[row][col] = (gridData[row][col] === 0) ? 255 : 0;
    }
  }
}


function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
     
      // Draw overlay for impacted squares if mouse is pressed
      if (mouseIsPressed && !keyIsDown(SHIFT)) {
        if (isSquarePattern) {
          fill(150, 150, 255, 100); // Overlay color for square pattern
          rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
        } else if (x === currentCol && y === currentRow) {
          fill(150, 150, 255, 100); // Overlay for center square
          rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
        } else if ((x === currentCol && (y === currentRow - 1 || y === currentRow + 1)) ||
                   (y === currentRow && (x === currentCol - 1 || x === currentCol + 1))) {
          fill(150, 150, 255, 100); // Overlay for cross pattern
          rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
        }
      }
    }
  }
}


function checkWinCondition() {
  let firstValue = gridData[0][0];
  let win = true;


  for (let row of gridData) {
    for (let value of row) {
      if (value !== firstValue) {
        win = false;
        break;
      }
    }
    if (!win) break;
  }


  if (win) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}


function randomizeGrid() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      gridData[row][col] = random() < 0.5 ? 0 : 255; // Randomize to 0 or 255
    }
  }
}


function keyPressed() {
  if (key === ' ') {
    isSquarePattern = !isSquarePattern; // Toggle between cross and square pattern
  }
}


