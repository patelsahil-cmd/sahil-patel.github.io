// target game 
// Sahil Patel 
// 1/6/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainingImages = [];
let targetHitImage = [];

let currentGame;



function setup() {
  createCanvas(1068, 600);
  currentGame = new Game();

}

function draw() {
  currentGame.play();
}
 