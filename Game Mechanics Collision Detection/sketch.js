// Game Mechanics Collision Detection
// sahil patel
// 1/6/2025
// point and circle collision 
// let cX = 500; let cY= 300;
// let cDiameter = 250;
// let cRaidus = cDiameter/2;

// // point : use mouseX, mouseY

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);

// // is the distance between the mouse pointer 
// // and the circle's centerpoint (cX,cY) < raidus 

// if(dist(mouseX, mouseY, cX, cY) < cRaidus){

//   fill(255,0,255);
// }
// else{
//   fill(255);
// }
//   ellipse(cX, cY, cDiameter);
// }




// point rectangle collision........................................................................  

let rX = 200; let rY = 150;
let rWidth = 300; let rHeight = 100;
let rLeft = rX; let rTop = rY;
let rRight = rX + rWidth; let rBottom = rTop + rHeight;



function setup() {
     createCanvas(windowWidth, windowHeight);
   }
  
   function draw() {
     background(220);
     fill(225);
     if(mouseX > rLeft && mouseY < rRight){
      if(mouseX > rTop && mouseY < rBottom){
        fill (200, 54, 196);

      }
     }

     rect(rX, rY, rWidth, rHeight);
   }