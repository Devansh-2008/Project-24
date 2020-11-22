
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,20);
	  bottomdustbin = new dustbin(600,580,200,20);
	  sidedustbin1 = new dustbin(690,550,20,100);
	  sidedustbin2 = new dustbin(500,550,20,100);
	  paper = new Paper(100,550);
	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottomdustbin.display();
  sidedustbin1.display();
  sidedustbin2.display();
  ground.display();
   paper.display();

   

  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
}



}




