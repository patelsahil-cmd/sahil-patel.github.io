class Game {

    constructor(){
        this.connonAngle = 45;
        this.connonpower = 10;
        this.shots = [];
    }
        play(){
            imageMode(CORNER);
            image(backImage,0,0);
        // process and draw every cannonball

        // process and drar every smoke particle 

        // draw the cannon
        
        this.displayCannon();
        }


    displayCannon(){
        imageMode(CENTER);
        push();
        translate(73, 525);
        push();
        rotate(radians(360 - this.connonAngle));
        image(barrelImage,0,0);
        pop();
        image(baseImage,0,0);

        pop();      
    }

        


}