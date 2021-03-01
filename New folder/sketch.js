
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score=0;
var ground,iground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  ground = createSprite(300,280,2000,30);
  ground.shapeColor = ("green");
  iground = createSprite(300,282,2000,10);
  ground.velocityX = -10;
  monkey = createSprite(40,250,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  monkey.debug = false;
  iground.visible = false;
  obstaclesGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
background("black");
spawnRock();
spawnFood();
  text("Score: "+ score, 500,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  monkey.collide(iground);
  if(keyDown("space")&& monkey.y>=100){
  monkey.velocityY = -12;  
     }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score = score +1;
  }
 
  if(monkey.isTouching(obstaclesGroup)){
    obstaclesGroup.setVelocityXEach(0);
     obstaclesGroup.setLifetimeEach(-1);
   FoodGroup.setVelocityEach(0);
  FoodGroup.setLifetimeEach(-1);
  text("Game Over!!",280,100);
    
    
  }

drawSprites();
}

function spawnRock(){
  if(frameCount % 80 === 0) {
     obstacle = createSprite(600,255,10,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.debug = false;  
    obstaclesGroup.add(obstacle);
    obstacle.lifetime = 120;
  }
  ;
}
function spawnFood(){
  if(frameCount %100 === 0){
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    FoodGroup.add(banana);
    
    
  }

}





