class Rope {
    constructor(body, pointB){
        var options= {
            bodyA : body,
            pointB : pointB,
            stiffness : 1.2,
            length : 250
             }
        this.bodyA=body;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
     
    attach(body) {
        this.rope.bodyA = body;
      }
    
      fly() {
        this.rope.bodyA = null;
      }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            //stroke("white");
            stroke(48, 22, 8);
            strokeWeight(4);
            line(pointB.x, pointB.y,pointA.x,pointA.y);
           //line(pointB.x, pointB.y,mouseX,mouseY);
           //text(mouseX+","+mouseY,mouseX,mouseY);
            pop();
        }
    }
}