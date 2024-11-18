// THE BALLOON PROJECT 
// SAHIL PATEL 
// 11/14/24
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 15;
let leafDepth = 4;  // Default leaf depth

function setup() {
  createCanvas(500, 500);
  background(255);
  randomSeed(0);  // Fix randomness for consistent leaves and branch sizes
}

function draw() {
  background(255);  // Clear screen each frame

  // Map the mouse X position to control the branching angle between 10° to 45°
  let angleOffset = map(mouseX, 0, width, radians(10), radians(45));  // Controls how wide the branches spread

  // Draw the tree with dynamic angle control
  drawTree(width / 2, height * 0.9, -PI / 2, 6, angleOffset);  // Start with fixed upward angle
}

function drawLine(x1, y1, x2, y2) {
  // Draw a line segment connecting (x1, y1) to (x2, y2)
  line(x1, y1, x2, y2);
}

function drawLeaf(x, y, depth) {
  if (depth >= leafDepth) return;  // Don't draw leaves if depth is too high

  // Random size based on depth
  let size = random(10, 20) * (5 - depth) * 0.5;

  // Random color for the leaves
  fill(random(255), random(255), random(255), 150);  // Semi-transparent color
  noStroke();
  
  // Draw a leaf as a circle (balloon)
  ellipse(x, y, size, size);
}

function drawTree(x1, y1, angle, depth, angleOffset) {
  if (depth > 0) {
    let x2 = x1 + (cos(angle) * depth * scale);  // Calculate the endpoint of the branch
    let y2 = y1 + (sin(angle) * depth * scale);  // Shorter based on depth

