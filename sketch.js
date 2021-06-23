var garden,rabbit;
var gardenImg,rabbitImg;
var apple ,leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}
function createApples(){
apple = createSprite(random(50,350),40,10,10)

}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x =mouseX
}