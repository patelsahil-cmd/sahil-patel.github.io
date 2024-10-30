let eastbound = [];
let westbound = [];
let trafficLight;


function setup() {
  createCanvas(800, 400);
  drawRoad();


  // Create initial mixed vehicles in each direction
  for (let i = 0; i < 20; i++) {
    let vehicleTypeEast = random([0, 1]);  // Randomly choose car (0) or truck (1) for eastbound
    let eastVehicle = new Vehicle(vehicleTypeEast, randomColor(), random(250, 300), 1, random(2, 5));
    eastbound.push(eastVehicle);


    let vehicleTypeWest = random([0, 1]);  // Randomly choose car (0) or truck (1) for westbound
    let westVehicle = new Vehicle(vehicleTypeWest, randomColor(), random(100, 150), 0, random(2, 5));
    westbound.push(westVehicle);
  }


  // Initialize traffic light
  trafficLight = new TrafficLight(width / 2, 200);
}


function draw() {
  background(220);
  drawRoad();


  trafficLight.display();
  if (!trafficLight.isRed()) {
    // Process eastbound vehicles
    for (let vehicle of eastbound) {
      vehicle.action();
    }


    // Process westbound vehicles
    for (let vehicle of westbound) {
      vehicle.action();
    }
  }


  // Update the traffic light status based on user input
  trafficLight.update();
}


function mousePressed() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    // Add an eastbound car or truck randomly on left click
    let vehicleType = random([0, 1]);
    eastbound.push(new Vehicle(vehicleType, randomColor(), random(250, 300), 1, random(2, 5)));
  } else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    // Add a westbound car or truck randomly on shift + left click
    let vehicleType = random([0, 1]);
    westbound.push(new Vehicle(vehicleType, randomColor(), random(100, 150), 0, random(2, 5)));
  }
}


function keyPressed() {
  // Spacebar toggles traffic light
  if (key === ' ') {
    trafficLight.toggle();  
  }
}


function drawRoad() {
  fill(0);
  rect(0, height / 4, width, 100); // Draw the road for westbound lane
  rect(0, height / 2, width, 100); // Draw the road for eastbound lane


  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < width; i += 20) {
    line(i, 200, i + 10, 200); // Dashed line in the center
  }
}


function randomColor() {
  return color(random(255), random(255), random(255));
}


class Vehicle {
  constructor(type, color, y, direction, speed) {
    this.type = type;           // 0 for car, 1 for truck
    this.color = color;          // Vehicle color
    this.y = y;                  // Y position on the road
    this.direction = direction;  // 0 = left, 1 = right
    this.xSpeed = speed * (direction === 1 ? 1 : -1);
    this.x = direction === 1 ? 0 : width;
  }


  display() {
    fill(this.color);
    noStroke();


    if (this.type === 0) { // Draw car
      rect(this.x, this.y, 30, 15);
      fill(255);
      rect(this.x + 5, this.y + 5, 5, 5);
      rect(this.x + 20, this.y + 5, 5, 5);
    } else { // Draw truck
      rect(this.x, this.y, 40, 20);
      fill(150);
      rect(this.x + 25, this.y, 10, 20);
    }
  }


  move() {
    this.x += this.xSpeed;


    // Wrap around when reaching edge of canvas
    if (this.x > width) {
      this.x = -40;
    } else if (this.x < -40) {
      this.x = width;
    }
  }


  speedUp() {
    if (this.xSpeed < 15 && this.direction === 1) {
      this.xSpeed += 0.5;
    } else if (this.xSpeed > -15 && this.direction === 0) {
      this.xSpeed -= 0.5;
    }
  }


  speedDown() {
    if (this.direction === 1 && this.xSpeed > 0) {
      this.xSpeed -= 0.5;
    } else if (this.direction === 0 && this.xSpeed < 0) {
      this.xSpeed += 0.5;
    }
  }


  changeColor() {
    this.color = randomColor();
  }


  action() {
    this.move();
    if (random(1) < 0.01) this.speedUp();
    if (random(1) < 0.01) this.speedDown();
    if (random(1) < 0.01) this.changeColor();
    this.display();
  }
}


class TrafficLight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 'green';
    this.timer = 120;
  }


  display() {
    fill(0);
    rect(this.x - 15, this.y - 15, 30, 60);


    if (this.state === 'green') {
      fill(0, 255, 0);
      ellipse(this.x, this.y + 20, 20, 20);
      fill(150);
      ellipse(this.x, this.y - 20, 20, 20);
    } else if (this.state === 'red') {
      fill(255, 0, 0);
      ellipse(this.x, this.y - 20, 20, 20);
      fill(150);
      ellipse(this.x, this.y + 20, 20, 20);
    }
  }


  update() {
    if (this.state === 'red') {
      this.timer++;
      if (this.timer > 120) {
        this.state = 'green';
        this.timer = 0;
      }
    }
  }


  toggle() {
    if (this.state === 'green') {
      this.state = 'red';
    }
  }


  isRed() {
    return this.state === 'red';
  }
}



