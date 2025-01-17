class Ball {

    constructor(v_) {
        this.pos = createVector(73, 525);
        this.velocity = v_;
        this.gravity = createVector(0, 0.2);
        this.alive = true
        this.collisionType = 0
    }

    move() {
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);

    }

    display() {
        push()
        translate(this.pos.x, this.pos.y);
        image(cannonballImage, 0, 0);
        pop();
    }

    getAlive() {
        return this.alive;
    }

    getCollisionType() {
        return this.collisionType;
    }
    checkGroundCollision() {
        
        // 546
        if (this.pos.y > 546) {
            this.alive = false;
            this.collisionType = 1;
        }
    }

        checkTargetCollision(){
            if(dist(this.pos.x, this.pos.y, currentGame.targetx , currentGame.targety) < 20){
                this.alive = false;
                this.collisionType = 2;
                currentGame.targetx = random(100,600);
                currentGame.targety = random(100,600);
            }

        }

    }

