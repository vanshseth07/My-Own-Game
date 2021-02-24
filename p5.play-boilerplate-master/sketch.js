var gameState= 0;
var score= 0;


function preload(){
vaccineimg=loadImage("Images/vaccine2.png")
backgroundimg=loadImage("Images/background.png")
virus1img=loadImage("Images/virus.png")
background2img=loadImage("Images/background2.png")
}
function setup() {
  createCanvas(3000,1000);
vaccine=createSprite(400, 750, 50, 50);
vaccine.addImage(vaccineimg)
vaccine.scale=0.2
virusGroup=new Group()
}

function draw() {
 
  drawSprites();
textSize(80)
fill("white")
text("Score "+score,50,100)
if (keyDown(UP_ARROW)){
vaccine.y-=7
}
if (keyDown(DOWN_ARROW)){
  vaccine.y+=7
  }
  if (keyDown(LEFT_ARROW)){
    vaccine.x-=7
    }
    if (keyDown(RIGHT_ARROW)){
      vaccine.x+=7
      }


  if(gameState===0){
    background(backgroundimg);  
 spawnvirus();
 if (virusGroup.isTouching(vaccine)){
   score=score+100
   console.log(score)
virusGroup.destroyEach();

if(score>500){
gameState=1
}

 }
if(gameState===1){
background(background2img)
}
 
}

}
function spawnvirus(){
  
    if(frameCount%70===0)
    {
      virus = createSprite(3000,100,10,10);
      virus.addImage(virus1img);
      virus.y= Math.round(random(200,1000));
      virus.velocityX=-10;
      
      virus.lifetime=300;
      virus.scale=0.7;
     
      virusGroup.add(virus);
      
    }
  }