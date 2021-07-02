
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var l, r, b 
var bin, biny

function preload(){
   biny = loadImage("dustbin cs.png")
}


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(150, 560, 30, 30)

  ground = new Ground(400,600,800,20)

 

	l = new Dustbin(645, 530, 10, 120)
  r = new Dustbin(735, 530, 10, 120)
  b = new Dustbin(690, 585, 100, 10)

  bin = createSprite(690,530,120,130)
  bin.addImage(biny)
  bin.scale = 0.4

  


	Engine.run(engine);
  
}


function draw() {
 
  background("white");

  rectMode(CENTER);
  
  ground.display()
  paper.display()
  l.display()
  r.display()
  b.display()
  
  
  drawSprites();
  
   
}

function keyPressed(){
   if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(paper.body, paper.body.position,{x:28,y:-30})
  }

}
