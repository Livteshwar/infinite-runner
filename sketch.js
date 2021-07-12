var boy,boyImg;
var upArrow,upArrowImg,upGroup;
var downArrow,downArrowImg,downGroup;
var garden,gardenImg;
var gamestate="play";
var gameover,gameoverImg;

function preload(){
boyImg=loadImage("boy.png");
upArrowImg=loadImage("up_arrows.png");
downArrowImg=loadImage("down_arrows.png");
gardenImg=loadImage("garden.png");
gameoverImg=loadImage("gameover.png")
}

function setup() {
 createCanvas(600,200);
 
garden=createSprite(300,100);
garden.addImage(gardenImg);
garden.velocityX=-3
garden.scale=2

boy=createSprite(100,50);
boy.addImage(boyImg);
boy.scale=0.05
boy.lifetime=500

upGroup=new Group();
downGroup=new Group();

gameover=createSprite(300,100);
gameover.addImage(gameoverImg);
gameover.scale=0.2;
gameover.visible=false


}

function draw() {
 background(200);

 if(gamestate=="play"){
if(garden.x==0){
    garden.x=width/2
}

if (keyDown("up")){
    boy.y -= 5
  }
if (keyDown("down")){
    boy.y += 5
}


if(upGroup.isTouching(boy)){
    upGroup.destroyEach();
    boy.lifetime = boy.lifetime+180
  }
  if(downGroup.isTouching(boy)){
    downGroup.destroyEach();
    boy.lifetime = boy.lifetime-120
  }

if(boy.lifetime==1){
gamestate="end"
}

spawnUp();

spawnDown();

 drawSprites();
  
  textSize(24)
fill("black")
text("Lifetime: "+boy.lifetime,50,50)
}
else if(gamestate=="end"){
    gameover.visible=true
}
}

function spawnUp(){
    if(frameCount%100==0){
  upArrow=createSprite(650,Math.round(random(50,150)));
  upArrow.addImage(upArrowImg);
  upArrow.scale=0.02;
  upArrow.velocityX=-3;
  upArrow.lifetime=250;
  upGroup.add(upArrow);
}}

function spawnDown(){
    if(frameCount%100==0){
  downArrow=createSprite(650,Math.round(random(50,150)));
  downArrow.addImage(downArrowImg);
  downArrow.scale=0.1;
  downArrow.velocityX=-5;
  downArrow.lifetime=250;
  downGroup.add(downArrow)
}}
