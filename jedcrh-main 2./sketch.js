var backgroundImg
var background
var playerImg
var player
var alienImg
var alien
var edges
var laser
var laserImg
var alienGroup
var laserGroup
var alienLaser
var alienLaserImg
var alienLaserGroup
var leftEdge
var rightEdge



function preload(){
  backgroundImg = loadImage("images/background.jpeg")
  playerImg = loadImage("images/player.png")
  alienImg = loadImage("alien2.png")
  laserImg = loadImage("images/player laser.png")
  alienLaserImg = loadImage("images/alienlaser.png")
}

function setup(){

createCanvas(windowWidth,windowHeight)

player = createSprite(windowWidth/2,windowHeight-100,20,20)
player.addImage(playerImg)
player.scale = 0.2

alienGroup = new Group()
laserGroup = new Group()
alienLaserGroup = new Group()
edges = new Group()

createEdgeSprites()
}


function draw(){
 background(backgroundImg)
  
 if(keyIsDown(RIGHT_ARROW)){
   player.x += 15

 }
 if(keyIsDown(LEFT_ARROW)){
  player.x -= 15
  
}


if(alienGroup.isTouching(laserGroup)){
  alienGroup.destroyEach()
  laserGroup.destroyEach()
}
if(alienLaserGroup.isTouching(player)){
  alienLaserGroup.destroyEach()
  player.destroy()
}
if(alienGroup.x = 1500){
  alienGroup.velocityX = 0
  alienGroup.velocityX = -4
}
if(alienGroup.y = 0){
  alienGroup.velocityX = 0
  alienGroup.velocityX = 4
}
spawnAlien()
spawnLaser()
spawnAlienLaser()
  drawSprites()
}  

function spawnAlien(){
  if(frameCount%100 === 0){
  alien = createSprite(200,150,50,50)
  alien.addImage(alienImg)
  alien.scale = 0.15
  alien.velocityX = 4
  alien.x = random(windowWidth -1500,windowHeight)
  
  alien.debug = true
  alienGroup.add(alien)
 
  }
}

function spawnLaser(){
  if(keyWentDown(UP_ARROW)){
    laser = createSprite(player.x,player.y-30,50,50)
    laser.addImage(laserImg)
    laser.scale = 0.3
    laser.velocityY = -8
    laser.debug = true
    laser.setCollider("rectangle",0,0,60,180)
    laserGroup.add(laser)
  }
}

function spawnAlienLaser(){
  if(keyWentDown("W")){
  alienLaser = createSprite(alien.x,alien.y,50,50)
  alienLaser.addImage(alienLaserImg)
  alienLaser.scale = 0.3
  alienLaser.velocityY = 4
  alienLaserGroup.add(alienLaser)
  }
}

function bounce(){
  alienGroup.bounceOff(edges)

  edges.add(leftEdge)
  edges.add(rightEdge)

}


    

    
  

  
 
    
    
  
    
    

  
  
  
 





