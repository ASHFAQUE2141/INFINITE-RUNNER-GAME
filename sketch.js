function createVar(params) {
  var rocket;
  var rocketImg;
  
  var space;
  var spaceImg;

  var obs;
  var obsImg;

  
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;


  var score;
}

function preload()
{
  spaceImg = loadImage('space.jpg');
  rocketImg = loadImage('rocket.png');
  obsImg = loadImage('asteroid.png');

  
}

function setup(params) {
  createCanvas(600,600);
  background(51);

  score = 0;

  space = createSprite(300,300);
  space.velocityY=5;
  space.addImage('space',spaceImg);
  space.scale=3.5;

  rocket = createSprite(300,500);
  rocket.addImage('rocket',rocketImg);
  rocket.scale=0.3;
  rocket.setCollider("rectangle",0,0,200,500);

  obsGroup = new Group();

}

function draw(params) {
  background(51);
  
  if(gameState === PLAY)
  {
    if(space.y > 600)
    {
      space.y = 0;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      rocket.x = rocket.x+15;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      rocket.x = rocket.x-15;
    }


    if(rocket.x < 45)
    {
      rocket.x = 45;
    }
    if(rocket.x > 555)
    {
      rocket.x = 555;
    }
  
    spawnObs();
    drawSprites();

    if(obsGroup.isTouching(rocket))
    {
      gameState = END;
    }
  }
  if(gameState === END)
  {
    text("gameOver",300,300);

  }
  

  
}

function spawnObs(params) {
  if(frameCount%80 == 0)
  {
    obs = createSprite(300,0);
    obs.velocityY=5;
    obs.addImage('obs',obsImg);
    obs.scale=0.09;
    obs.setCollider("circle",0,0,350);
    obs.x = Math.round(random(0,600));
    obs.lifetime=500;

    obsGroup.add(obs);
  }
}