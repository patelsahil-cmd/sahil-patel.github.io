class Ball{

constructor(v_){
    this.pos = createVector(73,525);
    this.velocity = v_;
    this.gravity = createVector(0,0.2);
}

move(){
    this.pos.add(this.velocity);
    this.velocity.add(this.gravity);

}

display(){
    push()
    translate(this.pos.x, this.pos.y);
    image(cannonballImage,0,0);
    pop();
}


}