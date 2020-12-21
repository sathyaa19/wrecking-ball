
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var grd_options = {
		isStatic : true
		
	}
	
	//ball = new Ball(400,500,80);
	
	 ground = new Ground(500,780);
	
	 box = new Box(700,400);
	 box1 = new Box(700,400);
	 box2 = new Box(700,400); 
	 box3 = new Box(700,400);
	 box4 = new Box(700,400);
	 box5 = new Box(800,400);
	 box6 = new Box(800,400);
	 box7 = new Box(800,400);
	 box8 = new Box(800,400); 
	 box9 = new Box(800,400);
	 box10 = new Box(600,400);
	 box11 = new Box(600,400);
	 box12 = new Box(600,400);
	 box13 = new Box(600,400);
	 box14 = new Box(600,400);
	 box15 = new Box(600,400);
	 box16 = new Box(600,400);
	 box17 = new Box(600,400);
	 box18 = new Box(600,400);
	 box19 = new Box(700,400);
	 box20 = new Box(700,400);

	 //rope = new Rope(ball.body,{ x:400, y:150 });
	ball = new Ball(500, 400, 80);
	rope = new Rope(ball.body, { x: 500, y: 150 });
		Engine.run(engine);
  
}


function draw() {
  
  background(180);
  
  ball.display();
  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  rope.display();

  
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }


