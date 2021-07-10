var background, backgroundImage
var boy, boyImage
var boyBody

function preload(){
  backgroundImage = loadImage("snow2.jpg")
  boyImage = loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImage); 
  boy = createSprite(400, 350, 20, 20)
  boy.addImage(boyImage)
  boy.scale = 0.1;

  
  

  drawSprites();
}