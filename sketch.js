
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy1, tree, stone, ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var bg;
var shot1;

function preload()
{
	bg=loadImage("sprites/bg.jpg");
}

function setup() {
	var canvas =createCanvas(1000, 700);


	engine = Engine.create();
	world  = engine.world;

	//Create the Bodies Here.
    boy1=new Boy(200, 460, 150, 250);
    stone1=new Stone(240, 290, 50, 50);
    ground=new Ground(500, 650, width, 150)
    tree=new Tree(800, 350, 500, 600);

    mango1=new Mango(600, 300, 50, 50);
    mango2=new Mango(700, 250, 50, 50);
    mango3=new Mango(750, 200, 50, 50);
    mango4=new Mango(850, 280, 50, 50);
    mango5=new Mango(900, 150, 50, 50);
    mango6=new Mango(630, 170, 50, 50);
    mango7=new Mango(800, 100, 50, 50);
    mango8=new Mango(950, 250, 50, 50);
    shot1=new rubberband(stone1.body,{x:140,  y:490});

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(bg);
 
  
  boy1.display()
  ground.display();
  tree.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  shot1.display();

  detectollision(stone1, mango1)
  detectollision(stone1, mango2)
  detectollision(stone1, mango3)
  detectollision(stone1, mango4)
  detectollision(stone1, mango5)
  detectollision(stone1, mango6)
  detectollision(stone1, mango7)
  detectollision(stone1, mango8)


  drawSprites();
 
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance)
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);

}
}

function mouseDragged(){
 
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  shot1.fly();

}

