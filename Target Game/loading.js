function preload(){
    backImage = loadImage("assets/background.png");
    backImageReport = loadImage("assets/backgroundReport.png");
    barrelImage = loadImage("assets/barrel.png");
    baseImage = loadImage("assets/base.png");
    cannonballImage = loadImage("assets/Cannonball.png");
    targetImage = loadImage("assets/target.png");
    
    for (let i = 0; i< 6; i++){
      explosionImages[i] = loadImage("assets/ex"+(i+1)+".png");
    }
    for (let i = 0; i< 21; i++){
      shotsRemainingImages[i] = loadImage("assets/shots"+i+".png");
    }
    
    for (let i = 0; i< 6; i++){
      targetHitImage[i] = loadImage("assets/target"+i+".png");
    }
    
    }
    