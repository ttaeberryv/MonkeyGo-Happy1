
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas=(600, 600);
  
  
  monkey = createSprite (80,315,30,30)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
 
 
  
  ground = createSprite(400,350,900,10);
  
  
  obstacle = createSprite (200,320,50,50)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15



  
}


function draw() {
  
background(255);
  
  //moving infinite ground
    ground.velocityX = -4
    if (ground.x < 600){
    ground.x = ground.width/2;
    }
  
  // jump when pressing space key
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  // add gravity
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if (frameCount % 60 === 0) {
     banana = createSprite (100,150,50,50)
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.y = Math.round(random(120,200));
    banana.velocityX = 3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  }
  


  
drawSprites();
  
  
}









