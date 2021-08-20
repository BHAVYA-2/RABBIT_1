var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leavesImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  rabbit.x=World.mouseX;
  

function createApples(){
apple = createSprite(random(50,350))
apple.addImage(appleImg);
apple.scale=0.05;
apple.velocityY = -4;

}

function createLeaves(){
leaves = crteateSprite(random(1,3));
leaves.addImage(leaverImg);
leaves.scale=0.05;
leaves.velocityY = -4;
}
drawSprites();

var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0){
  if(select_sprites == 1){

    function createApples(){
      apple = createSprite(random(50,350))
      apple.addImage(appleImg);
      apple.scale=0.05;
      apple.velocityX = -4;
      apple.lifetime = 134;
      
      apple.depth = rabbit.depth
      rabbit.depth = rabbit.depth+1
      }

    }

 else{
     function createLeaves(){
      leaves = crteateSprite(random(1,3));
      leaves.addImage(leavesImg);
      leaves.scale=0.05;
      leaves.velocityX = -4;
        }

      
  }
}

}