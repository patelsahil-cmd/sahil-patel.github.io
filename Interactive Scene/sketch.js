// Interactive Scene
// sahil Patel
// 9/18/2024
//




let currentBack = 0;  // Background state variable


function setup() {
  createCanvas(800, 600);  // Create canvas
  textSize(20);            // Set text size for my name
}


function draw() {
  // Set background based on currentBack state
  if (currentBack == 0) {
    background(200, 220, 255);  // Light blue
  } else if (currentBack == 1) {
    background(150, 250, 200);  // Light green
  } else if (currentBack == 2) {
    background(255, 220, 150);  // Light orange
  } else {
    background(100, 100, 255);  // Dark blue
  }


  
  let buildingX = mouseX;  // X position of the building follows the mouse
  let buildingY = mouseY;  // Y position of the building follows the mouse


  //  square
  fill(150, 75, 0);  // Brown color
  rect(buildingX - 50, buildingY, 100, 100);  


  //  triangle
  fill(255, 0, 0);  // Red color
  triangle(buildingX - 50, buildingY, buildingX + 50, buildingY, buildingX, buildingY - 70);  // Triangle on top


  //  circle
  fill(0, 0, 255);  // Blue color
  ellipse(buildingX, buildingY - 85, 50, 50);  // circle on top of triangle


  // Displaying Name
  fill(0);  // Black text
  text("Sahil Patel", width - 150, height - 30);  // Display text in the corner
}


// Change background with left-click or 'C' key press
function mousePressed() {
  if (mouseButton === LEFT) {
    currentBack = (currentBack + 1) % 4;  // Cycle through 4 background change on left click
  }
}


function keyPressed() {
  if (key === 'c' || key === 'C') {
    currentBack = (currentBack + 1) % 4;  // Cycle through 4 background changes when 'C' press
  }
}



