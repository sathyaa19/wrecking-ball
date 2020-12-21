class Box{
    constructor(x,y){
        
        this.body = Bodies.rectangle(x,y,50,50);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();


    }


}