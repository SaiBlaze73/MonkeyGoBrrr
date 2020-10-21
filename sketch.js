
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground=createSprite(600,350,1200,10);
  ground.velocityX=-4
  ground.x=ground.width/4
  console.log(ground.x)
  
  bananaGroup = new Group();
  
  obstacleGroup = new Group();
  
  
}


function draw() {
 background(255)
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+ score ,500,50);
  
  stroke("black");
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime,200,50 );
  
  if(ground.x=0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY +0.8
  
  monkey.collide(ground);
  
  spawnBanana();
  
  spawnobstacle();
  
  if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     score = score+1
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  
    drawSprites();
  
}
function spawnBanana(){
  
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,20,20);
    banana.y = Math.round(random(190,190));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana)

  }
  
  
}

function spawnobstacle(){
  
  if (frameCount % 140 === 0) {
    var obstacle = createSprite(600,120,20,20);
    obstacle.y = Math.round(random(320,320));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
  
    obstacle.lifetime = 200;
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    obstacleGroup.add(obstacle)
  }
  
  
}

