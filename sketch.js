
var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg
var apple ,leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");

}
function createApples(){
  if(frameCount%89 === 0){
    apple= createSprite(random(50,350),40,10,10)
    apple.lifetime = 110
    apple.addImage("apple",appleImg)
    apple.scale = 0.1
    apple.velocityY = 2
 
    if(apple.collide(rabbit)){
      apple.destroy


    }
  }
}
function createleafs(){
  if(frameCount%89 === 0){
    leaf= createSprite(random(50,350),40,10,10)
    leaf.lifetime = 110
    leaf.addImage("leaf",leafImg)
    leaf.scale = 0.1
    leaf.velocityY = 2
 
    if(leaf.collide(rabbit)){
      leaf.destroy


    }
  }
}





function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  createApples()
  createleafs()
  background(0);
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x =mouseX
}