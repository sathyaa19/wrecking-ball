class Ground{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,1000,20,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0,0,1000,20);
        pop();


    }


}