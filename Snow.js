class  Snow {
    constructor(x,y,r){
    
    var options ={
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: false
    };
    this.r = 40;
    this.body = Matter.Bodies.circle(x, y, this.r, options);
    this.image = loadImage("snow1.png")
    World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
}