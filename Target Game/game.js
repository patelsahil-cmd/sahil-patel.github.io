class Game {

    constructor() {
        this.cannonPower = 60;
        this.cannonPower = 10;
        this.shots = [];
    }
    play() {
        imageMode(CORNER);
        image(backImage, 0, 0);
        // process and draw every cannonball

        // process and drar every smoke particle 

        
        // draw the cannon
        this.displayCannon();
        this.displaypower();
    }

    createShot(){
        let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
        this.cannonPower * sin(radians(this.cannonAngle)*-1));
        this.shots.push(new Ball(v));
    }


    displayCannon() {
        imageMode(CENTER);
        push();
        translate(73, 525);
        push();
        rotate(radians(360 - this.connonAngle));
        image(barrelImage, 0, 0);
        pop();
        image(baseImage, 0, 0);
        pop();


    }

    displaypower(){
        rectMode(CORNER);
        fill(0);
        rect(0,50,this.cannonPower * 15 - 50, 45);
    }


    changePower(increase) {
        if (increase) {
            if (this.cannonPower < 20) {
                this.cannonPower += 0.15;
            print(1)
            }
        }

        else {
            if (this.cannonPower > 5) this.cannonPower -= 0.15;

        }

    }


    changeAngle(increase) {
        // if increase is true - getting larger angle 
        if (increase) {
            if (this.connonAngle < 90) this.connonAngle += 2;

        }

        else {
            if (this.connonAngle > 0) this.connonAngle -= 2;

        }

    }



}