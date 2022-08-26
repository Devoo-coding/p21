
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var sidewallR;
var sidewallL;
var topWall;
var wallLeft;
var wallRight;
var bt;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new ground(400, 670, 800, 10);
	wallLeft = new ground(500,615,10,100);
	wallRight = new ground(750,615,10,100);
	sideWallR = new ground(795,350, 10,630 );
	sidewallL = new ground(5,350, 10,630 );
	topWall = new ground(400,40, 800, 10);
	
	ball_options = {
		isStatic: false,
		restitution: 0.2,
		friction: 0,
		//density: 0.5

	}

	ball = Bodies.circle(150,200,20,ball_options);
	World.add(world, ball);

	



	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  wallLeft.display();
  wallRight.display();
  sidewallL.display();
  sideWallR.display();
  topWall.display();

  ellipse(ball.position.x, ball.position.y, 20);
  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	 Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.015, y:-0.015});
	}



	
   

	

}



