class Ball {
    constructor(x, y, r){
      var options = { 
        density: 1, 
        frictionAir: 0.005,
       // isStatic:true
    };
  
      this.body = Bodies.circle(x, y, r/2, options);
      
      
      World.add(world, this.body);
      this.r = r;
    }
  
    display() {
     // var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("purple");
      //rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }