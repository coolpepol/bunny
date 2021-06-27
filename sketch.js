var path,pathimg
var boy,boyimg
var e
function preload(){
  boyimg = loadAnimation("Runner-1.png","Runner-2.png")
  pathimg = loadImage ("path.png")
}

function setup(){
  
  createCanvas(400,400);
  e = createEdgeSprites()
  path = createSprite(200,20)
  path.addImage(pathimg)
path.velocityY = 4
path.scale = 1.2
boy = createSprite(200,300,20,20)
boy.addAnimation("run",boyimg)
  //create sprites here
  boy.scale = 0.1
}

function draw() {
background("black")
  boy.collide(e[1],e[2])
  if(keyDown("left")){
    boy.x+=-3

  }
  boy.x = mouseX
  if(keyDown("right")){
boy.x+=3

  }
  

drawSprites()
  
    
    if(path.y >400){
      path.y = height/2
    }
     
}
