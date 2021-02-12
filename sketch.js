 var ground,mario,bg,marioRuning;
 
 function preload(){
bg=loadImage("bg.png");
marioRuning-loadImage("mario00.png","mario01.png","mario02.png","mario03.png");

  }
  function setup(){
createCanvas(1000,600);
ground=createSprite(500,550,2000,50);
ground.velocityX=-3;
 mario=createSprite(50,515,65,35);
 mario.addAnimation("running",marioRuning);
ground.visible=false;
  }
  function draw(){
background(bg);

if(ground.x<0){
ground.x=500; 
}
if(keyDown("space")&&mario.y>=100){
  mario.velocityY=-12;
}

mario.velocityY=mario.velocityY+0.9;
mario.collide(ground);
drawSprites()

  }