// sahil patel
// perlin noise project
// 10/10/2024

let rectWidth = 10;
let xOff = 0;
let terrainSpeed = 0.01;
let highestPeakX = 0;
let highestPeakY = 0;
let terrainHeight = [];

function setup() {
  createCanvas(800, 400);
  noLoop();  // No continuous draw
  generateTerrain();
}

function draw() {
  background(255);
  let totalHeight = 0;
  let highestY = height;

  for (let i = 0; i < width / rectWidth; i++) {
    let h = terrainHeight[i];
    fill(100, 200, 100);
    rect(i * rectWidth, height, rectWidth, -h);

    // To Find the highest peak
    if (h < highestY) {
      highestY = h;
      highestPeakX = i * rectWidth + rectWidth / 2;
      highestPeakY = height - h;
    }
    totalHeight += h;
  }

  // Calculate average height
  let avgHeight = totalHeight / (width / rectWidth);
  stroke(0, 0, 255);  // Blue line
  line(0, avgHeight, width, avgHeight);  //  average height line

  drawFlag(highestPeakX, highestPeakY);  //  flag at the highest peak
}

// Function to generate the terrain using Perlin noise
function generateTerrain() {
  terrainHeight = [];
  for (let i = 0; i < width / rectWidth; i++) {
    let h = noise(xOff) * height;
    terrainHeight.push(h);
    xOff += 0.05;  // Pan through the terrain gradually
  }
}

function drawFlag(x, y) {
  fill(255, 0, 0);  // Red flag
  triangle(x, y - 20, x + 10, y - 10, x, y);
  stroke(0);
  line(x, y, x, y + 20);  //  flag pole
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xOff -= 0.05;  // Pan left
  } else if (keyCode === RIGHT_ARROW) {
    xOff += 0.05;  // Pan right
  } else if (keyCode === UP_ARROW) {
    rectWidth *= 1.5;  // Increase width
  } else if (keyCode === DOWN_ARROW) {
    rectWidth = max(5, rectWidth / 1.5);  // Decrease width
  }
  generateTerrain();
  redraw();
}
